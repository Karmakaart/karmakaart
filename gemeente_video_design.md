# KarmaKaart — Gemeente-video (B2G) · Design/Spec

*Opgesteld 2026-06-15. Brainstorm-uitkomst; feeds een productieplan (Higgsfield + After Effects).*

## 1. Doel & publiek

De **pitch-video voor de gemeente**. Publiek: de **beleidsambtenaar / programmamanager sociaal domein** — de persoon die het werk doet en het advies omhoog draagt — en bruikbaar richting een wethouder.

- **Lengte:** 30–45s (richt op ~42s). Een drukke ambtenaar haakt eerder af dan een burger.
- **Kerntaak:** *het onzichtbare zichtbaar maken.* De **wijk is de held, niet het individu.** Dit is het bewuste verschil met het burger-filmpje, waar *jij* (de kijker) de held bent.
- **Gemeente-neutraal** gehouden ("uw wijk", "uw gemeente") zodat het voor elke gemeente herbruikbaar is. Groningse cijfers/programma's kunnen later in het deck eromheen.

## 2. Strategisch principe

- **Map = hero.** De visuele mechaniek is een **grauwe wijk die oplicht**: stille, onzichtbare behoeften verschijnen als grijze dots; door inzet lichten ze warm op; uiteindelijk gloeit de hele wijk.
- **Wat de film draagt:** eenzaamheid, sociale basis, en *matchen* (de WMO-plicht "bemiddelen" = vraag en aanbod bij elkaar brengen — dat is letterlijk de kaart).
- **Wat het deck eromheen draagt (níét de film):** geld/de Kanteling (vrijwillige inzet = minder beroep op dure zorg), de wetten (Participatiewet in Balans → *maatschappelijke participatie*; WMO-ondersteuningsplicht), en de dual-group (vrijwilligers **én** de maatschappelijke-participatie-groep uit de bijstand). Deze zijn te koud/abstract voor de voice-over.
- **Positionering** (uit de research-synthese): verkoop het **niet** als "weer een vrijwilligersplatform" (dan verlies je van NLvoorelkaar) en **niet** als "WVP-compliance" (feitelijk onjuist). Wél als de **drempelloze laag** die de incidentele, ongeorganiseerde inzet aanboort die de bestaande vacaturebanken laten liggen — inzetbaar voor zowel vrijwilligers als de maatschappelijke-participatie-groep.

## 3. Cast (vastgelegd)

**Strategie: hybride.** Hergebruik de bestaande gevers die op een gemeente-dossier mappen; voeg alleen de gemeente-specifieke gaten toe. Elk *nieuw* personage kost in Higgsfield één canon-beschrijving + identity-card; bestaande hebben die al.

**In de film:**
- **Daan** *(nieuw)* — gever, begin 30. Dossier: participatie/maatschappelijke participatie (bijstand). **In de film krijgt hij géén label** — gewoon een man die kíést om te helpen en er zelf van opveert. De beleidskoppeling doe je in het deck.
- **Henk, 80** *(nieuw als illustratie; al canon als figuur)* — ontvanger, oud-scheepsbouwer, eenzaam. Hergebruik van het bestaande canon-figuur lost meteen de **naam-botsing** op: Henk = de eenzame ontvanger, er komt géén tweede "Henk-68 gever".
- **Cascade (hergebruik bestaande assets):** Jan (koffie/eenzaamheid), Amir (taalmaatje/inburgering), Marcus (voorlezen/jeugd) — als de andere dots die oplichten.

**In de canon, maar NIET in deze film:**
- **Fatima, 52** — mantelzorger (WMO respijt-dossier). Voor decks/website; te veel personages voor 42 seconden.

**Nieuwe canon-beschrijvingen (verbatim voor Higgsfield, in de stijl van `hero-video/prompts/_characters.md`):**

> **Daan** — Dutch man, early 30s, short light-brown hair, fair skin, muted slate-blue zip jacket over a grey t-shirt, dark jeans, quiet reserved expression that gradually warms, painterly flat illustration

> **Henk** — elderly Dutch man, around 80, thinning grey hair, weathered lined face, large worn hands, beige cardigan over a checked shirt, calm reserved expression, painterly flat illustration

## 4. Shotlist — "De wijk die oplicht" (~42s)

| # | Tijd | Beeld | Wat licht op |
|---|---|---|---|
| 1 | 0–7s | Hoog boven een buurt, painterly maar **ontkleurd/grijzig**. Eén voor één verschijnen stille markers: een oudere man alleen bij het raam, een overwoekerde tuin, zwerfafval, een vermoeide vrouw. | Nog niets — alleen grijze problemen verschijnen |
| 2 | 7–11s | Inzoomen op één marker. **Daan** opent KarmaKaart op z'n telefoon (palm-groot, achterkant naar camera, géén scherm in beeld). Hij tikt één keer, stopt 'm weg. | De drempelloze mechaniek getóónd |
| 3 | 11–24s | Daan loopt naar **Henk** (80, oud-scheepsbouwer). Kop koffie. Henk vertelt over schepen, Daan luistert. Warmte stroomt het kader in — kleur keert terug rond hen. Subtiel: Daan kwam wat gesloten binnen, loopt met iets meer veerkracht weg. | **Dot 1 licht warm op** (eenzaamheid → contact; Daan zelf → een stap vooruit) |
| 4 | 24–32s | Uit het raam, terug omhoog. Het ene lichtpunt **cascadeert**: Jan op de koffie, Amir met een nieuwkomer in een café, Marcus die voorleest. Door de hele wijk springen dots aan. | De optelsom — meerdere dossiers tegelijk |
| 5 | 32–39s | Helemaal uittrekken. De eerst grauwe wijk **gloeit nu**, verbonden. Wat onzichtbaar was, is nu zichtbaar. | De hele wijk |
| 6 | 39–42s | Eindkaart: KarmaKaart-logo + regel. | — |

## 5. Telefoon/app-mechaniek — beslist: **decouple (optie 1)**

Higgsfield tekent **nooit** app-UI (dat veroorzaakt oversized phones + gehallucineerde interface — bekende valkuil uit `feedback_higgsfield_karmakaart_recipe`).

- **Higgsfield:** Daan met een normale, palm-grote telefoon, achterkant naar de camera, géén scherm. Eén tik, wegstoppen.
- **Wat hij "ziet"** = we cutten naar de **full-frame KarmaKaart-kaart** (de wijk die oplicht — het hero-beeld). De snelle cut (tik → hij is er al) versterkt "geen gedoe".
- **Onmiskenbaar KarmaKaart** zonder UI-op-glas, via drie dragers samen: (a) markers/pins in de merkstijl op de full-frame kaart, (b) de voice-over die 'm op dat moment noemt, (c) de eindkaart met logo.
- **Optioneel later (beide in AE, niet Higgsfield):** de kaart laten "bloeien" uit de telefoon (transitie), of een echt app-scherm composit op een blanco-scherm-plate. Alleen als een klant het product letterlijk wil zien; risico = vertraagt de "geen gedoe"-boodschap.

## 6. Voice-over + eindkaart

Voice-over (jouw stem, nuchter Nederlands, ~40s):

> In elke wijk gebeurt het meeste wat ertoe doet… buiten beeld.
> Een man die al weken niemand sprak. Een tuin die niemand meer bijhoudt. Iemand die wíl helpen, maar niet weet waar.
> *(Daan opent de kaart)* KarmaKaart maakt het zichtbaar. Eén kaart — je ziet wat er vandaag, hier, nodig is. Je kiest, je doet mee. Geen formulier, geen wachtlijst.
> *(Daan en Henk)* Daan had een middag. Henk had al weken niemand. Eén kop koffie — en ze staan er allebei anders bij.
> *(de cascade)* En als genoeg mensen iets kleins doen, telt het op. De buurman, de nieuwkomer, de gepensioneerde — allemaal in beweging.
> *(uittrekken, de wijk gloeit)* Wat onzichtbaar was, wordt zichtbaar. Niet op papier. In de wijk zelf.

**Eindkaart:** *KarmaKaart. Eén kaart. De hele wijk in beweging.*
Deck-variant (scherper-zakelijk): *"De drempelloze laag onder uw sociaal domein."*

## 7. Productie-pad

- **Stijl:** KarmaKaart painterly flat illustration (`fp-1` als anker) — **niet** de OER/Fraunces-look van SlowCarb.
- **Higgsfield-recept** (per `feedback_higgsfield_karmakaart_recipe`): `fp-1.png` stijl-ref eerst, dan de character identity-ref; Nano Banana Pro (`nano_banana_2`) voor keyframes; Kling 3.0 voor animatie; verbatim canon-beschrijvingen; achtergrond positief opvullen (geen lege lucht → geen logo-hallucinatie).
- **De "wijk die oplicht"-kaart is grotendeels een After-Effects motion-graphics laag** (top-down painterly plattegrond, dots grijs→warm, de cascade), NIET een Higgsfield-clip. Higgsfield levert de painterly character-vignettes; AE bouwt de kaart, de montage, de tik→kaart-cut en (optioneel) de UI-comp.
- **Nieuw te genereren in Higgsfield:**
  - Daan identity-card + "Daan tikt op telefoon"-keyframe
  - Henk-80 identity + "Daan & Henk koffie"-scene-keyframe
  - evt. clips animeren met Kling (de koffie-beat)
- **Hergebruik voor de cascade** (bestaand in `hero-video/marketing-activities/`): Jan-koffie/ouderenbezoek, Amir-taalmaatjes (`scene10`), Marcus-voorlezen (`scene4`).
- **Finale montage in After Effects** (zoals de hero-video).

## 8. Bewuste keuzes

1. **Daan krijgt nergens een label.** Geen "bijstand", geen "aan het werk gezet". Hij kíést en veert zelf op. De beleidskoppeling ("dit is je participatie-caseload") leeft in het deck, niet in beeld — zo blijft z'n waardigheid heel en kantelt het filmpje niet naar dwang.
2. **De film draagt eenzaamheid + sociale basis + matchen;** geld (de Kanteling) en de wet zitten in het deck, niet in de voice-over.
3. **De slotregel landt op de wíjk, niet op het individu** — dat is wat de gemeente koopt.

## 9. Open items / volgende stappen

- Daan + Henk-80 canon-beschrijvingen toevoegen aan `hero-video/prompts/_characters.md`.
- Genereren: Daan-card, Henk-80-card, "Daan tikt"-keyframe, "Daan & Henk koffie"-keyframe (+ evt. Kling-clip).
- **AE: de "wijk die oplicht"-kaartanimatie** — de grootste nieuwe productie-brok; vereist een eigen aanpak (painterly top-down map + dot-light-systeem).
- Voice-over inspreken (jouw stem); evt. via de jesper-voice-skill polijsten.
- Optioneel: Groningse cijfers/programma's in het deck eromheen voor de eerste doelgemeente.
