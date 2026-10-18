# Wattson — 804 Hacks (Track 2: Build a Sustainable Future)

> **Every home, part of a smarter city.**
> Wattson helps households cut their energy, water and food waste, then combines that anonymous data across a city so planners and utilities can see where infrastructure is failing and what to build next.

---

## 1. Problem statement

American homes and the cities that serve them waste huge amounts of water, energy and food, and neither side can see it happening.

- **Households are blind.** People get a utility bill once a month, a number with no explanation. They can't see a leaking toilet, which hours put the most strain on the grid, or how much of their groceries end up in the trash.
- **Cities are blind too.** Utilities and planners decide which pipes to replace, where to add grid capacity and where to put composting based on old data and emergencies after the fact, not on live, street-level usage data.

The result:

| Area | The waste | Source |
|---|---|---|
| Water (city) | **33.3 trillion gallons** of treated water lost every year, about **$187B** in lost revenue. U.S. drinking water infrastructure grade: **C-** (unchanged since 2021). | ASCE 2025 Report Card |
| Water (home) | Household leaks waste **over 1 trillion gallons a year** nationwide. The average family wastes **10,000+ gallons a year** on easy-to-fix leaks, enough for 270 loads of laundry. Leaks can raise a water bill by **up to 10%**. | EPA WaterSense |
| Energy (home) | Homes use about **38% of all U.S. electricity**. | EIA data, via secondary summaries |
| Energy (grid) | The U.S. needs enough new capacity to serve **200+ GW** of new peak demand between 2023 and 2030. Virginia's Dominion zone has the **largest projected peak-demand increase in PJM** (2026–2030), driven by data centers. 32 of the zone's top 50 peak hours since 2019 happened in 2025. | DOE VPP Liftoff report, EIA |
| Food | Consumers waste about **35 million tons** of food a year, costing **$261B**, or **about $800 per person**. Food is **24%** of what goes into landfills and causes **58%** of landfill methane emissions. | ReFED 2025, EPA 2023 |
| Equity | In Richmond, **1 in 4 low-income residents** spend **more than 17.5%** of their income on energy (national: 15.2%). About **20,000 Richmond households (1 in 5)** spend 10%+ of income on energy. | ACEEE 2024, Community Climate Collaborative 2025 |

### Why Richmond, why now
On **January 6, 2025**, a winter storm and an electrical failure flooded Richmond's water treatment plant. The **whole city** went under a boil-water advisory for nearly a week. Schools closed, the General Assembly postponed its session, and Henrico and Hanover counties were also placed under water advisories. Another boil-water advisory followed on **May 27, 2025**. Richmond's infrastructure is aging and residents feel it directly.

**One-sentence problem statement:**
> Homes waste water, energy and food because they can't see it, and cities rebuild infrastructure without seeing it either, so we pay more, pollute more and build in the wrong places.

---

## 2. Solution: Wattson

Two sides that feed each other:

### A. Household app (free, for everyone)
1. **Scan:** take a photo of an electric, water or gas bill and a grocery receipt. An AI model running on the person's own device reads usage, cost and items, so bills are never uploaded anywhere.
2. **Resource Score:** one score (0–100) across energy, water and food, compared to similar homes.
3. **Fixes:** personalized, ranked by money saved (for example, "Your water use jumped 30%, likely a running toilet. Fixing it saves about $X a year").
4. **Pantry alerts:** tracks perishables from receipts and suggests recipes before food spoils.
5. **Grid Sync:** "Run your dishwasher at 1 pm: the grid is cleanest right now." Shifts laundry, dishwashers and EV charging to clean, low-stress hours using live grid carbon data.
6. **Ask Wattson:** a private AI assistant, also on the device, that knows the app and the person's own scores, fixes and pantry ("What should I fix first?").

### B. Wattson City (for utilities and planners)
All that anonymized, aggregated data becomes a live map of a city's resource use:
- **Water:** neighborhoods with unusual usage spikes point to leaks or failing mains.
- **Energy:** streets where the grid is strained at peak hours, and rooftops best suited to solar and batteries.
- **Food:** where food waste is highest, so the city knows where to put composting or food-sharing hubs.
- Each hot spot comes with a recommended project and its estimated savings.

### Why it works (evidence)
- **Feedback changes behavior.** Opower's paper home energy reports alone cut household electricity use by **about 2%** in a randomized study of **588,446 households**. Monthly reports beat quarterly ones by 0.5 points, and savings continued after the reports stopped (Allcott & Rogers, J-PAL).
- **Better feedback, more savings.** An ACEEE meta-review of **57 feedback programs** found household electricity savings of **4–12%** on average. Real-time, direct feedback did best (Ehrhardt-Martinez et al., 2010).
- **Shifting demand together is a power plant.** DOE estimates that **80–160 GW of virtual power plants by 2030** could meet **10–20% of peak demand** and save about **$10B a year** in grid costs. Grid Sync turns thousands of homes into part of that.

---

## 3. Track 2 fit

| Track requirement | How Wattson delivers |
|---|---|
| Rethink human infrastructure | Cities plan pipes, grid upgrades and composting from real usage data. Homes become active parts of the grid. |
| Optimize resource consumption | Every household cuts energy, water and food waste. Grid Sync shifts demand to clean hours. |
| Forward-looking | Built for more renewables, more EVs, data-center-driven demand growth and aging infrastructure. |
| Fundamentally change how we live and build | People see and control their resource use every day, and cities build only what's needed, where it's needed. |

---

## 4. Target market and UVP (rubric: 10 pts)

**Primary market: households.** About 101,000 households in Richmond city (C3 2025) and about 132M nationwide. Lead with the people who feel it most: the ~20,000 energy-burdened Richmond households, renters, and young families.

**Secondary market: utilities and cities.** Utilities (Dominion Energy, Richmond Department of Public Utilities) and city planning or sustainability offices.

**Competitive landscape** (general market knowledge; check current pricing before the pitch):

| Product | What it does | Gap |
|---|---|---|
| Opower (Oracle) | Utility-sent energy reports | Energy only. Sold to utilities, not built for residents. |
| Sense / Emporia | Home energy monitors | $150–$300 hardware plus electrician install. Energy only. |
| Flume / Phyn | Water leak sensors | Hardware. Water only. |
| Too Good To Go / Olio | Surplus food marketplaces | Retail surplus, not your own fridge. |
| WattTime / Electricity Maps | Grid carbon data | Data APIs, not consumer products. |

**UVP:** Wattson is the **only product that covers energy, water and food in one app, with no hardware** (just a photo of your bill), and the **only one that turns household data into infrastructure planning** for cities. Competitors solve one resource for one audience. Wattson connects both sides.

**Privacy as a feature:** Wattson's AI runs on the person's own device. Bills, receipts and questions are never uploaded, and the city map only receives anonymous, block-level totals from people who opt in. None of the products above work this way. It matters most to the people Wattson serves first: energy-burdened families are often wary of handing financial documents to an app.

---

## 5. Marketing plan (rubric: 5 pts, needs more than "social media")

1. **Utility bill inserts and portals.** Partner with Richmond DPU so Wattson appears in the bill and the online portal. Every customer is reached at the moment they're looking at their usage.
2. **Weatherization and assistance programs.** Partner with programs that already serve energy-burdened families, like Project:HOMES and the city's weatherization assistance, so caseworkers onboard families.
3. **Schools and universities.** VCU, University of Richmond and RPS "Resource Challenge" competitions between dorms, classrooms or schools, using the Resource Score leaderboard.
4. **Neighborhood leagues.** Civic associations compete on neighborhood Resource Scores. Winners get city recognition or small grants.
5. **Retail and grocery partners.** Receipt scanning partnerships with local grocers, like Ellwood Thompson's or Kroger, for in-store QR codes and rewards.
6. **Earned media.** The January 2025 water crisis is a ready-made story: "the app that helps Richmond see its water problems before they hit."

---

## 6. Business model

- **Households: free.** Revenue from affiliate swaps (efficient appliances, smart thermostats, solar quotes, better rate plans).
- **Utilities: B2B subscription to Grid Sync.** Paid per enrolled home or per kW shifted, because shifting peak demand is cheaper than building peaker plants (DOE: about $10B a year national savings).
- **Cities and water authorities: Wattson City dashboard license.** Fits federal infrastructure and resilience grant applications.

---

## 7. Impact estimate: "If 10% of Richmond homes used Wattson"

Assumptions (state them openly if judges ask; these are estimates, not measured results):

| Input | Value | Source |
|---|---|---|
| Richmond households | ~101,000, so **10% ≈ 10,100 homes** | C3 2025 |
| Water: leaks fixed | 10,000 gal per home that fixes leaks; assume **half** of users have and fix one | EPA WaterSense |
| Energy saved | **4%** (low end of the 4–12% feedback range) of ~10,500 kWh a year per home | ACEEE; EIA typical home use |
| Food waste avoided | **25%** less waste × ~$800 per person × ~2.3 people per home | ReFED; Census household size |

Results:
- **Water:** 5,050 homes × 10,000 gal ≈ **50 million gallons a year**
- **Energy:** 10,100 × 420 kWh ≈ **4.2 million kWh (4.2 GWh) a year**
- **Food:** 10,100 × $460 ≈ **$4.6M a year** kept in families' pockets
- Plus city-level savings from finding main leaks early and peak-demand shifting from Grid Sync (not counted above).

---

## 8. Presentation plan (5 min max, then 2 min Q&A)

Rubric: Problem/Solution 20 · Market/UVP 10 · Marketing 5 · **Functionality 35** · Team/Presentation 20 · Q&A 10.
The demo is worth the most, so give it the most time. **Every team member must speak.**

| Time | Slide | Speaker | Say |
|---|---|---|---|
| 0:00–0:20 | 1 Title | A | "We're ___, and this is Wattson." |
| 0:20–1:00 | 2 Problem, 3 Richmond | A | The three big stats, then January 6, 2025: "Richmond couldn't drink its tap water for a week. Our infrastructure is aging, and nobody (not homes, not the city) can see the waste until it's a crisis." |
| 1:00–1:30 | 4 Solution, 5 How it works | B | Two sides: the household app and Wattson City. Scan, Score, Fix, Map. "And the AI runs on your own device, so your bills never leave it." |
| 1:30–3:15 | 6 Live demo | B + C | (1) Scan a real **electric bill** photo live (~25 s); narrate the progress line while it reads. Then click **Sample grocery receipt** for the pantry alerts. (2) **Ask Wattson:** "What should I fix first?" It answers from this home's own data. (3) Grid Sync: "Run your dishwasher at noon." (4) **Wow moment:** Wattson City zooms out from your home to all of Richmond: leak hot spot, grid-strain zone, food-waste area, each with a recommended project. (5) Impact slider. |
| 3:15–3:35 | 7 Evidence | C | Opower 2%, feedback 4–12%, VPP $10B. "This isn't a guess; feedback is proven." |
| 3:35–4:05 | 8 Market and UVP | D | Competitors are one resource, one audience. We're three resources, no hardware, private on-device AI, both sides. |
| 4:05–4:25 | 9 Go-to-market | D | Utility bill inserts, weatherization partners, school challenges. |
| 4:25–4:45 | 10 Business, 11 Impact | D | Free for homes; utilities and cities pay. 10% of Richmond means 50M gallons, 4.2 GWh, $4.6M. |
| 4:45–5:00 | 12 Close | All | "Today, homes waste resources and cities rebuild infrastructure blind. Wattson connects them. Every family saves money, every city builds smarter, and together we use less of everything. Starting with Richmond." |

**Demo note:** the city view can use realistic simulated data. Say so honestly if asked.

### Likely judge questions
- **"Is the city data real?"** Simulated for the demo. In production it comes from opted-in, anonymized household data plus utility AMI (smart meter) data through partnerships.
- **"Privacy?" / "Where does my data go?"** Nowhere, by default. The AI reads bills and answers questions on your own device; nothing is uploaded. Sharing with the city map is opt-in, and only anonymous totals are sent, grouped by block with a minimum group size. No individual home is ever shown.
- **"What AI do you use?"** An open-source vision model (Qwen3-VL, 8 billion parameters) running locally through Ollama, customized with Wattson's own instructions and knowledge. No cloud API, no per-scan cost, and it works offline.
- **"Why is the scan slow?"** It runs on a laptop with no cloud. A bill takes about 25 seconds and a long receipt about a minute. On a phone or a newer laptop it would be faster, and it's a one-time scan per bill.
- **"Why would people keep using it?"** Money: the average person wastes about $800 a year in food alone. Plus the score, streaks and neighborhood leagues. Opower showed continued feedback keeps savings growing (50–60% more than when it stops).
- **"How accurate is bill scanning?"** In our tests it read every usage figure, price and total correctly on an electric bill and two real grocery receipts. Wattson then does the math itself (percentages, scores) instead of trusting the AI with arithmetic, and uses a shelf-life table for spoil dates. In a full version, the user confirms the numbers before they're saved.
- **"What about people without smartphones?"** Weatherization and assistance partners can onboard households, and a utility portal version reaches people through their bill.
- **"How is this different from Opower?"** Opower is energy-only and is sent by the utility to you. Wattson covers three resources, is built for residents, and sends the data back up to improve infrastructure.

---

## 9. Running the demo (`index.html`)

**Start it:** from the project folder, run `python3 -m http.server 8804`, then open http://localhost:8804. It needs internet only for fonts and the map; the AI runs on the laptop. Keep the Ollama app open.

**Real scanning:** all AI runs on the laptop through Ollama. No API key, no account, and bills are never uploaded anywhere, which is a selling point: no competitor we compared offers private, on-device scanning. The header light shows **AI on this laptop** (green) or **AI offline** (red; click it for setup steps). Scanning reads photos only, not PDFs. While it works, the status line shows live progress ("Reading a grocery receipt… found 7 items · 12s"). In testing: a printed electric bill took ~25 seconds, and two real grocery receipts (13 and 16 lines) took 64 and 83 seconds, with every price and total read correctly. Spoil dates come from a built-in shelf-life table for common foods, because the model's own guesses were unreliable. If the AI is offline, the three **Sample** buttons still work.

**Saved data:** scans are saved in the browser, so a refresh doesn't wipe the score during the pitch, and pantry alerts keep counting down day by day. **↺ Start over** (next to the score) clears everything. Click it before you present, then scan live.

**Ask Wattson (chat, bottom right):** runs on the local `wattson` model. It has Wattson's built-in context (features, scoring, facts, business model, what's simulated) and also receives the person's current scores, fixes and pantry with each question, so answers are specific to them. A question takes about 5–15 seconds once the model is loaded.

**Local model setup (one time):** Ollama must be open. The `wattson` model is built from [demo/Modelfile](demo/Modelfile) on top of `qwen3-vl:8b-instruct`, which can read images. To change what Wattson knows, edit the `SYSTEM` text in the Modelfile, then rebuild:
```
ollama create wattson -f demo/Modelfile
```
The page loads the model into memory when it opens and keeps it loaded for 30 minutes. Open the page a minute before you present so the first answer is fast.

**Demo order (matches slide 6):**
0. **Before going on:** open the page, click **↺ Start over**, check the header says **AI on this laptop**, and have a clear photo of an electric bill ready.
1. **My Home:** scan the electric bill live (~25 s) and talk over the progress line. Then click **Sample water bill** and **Sample grocery receipt** to fill in the score, fixes and pantry alerts.
2. **Ask Wattson:** click a suggested question such as "What should I fix first?"
3. **Grid Sync:** pick EV charging to show its best window, then click **Schedule it**.
4. **Wattson City:** the map zooms out from "Your home" to all of Richmond. Click a project in the list to fly to it.
5. **Impact:** drag the slider from 10% up to 25%.

**What's simulated (say so if asked):** the grid profile, the city hot spots and homes, and the time-of-use prices. Real scanning and the Impact formulas (Section 7) are not simulated.

---

## 10. Sources

- ASCE 2025 Report Card, Drinking Water: https://infrastructurereportcard.org/wp-content/uploads/2025/03/Drinking-Water.pdf · coverage: https://asdwa.org/2025/03/27/asce-releases-report-detailing-water-infrastructure-health-plateau
- EPA WaterSense, Fix a Leak Week: https://www.watertechonline.com/home/article/15547697/epas-watersense-program-encourages-consumers-to-celebrate-fix-a-leak-week
- ReFED 2025 food waste report (coverage): https://foodindustryexecutive.com/2025/03/food-waste-remains-stubbornly-high-despite-signs-of-progress-according-to-new-refed-report/
- EPA, landfilled food waste and methane (2023): https://epa.gov/sciencematters/lettuce-not-waste-new-epa-research-highlights-food-waste-contributions-climate · https://www.epa.gov/composting
- DOE, Pathways to Commercial Liftoff: Virtual Power Plants: https://liftoff.energy.gov/wp-content/uploads/2023/10/LIFTOFF_DOE_VVP_10062023_v4.pdf · coverage: https://www.utilitydive.com/news/virtual-power-plant-vpp-doe-liftoff-tesla-voltus/693525/
- EIA, Dominion zone peak demand and data centers: https://www.eia.gov/todayinenergy/detail.php?id=67664
- Residential share of U.S. electricity (secondary): https://thundersaidenergy.com/downloads/us-electricity-demand-by-sector-by-use-over-time/
- Richmond water crisis, Jan 2025: https://virginiamercury.com/2025/01/10/richmonds-boil-water-advisory-lifted-saturday/ · https://crisis24.garda.com/alerts/2025/01/us-water-disruptions-and-boil-water-advisories-continue-in-richmond-and-surrounding-areas-of-virginia-as-of-jan-9-update-3 · May 2025: https://virginiamercury.com/2025/05/27/new-boil-water-advisory-issued-in-richmond-months-after-january-water-crisis/
- ACEEE, Richmond energy burden (2024): https://virginiamercury.com/2024/09/12/national-group-finds-low-income-residents-in-richmond-are-severely-energy-burdened/
- Community Climate Collaborative, Richmond energy burden (2025): https://www.vpm.org/news/2025-09-15/community-climate-collaborative-energy-burden-study-rva-east-end-southside
- Opower randomized evaluation (Allcott & Rogers): https://www.povertyactionlab.org/evaluation/opower-evaluating-impact-home-energy-reports-energy-conservation-united-states
- ACEEE feedback meta-review (Ehrhardt-Martinez et al., 2010): https://aceee.org/research-report/e105

### Data caveats
- EPA leak figures come from WaterSense releases from 2012 to 2015 and are still EPA's current headline numbers.
- The 38% residential electricity share comes from secondary summaries of EIA data. Check it against EIA's Electric Power Monthly if you want an exact figure.
- The commonly quoted "$1,500 per household per year" food-waste figure couldn't be traced to a primary source, so this document uses ReFED's **$800 per person** instead.
- ASCE's "a water main break every 2 minutes" is a **2021** figure. Use the 2025 number (33.3T gallons a year) instead.
- Impact numbers in Section 7 are estimates built on the stated assumptions.
