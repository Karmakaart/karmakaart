# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**KarmaKaart** (ook wel **KarmaKaart**) is een Nederlands platform voor micro-vrijwilligerswerk.

**Dit is een documentatie/copywriting/research repository** - geen code. Taken omvatten:
- Documenten checken en bewerken
- Webcopy schrijven en verfijnen
- Market research en analyse
- Design documents en specificaties opstellen

## Unique Selling Proposition

**Micro-vrijwilligerswerk zonder gedoe.** Geen ouderwetse websites met lange aanmeldformulieren, geen weken wachten op VOG, geen verplichte intakes. Gewoon:

1. Aanmelden
2. Kijken wat er in de buurt is
3. Kiezen en doen
4. Optioneel: vriend uitnodigen, foto delen op socials
5. Optioneel: dashboard bekijken met je bijdragen

De Henk-verhalen (80 jaar, scheepsbouwer, koffiedrinken) zijn **storytelling om de waarde te tonen**—niet de primaire messaging.

## Business Model

**Gemeente is de koper.** Wij verkopen aan gemeentes, zij regelen zelf de onboarding van ketenpartners en inwoners. Wij leveren software, geen community management.

- Gemeentes kennen hun ketenpartners al
- Gemeentes hebben bestaande communicatiekanalen naar inwoners
- Gemeentes moeten voldoen aan Wet Versterking Participatie

## Doelgroepen

- **Gemeenten/Provincies** (koper): Platform kopen, zelf uitrollen, ROI-dashboards en VNG-rapportages
- **Ketenpartners** (via gemeente): Markers plaatsen, vrijwilligers coördineren
- **Vrijwilligers** (eindgebruiker): Micro-taken vinden en doen, optioneel bijhouden en delen

## Repository Structuur

- `README.MD` - Productspecificatie: micro-vrijwilligerswerk focus, MVP-first user stories, phased roadmap
- `karmakaartwebsite.md` - Consumer landing page design (Finture template)
- `gemeente_website_design.md` - B2G website design voor overheden
- `organisaties_website_design.md` - B2B website design voor organisaties
- `gemeente_webcopy_final.md` / `organisaties_webcopy_final.md` - Definitieve webcopy (gecorrigeerd maart 2026)
- `data-architecture.md` - Entity model, data flows, AVG compliance
- `PLAN.md` - Strategisch actieplan (maart 2026)
- `TASKS.md` - Actieve takenlijst
- `MEMORY.md` - Sessiegeheugen voor cross-sessie continuïteit
- `research/Kansen.md` - Marktonderzoek: vrijwilligersactiviteiten, subsidies, juridische vereisten
- `research/Marketresearch.md` - Marktanalyse
- `research/verified-research-march2026.md` - Geverifieerde research met bronnen (maart 2026)

## Kernconcepten

- **Micro-vrijwilligerswerk** - Flexibele taken (1 uur tot halve dag) zonder wekelijkse verplichtingen
- **5-stappen flow** - Aanmelden → Kaart → Kiezen → Doen → Delen (optioneel)
- **Duur-filter** - Tot 1 uur, 1-2 uur, halve dag (2-4 uur)
- **Markers** - Activiteiten op de kaart (Events met datum/tijd, of Locaties voor doorlopende activiteiten)
- **Check-in** - QR-code scan of GPS-validatie bij vrijwilligerswerk
- **VOG via ketenpartner** - App signaleert, ketenpartner handelt af via gratisvog.nl
- **Dashboard** - Optioneel: bijhouden wat je hebt gedaan, uren, badges

## Designfilosofie

- **Geen gedoe** - Aanmelden en direct aan de slag, geen weken wachten
- **<5 minuten tot eerste activiteit** - Kernbelofte van het platform
- **Optioneel is echt optioneel** - Dashboard, delen, punten—alleen als je wilt
- **Impact > Punten** - Concrete resultaten tonen (uren, # activiteiten), geen abstracte punten
- **Samenwerking > Competitie** - Geen leaderboards of publieke rankings
- **Privacy-first** - Opt-in sociale features, pseudoniemen toegestaan, AVG-compliant
- **MVP-first** - 3 activiteiten → 7 → 10+, features in fases uitrollen

## Phased Approach

### MVP (Maand 1-3)
- 3 activiteiten: zwerfafval, buurtvergroening, buurtmoestuin
- Geen VOG-activiteiten
- Simpele gamification: uren-teller + 3 badges

### Phase 2 (Maand 4-6)
- VOG-activiteiten: ouderenbezoek, voorlezen, taalmaatjes
- Level systeem (Starter/Helper/Held)
- Certificaten

### Phase 3 (Maand 7-12)
- Teams, challenges, sociale features
- Schaalvergroting naar meerdere gemeenten

## Schrijfrichtlijnen

Bij het bewerken van content:
- **Conversationeel Nederlands** - geen corporate speak
- **Specifiek boven generiek** - "Henk, 80, scheepsbouwer" niet "lorem ipsum" (maar als storytelling, niet als hoofdboodschap)
- **Geen gamification-hype** - punten zijn secundair aan betekenis
- **Data-backed claims** - altijd met bronnen onderbouwen
- **Propositie-hiërarchie**: simpelheid/geen gedoe > concrete impact > optionele features (dashboard, delen)

## Wat te vermijden in copy

- Leaderboards of competitieve elementen
- "Verzamel punten" als hoofdboodschap
- Badges als prominente feature
- Tech jargon of complex onboarding-taal
- Corporate buzzwords ("synergy", "leverage", "disrupt")
- Overdreven claims zonder bewijs

## Belangrijke Referenties

- **Wet Versterking Participatie** - Nederlandse wet per 1 jan 2025, verplicht participatieverordening (deadline 1 jan 2027), GEEN verplichting digitale tools *(Bron: Stb. 2024, 203)*
- **BZK Innovatiebudget** - Totaalbudget €3M, deadline maart 2026 *(Bron: digitaleoverheid.nl)*
- **NLvoorelkaar** - Landelijk vrijwilligersplatform (150k+ actieve vrijwilligers)
- **Aedes** - Brancheorganisatie woningcorporaties (400 corporaties)
- **VNG** - Vereniging Nederlandse Gemeenten (342 gemeenten)

## Doelgroep-specifieke toon

### Voor gemeenten (B2G) — PRIMAIRE KOPER
- Professioneel maar toegankelijk
- ROI-gedreven, data-onderbouwd
- Urgentie via wetgeving (Wet Versterking Participatie) en subsidie-deadlines (BZK)
- Focus: "Jullie regelen de onboarding, wij leveren het platform"

### Voor vrijwilligers (B2C) — EINDGEBRUIKER
- Simpel, direct, geen drempels
- Focus op actie: "Kijk wat er is, kies, doe"
- Storytelling (Henk de scheepsbouwer) alleen om waarde te illustreren
- "Doe iets goeds in jouw buurt—zonder gedoe"

### Voor ketenpartners (via gemeente)
- Praktisch: hoe plaats je een marker, hoe zie je wie er komt
- Tijdsbesparing: geen email-chaos meer
- Wordt aangeboden als onderdeel van gemeente-pitch
