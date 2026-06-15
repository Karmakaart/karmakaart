# KarmaKaart Gemeente-video — Productieplan

> **Voor uitvoerders:** dit is een **productieplan** (illustratie/animatie via Higgsfield + After Effects), geen code. De TDD-"test"-stap is hier **visuele verificatie**: het gegenereerde beeld inspecteren tegen de canon + het Higgsfield-recept, gevolgd door een **gebruikers-checkpoint** vóór we doorgaan (elke generatie kost credits en identiteits-consistentie is kritisch). Stappen gebruiken checkbox-syntax (`- [ ]`).

**Goal:** Produceer alle assets voor de ~42s gemeente-pitchvideo "De wijk die oplicht" en lever een AE-klaar pakket op.

**Architecture:** Higgsfield (Nano Banana Pro keyframes + Kling 3.0 animatie) levert de painterly character-vignettes; bestaande `marketing-activities/`-stills voldoen voor de cascade; de "wijk die oplicht"-kaart wordt in After Effects gebouwd vanaf een gegenereerde painterly map-base. Eindmontage + voice-over = AE-handoff.

**Tech Stack:** Higgsfield CLI (`nano_banana_2`, `kling3_0`), ffmpeg (frame-checks), git (asset-versioning in de docs-repo). Spec: `hero-video/gemeente/design.md`. Recept + gotchas: memory `feedback_higgsfield_karmakaart_recipe`.

**Scope-grens:** Taken 0–8 voer ik uit (Higgsfield/ffmpeg/bestanden). Taak 9 (AE-kaartanimatie + montage) en de voice-opname zijn **handoff** — ik lever de bron-assets + een manifest; jij/een editor monteert in AE.

---

## Bestandsstructuur

```
hero-video/gemeente/
├── design.md            # spec (bestaat)
├── plan.md              # dit plan
├── keyframes/           # Daan-card, Henk-card, scene-keyframes, map-base
├── clips/               # Kling-animaties (koffie-beat; evt. cascade)
├── cascade/             # hergebruikte bestaande stills (Jan/Amir/Marcus)
└── SHOTLIST.md          # AE-handoff manifest (beat → asset → timing → VO → AE-notities)
```

Vaste refs (bestaan al):
- Stijl-anker: `C:/dev/karmakaart-site-react/public/fp-1.png`
- Gezichtsstijl-ref (vlakke amandelogen): `C:/dev/karmakaart/hero-video/marketing-activities/card_marcus_v1.png`
- Oudere-stijl-ref: `C:/dev/karmakaart/hero-video/marketing-activities/card_jan_v1.png`

---

## Task 0: Setup

**Files:**
- Create: `hero-video/gemeente/keyframes/`, `hero-video/gemeente/clips/`, `hero-video/gemeente/cascade/`

- [ ] **Step 1: Maak de submappen**

```bash
cd /c/dev/karmakaart && mkdir -p hero-video/gemeente/keyframes hero-video/gemeente/clips hero-video/gemeente/cascade
```

- [ ] **Step 2: Verifieer Higgsfield-balance (verwacht ~966 cr)**

```bash
higgsfield account status
```
Expected: `plus plan, ~960 credits`. Hele productie kost ruwweg 6 stills (~12 cr) + 1–2 Kling-clips (~15 cr) = ~25–30 cr. Ruim voldoende.

---

## Task 1: Canon vastleggen voor Daan + Henk

**Files:**
- Modify: `hero-video/prompts/_characters.md` (toevoegen ná het Amir-blok, vóór "Universal style spine")

- [ ] **Step 1: Voeg de twee canon-blokken toe**

```markdown
## Daan  *(B2G gemeente-video — gever, participatie/bijstand; in beeld géén label)*
> Dutch man, early 30s, short light-brown hair, fair skin, muted slate-blue zip jacket over a grey t-shirt, dark jeans, quiet reserved expression that gradually warms, painterly flat illustration

Identity ref: `gemeente/keyframes/card_daan_v1.png` (na Task 2).

## Henk  *(B2G gemeente-video — ontvanger; de eenzame oud-scheepsbouwer uit de cast-canon)*
> Elderly Dutch man, around 80, thinning grey hair, weathered lined face, large worn hands, beige cardigan over a checked shirt, calm reserved expression, painterly flat illustration

Identity ref: `gemeente/keyframes/card_henk_v1.png` (na Task 3).
```

- [ ] **Step 2: Verifieer dat Daan en Henk visueel onderscheidend zijn van bestaande cast**

Lees het blok terug. Check: Daan ≠ Marcus (geen teal hoodie, lichtere huid) en ≠ andere gevers (slate-blue is een nieuwe kleur). Henk ≠ Jan (geen tuinschort, dunner grijs haar i.p.v. "neatly combed white", 80 i.p.v. 70s).
Expected: geen kleur/identiteit-botsing met Maya/Marcus/Lisa/Jan/Amir.

- [ ] **Step 3: Commit**

```bash
cd /c/dev/karmakaart && git add hero-video/prompts/_characters.md && git commit -m "Add Daan + Henk-80 canon descriptions for gemeente video"
```

---

## Task 2: Daan identity-card

**Files:**
- Create: `hero-video/gemeente/keyframes/card_daan_v1.png`

- [ ] **Step 1: Genereer de card (Nano Banana Pro, 1:1, fp-1 + Marcus-gezichtsstijl-ref)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/keyframes
higgsfield generate create nano_banana_2 \
  --image "C:/dev/karmakaart-site-react/public/fp-1.png" \
  --image "C:/dev/karmakaart/hero-video/marketing-activities/card_marcus_v1.png" \
  --aspect_ratio 1:1 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Square portrait card, 1:1. Upper body of a single Dutch man, early 30s, short light-brown hair, fair skin, muted slate-blue zip jacket over a grey t-shirt, centered, subtle three-quarter pose, quiet reserved expression with a faint warm smile, soft gentle eye contact. CRITICAL — render his face in EXACTLY the flat matte editorial style of the SECOND attached reference card (the man in the teal hoodie): large open almond-shaped eyes clearly defined with visible iris, NOT small or beady, minimal facial detail, crisp flat matte color-blocking, no rosy blushy cheeks, no soft painterly shading. Plain flat muted warm grey-blue color-block background filling the entire frame, no objects. Use the FIRST attached reference ONLY for painterly flatness and palette; use the SECOND ONLY for face/eye style — do NOT copy either reference's identity, clothing or skin tone. FLAT 2D EDITORIAL ILLUSTRATION, minimal facial detail, matte printed quality, no 3D, no smooth digital painting, simple iconic face, no harsh outlines. Muted earthy palette, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed facial features, harsh outlines, comic book style, small beady eyes, rosy cheeks, any logo or wordmark or text."
```

- [ ] **Step 2: Download + inspecteer**

```bash
curl -s -o card_daan_v1.png "<result-url van Step 1>"
```
Lees `card_daan_v1.png`. Criteria: Dutch man begin 30, slate-blue jack, lichte huid, **open amandelogen (geen kraaloog)**, vlakke matte stijl die matcht met Maya/Marcus, schone color-block achtergrond, géén tekst/logo. Onderscheidend van de bestaande cast.
Expected: voldoet aan alle criteria; anders re-roll (pas prompt aan, niet blind herhalen — zie gotcha #10 recept bij 5xx).

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT**

Toon `card_daan_v1.png` aan de gebruiker. Wacht op akkoord vóór Task 3. Bij wijzigingsverzoek: re-roll met aangepaste prompt, herhaal Step 2–3.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/keyframes/card_daan_v1.png && git commit -m "Add Daan identity card (gemeente video)"
```

---

## Task 3: Henk-80 identity-card

**Files:**
- Create: `hero-video/gemeente/keyframes/card_henk_v1.png`

- [ ] **Step 1: Genereer (1:1, fp-1 + Jan als oudere-stijl-ref)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/keyframes
higgsfield generate create nano_banana_2 \
  --image "C:/dev/karmakaart-site-react/public/fp-1.png" \
  --image "C:/dev/karmakaart/hero-video/marketing-activities/card_jan_v1.png" \
  --aspect_ratio 1:1 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Square portrait card, 1:1. Upper body of a single elderly Dutch man, around 80, thinning grey hair, weathered lined face, large worn hands, beige cardigan over a checked shirt, centered, subtle three-quarter pose, calm reserved expression, gentle eye contact. CRITICAL — render his face in EXACTLY the flat matte editorial style of the SECOND attached reference card (the elderly man): large open almond-shaped eyes clearly defined, minimal facial detail, crisp flat matte color-blocking, no soft painterly shading. He is a DIFFERENT person from the reference — older (around 80), thinning grey hair, NO gardening apron — only match the flat elderly illustration style, not the identity or clothing. Plain flat muted warm beige color-block background filling the entire frame, no objects. Use the FIRST attached reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, minimal facial detail, matte printed quality, no 3D, no smooth digital painting, simple iconic face, no harsh outlines. Muted earthy palette, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed facial features, harsh outlines, comic book style, small beady eyes, gardening apron, any logo or wordmark or text."
```

- [ ] **Step 2: Download + inspecteer**

```bash
curl -s -o card_henk_v1.png "<result-url>"
```
Lees `card_henk_v1.png`. Criteria: oudere man ~80, dun grijs haar, beige vest (GEEN tuinschort → onderscheidend van Jan), open amandelogen, vlakke matte stijl, schone achtergrond, geen tekst/logo.
Expected: voldoet; anders re-roll.

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/keyframes/card_henk_v1.png && git commit -m "Add Henk-80 identity card (gemeente video)"
```

---

## Task 4: Keyframe "Daan tikt op telefoon" (shot 2)

**Files:**
- Create: `hero-video/gemeente/keyframes/shot2_daan_phone_v1.png`

- [ ] **Step 1: Genereer (16:9, fp-1 + Daan-card; recept: palm-grote telefoon, achterkant naar camera, GEEN scherm)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/keyframes
higgsfield generate create nano_banana_2 \
  --image "C:/dev/karmakaart-site-react/public/fp-1.png" \
  --image "C:/dev/karmakaart/hero-video/gemeente/keyframes/card_daan_v1.png" \
  --aspect_ratio 16:9 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Wide editorial illustration, 16:9. The Dutch man from the SECOND attached reference (early 30s, light-brown hair, muted slate-blue zip jacket, grey t-shirt) stands on a residential street, holding a small smartphone roughly the length of his palm in one hand — the BACK of the device faces the camera, the screen is fully angled away and NOT visible. He glances down at it, a small look of intent on his face. Keep his identity, hair and clothing consistent with the reference; render his face in that same flat matte style (open almond eyes, minimal detail, no beady eyes, no rosy blush). Background fills the ENTIRE frame as simple flat color blocks: brownstone-style row houses, a few autumn trees and a pavement — no empty sky visible. Calm open negative space upper-left for a headline. Use the FIRST reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, matte, no 3D, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy palette, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, photorealistic skin, detailed faces, harsh outlines, comic book style, oversized phone, visible phone screen, app UI, map on screen, floating phone, small beady eyes, any logo or wordmark or text, empty sky."
```

- [ ] **Step 2: Download + inspecteer**

```bash
curl -s -o shot2_daan_phone_v1.png "<result-url>"
```
Lees het beeld. Criteria (recept-conform): telefoon is **palm-groot, achterkant naar camera, GEEN UI/scherm zichtbaar** (cruciaal — anders de bekende oversized-phone/UI-glitch); Daan herkenbaar/consistent met z'n card; achtergrond volledig gevuld (geen lege lucht → geen logo-hallucinatie); kopruimte aanwezig; geen tekst/logo.
Expected: telefoon klein + scherm weg; anders re-roll met sterkere palm-/back-to-camera-formulering.

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/keyframes/shot2_daan_phone_v1.png && git commit -m "Add shot2 Daan-taps-phone keyframe (no UI, palm-sized)"
```

---

## Task 5: Keyframe "Daan & Henk — koffie" (shot 3, het hart)

**Files:**
- Create: `hero-video/gemeente/keyframes/shot3_daan_henk_koffie_v1.png`

- [ ] **Step 1: Genereer (16:9, fp-1 + Daan-card + Henk-card = 3 refs)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/keyframes
higgsfield generate create nano_banana_2 \
  --image "C:/dev/karmakaart-site-react/public/fp-1.png" \
  --image "C:/dev/karmakaart/hero-video/gemeente/keyframes/card_daan_v1.png" \
  --image "C:/dev/karmakaart/hero-video/gemeente/keyframes/card_henk_v1.png" \
  --aspect_ratio 16:9 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Warm editorial illustration, 16:9. Two men at a small kitchen table over coffee, mid-conversation. On the left: the younger man from the SECOND attached reference (early 30s, light-brown hair, muted slate-blue zip jacket), leaning in, listening warmly. On the right: the elderly man from the THIRD attached reference (around 80, thinning grey hair, beige cardigan), talking, one worn hand gesturing as if describing something. Two coffee cups on the table between them. Keep both identities, hair and clothing consistent with their reference cards; render both faces in the same flat matte editorial style (open almond eyes, minimal detail, no beady eyes, no rosy blush). A cozy modest living-room/kitchen interior fills the ENTIRE background as simple flat color blocks — a window with a plant, a cupboard, warm light — no empty wall visible. Calm open negative space upper-left for a headline. Use the FIRST reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, matte, no 3D, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy palette with warm tones, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, photorealistic skin, detailed faces, harsh outlines, comic book style, oversized props, any logo or wordmark or text, empty wall."
```

- [ ] **Step 2: Download + inspecteer**

```bash
curl -s -o shot3_daan_henk_koffie_v1.png "<result-url>"
```
Lees het beeld. Criteria: **beide** mannen herkenbaar + consistent met hun cards (Daan slate-blue/jong, Henk beige/oud); warme binnenruimte volledig gevuld; vlakke matte stijl op beide gezichten; geen tekst/logo. Let op identiteits-drift bij 2 refs (recept #9).
Expected: beide consistent; anders re-roll (evt. één personage per keer als 2-refs driftt).

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/keyframes/shot3_daan_henk_koffie_v1.png && git commit -m "Add shot3 Daan & Henk coffee keyframe (the emotional core)"
```

---

## Task 6: Animeer de koffie-beat (Kling 3.0)

**Files:**
- Create: `hero-video/gemeente/clips/shot3_daan_henk_koffie_v1.mp4`

- [ ] **Step 1: Animeer (Kling 3.0, gentle, proportie-locks)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/clips
higgsfield generate create kling3_0 \
  --start-image "C:/dev/karmakaart/hero-video/gemeente/keyframes/shot3_daan_henk_koffie_v1.png" \
  --duration 5 --wait --wait-timeout 10m \
  --prompt "Gentle warm moment. The elderly man on the right talks and his hand moves slightly as he describes something; the younger man on the left listens, gives a small warm nod and a faint smile; light flickers softly, steam rises gently from the coffee cups. Camera holds completely steady, no push-in, no pan. Maintain all proportions, keep both faces and identities identical, no morphing, no warping, no scale change, no extra limbs."
```

- [ ] **Step 2: Download + verifieer frames (geen morphing)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/clips
curl -s -o shot3_daan_henk_koffie_v1.mp4 "<result-url>"
ffmpeg -y -v error -ss 2.5 -i shot3_daan_henk_koffie_v1.mp4 -frames:v 1 _chk_25.png
ffmpeg -y -v error -ss 4.5 -i shot3_daan_henk_koffie_v1.mp4 -frames:v 1 _chk_45.png
```
Lees `_chk_25.png` + `_chk_45.png`. Criteria: beide mannen blijven intact (geen gezicht-morph, geen extra ledematen), beweging subtiel/warm. Daarna: `rm _chk_*.png`.
Expected: schoon; anders re-animeer. Bij gateway-5xx: check `higgsfield generate list` vóór re-roll (recept #10/#14).

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon de clip, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/clips/shot3_daan_henk_koffie_v1.mp4 && git commit -m "Add Daan & Henk coffee clip (Kling 3.0, 5s)"
```

---

## Task 7: Cascade-stills verzamelen (hergebruik)

**Files:**
- Copy into: `hero-video/gemeente/cascade/`

- [ ] **Step 1: Kopieer de drie bestaande oplicht-momenten**

```bash
cd /c/dev/karmakaart/hero-video
cp marketing-activities/scene3_ouderenbezoek_v1.png    gemeente/cascade/cascade_jan_koffie.png
cp marketing-activities/scene10_taalmaatjes_amir_v1.png gemeente/cascade/cascade_amir_taalmaatje.png
cp marketing-activities/scene4_voorlezen_v1.png         gemeente/cascade/cascade_marcus_voorlezen.png
ls -la gemeente/cascade/
```

- [ ] **Step 2: Verifieer geschiktheid als cascade-dot**

Lees de drie. Criteria: elk toont een duidelijk "iemand helpt"-moment (Jan/koffie, Amir/taalmaatje, Marcus/voorlezen), painterly stijl consistent met de nieuwe Daan/Henk-shots.
Expected: bruikbaar als snelle oplicht-momenten in de cascade. (Optioneel later: 1–2 animeren met Kling — niet nu nodig.)

- [ ] **Step 3: Commit**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/cascade/ && git commit -m "Gather cascade stills (Jan/Amir/Marcus) for gemeente video"
```

---

## Task 8: Map-base "de wijk" genereren (Higgsfield-deel van de kaart)

**Files:**
- Create: `hero-video/gemeente/keyframes/map_wijk_base_v1.png`

- [ ] **Step 1: Genereer een top-down painterly wijk-plattegrond (16:9, fp-1)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/keyframes
higgsfield generate create nano_banana_2 \
  --image "C:/dev/karmakaart-site-react/public/fp-1.png" \
  --aspect_ratio 16:9 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Top-down stylised illustrated map of a Dutch residential neighbourhood, flat 2D editorial illustration. Gentle bird's-eye view: blocks of row houses, tree-lined streets, a small park, a canal, winding paths — all as simple flat color blocks. Calm, evenly lit, plenty of small distinct rooftops and green spaces where location markers could later sit. NO pins, NO icons, NO labels, NO text yet — just the clean painterly map. Use the attached reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, matte printed quality, no 3D, no smooth digital painting, no harsh outlines. Muted earthy palette with warm autumn oranges and dusty teals, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, isometric 3D buildings, photorealistic, harsh outlines, any logo or wordmark or text, any UI, any map-app interface."
```

- [ ] **Step 2: Download + inspecteer**

```bash
curl -s -o map_wijk_base_v1.png "<result-url>"
```
Lees het beeld. Criteria: top-down painterly wijk in merkstijl; duidelijke daken/groen/straten waar AE later dots op kan zetten; GEEN pins/tekst/app-UI; volle kleur (AE maakt zelf de grijze openings-staat door te desatureren). 
Expected: bruikbaar als AE-canvas; anders re-roll.

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/keyframes/map_wijk_base_v1.png && git commit -m "Add wijk map base (Higgsfield) for AE dot-lighting"
```

---

## Task 9: AE-handoff manifest + montage  *(HANDOFF — ik lever het manifest; jij/editor monteert)*

**Files:**
- Create: `hero-video/gemeente/SHOTLIST.md`

- [ ] **Step 1: Schrijf het AE-handoff manifest**

Maak `hero-video/gemeente/SHOTLIST.md` met per beat: tijd-window, bron-asset (pad), en AE-notitie. Inhoud (verbatim):

```markdown
# Gemeente-video — AE-handoff (SHOTLIST)

Eindmontage in After Effects. ~42s, 1280×720 (desktop) + 9:16-crop (mobiel). Stijl: KarmaKaart painterly (fp-1), NIET SlowCarb.

| # | Tijd | Bron-asset | AE-werk |
|---|---|---|---|
| 1 | 0–7s | `keyframes/map_wijk_base_v1.png` | Start **gedesatureerd/grijs**. Laat 4–5 grijze marker-dots één voor één verschijnen op daken/plekken (stille problemen). Dots = simpele AE-vorm in merkkleur. |
| 2 | 7–11s | `keyframes/shot2_daan_phone_v1.png` | Inzoomen op één marker → Daan tikt op telefoon. Eén tik, dan **cut/transitie naar de full-frame kaart** (Daan ziet de kaart — kaart vult kader). Geen UI op het scherm. |
| 3 | 11–24s | `clips/shot3_daan_henk_koffie_v1.mp4` | De koffie-beat. Tijdens deze shot: laat op de kaart-laag (of bij terugkeer) **dot 1 warm oplichten** (grijs→goud). |
| 4 | 24–32s | `cascade/cascade_jan_koffie.png`, `cascade/cascade_amir_taalmaatje.png`, `cascade/cascade_marcus_voorlezen.png` | Snelle cascade: per still kort in beeld, en op de kaart springen meer dots warm aan. |
| 5 | 32–39s | `keyframes/map_wijk_base_v1.png` (vol kleur + alle dots warm) | Uittrekken: de hele wijk **gloeit**, verbonden. Grijs→warm volledig omgeslagen. |
| 6 | 39–42s | KarmaKaart-logo | Eindkaart + regel: *"KarmaKaart. Eén kaart. De hele wijk in beweging."* |

## Voice-over (jouw stem, ~40s) — zie `design.md` §6 voor de volledige tekst
Spreek in en leg onder de montage. Eventueel polijsten via de jesper-voice-skill.

## Markers/merk-ID
Geen app-UI. KarmaKaart-herkenning via: dot/marker-stijl in merkkleur + VO noemt KarmaKaart bij beat 2 + logo-eindkaart.
```

- [ ] **Step 2: Commit**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/SHOTLIST.md && git commit -m "Add AE handoff manifest (SHOTLIST) for gemeente video"
```

- [ ] **Step 3: HANDOFF-CHECKPOINT**

Lever op aan de gebruiker: alle assets in `hero-video/gemeente/` + `SHOTLIST.md`. Bespreek:
- Voice-over inspreken (jouw stem) — evt. jesper-voice polijsten.
- De AE-kaartanimatie (dot-lighting + grijs→warm) is het echte AE-werk; map-base + manifest staan klaar.
- Optioneel: cascade-stills animeren (Kling) als meer beweging gewenst is; 9:16-crop voor mobiel.

---

## Self-Review (uitgevoerd)

**Spec-dekking:** §3 cast → Tasks 1–6 (Daan/Henk canon + cards + scenes) + Task 7 (cascade reuse). §4 shotlist → alle 6 beats gedekt in Task 9 SHOTLIST. §5 telefoon-mechaniek → Task 4 (geen UI) + Task 9 beat 2 (cut naar full-frame kaart). §7 productie-pad → Higgsfield-taken + map-base (Task 8) + AE-handoff (Task 9). §6 VO/eindkaart → Task 9 manifest. Fatima (canon-only) bewust níét in dit plan — correct per spec.

**Placeholder-scan:** geen TBD/TODO; elke generatie heeft een volledige prompt; `<result-url>` is een echte runtime-waarde (uit Step-1 output), geen placeholder.

**Type-consistentie:** bestandsnamen consistent tussen taken (card_daan_v1 → gebruikt in Task 4/5; card_henk_v1 → Task 5; shot3-keyframe → Task 6 start-image; map_wijk_base_v1 → Task 9 beats 1/5). Refs-paden identiek overal.
```
