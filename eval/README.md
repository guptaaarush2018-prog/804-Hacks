# Wattson scanner accuracy test

Checks how accurately Wattson's on-device AI reads bills and receipts. It sends each image with the **exact prompt and output format the app uses** (read straight from `../index.html`) and compares the answer with the known values in [cases.json](cases.json).

## Run it

With Ollama open and the `wattson` model built:

```
node eval/run_eval.mjs index.html
```

## What's tested

| Document | What it checks |
|---|---|
| Printed electric bill, plus a tilted, blurred "phone photo" version | usage, total, last month's usage, no false demand charge |
| Water bill in CCF, plus a tilted, blurred version | unit handling, "last period" vs meter readings |
| Gas bill in therms | therms, previous period |
| Business electric bill (GS-2 style) | peak demand (kW) and demand charges |
| Grocery receipt (generated) | total and every line item's price |
| 2 real grocery receipt photos | total and every line item's price; not included in the repo |

Fields checked: document type, total, usage, last period's usage, peak demand, demand charges. Numbers count as correct within 0.5% (or one cent). Receipt items are matched by price, since names vary with how abbreviations get expanded.

## Results (18 Oct 2026, qwen3-vl 8B instruct on an M4 MacBook, 16 GB)

| | Run 1 | Run 2 (after prompt fixes) |
|---|---|---|
| Fields read correctly | 35 / 37 (95%) | **36 / 37 (97%)** |
| Receipt items found | 32 / 33 (97%) | **33 / 33 (100%)** |
| Average time per document | 44 s | **34 s** (bills ~23 s, receipts 45–75 s) |

The one remaining miss: on the business bill the model added the demand charges wrong. The app now range-checks them (real demand charges are about $2–30 per kW) and otherwise estimates from Dominion's GS-2 rates. For this bill that gives $489.27 against the true $489.28.

**Caveats:** this is 9 documents, 7 of them generated, so treat the numbers as an early check, not a guarantee. Real phone photos of crumpled or faded bills will be harder. Users can correct any misread number with **Fix a number**.
