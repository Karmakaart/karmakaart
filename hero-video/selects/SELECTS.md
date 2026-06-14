# KarmaKaart hero — geselecteerde clips voor After Effects

De 7 geslaagde clips uit de v9/v10-redesign, in storyvolgorde. Dit zijn de **volledige
16:9-bronclips** (1284×716, 24fps, geluid) — niet getrimd, zodat je in AE zelf de in/out
en reframe bepaalt. De `recommended in–out` is de window die in `karmakaart_hero_desktop_v10.mp4`
gebruikt is (waar de beat het beste landt).

| # | Bestand | Rol | Volle duur | Recommended in–out | Notitie |
|---|---------|-----|-----------|--------------------|---------|
| 01 | `01_maya_trigger.mp4` | Maya — trigger: ziet zwerfafval, gefrustreerd → vastberaden → tikt telefoon → resolve | 10.0s | 2.0 – 7.0 | Story-anchor; enige scène waar de telefoon zichtbaar gebruikt wordt |
| 02 | `02_marcus.mp4` | Marcus — kijkt op telefoon → glimlach → staat op → loopt weg | 10.0s | 1.5 – 6.5 | Brisk-but-calm tempo |
| 03 | `03_lisa.mp4` | Lisa — staat stil, kijkt, expressie verandert, draait en loopt weg | 10.0s | 1.0 – 5.5 | Oogstijl gematcht aan Marcus |
| 04 | `04_jan.mp4` | Jan — duwt zich op vanuit knielende houding | 5.0s | 0.5 – 4.0 | Trage, deliberate beweging; groene schort |
| 05 | `05_connection.mp4` | Marcus ↔ Maya — afval in zak → kijken elkaar aan → gedeelde glimlach | 10.0s | 1.0 – 5.5 | 2 personen — 9:16 center-crop getoetst: acceptabel, maar Marcus schuift richting de rand; in AE evt. lichte pan voor de "kijken elkaar aan"-beat |
| 06 | `06_aerial_four.mp4` | Aerial — de vier + hond bij de gevulde zak in het schone park | 5.0s | 0.3 – 3.0 | 9:16 center-crop getoetst: **werkt goed** — de vier + hond staan geclusterd rond de zak in het midden, dus alle personages blijven in beeld |
| 07 | `07_finale_logo.mp4` | Finale — horizon → logo-reveal | 5.0s | 0.0 – 4.0 | Kling end_image-interpolatie |

## Referentie-cuts (in de map erboven, `hero-video/`)
- **Desktop**: `karmakaart_hero_desktop_v10.mp4` — 1280×720, 26.2s — strakke werk-cut, 0.5s crossfades.
- **Mobiel**: `karmakaart_hero_mobile_v3.mp4` — 720×1280, 26.2s — zelfde timing, 9:16 center-fill-crop. Getoetst op frames: solo-shots + aerial reframen schoon; connection (05) is acceptabel met evt. lichte pan.
- Oudere desktop-master `..._v9.mp4` (42s, royale cut) blijft staan als je meer speling per beat wilt terugpakken.

## 9:16 reframe-advies voor AE
De bronclips zijn 16:9. Getoetst op frames uit `mobile_v3`: clips 01–04, 06 en 07 reframen
schoon met een statische center-crop (onderwerp/cluster staat centraal). Alleen 05 (connection)
kan een lichte keyframe-pan gebruiken voor de "kijken elkaar aan"-beat. Werk in AE bij voorkeur
vanaf deze 16:9-bronnen (volledige breedte beschikbaar) i.p.v. vanaf de gecropte mobile_v3.
