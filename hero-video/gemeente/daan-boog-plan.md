# Daan-boog — Implementatieplan (gemeente-video)

> **Voor uitvoerders:** dit is een **productieplan** (illustratie/animatie via Higgsfield + ffmpeg), geen code. De TDD-"test"-stap is hier **visuele verificatie**: het gegenereerde beeld/clip inspecteren tegen de canon + het recept, gevolgd door een **gebruikers-checkpoint** vóór we doorgaan (elke generatie kost credits en identiteits-consistentie is kritisch). Stappen gebruiken checkbox-syntax (`- [ ]`). Sub-skill voor uitvoering: `superpowers:subagent-driven-development` of `superpowers:executing-plans`.

**Goal:** Genereer de twee ontbrekende exterieur-beats (Daan komt gesloten aan; Daan loopt lichter weg) en schuif ze in de bestaande gemeente-montage, zodat Daans boog in beeld leest i.p.v. alleen in de voice-over.

**Architecture:** Nano Banana Pro levert twee 16:9 keyframes vanaf `fp-1` (stijl) + `card_daan_v1` (identiteit); Kling 3.0 animeert elk keyframe tot ~5s; ffmpeg verifieert frames en (optioneel) herbouwt de rough cut. `SHOTLIST.md` wordt bijgewerkt voor de AE-handoff. Eindmontage/VO blijft handoff.

**Tech Stack:** Higgsfield CLI (`nano_banana_2`, `kling3_0`), ffmpeg, curl, git. Spec: `hero-video/gemeente/daan-boog.md`. Recept + gotchas: memory `feedback_higgsfield_karmakaart_recipe`.

## Global Constraints

*(Elke generatie-taak erft deze impliciet. Verbatim uit spec §6.)*

- **Refs-volgorde altijd:** `--image` 1 = `C:/dev/karmakaart-site-react/public/fp-1.png` (alleen stijl/palet), `--image` 2 = `C:/dev/karmakaart/hero-video/gemeente/keyframes/card_daan_v1.png` (identiteit). In de prompt: "the man from the SECOND attached reference".
- **Daan consistent** met z'n card: slate-blue zip jack, grijs t-shirt, lichtbruin haar, lichte huid.
- **Vlakke matte editorial-stijl, grote open amandelogen** — geen kraaloog, geen roze blos.
- **Géén telefoonscherm/app-UI** in beeld (decouple-mechaniek).
- **Achtergrond volledig gevuld** met flat color blocks — **geen lege lucht** (anders logo-hallucinatie).
- **Houding/expressie expliciet** in de prompt (A = gesloten; B = open/verend).
- **Avoid-lijst** minimaal: Pixar, 3D render, photorealistic skin, detailed faces, harsh outlines, comic book style, oversized phone, visible phone screen, app UI, small beady eyes, any logo/wordmark/text, empty sky.
- **Stijl-anker = KarmaKaart painterly** (`fp-1`), NIET de SlowCarb/Fraunces-look.
- Bij gateway-5xx: eerst `higgsfield generate list` checken vóór re-roll (recept #10/#14); pas de prompt aan i.p.v. blind herhalen.

---

## Task 0: Setup & pre-flight

**Files:** geen (verificatie).

- [ ] **Step 1: Verifieer Higgsfield-balance**

```bash
higgsfield account status
```
Expected: `plus plan`, ~600 credits. De hele boog kost ~34 cr (2 stills + 2 Kling); re-rolls ruim gedekt.

- [ ] **Step 2: Verifieer dat de refs bestaan**

```bash
ls -la /c/dev/karmakaart-site-react/public/fp-1.png \
       /c/dev/karmakaart/hero-video/gemeente/keyframes/card_daan_v1.png
```
Expected: beide bestaan. Zo niet → stop en meld (zonder `card_daan_v1` kan de identiteit niet consistent blijven).

---

## Task 1: Beat A keyframe — "Daan komt aan" (gesloten)

**Files:**
- Create: `hero-video/gemeente/keyframes/shot2b_daan_arrival_v1.png`

**Interfaces:**
- Consumes: `fp-1.png` (stijl), `card_daan_v1.png` (identiteit).
- Produces: `shot2b_daan_arrival_v1.png` — start-image voor Task 2.

- [ ] **Step 1: Genereer (Nano Banana Pro, 16:9, 2k)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/keyframes
higgsfield generate create nano_banana_2 \
  --image "C:/dev/karmakaart-site-react/public/fp-1.png" \
  --image "C:/dev/karmakaart/hero-video/gemeente/keyframes/card_daan_v1.png" \
  --aspect_ratio 16:9 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Wide editorial illustration, 16:9. The Dutch man from the SECOND attached reference (early 30s, light-brown hair, muted slate-blue zip jacket over a grey t-shirt) walks up to the front door of a brownstone-style row house, approaching the stoop. His body language is closed and a little hesitant: BOTH hands pushed into his jacket pockets, shoulders slightly raised, a reserved neutral expression — not sad, just guarded and uncertain, as if unsure he should be here. Seen three-quarter from the front, mid-stride toward the door. Keep his identity, hair and clothing consistent with the reference; render his face in that same flat matte style (large open almond eyes, minimal detail, no beady eyes, no rosy blush). Background fills the ENTIRE frame as simple flat color blocks: the brownstone facade with its front door and steps, a few autumn trees and pavement — no empty sky visible. Calm open negative space upper-left for a headline. Use the FIRST reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, matte, no 3D, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy autumn palette, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, photorealistic skin, detailed faces, harsh outlines, comic book style, broad smile, open confident posture, hands out of pockets, phone, oversized props, small beady eyes, any logo or wordmark or text, empty sky."
```

- [ ] **Step 2: Download + inspecteer**

```bash
curl -s -o shot2b_daan_arrival_v1.png "<result-url van Step 1>"
```
Lees `shot2b_daan_arrival_v1.png`. Criteria: Daan herkenbaar/consistent met z'n card (slate-blue jack, lichtbruin haar); **houding leest gesloten** (handen in zakken, schouders op, gereserveerd — géén brede glimlach); brownstone-voordeur/stoep, achtergrond volledig gevuld (geen lege lucht); vlakke matte stijl + open amandelogen; kopruimte aanwezig; geen telefoon/tekst/logo.
Expected: voldoet; anders re-roll met sterkere "closed posture / hands in pockets / no smile"-formulering.

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon het beeld, wacht op akkoord vóór Task 2. Bij wijziging: re-roll, herhaal Step 2–3.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/keyframes/shot2b_daan_arrival_v1.png && git commit -m "Add Daan arrival keyframe (closed posture, gemeente video)"
```

---

## Task 2: Beat A clip — animeer de aankomst (Kling 3.0)

**Files:**
- Create: `hero-video/gemeente/clips/shot2b_daan_arrival_anim_v1.mp4`

**Interfaces:**
- Consumes: `shot2b_daan_arrival_v1.png` (start-image, uit Task 1).
- Produces: `shot2b_daan_arrival_anim_v1.mp4` — beat A in `SHOTLIST.md` (Task 5) + rough cut (Task 6).

- [ ] **Step 1: Animeer (Kling 3.0, gentle, proportie-locks)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/clips
higgsfield generate create kling3_0 \
  --start-image "C:/dev/karmakaart/hero-video/gemeente/keyframes/shot2b_daan_arrival_v1.png" \
  --duration 5 --wait --wait-timeout 10m \
  --prompt "Gentle, quiet moment. The man walks the last step up to the front door and pauses; he takes one hand out of his pocket and lifts it slightly toward the door as if about to knock, with a small hesitation. Subtle: autumn leaves drift softly, calm light. Camera holds completely steady, no push-in, no pan. Maintain all proportions, keep his face and identity identical, no morphing, no warping, no scale change, no extra limbs."
```

- [ ] **Step 2: Download + frame-check (geen morphing)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/clips
curl -s -o shot2b_daan_arrival_anim_v1.mp4 "<result-url>"
ffmpeg -y -v error -ss 2.0 -i shot2b_daan_arrival_anim_v1.mp4 -frames:v 1 _chk_20.png
ffmpeg -y -v error -ss 4.0 -i shot2b_daan_arrival_anim_v1.mp4 -frames:v 1 _chk_40.png
```
Lees `_chk_20.png` + `_chk_40.png`. Criteria: Daan blijft intact (geen gezicht-morph, geen extra ledematen, geen scale-jump); beweging subtiel; houding nog steeds gesloten/aarzelend. Daarna: `rm _chk_*.png`.
Expected: schoon; anders re-animeer. Bij rare handen → re-animeer met "reaches toward the door, no bell interaction". Bij gateway-5xx → `higgsfield generate list` checken.

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon de clip, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/clips/shot2b_daan_arrival_anim_v1.mp4 && git commit -m "Add Daan arrival clip (Kling 3.0, 5s)"
```

---

## Task 3: Beat B keyframe — "Daan loopt weg" (veerkracht)

**Files:**
- Create: `hero-video/gemeente/keyframes/shot3b_daan_leaves_v1.png`

**Interfaces:**
- Consumes: `fp-1.png` (stijl), `card_daan_v1.png` (identiteit).
- Produces: `shot3b_daan_leaves_v1.png` — start-image voor Task 4.

- [ ] **Step 1: Genereer (Nano Banana Pro, 16:9, 2k)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/keyframes
higgsfield generate create nano_banana_2 \
  --image "C:/dev/karmakaart-site-react/public/fp-1.png" \
  --image "C:/dev/karmakaart/hero-video/gemeente/keyframes/card_daan_v1.png" \
  --aspect_ratio 16:9 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Wide editorial illustration, 16:9. The Dutch man from the SECOND attached reference (early 30s, light-brown hair, muted slate-blue zip jacket over a grey t-shirt) walks away down a residential street, seen from THREE-QUARTER BEHIND, heading into the depth of the street away from the houses. His body language is light and lifted: head up, an easy springy stride, shoulders relaxed and low, hands out of his pockets and swinging naturally, and the edge of a small warm smile just visible on the side of his face as he glances slightly upward. Keep his identity, hair and clothing consistent with the reference; render any visible part of his face in that same flat matte style (open almond eyes, minimal detail, no beady eyes, no rosy blush). Background fills the ENTIRE frame as simple flat color blocks: brownstone-style row houses receding down the street, autumn trees and pavement — no empty sky visible. Calm open negative space upper-left for a headline. Use the FIRST reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, matte, no 3D, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy autumn palette with a touch of warm late-afternoon light, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, photorealistic skin, detailed faces, harsh outlines, comic book style, hunched closed posture, hands in pockets, fully hidden face with no smile hint, oversized props, small beady eyes, any logo or wordmark or text, empty sky."
```

- [ ] **Step 2: Download + inspecteer**

```bash
curl -s -o shot3b_daan_leaves_v1.png "<result-url>"
```
Lees `shot3b_daan_leaves_v1.png`. Criteria: Daan consistent met z'n card; **houding leest opgeveerd** (hoofd omhoog, open, lichte tred, randje glimlach) — duidelijk contrast met de gesloten aankomst; 3/4-van-achteren weglopend de straat in; achtergrond volledig gevuld; vlakke matte stijl; geen tekst/logo.
Expected: voldoet; anders re-roll (versterk "lifted, springy stride, small smile visible").

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/keyframes/shot3b_daan_leaves_v1.png && git commit -m "Add Daan departure keyframe (lifted/resilient, gemeente video)"
```

---

## Task 4: Beat B clip — animeer het weglopen (Kling 3.0)

**Files:**
- Create: `hero-video/gemeente/clips/shot3b_daan_leaves_anim_v1.mp4`

**Interfaces:**
- Consumes: `shot3b_daan_leaves_v1.png` (start-image, uit Task 3).
- Produces: `shot3b_daan_leaves_anim_v1.mp4` — beat B in `SHOTLIST.md` (Task 5) + rough cut (Task 6).

- [ ] **Step 1: Animeer (Kling 3.0, lichte tred, optionele zachte upward drift)**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/clips
higgsfield generate create kling3_0 \
  --start-image "C:/dev/karmakaart/hero-video/gemeente/keyframes/shot3b_daan_leaves_v1.png" \
  --duration 5 --wait --wait-timeout 10m \
  --prompt "The man walks a few easy steps away down the street with a light, slightly springy stride, head up and relaxed, a faint warm smile. Subtle: autumn leaves drift, soft late-afternoon light. Camera holds steady or drifts very gently upward, no fast push-in, no pan. Maintain all proportions, keep his face and identity identical, no morphing, no warping, no scale change, no extra limbs."
```

- [ ] **Step 2: Download + frame-check**

```bash
cd /c/dev/karmakaart/hero-video/gemeente/clips
curl -s -o shot3b_daan_leaves_anim_v1.mp4 "<result-url>"
ffmpeg -y -v error -ss 2.0 -i shot3b_daan_leaves_anim_v1.mp4 -frames:v 1 _chk_20.png
ffmpeg -y -v error -ss 4.0 -i shot3b_daan_leaves_anim_v1.mp4 -frames:v 1 _chk_40.png
```
Lees `_chk_20.png` + `_chk_40.png`. Criteria: Daan intact (geen morph/extra ledematen/scale-jump); tred licht/verend; houding opgeveerd. Daarna: `rm _chk_*.png`.
Expected: schoon; anders re-animeer. Bij te sterke camerabeweging → re-animeer met "camera holds completely steady, no drift".

- [ ] **Step 3: GEBRUIKERS-CHECKPOINT** — toon de clip, wacht op akkoord.

- [ ] **Step 4: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/clips/shot3b_daan_leaves_anim_v1.mp4 && git commit -m "Add Daan departure clip (Kling 3.0, 5s)"
```

---

## Task 5: SHOTLIST bijwerken (beats A & B + eigen-dot-noot)

**Files:**
- Modify: `hero-video/gemeente/SHOTLIST.md`

- [ ] **Step 1: Schuif beats A & B in de tabel + werk timings bij**

Bewerk de beat-tabel in `SHOTLIST.md` zodat hij overeenkomt met spec §4. Voeg twee rijen toe en herzie de tijd-windows:

```markdown
| # | Tijd | Bron-asset | AE-werk |
|---|---|---|---|
| 1 | 0–7s | `keyframes/map_wijk_base_v1.png` | Grijze wijk; 4–5 grijze dots verschijnen één voor één. |
| 2 | 7–11s | `clips/shot2_daan_phone_anim_v1.mp4` | Daan tikt → cut naar full-frame kaart. Geen UI. |
| A | 11–14s | `clips/shot2b_daan_arrival_anim_v1.mp4` | Daan komt **gesloten** aan bij Henks deur (handen in zakken, aarzeling). Bridge straat→interieur. |
| 3 | 14–26s | `clips/shot3_daan_henk_koffie_v2.mp4` | Koffie-beat; tijdens/na: **dot 1 licht warm op** (grijs→goud). |
| B | 26–29s | `clips/shot3b_daan_leaves_anim_v1.mp4` | Daan loopt **lichter** weg (opgeveerd). Op de kaart licht **Daans eigen dot** warm op — label-loos, gewoon een dot zoals de andere. Leidt de pullback in. |
| 4 | 29–35s | `clips/cascade_jan_koffie_anim_v1.mp4`, `clips/cascade_amir_taalmaatje_anim_v2.mp4`, `clips/cascade_marcus_voorlezen_anim_v1.mp4` | Cascade: meer dots springen warm aan. |
| 5 | 35–40s | `keyframes/map_wijk_base_v1.png` (vol kleur, alle dots warm) | Uittrekken: de wijk gloeit, verbonden. |
| 6 | 40–43s | KarmaKaart-logo | Eindkaart: *"KarmaKaart. Eén kaart. De hele wijk in beweging."* |
```

Werk ook het "Assets-overzicht" en de regel "5 bewegende character-clips" bij naar **7** (opening + aankomst + koffie + afscheid + 3 cascade), en voeg de twee nieuwe clips toe aan de lijst.

- [ ] **Step 2: Verifieer interne consistentie**

Lees `SHOTLIST.md` terug. Check: alle genoemde bestandspaden bestaan in `hero-video/gemeente/`; tijd-windows lopen aaneengesloten 0→43s; de eigen-dot-noot staat bij beat B.
Expected: consistent, geen verwijzing naar niet-bestaande assets.

- [ ] **Step 3: Commit**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/SHOTLIST.md && git commit -m "Insert Daan-boog beats A & B into SHOTLIST + own-dot AE note"
```

---

## Task 6 (optioneel): Rough cut v3 met beats A & B

**Files:**
- Modify: `hero-video/gemeente/build_roughcut.sh`
- Create: `hero-video/gemeente/gemeente_roughcut_v3.mp4`

> Alleen als je het concept kijkbaar wilt houden vóór AE. De ffmpeg-animatic is een grove montage; AE blijft de afwerking.

- [ ] **Step 1: Lees het bestaande build-script**

```bash
cat /c/dev/karmakaart/hero-video/gemeente/build_roughcut.sh
```
Begrijp hoe het de segmenten (`_build/s1..s8.mp4`) samenstelt en de dot-animatie opbouwt, zodat je beats A & B op de juiste plek inschuift (A na de telefoon-tik, B na de koffie).

- [ ] **Step 2: Voeg beats A & B toe aan de montage**

Pas `build_roughcut.sh` aan: neem `clips/shot2b_daan_arrival_anim_v1.mp4` (~3s getrimd) op ná het telefoon-segment en `clips/shot3b_daan_leaves_anim_v1.mp4` (~3s) ná het koffie-segment, en hernoem de output naar `gemeente_roughcut_v3.mp4`. Houd de bestaande "wijk die oplicht"-dot-logica intact; laat (indien eenvoudig) tijdens beat B een extra dot omslaan naar amber als visuele echo van "Daans eigen dot".

- [ ] **Step 3: Build + verifieer**

```bash
cd /c/dev/karmakaart/hero-video/gemeente
bash build_roughcut.sh
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 gemeente_roughcut_v3.mp4
ffmpeg -y -v error -ss 12 -i gemeente_roughcut_v3.mp4 -frames:v 1 _chk_A.png
ffmpeg -y -v error -ss 27 -i gemeente_roughcut_v3.mp4 -frames:v 1 _chk_B.png
```
Lees `_chk_A.png` (verwacht: Daan-aankomst) + `_chk_B.png` (verwacht: Daan-weglopen). Duur ~38–40s. Daarna: `rm _chk_*.png`.
Expected: beats A & B zitten op de juiste plek; de wijk-oplicht-animatie nog intact.

- [ ] **Step 4: GEBRUIKERS-CHECKPOINT** — toon `gemeente_roughcut_v3.mp4`, wacht op akkoord.

- [ ] **Step 5: Commit (na akkoord)**

```bash
cd /c/dev/karmakaart && git add hero-video/gemeente/build_roughcut.sh hero-video/gemeente/gemeente_roughcut_v3.mp4 && git commit -m "Gemeente rough cut v3: insert Daan-boog beats A & B"
```

---

## Self-Review (uitgevoerd)

**Spec-dekking:** spec §3 beat A → Task 1+2; §3 beat B → Task 3+4; §4 tijdlijn-inpassing → Task 5 (SHOTLIST) + Task 6 (rough cut); §5 eigen-dot AE-noot → Task 5 Step 1 (beat B-rij) + Task 6 Step 2; §6 productie/recept/constraints → Global Constraints + elke generate-taak; §7 buiten scope (VO, AE-polish, 9:16, geen nieuwe personages) → niet als taak opgenomen, correct. Geen gaten.

**Placeholder-scan:** geen TBD/TODO; elke generate-taak heeft een volledige verbatim prompt; `<result-url>` is een echte runtime-waarde uit de Step-1 output (geen placeholder). Task 6 is expliciet optioneel gemarkeerd.

**Type/naam-consistentie:** bestandsnamen consistent tussen taken — `shot2b_daan_arrival_v1.png` (Task 1) → start-image Task 2 → clip `shot2b_daan_arrival_anim_v1.mp4` → SHOTLIST beat A (Task 5) → rough cut (Task 6); idem `shot3b_daan_leaves_*` door Task 3→4→5→6. Refs-paden (`fp-1.png`, `card_daan_v1.png`) overal identiek. SHOTLIST-tijdvensters sluiten aaneen 0→43s.
