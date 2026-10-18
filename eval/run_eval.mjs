// Scores Wattson's local scanner against documents with known answers.
// Uses the exact schema and prompt from index.html, so it tests what the app sends.
// Usage (Ollama running, wattson model built): node eval/run_eval.mjs index.html
// Images are pre-shrunk to 1280 px JPEGs, like the app does before sending.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(process.argv[2], "utf8");
const between = (start, end) => src.slice(src.indexOf(start) + start.length, src.indexOf(end, src.indexOf(start)));
const SCAN_SCHEMA = new Function("return " + between("const SCAN_SCHEMA = ", "\n};\n") + "\n}")();
const SCAN_PROMPT = between("const SCAN_PROMPT = `", "`;");
const SYSTEM = between('{ role: "system", content: "', '" },');
const cases = JSON.parse(readFileSync(join(here, "cases.json"), "utf8"));

const close = (got, want) => typeof got === "number" && Math.abs(got - want) <= Math.max(0.011, Math.abs(want) * 0.005);

async function scan(id) {
  const image = readFileSync(join(here, "jpg", `${id}.jpg`)).toString("base64");
  const started = Date.now();
  const res = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "wattson", stream: false, keep_alive: "30m", format: SCAN_SCHEMA,
      options: { temperature: 0, num_predict: 1400 },
      messages: [{ role: "system", content: SYSTEM }, { role: "user", content: SCAN_PROMPT, images: [image] }],
    }),
  });
  const data = await res.json();
  let parsed = null;
  try { parsed = JSON.parse(data.message.content); } catch {}
  return { parsed, seconds: (Date.now() - started) / 1000 };
}

const results = [];
for (const c of cases) {
  // The two real receipt photos aren't in the repo; skip any case without an image.
  if (!existsSync(join(here, "jpg", `${c.id}.jpg`))) { console.log(`${c.id}: skipped (no image)`); continue; }
  const { parsed, seconds } = await scan(c.id);
  const checks = [];
  const t = c.truth;
  const check = (field, ok, got, want) => checks.push({ field, ok, got, want });
  if (!parsed) {
    check("readable JSON", false, "invalid", "valid");
  } else {
    check("document_type", parsed.document_type === t.document_type, parsed.document_type, t.document_type);
    check("total_cost_usd", close(parsed.total_cost_usd, t.total_cost_usd), parsed.total_cost_usd, t.total_cost_usd);
    if (t.usage_amount != null) check("usage_amount", close(parsed.usage_amount, t.usage_amount), parsed.usage_amount, t.usage_amount);
    if (t.previous_usage_amount != null) check("previous_usage_amount", close(parsed.previous_usage_amount, t.previous_usage_amount), parsed.previous_usage_amount, t.previous_usage_amount);
    if (t.peak_demand_kw != null) check("peak_demand_kw", t.peak_demand_kw === 0 ? !(parsed.peak_demand_kw > 0) : close(parsed.peak_demand_kw, t.peak_demand_kw), parsed.peak_demand_kw, t.peak_demand_kw);
    if (t.demand_charge_usd != null) check("demand_charge_usd", close(parsed.demand_charge_usd, t.demand_charge_usd), parsed.demand_charge_usd, t.demand_charge_usd);
  }
  // Receipt items: match by price (names vary by how abbreviations are expanded).
  let items = null;
  if (t.items) {
    const remaining = [...t.items];
    let found = 0;
    const got = (parsed?.items || []).map((i) => i.price_usd);
    for (const p of got) {
      const i = remaining.findIndex((w) => Math.abs(w - p) < 0.006);
      if (i >= 0) { remaining.splice(i, 1); found++; }
    }
    items = { expected: t.items.length, returned: got.length, matched: found, missed: remaining };
  }
  results.push({ id: c.id, kind: c.kind, seconds: Math.round(seconds), checks, items });
  const ok = checks.filter((x) => x.ok).length;
  console.log(`${c.id}: ${ok}/${checks.length} fields${items ? `, items ${items.matched}/${items.expected} (returned ${items.returned})` : ""}, ${Math.round(seconds)}s`);
  for (const x of checks.filter((x) => !x.ok)) console.log(`   ✗ ${x.field}: got ${JSON.stringify(x.got)}, expected ${JSON.stringify(x.want)}`);
}

const fields = results.flatMap((r) => r.checks);
const itemRuns = results.filter((r) => r.items);
const totals = {
  documents: results.length,
  fields_correct: fields.filter((f) => f.ok).length,
  fields_total: fields.length,
  items_matched: itemRuns.reduce((s, r) => s + r.items.matched, 0),
  items_expected: itemRuns.reduce((s, r) => s + r.items.expected, 0),
  items_returned: itemRuns.reduce((s, r) => s + r.items.returned, 0),
  avg_seconds: Math.round(results.reduce((s, r) => s + r.seconds, 0) / results.length),
};
console.log("\nTOTALS", JSON.stringify(totals));
writeFileSync(join(here, "results.json"), JSON.stringify({ totals, results }, null, 2));
