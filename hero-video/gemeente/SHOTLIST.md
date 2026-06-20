# Gemeente-video — AE-handoff (SHOTLIST)

Eindmontage in **After Effects**. ~42s, 1280×720 (desktop) + 9:16-crop (mobiel). Stijl: KarmaKaart painterly (`fp-1`), NIET SlowCarb. Voice-over: jouw stem (volledige tekst in `design.md` §6).

| # | Tijd | Bron-asset | AE-werk |
|---|---|---|---|
| 1 | 0–7s | `keyframes/map_wijk_base_v1.png` | Start **gedesatureerd/grijs**. 4–5 grijze marker-dots verschijnen één voor één op daken/plekken (de stille problemen). Dots = simpele AE-vorm in merkkleur. |
| 2 | 7–11s | `clips/shot2_daan_phone_anim_v1.mp4` (keyframe: `keyframes/shot2_daan_phone_v1.png`) | Inzoomen op één marker → Daan tikt op telefoon (geanimeerd: tik + knik). Eén tik → **cut/transitie naar de full-frame kaart** (`map_wijk_base_v1.png`, vol kleur). Geen UI op het scherm. |
| 3 | 11–24s | `clips/shot3_daan_henk_koffie_v2.mp4` | De koffie-beat (warm; Henk vertelt, Daan luistert). Tijdens/na deze shot: laat op de kaart-laag **dot 1 warm oplichten** (grijs→goud). |
| 4 | 24–32s | `clips/cascade_jan_koffie_anim_v1.mp4`, `clips/cascade_amir_taalmaatje_anim_v2.mp4`, `clips/cascade_marcus_voorlezen_anim_v1.mp4` | Snelle cascade: elke clip kort in beeld (geanimeerd); op de kaart springen meer dots warm aan. (Bron-stills in `cascade/`.) |
| 5 | 32–39s | `keyframes/map_wijk_base_v1.png` (vol kleur, alle dots warm) | Uittrekken: de hele wijk **gloeit**, verbonden. Grijs→warm volledig omgeslagen. |
| 6 | 39–42s | KarmaKaart-logo | Eindkaart + regel: *"KarmaKaart. Eén kaart. De hele wijk in beweging."* |

## Voice-over (jouw stem, ~40s)
Volledige tekst: `design.md` §6. Spreek in en leg onder de montage; eventueel polijsten via de jesper-voice-skill.

## Markers / merk-ID (geen app-UI)
KarmaKaart-herkenning via drie dragers samen: (a) dot/marker-stijl in merkkleur op de kaart, (b) de VO noemt KarmaKaart bij beat 2, (c) de logo-eindkaart.

## Assets-overzicht (alles in `hero-video/gemeente/`)
- `keyframes/card_daan_v1.png`, `keyframes/card_henk_v1.png` — identity refs (cast; canon in `prompts/_characters.md`)
- `keyframes/shot2_daan_phone_v1.png` — beat 2 (telefoon, palm-groot, geen UI)
- `keyframes/shot3_daan_henk_koffie_v1.png` — beat 3 keyframe
- `clips/shot2_daan_phone_anim_v1.mp4` — beat 2 animatie (tik + knik)
- `clips/shot3_daan_henk_koffie_v2.mp4` — beat 3 animatie (**gebruik v2** — warme verteller, geen mondvervorming)
- `clips/cascade_jan_koffie_anim_v1.mp4`, `clips/cascade_amir_taalmaatje_anim_v2.mp4`, `clips/cascade_marcus_voorlezen_anim_v1.mp4` — beat 4 animaties (**Amir = v2**, oog-fix)
- `cascade/` — de bron-stills voor beat 4
- `keyframes/map_wijk_base_v1.png` — beats 1/2/5 (de kaart-basis)

5 bewegende character-clips totaal (opening + koffie + 3 cascade) + de AE-kaart.

## Nog door jou/editor te doen
- **AE: het dot-lighting-systeem + de grijs→warm-transitie op de kaart** — dit is het echte AE-werk (de grootste brok).
- Voice-over inspreken (jouw stem).
- Optioneel: een langere koffie-clip (10s) + een Daan-aankomst/afscheid-beat; 9:16-crop voor mobiel.
