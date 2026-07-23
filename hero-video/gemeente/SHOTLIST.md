# Gemeente-video — AE-handoff (SHOTLIST) · v4 "De wijk die oplicht"

Eindmontage in **After Effects**. ~45s, 1280×720 (desktop) + 9:16-crop (mobiel). Stijl: KarmaKaart painterly (`fp-1`), NIET SlowCarb. Voice-over: jouw stem (schone VO-tekst in `script.md` §2).

Structuur v4 (`script.md`): diegetische opening (kaart → uitzoomen → telefoon in Daans hand) + **drie gelijkwaardige mini-scènes** (eenzaamheid · zorg · leefbaarheid/zwerfafval), elke scène binnenkomend **via de kaart** (pulserende marker, daarna grijs→warm). De wijk is de held; de cascade-clips uit v3 zijn vervallen (reserve/b-roll). *(Scène 3 gewijzigd 2026-07-22 op verzoek: tuinieren → zwerfafval opruimen in het park — simpelere props, geen gereedschap-fouten.)*

| # | Tijd | Bron-asset | AE-werk |
|---|---|---|---|
| 0a | 0–5s | `keyframes/map_wijk_base_v1.png` | Open **strak op de kaart** (gedesatureerd/grijs). Langzaam **uitzoomen**; 3 koele marker-dots verschijnen één voor één (de stille meldingen). |
| 0b | 5–8s | `clips/shot2_daan_phone_anim_v1.mp4` + blanco telefoon-plate | **Kaart-op-telefoon-composite**: de kaartlaag blijkt het telefoonscherm in Daans handen. Daan tikt één melding aan, knikt, stopt de telefoon weg. Geen app-UI tekenen — kaartlaag op blanco plate (zie `script.md` productienoot). |
| 1a | 8–11s | `clips/shot2b_daan_arrival_anim_v1.mp4` | **Scène 1 — eenzaamheid.** Daan komt **gesloten** aan bij Henks voordeur (aarzeling bij de deur). |
| 1b | 11–16s | `clips/shot3_daan_henk_koffie_v2.mp4` | De koffie-beat (warm; Henk vertelt, Daan luistert). **Gebruik v2** — geen mondvervorming. |
| 1c | 16–19s | `clips/shot3b_daan_leaves_anim_v1.mp4` | Daan loopt **opgeveerd** weg. Op de kaartlaag: **marker 1 grijs → goud**. Optioneel (locked idee): ook **Daans eigen dot** licht label-loos warm op — de participatie-subtext. |
| 2a | 19–21s | `keyframes/map_wijk_base_v1.png` | **Kaart-beat**: marker 1 nu warm; **marker 2 pulseert** koel; Maya licht aan als speler. |
| 2b | 21–26s | `clips/shot4_maya_boodschappen_anim_v1.mp4` | **Scène 2 — zorg.** Maya aan de deur met een tas boodschappen, korte warme groet met de oudere bewoner. Daarna op de kaart: **marker 2 → warm**. |
| 3a | 26–28s | `keyframes/map_wijk_base_v1.png` | **Kaart-beat**: markers 1+2 warm; **marker 3 pulseert** — deze ligt **in het park** (de zwerfafval-melding); Marcus licht aan. |
| 3b | 28–33s | `clips/shot5_zwerfafval_park_anim_v1.mp4` | **Scène 3 — leefbaarheid/zwerfafval.** Marcus en Jan ruimen samen zwerfafval op in het park: Marcus pakt een blikje met de grijper, Jan houdt de vuilniszak met beide handen open. Daarna: **marker 3 → warm**. |
| 4 | 33–40s | `keyframes/map_wijk_base_v1.png` | **Finale**: helemaal uittrekken. Drie warme markers stralen; extra dots **rippelen warm aan**; kaart kleurt in (grijs→warm volledig omgeslagen) — de wijk **gloeit**, verbonden. |
| 5 | 40–45s | KarmaKaart-logo | Eindkaart + regel: *"KarmaKaart. Eén kaart. De hele wijk in beweging."* |

## Voice-over (jouw stem, ~45s)
Schone inspreektekst: `script.md` §2. Spreek in en leg onder de montage; eventueel polijsten via de jesper-voice-skill.

## Markers / merk-ID (geen app-UI)
KarmaKaart-herkenning via drie dragers samen: (a) dot/marker-stijl in merkkleur op de kaart, (b) de VO noemt KarmaKaart in de opening, (c) de logo-eindkaart. Marker-grammatica: **koel-blauw = stille melding/probleem → amber/goud = geholpen**.

Marker-coördinaten (op de 1280×720-crop van `map_wijk_base_v1.png`, zoals in de rough cut):
- Scène-markers: m1 Henk (340,200) · m2 Maya (770,480) · m3 park/zwerfafval (660,320)
- Finale-ripple: (450,470) · (560,130) · (980,250) · (1080,440)

## Assets-overzicht (alles in `hero-video/gemeente/`)
- `keyframes/card_daan_v1.png`, `keyframes/card_henk_v1.png` — identity refs (cast; canon in `prompts/_characters.md`)
- `keyframes/map_wijk_base_v1.png` — de kaart-basis (beats 0a/2a/3a/4)
- `keyframes/shot2_daan_phone_v1.png` + `clips/shot2_daan_phone_anim_v1.mp4` — beat 0b (telefoon, palm-groot, geen UI)
- `keyframes/shot2b_daan_arrival_v1.png` + `clips/shot2b_daan_arrival_anim_v1.mp4` — beat 1a (aankomst, gesloten)
- `keyframes/shot3_daan_henk_koffie_v1.png` + `clips/shot3_daan_henk_koffie_v2.mp4` — beat 1b (**v2 gebruiken**)
- `keyframes/shot3b_daan_leaves_v1.png` + `clips/shot3b_daan_leaves_anim_v1.mp4` — beat 1c (afscheid, opgeveerd)
- `keyframes/shot4_maya_boodschappen_v1.png` + `clips/shot4_maya_boodschappen_anim_v1.mp4` — beat 2b (Maya, boodschappen)
- `keyframes/shot5_zwerfafval_park_v1.png` + `clips/shot5_zwerfafval_park_anim_v1.mp4` — beat 3b (Marcus & Jan ruimen zwerfafval op in het park; vervangt de eerdere tuin-versies)
- Reserve/b-roll (v3-cascade, niet in de v4-cut): `clips/cascade_jan_koffie_anim_v1.mp4`, `clips/cascade_amir_taalmaatje_anim_v2.mp4` (**Amir = v2**, oog-fix), `clips/cascade_marcus_voorlezen_anim_v1.mp4` + bron-stills in `cascade/`

9 clips in de v4-cut (opening + 3× scène-materiaal) + de AE-kaartlagen.

## Rough cut / animatic (ffmpeg) — `gemeente_roughcut_v4.mp4`
Er is een gemonteerde **rough cut** (41.5s, stil, VO-bed): `build_roughcut.sh` zet alles in elkaar.
Volgt de v4-structuur: opening met **zoom-uit op de grijze kaart** + 3 koele pins (de telefoon-reveal
zelf is AE-werk), per scène een **kaart-beat** (vorige marker slaat om naar warm, volgende pulseert),
finale met ripple-dots + inkleuring (grijs→warm) tot de wijk gloeit, logo-eindkaart.
Dots zijn ffmpeg-glows op vaste coördinaten (zie hierboven). Dit is de basis/animatic voor de
AE-versie en om de VO op te leggen. *(v2/v3 staan nog in de map als historie.)*

## Nog door jou/editor te doen
- **Voice-over inspreken** (jouw stem, `script.md` §2) en onder de animatic leggen.
- **AE (optioneel, polish):** de kaart-op-telefoon-composite in de opening, dots verfijnen
  (pins/pulse i.p.v. glows), Ken Burns/uittrek-beweging, fijnere timing op de VO.
- Optioneel: 9:16-crop voor mobiel.
