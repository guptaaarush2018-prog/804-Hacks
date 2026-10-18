# Wattson

**Every home, part of a smarter city.** Built at 804 Hacks (Richmond, VA) for Track 2: Build a Sustainable Future.

Snap a photo of an electric, water or gas bill, or a grocery receipt. Wattson's AI reads it **on your own computer**, so your bills never leave the device. Then it shows:

- **Resource Score:** energy, water and food, compared with a typical home of your size (and Richmond's typical water customer for Richmond ZIP codes)
- **Small business mode:** reads demand charges from business electric bills, scores how evenly power is used (load factor), and prices fixes with Dominion's GS-2 demand rates
- **Fixes ranked by dollars saved:** the biggest ones calculated from your bill's own numbers and rate
- **What's next and Your routine:** one-click calendar reminders for fixes, and a weekly appliance schedule built from your habits
- **Pantry alerts:** what spoils first, with a meal idea that uses it
- **History:** a monthly trend chart, so you can see whether fixes worked
- **Ask Wattson:** a private AI assistant that knows the app and your own numbers
- **Grid Sync:** the cleanest, cheapest hours to run big appliances
- **Wattson City:** opt in, and your block's anonymous totals join a city map of leaks, grid strain and food waste, with recommended projects

## Run it

1. Install [Ollama](https://ollama.com) and open it.
2. Build Wattson's model (downloads the ~6 GB `qwen3-vl:8b-instruct` vision model the first time):
   ```
   ollama create wattson -f demo/Modelfile
   ```
3. From this folder, serve the app and open http://localhost:8804:
   ```
   python3 -m http.server 8804
   ```

The header shows **AI on this laptop** when the model is ready. Without Ollama, the sample bills, History demo, Grid Sync, Wattson City and Impact all still work.

## What's real and what's simulated

| Real | Simulated for the demo |
|---|---|
| Reading bills and receipts with on-device AI | Hour-by-hour grid cleanliness and time-of-use prices (Grid Sync) |
| Scores, fixes, pantry alerts, history, Ask Wattson | Other neighborhoods' hot spots and homes on the city map |
| Your own block's signals on the city map (when sharing is on) | |
| Impact estimates (from sourced assumptions) | |

## How it's built

- One file, [index.html](index.html): plain HTML, CSS and JavaScript, with [Leaflet](https://leafletjs.com) and OpenStreetMap for the map. Data is saved in the browser.
- [demo/Modelfile](demo/Modelfile): the `wattson` model, an open-source vision model (Qwen3-VL 8B) with Wattson's knowledge and rules built in. The app sends each question along with the person's current numbers, and does all arithmetic itself so the model never has to.
- [Documentation.md](Documentation.md): problem statement, research with sources, market, marketing plan, business model, impact math and pitch plan.
