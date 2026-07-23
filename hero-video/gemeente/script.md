# Gemeente-video — Script v4: "De wijk die oplicht"

*~45s · 1280×720 (desktop) + 9:16-crop (mobiel) · stijl: KarmaKaart painterly (`fp-1`), voice-over: jouw stem, nuchter Nederlands.*

**Wat er veranderde t.o.v. v3:** diegetische opening (kaart → uitzoomen → telefoon in Daans hand → tik → wegstoppen → lopen), en drie **gelijkwaardige** mini-scènes (eenzaamheid · zorg · leefbaarheid/zwerfafval) i.p.v. één verhaal + snelle cascade. Elke scène komt zichtbaar **binnen via de kaart** (rode draad: *"… zag het op de kaart"* + pulserende marker). De wijk blijft de held; de slotregel landt op de wíjk.

> **Wijziging 2026-07-22 (scène 3):** tuinieren-scène vervangen door **zwerfafval opruimen in het park** (Marcus met grijper, Jan houdt de vuilniszak open). Reden: de tuin-versies bleven gereedschap-fouten opleveren (mini-hark, éénhandige heggenschaar); prikker + zak zijn simpele, foutloze props én zwerfafval is een KarmaKaart-MVP-activiteit. Marker 3 ligt nu in het park op de kaart.

> **Productienoot:** de kaart-op-telefoon is een **After Effects-composite** (kaartlaag op een blanco telefoon-plate). Higgsfield tekent zelf nooit app-UI (oversized-phone/UI-glitch — zie `feedback_higgsfield_karmakaart_recipe`). Deze route stond al als optie in `design.md §5`.

---

## 1. Shotlist (video + audio)

| # | Tijd | BEELD | AUDIO / voice-over |
|---|------|-------|--------------------|
| **0 — Opening / KarmaKaart** | 0–8s | Open **strak op de kaart**: painterly wijk-plattegrond met een paar zachte meldingen/pins in merkkleur. Langzaam **uitzoomen** — de kaart blijkt een **telefoonscherm**, in de handen van **Daan**. Hij **tikt één melding aan**, knikt licht, **stopt de telefoon weg** en begint te lopen. | *In elke wijk gebeurt het meeste wat ertoe doet… buiten beeld. Tot je het ziet. KarmaKaart zet het op één kaart — je ziet wat er vandaag, hier, nodig is. Eén tik, en Daan weet genoeg.* |
| **1 — Eenzaamheid (Daan → Henk)** | 8–19s | Daan loopt de stoep op en klopt op de deur. (`shot2b_daan_arrival`). Binnen: **koffie met Henk**, Henk vertelt, Daan luistert warm (`shot3_daan_henk_koffie`). Daan loopt opgeveerd weg (`shot3b_daan_leaves`). Op de kaart licht **marker 1 warm op** (grijs → goud). | *Henk had al weken niemand gesproken. Eén kop koffie, een ander perspectief... precies de boost die Henk nodig had.* |
| **2 — Zorg / boodschappen (Maya)** | 19–28s | Korte kaart-beat: tweede grijze marker **pulseert**, **Maya** licht aan als speler. **Maya aan de deur met een tas boodschappen**, korte warme groet met een oudere bewoner. Op de kaart: **marker 2 → warm**. | *Maya zag het ook op de kaart. De boodschappen lukten niet meer. Even langs — geen gedoe.* |
| **3 — Leefbaarheid / zwerfafval (Marcus & Jan, park)** | 28–37s | Kaart-beat: derde marker (**in het park** — de zwerfafval-melding) pulseert, **Marcus** licht aan. **Marcus en Jan ruimen samen zwerfafval op in het park**: Marcus pakt een blikje met de grijper, Jan houdt de vuilniszak met beide handen open, korte warme knik. Op de kaart: **marker 3 → warm**. | *En Marcus zag het zwerfafval in het park. Samen met Jan was het zo opgeruimd.* |
| **4 — Finale (de wijk gloeit)** | 37–43s | Helemaal **uittrekken**. De drie warme markers stralen; meer dots **rippelen warm aan** door de hele wijk. Grijs → warm volledig omgeslagen — de wijk **gloeit**, verbonden. | *Geen formulier, geen wachtlijst. Als genoeg mensen iets kleins doen, telt het op — en wat onzichtbaar was, wordt zichtbaar. Niet op papier. In de wijk zelf.* |
| **5 — Eindkaart** | 43–46s | Het **KarmaKaart-logo** verschijnt op de gloeiende wijk, met de slotregel. | *(stil, of zacht ingesproken)* **KarmaKaart. Eén kaart. De hele wijk in beweging.** |

---

## 2. Voice-over — schoon om in te spreken (~45s)

> In elke wijk gebeurt het meeste wat ertoe doet… buiten beeld. Tot je het ziet.
>
> KarmaKaart zet het op één kaart — je ziet wat er vandaag, hier, nodig is. Eén tik, en Daan weet genoeg.
>
> Henk had al weken niemand gesproken. Eén kop koffie — en ze staan er allebei anders bij.
>
> Maya zag het ook op de kaart. De boodschappen lukten niet meer. Even langs — geen gedoe.
>
> En Marcus zag het zwerfafval in het park. Samen met Jan was het zo opgeruimd.
>
> Geen formulier, geen wachtlijst. Als genoeg mensen iets kleins doen, telt het op — en wat onzichtbaar was, wordt zichtbaar. Niet op papier. In de wijk zelf.

**Eindkaart:** *KarmaKaart. Eén kaart. De hele wijk in beweging.*
**Deck-variant (zakelijk):** *De drempelloze laag onder uw sociaal domein.*

---

## 3. Asset-status

**Klaar (hergebruik):** `keyframes/map_wijk_base_v1.png`, `shot2_daan_phone`, `shot2b_daan_arrival`, `shot3_daan_henk_koffie`, `shot3b_daan_leaves`.

**Nieuw te genereren (Higgsfield → §4):**
- Scène 2 — Maya-aan-de-deur-met-boodschappen: `keyframes/shot4_maya_boodschappen_v1.png` + `clips/shot4_maya_boodschappen_anim_v1.mp4`
- Scène 3 — Marcus-en-Jan-zwerfafval-in-het-park: `keyframes/shot5_zwerfafval_park_v1.png` + `clips/shot5_zwerfafval_park_anim_v1.mp4` *(verving de tuin-versies, zie wijzigingsnoot boven)*

**AE-werk:** de kaart→telefoon-composite (opening), het 3-marker grijs→warm-systeem, en de finale-ripple.

---

## 4. Higgsfield-prompts (nieuwe assets)

Recept (`feedback_higgsfield_karmakaart_recipe`): **`fp-1.png` stijl-ref eerst**, dan de character identity-card; `nano_banana_2` voor keyframes, `kling3_0` voor animatie; verbatim canon-beschrijvingen; achtergrond **positief opvullen** (geen lege lucht → geen logo-hallucinatie); rekvormige props vermijden. Na elke generatie: **downloaden, inspecteren, gebruikers-checkpoint**, dan pas commit.

Vaste refs (macOS-paden):
```
STYLE=/Users/hansjjprins/Projects/karmakaart/karmakaart-site-react/public/fp-1.png
MAYA=/Users/hansjjprins/Downloads/karmakaart-main/hero-video/marketing-activities/card_maya_v1.png
MARCUS=/Users/hansjjprins/Downloads/karmakaart-main/hero-video/marketing-activities/card_marcus_v1.png
JAN=/Users/hansjjprins/Downloads/karmakaart-main/hero-video/marketing-activities/card_jan_v1.png
GEM=/Users/hansjjprins/Projects/karmakaart/karmakaart-site-react/.zencoder/video/gemeente
```

Canon (verbatim, voor consistentie):
- **Maya** — Middle Eastern woman, late 20s, long straight dark hair, mustard-yellow knit cardigan over plain white t-shirt, dark jeans, soft thoughtful expression, painterly flat illustration
- **Marcus** — Black man, mid 30s, short afro, warm-toned skin, teal cotton hoodie over a white t-shirt, slim grey jeans, grounded attentive expression, painterly flat illustration
- **Jan** — Elderly Dutch man, mid 70s, neatly combed white hair, light tanned skin, dark green canvas gardening apron over cream knit sweater, dark trousers, weathered hands, kind alert expression, painterly flat illustration

---

### Scène 2 — Maya brengt boodschappen

**Keyframe** (`shot4_maya_boodschappen_v1.png`, 16:9, fp-1 + Maya-card):

```bash
higgsfield generate create nano_banana_2 \
  --image "$STYLE" \
  --image "$MAYA" \
  --aspect_ratio 16:9 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Warm editorial illustration, 16:9. The woman from the SECOND attached reference (Middle Eastern woman, late 20s, long straight dark hair, mustard-yellow knit cardigan over a white t-shirt, dark jeans) stands at the front door of a modest home, handing a normal palm-to-forearm sized cloth grocery bag with a few groceries (a leek, some bread) to a frail elderly woman with grey hair in a cardigan who stands just inside the doorway, both sharing a short warm greeting. Keep the young woman's identity, hair and clothing consistent with the reference; render both faces in the same flat matte editorial style (large open almond-shaped eyes, minimal facial detail, no beady eyes, no rosy blush, no soft painterly shading). A residential street and doorstep fill the ENTIRE background as simple flat color blocks: a brick facade, a doormat, an autumn plant by the door, warm afternoon light — no empty sky visible. Calm open negative space upper-left for a headline. Use the FIRST attached reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, matte printed quality, no 3D, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy palette with warm tones, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, photorealistic skin, detailed faces, harsh outlines, comic book style, oversized bag, giant groceries, floating objects, small beady eyes, any logo or wordmark or text, empty sky."
# download + inspect
curl -s -o "$GEM/keyframes/shot4_maya_boodschappen_v1.png" "<result-url>"
```
Criteria: Maya herkenbaar/consistent (mosterdgele vest), **normaal-grote boodschappentas** (geen reuzenprops), oudere bewoner in de deuropening, vlakke matte stijl op beide gezichten, achtergrond volledig gevuld, geen tekst/logo. Anders re-roll. → **Checkpoint.**

**Animatie** (`shot4_maya_boodschappen_anim_v1.mp4`, Kling 3.0):

```bash
higgsfield generate create kling3_0 \
  --start-image "$GEM/keyframes/shot4_maya_boodschappen_v1.png" \
  --duration 5 --wait --wait-timeout 10m \
  --prompt "Gentle warm moment. The young woman holds out the grocery bag and the elderly woman reaches to take it, both giving a small warm smile and a slight nod; light flickers softly. Camera holds completely steady, no push-in, no pan. Maintain all proportions, keep both faces and identities identical, no morphing, no warping, no scale change, no extra limbs, the bag stays the same size."
curl -s -o "$GEM/clips/shot4_maya_boodschappen_anim_v1.mp4" "<result-url>"
```
Frame-check op ~2.5s en ~4.5s (geen morph, tas blijft normaal). → **Checkpoint** → commit.

---

### Scène 3 — Marcus & Jan ruimen zwerfafval op in het park *(vervangen 2026-07-22)*

Geproduceerd via de Higgsfield MCP (nano_banana_2 → flash, 2k, 16:9; refs fp-1 + Marcus-card + Jan-card). Kernpunten van de prompt: Marcus houdt **ÉÉN** simpele grijper (normale armlengte, kleine klauw) met een blikje; Jan houdt **ÉÉN** open vuilniszak met **BEIDE handen** (geen tweede gereedschap = geen grip-fouten); 2-3 stukjes zwerfafval op het gras; park vult het hele frame (pad, bankje, herfstbomen); negatieve ruimte linksboven; vlakke matte stijl + oog-fix-clausules; avoid: oversized picker/bag, second grabber, text/logo. Kling 3.0 (5s): blikje in één rustige boog in de zak, Jan knikt, monden vrijwel stil (recept #18), camera statisch, anti-morph.

Bestanden: `keyframes/shot5_zwerfafval_park_v1.png` + `clips/shot5_zwerfafval_park_anim_v1.mp4`.

<details><summary>Oude tuin-versie (vervallen: mini-hark in v1, éénhandige heggenschaar-knip in v2-animatie)</summary>

**Keyframe** (`shot5_marcus_tuin_v1.png`, 16:9, fp-1 + Marcus-card + Jan-card = 3 refs):

```bash
higgsfield generate create nano_banana_2 \
  --image "$STYLE" \
  --image "$MARCUS" \
  --image "$JAN" \
  --aspect_ratio 16:9 --resolution 2k --wait --wait-timeout 8m \
  --prompt "Warm editorial illustration, 16:9. Two men working together in a small overgrown backyard garden. On the left: the younger man from the SECOND attached reference (Black man, mid 30s, short afro, warm-toned skin, teal cotton hoodie, grey jeans), crouching and raking fallen leaves, sleeves pushed up. On the right: the elderly man from the THIRD attached reference (mid 70s, neatly combed white hair, dark green gardening apron over a cream sweater) standing with normal-sized garden shears, gesturing toward a hedge, sharing a small laugh with the younger man. Normal palm-sized garden tools. Keep both identities, hair and clothing consistent with their reference cards; render both faces in the same flat matte editorial style (large open almond-shaped eyes, minimal detail, no beady eyes, no rosy blush, no soft painterly shading). An overgrown but cozy Dutch backyard fills the ENTIRE background as simple flat color blocks: a wooden fence, an autumn tree, tall grass and a garden bench, warm afternoon light — no empty sky visible. Calm open negative space upper-left for a headline. Use the FIRST attached reference ONLY for painterly flatness and palette. FLAT 2D EDITORIAL ILLUSTRATION, matte printed quality, no 3D, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy palette with warm autumn tones, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, photorealistic skin, detailed faces, harsh outlines, comic book style, oversized tools, giant shears, floating objects, small beady eyes, any logo or wordmark or text, empty sky."
curl -s -o "$GEM/keyframes/shot5_marcus_tuin_v1.png" "<result-url>"
```
Criteria: **beide** mannen herkenbaar + consistent (Marcus teal hoodie/jong, Jan groene tuinschort/oud → onderscheidend van Henk), tuin-setting volledig gevuld, normaal-grote tuingereedschap, vlakke matte stijl, geen tekst/logo. Let op identiteits-drift bij 2 character-refs (recept #9 — desnoods één personage per keer). Anders re-roll. → **Checkpoint.**

**Animatie** (`shot5_marcus_tuin_anim_v1.mp4`, Kling 3.0):

```bash
higgsfield generate create kling3_0 \
  --start-image "$GEM/keyframes/shot5_marcus_tuin_v1.png" \
  --duration 5 --wait --wait-timeout 10m \
  --prompt "Gentle warm moment. The younger man rakes leaves with a small steady motion; the elderly man trims the hedge once and they exchange a short warm laugh; leaves drift softly, light flickers gently. Camera holds completely steady, no push-in, no pan. Maintain all proportions, keep both faces and identities identical, no morphing, no warping, no scale change, no extra limbs, tools stay the same size."
curl -s -o "$GEM/clips/shot5_marcus_tuin_anim_v1.mp4" "<result-url>"
```
Frame-check op ~2.5s en ~4.5s (geen morph, gereedschap blijft normaal). → **Checkpoint** → commit.

</details>

---

## 5. Volgorde van uitvoeren
1. Scène 2 keyframe → checkpoint → clip → checkpoint.
2. Scène 3 keyframe → checkpoint → clip → checkpoint.
3. AE: opening-composite (kaart→telefoon), 3-marker grijs→warm, finale-ripple, VO eronder, eindkaart-logo.
4. 9:16-crop voor mobiel.
