# Gemeente-video — Daan-boog · Design/Spec

*Opgesteld 2026-06-30. Brainstorm-uitkomst (goedgekeurd); aanvulling op `design.md` §3/§8 en `SHOTLIST.md`. Feeds een productieplan (Higgsfield + ffmpeg/AE).*

## 1. Doel & context

De gemeente-video draagt de **wijk als held**, maar de strategische kern voor de koper is **Daan zelf**: een man die kíést om te helpen en daar zélf van opveert (de participatie/maatschappelijke-participatie-subtekst, in beeld bewust **label-loos** — zie `design.md` §8.1).

Op dit moment leeft die boog **alleen in de voice-over** ("Daan kwam wat gesloten binnen, loopt met iets meer veerkracht weg"). In beeld is er geen *vóór* en geen *ná*: er is alleen Daan-tikt-telefoon (shot2) en de koffie-beat (shot3). Deze spec voegt de twee ontbrekende beats toe die de boog **zichtbaar** maken — puur via lichaamstaal, zonder label en zonder app-UI.

**Scope:** twee nieuwe exterieur-keyframes + twee Kling-clips, inschuiven in de bestaande montage. Géén herrol van bestaande assets. Géén nieuwe personages.

## 2. Strategisch principe

- **Boog in lichaamstaal, niet in tekst.** Gesloten → open leest via houding, tred en blik. Geen bordje "bijstand", geen voice-over die het benoemt als dwang. Zo blijft Daans waardigheid heel (conform `design.md` §8.1).
- **Hergebruik de straat-wereld.** Beide beats spelen op dezelfde herfst-brownstone-straat als `shot2_daan_phone_v1` — visuele continuïteit, en het weglopen rijmt met de uittrek-naar-de-wijk (beat 5).
- **De wijk blijft de held.** De boog is een *onderlaag*; de slotregel landt nog steeds op de wijk, niet op het individu (`design.md` §8.3).

## 3. De twee beats

### Beat A — "Daan komt aan" (gesloten)
- **Slot:** tussen beat 2 (telefoon-tik → cut naar kaart) en beat 3 (koffie).
- **Beeld:** zelfde herfst-straat als shot2, nu bij **Henks stoep/voordeur**. Daan loopt naar de deur toe, **handen in z'n jaszakken, schouders licht opgetrokken, gereserveerde/neutrale blik** — niet verdrietig, wél wat gesloten; doet dit niet vanzelfsprekend.
- **Compositie:** medium-wide, Daan iets uit het midden, de deur/stoep als bestemming, rustige kopruimte (consistent met de andere keyframes). Achtergrond volledig gevuld (rijhuizen, herfstbomen, stoep — geen lege lucht).
- **Beweging (Kling):** Daan bereikt de deur, kleine aarzeling, heft een hand richting de bel/klopper. Camera volledig stil. ~5s (≈2–3s bruikbaar in de montage).

### Beat B — "Daan loopt weg" (veerkracht)
- **Slot:** ná beat 3 (koffie), leidt de cascade + uittrek-naar-de-wijk in.
- **Beeld:** zelfde straat, Daan loopt **weg van Henks huis** de straat in. **3/4 van achteren, hoofd omhoog, lichtere/verende tred, randje van een kleine glimlach, handen nu uit z'n zakken (open).** Duidelijk opgeveerd t.o.v. de aankomst.
- **Compositie:** hij loopt de diepte van de straat in; rijhuizen/bomen kaderen hem. De compositie nodigt de camera uit om "omhoog/weg" te trekken naar de gloeiende wijk (beat 5).
- **Beweging (Kling):** een paar stappen weglopen, lichte tred, subtiele blik omhoog; zeer lichte upward drift die overgeeft aan de AE-pullback. ~5s.
- **Bewuste keuze:** van achteren (geen full close-up) houdt de Kling-identiteit veilig én geeft de mooiste pullback-aanzet. De glimlach hoeft maar als randje te lezen.

## 4. Inpassing in de tijdlijn

Rough cut nu ~31s → met twee korte beats ~38–40s (dichter bij de ~42s target uit `design.md` §1).

| Beat | Was | Wordt | Bron-asset |
|---|---|---|---|
| 1 Wijk grijs → dots verschijnen | 0–7s | 0–7s | `keyframes/map_wijk_base_v1.png` |
| 2 Daan tikt → cut naar kaart | 7–11s | 7–11s | `clips/shot2_daan_phone_anim_v1.mp4` |
| **A Daan komt aan (gesloten)** | — | **~11–14s** | **`clips/shot2b_daan_arrival_anim_v1.mp4`** (nieuw) |
| 3 Koffie | 11–24s | ~14–26s | `clips/shot3_daan_henk_koffie_v2.mp4` |
| **B Daan loopt weg (lichter) → eigen dot** | — | **~26–29s** | **`clips/shot3b_daan_leaves_anim_v1.mp4`** (nieuw) |
| 4 Cascade (Jan/Amir/Marcus) | 24–32s | ~29–35s | `clips/cascade_*_anim_*.mp4` |
| 5 Uittrekken, wijk gloeit | 32–39s | ~35–40s | `keyframes/map_wijk_base_v1.png` |
| 6 Eindkaart | 39–42s | ~40–43s | logo |

## 5. AE-noot (geen Higgsfield)

Tijdens beat B, terwijl Daan wegloopt, licht **zijn eigen dot** op de wijk-kaart warm op (grijs→goud) — visualiseert "Daan zelf → een stap vooruit". In beeld blijft dit **label-loos**: het is gewoon een dot die aanspringt zoals de andere. Komt als notitie in `SHOTLIST.md`, niet als generatie-opdracht.

## 6. Productie

**Recept** (per `feedback_higgsfield_karmakaart_recipe` + `design.md` §7): `fp-1.png` als stijl-ref eerst, dan `card_daan_v1.png` als identity-ref; **Nano Banana Pro** (`nano_banana_2`) voor keyframes; **Kling 3.0** (`kling3_0`) voor animatie.

**Harde constraints in elke prompt:**
- Daan consistent met z'n card (slate-blue jack, lichtbruin haar, lichte huid), vlakke matte editorial-stijl, **grote open amandelogen** (geen kraaloog, geen roze blos).
- **Géén telefoonscherm/app-UI** in beeld (decouple-mechaniek, `design.md` §5).
- Achtergrond **volledig gevuld** met flat color blocks (geen lege lucht → geen logo-hallucinatie).
- Houding/expressie expliciet uitschrijven (A = handen in zakken/schouders op/gesloten; B = open/hoofd omhoog/verende tred/randje glimlach).
- Avoid-lijst: Pixar/3D/photoreal/harde outlines/oversized phone/visible screen/empty sky/logo/tekst.

**Te genereren:**
| Bestand | Type | Refs |
|---|---|---|
| `keyframes/shot2b_daan_arrival_v1.png` | Nano Banana Pro, 16:9, 2k | `fp-1` + `card_daan_v1` |
| `keyframes/shot3b_daan_leaves_v1.png` | Nano Banana Pro, 16:9, 2k | `fp-1` + `card_daan_v1` |
| `clips/shot2b_daan_arrival_anim_v1.mp4` | Kling 3.0, ~5s, start-image = arrival-keyframe | — |
| `clips/shot3b_daan_leaves_anim_v1.mp4` | Kling 3.0, ~5s, start-image = leaves-keyframe | — |

**Verificatie = visuele check** (geen code-tests): elk beeld inspecteren tegen de constraints hierboven + **gebruikers-checkpoint** vóór de volgende generatie (credits + identiteits-consistentie). Bij gateway-5xx eerst `higgsfield generate list` checken vóór re-roll (recept #10/#14).

**Kosten-schatting:** 2 keyframes (~4 cr) + 2 Kling-clips (~30 cr) ≈ **~34 cr** van 605 beschikbaar. Re-rolls ruim gedekt.

**Na akkoord op de clips:**
- `SHOTLIST.md` bijwerken: beats A & B inschuiven + de "eigen dot"-AE-noot.
- Optioneel: rough cut → `gemeente_roughcut_v3.mp4` herbouwen via `build_roughcut.sh` (beats A & B erin), zodat het concept kijkbaar blijft.

## 7. Buiten scope (bewust)

- Voice-over inspreken (jouw stem) — los traject; tekst staat in `design.md` §6.
- De échte AE-kaartanimatie/polish (dot-pulses, Ken Burns) — blijft AE-handoff.
- 9:16-crop voor mobiel — optioneel later.
- Geen nieuwe personages, geen Fatima (canon-only voor decks/website).

## 8. Open items

- Exacte bel-/klopper-geste in beat A: laten we Kling bepalen; bij rare handen → re-animeer met "reaches toward the door, no bell interaction".
- Of beat B een héél lichte camera-tilt-omhoog krijgt (pullback-aanzet) of volledig stil: te beslissen bij de Kling-stap op basis van wat schoon animeert.
