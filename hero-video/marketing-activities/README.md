# KarmaKaart marketing-activiteiten-set

Herbruikbare merkbeelden met de vaste cast (Maya, Marcus, Lisa+hond, Jan) in de
vlakke redactionele illustratiestijl. Gegenereerd 2026-06-09 met Nano Banana Pro
(`nano_banana_2`) via het gevalideerde recept (zie `../prompts/_characters.md` +
geheugen `feedback_higgsfield_karmakaart_recipe`). Prompts in `prompts.md`.

## Activiteiten (liggend 16:9, web/hero, 2k)
| Bestand | Activiteit | Cast | Platform-feature |
|---|---|---|---|
| `scene1_vergroening_v1.png` | Buurtvergroening | Marcus + Jan | MVP-activiteit |
| `scene2_moestuin_v1.png` | Buurtmoestuin | Lisa + hond | MVP-activiteit |
| `scene3_ouderenbezoek_v1.png` | Ouderenbezoek (koffie) | Maya + Jan | Phase 2 — "Henk"-storytelling |
| `scene4_voorlezen_v1.png` | Voorlezen | Marcus + kinderen | Phase 2 |
| `scene5_taalmaatjes_v1.png` | Taalmaatjes (verouderd) | ~~Maya + naamloos figuur~~ | off-canon placeholder, vervangen door scene10 (Amir) |
| `scene10_taalmaatjes_amir_v1.png` | Taalmaatjes (canon) | Amir + nieuwkomer | Phase 2 — Amir helpt met een brief (2026-06-14) |
| `scene6_boodschappen_v1.png` | Boodschappen voor de buur | Marcus + Jan | micro-taak |
| `scene7_honduitlaten_lisa_v1.png` | Hond uitlaten bij asiel | Lisa + hond | micro-taak (canon: dieren = Lisa) |
| `scene7_honduitlaten_v1.png` | Hond uitlaten (verouderd) | ~~Maya~~ + hond | vervangen door Lisa-versie (canon-fix 2026-06-14) |
| `scene8_samenkoken_v1.png` | Samen koken | Lisa + Maya | micro-taak |
| `scene9_klusje_v1.png` | Klusje / reparatie | Marcus + Jan | micro-taak |
| `scene11_lisa_asiel_portret_v1.png` | Asiel — band-moment | Lisa + hond | emotioneel anker "dieren" (2026-06-14) |

Beste "hero met koptekst": scene4 (voorlezen) en scene1 (vergroening) — meeste rustige
negatieve ruimte. scene2 (moestuin) is voller, beter als sfeerbeeld. `scene11` (asiel band-moment)
is het sterkste emotionele "dieren"-beeld voor Lisa's vignette.
(Scene 10 blijft gereserveerd voor de pending Amir-taalmaatje-scene.)

## Cast-cards (vierkant 1:1, avatar/persona, 2k)
| Bestand | Karakter | Achtergrondtint |
|---|---|---|
| `card_maya_v1.png` | Maya | warm tan |
| `card_marcus_v1.png` | Marcus | mauve-grijs |
| `card_lisa_v3.png` | Lisa (canoniek) | terracotta |
| `card_jan_v1.png` | Jan (met schort) | beige |
| `card_amir_v1.png` | Amir (baard, roodbruine trui) | salie-groen |

Herbruik: avatars, persona-/testimonialkaarten, app-onboarding, socialprofielen.
Amir toegevoegd 2026-06-11 als canoniek 5e castlid (nieuwkomers/taalmaatje).

**Lisa-card 2026-06-14:** `card_lisa_v3.png` is de canonieke versie. v1 had kraaloogjes +
roze blos-wangen, v2 verbeterde de ogen maar bleef te zacht/geschilderd. v3 matcht de
vlakke matte editorial-stijl van Maya/Marcus (grote open amandelogen, geen blos) — gemaakt
met `fp-1.png` + `card_marcus_v1.png` als gezichtsstijl-ref. v1/v2 niet meer gebruiken.

## Extra Lisa-portret (verticaal 3:4, social/marketing, 2k)
| Bestand | Beschrijving |
|---|---|
| `lisa_solo_outdoor_v1.png` | Lisa solo, 3/4-lengte, handen in zakken, herfstpark, warme blik — verticaal voor social/about-pagina, naast de 1:1-card. Gemaakt 2026-06-14 met v3 als identiteits-ref. |

## Animatie
| Bestand | Bron | Model |
|---|---|---|
| `scene2_moestuin_anim_v1.mp4` | scene2 still | Kling 3.0, 5s, std, geluid uit |
| `scene11_lisa_asiel_anim_v1.mp4` | scene11 still | Kling 3.0, 5s — hond leunt in, Lisa glimlacht, blaadjes dwarrelen (2026-06-14) |

## Reproductie
Refs altijd in volgorde: `fp-1.png` (stijl) eerst, dan de character solo-keyframe(s)
uit `../keyframes/`. Character-beschrijvingen verbatim. Achtergrond positief opvullen
(geen lege lucht/muur → geen logo-hallucinaties). Zie `prompts.md`.
