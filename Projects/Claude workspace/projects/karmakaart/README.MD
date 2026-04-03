# KarmaKaart - Micro-vrijwilligerswerk Platform

## Executive Summary

KarmaKaart is een gemeentelijk platform voor **micro-vrijwilligerswerk**: flexibele taken van 1 uur tot een halve dag, zonder wekelijkse verplichtingen of maandenlange commitments. Gemeente koopt, regelt ketenpartner-onboarding, wij leveren software.

**Tijd tot eerste activiteit: <5 minuten**

**Onderscheid van NLvoorelkaar**: Zij zijn voor MATCHEN (vrijwilliger → organisatie), wij zijn voor DOEN (kaart openen → kiezen → inchecken → klaar).

**Marktkans**: €10M+ potentie met 100+ geïdentificeerde prospects (gemeenten, woningcorporaties, zorgorganisaties).

**Urgentie**:
- Wet Versterking Participatie (van kracht 1-1-2025): gemeenten moeten vóór 1-1-2027 participatieverordening opstellen *(Bron: Stb. 2024, 203)*
- BZK Innovatiebudget 2026 (deadline maart 2026): totaalbudget €3M voor digitale overheidsinnovatie *(Bron: digitaleoverheid.nl)*

**Kernwaarden**:
- Geen gedoe > Alles wat drempels verlaagt
- Impact > Punten (concrete resultaten zichtbaar maken)
- Samenwerking > Competitie (teams, geen rankings)
- Privacy-first (opt-in sociale features)

---

## Wat maakt KarmaKaart anders?

### Micro-vrijwilligerswerk
- **Flexibele taken**: 1 uur tot halve dag
- **Geen wekelijkse verplichtingen** of maandenlange commitments
- **Eenmalig of wanneer het jou uitkomt**
- **Direct beginnen**, geen wachttijd

### 5-stappen flow
1. **Aanmelden** - Email of social login
2. **Kaart** - Zie wat er in je buurt te doen is
3. **Kiezen** - Filter op afstand, duur, categorie
4. **Doen** - Check in, help mee, check uit
5. **Delen** - Optioneel: foto naar community of socials

### Geen VOG nodig voor start
57% van activiteiten vereist geen VOG. Begin direct met:
- Zwerfafval opruimen
- Buurtvergroening
- Repair Café helpen
- Buurtmoestuin onderhoud

### Duur-filter
Activiteiten gefilterd op beschikbare tijd:
- **Tot 1 uur** - Zwerfafval korte ronde, kaartje schrijven
- **1-2 uur** - Buurtvergroening, ouderenbezoek
- **Halve dag (2-4 uur)** - Repair Café, grote opruimactie

---

## Hoe werkt het?

**Voor Gemeente (koper)**:
- Ketenpartners uitnodigen en goedkeuren
- Dashboard met participatiecijfers per wijk
- Rapportages voor VNG en gemeenteraad
- ROI-inzicht: uren × €15 = maatschappelijke waarde

**Voor Ketenpartners (via gemeente)**:
- Markers plaatsen op de kaart (events met datum/tijd of doorlopende locaties)
- QR-codes genereren voor check-in
- Statistieken: wie checkt in, hoeveel uur, waardering
- VOG-verificatie regelen voor eigen vrijwilligers

**Voor Vrijwilligers (eindgebruiker)**:
- Kaart met activiteiten in de buurt
- Filteren op afstand, duur, categorie
- Inchecken via QR of GPS
- Optioneel: uren bijhouden, foto delen, dashboard bekijken

---

## User Stories

### Gemeente (Koper)

#### MVP Core

**US-G1**: Als gemeente wil ik ketenpartners kunnen uitnodigen en goedkeuren zodat alleen betrouwbare organisaties markers kunnen plaatsen.

**US-G2**: Als gemeente wil ik een dashboard met totalen per wijk/maand (aantal check-ins, impact-uren, actieve gebruikers) zodat ik participatietrends kan monitoren.

**US-G3**: Als gemeente wil ik data kunnen exporteren voor verantwoording (gemeenteraad, VNG-format, prestatieafspraken) zodat ik kan rapporteren zonder handmatig werk.

#### Urgentie Context
- Wet Versterking Participatie (van kracht 1-1-2025, deadline participatieverordening: 1-1-2027): Platform levert meetbare participatiedata
- BZK Innovatiebudget 2026 (deadline maart 2026, totaal €3M): Platform ondersteunt consortium-aanvraag
- ROI-berekening: Dashboard toont uren × €15 = €X maatschappelijke waarde

#### Future
- Featured markers markeren voor prioritaire initiatieven (NL Doet, Opzoomer Mee)
- Impact-thresholds voor certificaten instellen

---

### Ketenpartner (via Gemeente)

#### MVP Core

**US-KP1**: Als ketenpartner wil ik markers aanmaken met titel, beschrijving, locatie, geschatte duur en categorie (groen/sociaal/educatief) zodat mijn activiteiten zichtbaar worden op de kaart.

**US-KP2**: Als ketenpartner wil ik markers kunnen categoriseren als **Event** (eenmalig met datum/tijd) of **Locatie** (doorlopend initiatief) zodat gebruikers weten wanneer ze kunnen bijdragen.

**US-KP3**: Als ketenpartner wil ik inzicht in check-in statistieken (aantal, uren, waardering) zodat ik mijn activiteiten kan verbeteren.

**US-KP4**: Als ketenpartner wil ik QR-codes kunnen genereren per marker zodat check-in op locatie soepel verloopt.

**US-KP5**: Als ketenpartner wil ik gebruikers die interesse tonen in VOG-activiteiten kunnen verifiëren, zodat ik via mijn eigen gratisvog.nl account hun VOG kan regelen en hen daarna toegang kan geven tot kwetsbare-groepen activiteiten.

#### Future
- Push-notificaties naar geïnteresseerde gebruikers
- Foto's van check-ins bekijken (met toestemming)
- Bedank-functie met badges

---

### Gebruiker (Vrijwilliger)

#### MVP Core

**US-U1**: Als gebruiker wil ik een kaart zien met markers gefilterd op afstand (500m, 1km, 5km, hele stad) zodat ik snel relevante activiteiten in mijn buurt kan vinden.

**US-U2**: Als gebruiker wil ik markers kunnen filteren op **duur** (tot 1 uur, 1-2 uur, halve dag) zodat ik activiteiten kan vinden die in mijn beschikbare tijd passen.

**US-U3**: Als gebruiker wil ik inchecken via QR-code (bij events) of GPS-validatie (bij doorlopende locaties) zodat mijn bijdrage automatisch wordt geregistreerd.

**US-U4**: Als gebruiker wil ik na check-uit direct mijn uren zien en optioneel een foto kunnen delen (privé, met ketenpartner, of op socials).

**US-U5**: Als gebruiker wil ik een simpel dashboard met:
- Totale uren bijgedragen
- Aantal activiteiten gedaan
- 3 badges: "Eerste Stap", "10 uur", "Maand Actief"
- VOG-status indien van toepassing

#### Future
- Teams met gezamenlijke doelen
- Streaks (opt-in)
- Uitgebreide privacy controls
- Push notificaties per categorie
- Certificaten per 10/50/100 uur
- Level systeem (Starter → Helper → Held)
- Maatschappelijke waarde in euros (voor CV)

---

## Marker-types

| Type | Beschrijving | Voorbeeld | Check-in methode |
|------|-------------|-----------|------------------|
| **Event** | Eenmalige activiteit met datum/tijd | Buurtschoonmaak zaterdag 10:00 | QR-code ter plekke |
| **Locatie** | Doorlopende plek die bezocht kan worden | Buurthuis, stadsboerderij, volkstuincomplex | GPS-validatie |

---

## VOG-proces: Ketenpartner Handelt

### Aanpak
De app faciliteert signalering, de ketenpartner handelt de VOG af via hun bestaande gratisvog.nl account.

### Flow

**Stap 1: Marker toont VOG-vereiste**
```
[Marker detail: "Ouderenbezoek Humanitas"]

⚠️ VOG vereist (kwetsbare groepen)

Goed nieuws:
✓ Gratis via de organisatie
✓ Doorlooptijd: 1-4 weken
✓ Na goedkeuring: toegang tot alle VOG-activiteiten

[Ik heb interesse] [Meer info over VOG]
```

**Stap 2: Gebruiker toont interesse**
- Gebruiker klikt "Ik heb interesse"
- Ketenpartner ontvangt melding in dashboard

**Stap 3: Ketenpartner regelt VOG**
```
[Notificatie voor Humanitas]
"Jan Jansen heeft interesse in Ouderenbezoek"

Actie: Regel VOG via gratisvog.nl
1. Log in op gratisvog.nl met eHerkenning
2. Maak aanvraag aan voor Jan Jansen
3. Jan ontvangt email met link

[Contact opnemen] [Markeer als afgehandeld]
```

**Stap 4: Na goedkeuring**
- Ketenpartner markeert gebruiker als "VOG geverifieerd" in systeem
- Gebruiker ziet ✓ badge op profiel
- Gebruiker heeft nu toegang tot alle VOG-activiteiten bij alle ketenpartners

### Voordelen
- App blijft simpel (geen wizard nodig)
- Ketenpartner behoudt controle (zij zijn verantwoordelijk)
- Past bij hoe het nu al werkt (gratisvog.nl via organisaties)
- Eenmalige verificatie geldt voor alle ketenpartners

---

## Gamification: Simpel en Betekenisvol

### Ontwerpprincipes

**WEL**:
- Impact visualiseren (uren, concrete resultaten)
- Persoonlijke groei (mijlpalen)
- Optioneel: sociale erkenning

**NIET**:
- Leaderboards (schaamte achterblijvers)
- Publieke rankings (privacy-bezwaren)
- Complexe puntensystemen
- Verplichte sociale features

---

### MVP Gamification

**Uren-teller**
- 1 uur = 1 punt (simpel, transparant)
- Geen complexe bonussen of multipliers
- Punten zijn secundair aan impact

**3 Badges**
- "Eerste Stap": Eerste check-in voltooid
- "10 uur": 10 uur bijgedragen
- "Maand Actief": Minimaal 1 activiteit per week in een maand

**Impact zichtbaar**
- Aantal activiteiten gedaan
- Verdeling per categorie (groen/sociaal/educatief)
- Totale uren

---

### Phase 2 Gamification

**Level systeem**
- 🌱 **Starter** (0-10 uur): Ontdekken en proberen
- 🤝 **Helper** (10-50 uur): Commitment tonen, VOG-mogelijkheid
- ⭐ **Held** (50+ uur): Ervaren vrijwilliger

**Categorie-badges**
- "Groene Duim": 10 groene activiteiten
- "Sociale Vlinder": 10 sociale activiteiten
- "Levenslang Leerling": 10 educatieve activiteiten

**Streaks (opt-in, standaard uit)**
- "Je hebt 3 weken op rij iets gedaan"
- Geen druk, geen "streak verloren" meldingen

---

### Phase 3 Gamification

**Teams**
- Gezamenlijk doel (bijv. "50 uur samen dit jaar")
- Gedeelde activiteitenkalender
- Privacy: alleen zichtbaar binnen team

**Maandelijkse challenges**
- Maart: "Lente Schoonmaak"
- December: "Kaartjesactie"

**Certificaten**
- Downloadbaar per 10/50/100 uur
- Ondertekend door gemeente + ketenpartner
- Voor CV, LinkedIn, sollicitaties

---

## Technische Architectuur (MVP)

### Gebruikers App (Mobile)

**Hoofdscherm: Kaart**
```
[Zoekbalk]

Filter:
📏 Afstand: ( ) 500m  ( ) 1km  ( ) 5km  ( ) Stad
⏱️ Duur: ( ) Tot 1 uur  ( ) 1-2 uur  ( ) Halve dag
🏷️ Categorie: [Groen] [Sociaal] [Educatief]

[Interactieve kaart met markers]
```

**Check-in Flow**
```
1. Scan QR-code of bevestig GPS-locatie
2. "Veel plezier! Check uit als je klaar bent."
3. Na check-uit: "Je hebt 2 uur bijgedragen!"
4. Optioneel: foto toevoegen, delen
```

**Dashboard**
```
[Profielfoto] Jan Jansen
⏱️ 12 uur bijgedragen
📊 8 activiteiten

Badges:
🏆 Eerste Stap
🏆 10 uur

[Download overzicht]
```

---

### Ketenpartner Webapp

**Dashboard**
```
Overzicht deze maand:
📊 23 check-ins (+8 vs vorige maand)
👥 17 unieke vrijwilligers
⭐ 4.8/5 waardering

Actieve Markers:
🌱 "Noordplantsoen opruimen"
   Event: Za 10:00 | 12 check-ins
   [QR-code] [Bewerken]

[+ Nieuwe marker]
```

**Marker Aanmaken**
```
Titel: _______
Type: ( ) Event  ( ) Locatie
Locatie: [Klik op kaart]
Categorie: [Groen/Sociaal/Educatief]
Duur: [Tot 1 uur / 1-2 uur / Halve dag]
VOG vereist: [ ] Ja

[Publiceren]
```

---

### Gemeente Webapp

**Dashboard**
```
Participatie Overzicht [Gemeente]

Deze maand:
👥 156 actieve vrijwilligers (+12%)
⏱️ 423 uur bijgedragen
💰 €6,345 maatschappelijke waarde
🏘️ 12/14 wijken actief

Heatmap per wijk:
[Kaart met kleurcodering]

Ketenpartners:
✓ 5 actief | ⏳ 1 in behandeling

[Exporteer rapport] [Ketenpartner uitnodigen]
```

---

## Privacy & Veiligheid (AVG-compliant)

### Check-in Verificatie
- **QR-code**: Bij events, gegenereerd per marker
- **GPS-validatie**: Bij doorlopende locaties, max 100m straal

### Data-minimalisatie

**Wat we WEL opslaan**:
- Activiteit-type, datum, duur, locatie (marker)
- Uren, badges
- Check-in tijdstempel
- Foto's (alleen met expliciete toestemming)

**Wat we NIET opslaan**:
- Medische of financiële gegevens
- Locatiegeschiedenis buiten check-ins
- VOG-details (alleen "geverifieerd ja/nee")

### Opt-in by Default
```
Standaard uit:
☐ Activiteiten zichtbaar voor anderen
☐ Foto's delen met ketenpartners
☐ Notifications over nieuwe markers

Standaard aan:
☑ Alleen eigen dashboard zichtbaar
```

### Nederlandse Privacy-cultuur
- Pseudoniemen toegestaan
- Volledig privé gebruik mogelijk
- Recht op vergetelheid: account verwijderen = alle data weg

---

## Business Model

### Voor Gemeenten (Koper)

**Licensing Model**:
- Kleine gemeenten (<50k): €5.000-10.000/jaar
- Middelgrote gemeenten (50-150k): €15.000-25.000/jaar
- Grote gemeenten (150k+): €30.000-75.000/jaar

**Inclusief**:
- Onbeperkt ketenpartners
- Volledige analytics + rapportages
- VNG-format exports
- Implementatie + training

**ROI voorbeeld (middelgrote gemeente)**:
```
Investering: €25.000/jaar
Opbrengst: 500 vrijwilligers × 20 uur = 10.000 uur
Waarde: 10.000 × €15 = €150.000
ROI: 6x
```

### Ketenpartners
Via gemeente: gratis toegang als onderdeel van gemeente-licentie.

---

## Implementatie Roadmap

### MVP (Maand 1-3) - Validatie

**Scope**:
- 1 gemeente (Groningen/Nijmegen/Rotterdam)
- 3 ketenpartners
- 3 activiteiten: zwerfafval, buurtvergroening, buurtmoestuin
- 50 gebruikers
- Geen VOG-activiteiten nog

**Gamification MVP**:
- Uren-teller
- 3 badges
- Impact dashboard (uren, # activiteiten)

**Succes-metrics**:
- 50 aanmeldingen
- 25 actieve gebruikers
- 200 uur vrijwilligerswerk
- NPS >40
- Tijd tot eerste activiteit <5 minuten

---

### Phase 2 (Maand 4-6) - VOG & Levels

**Scope**:
- 7 activiteiten (toevoegen: ouderenbezoek, voorlezen, repair café, taalmaatjes)
- 10 ketenpartners
- 200 gebruikers
- VOG-activiteiten live

**Gamification**:
- Level systeem (Starter/Helper/Held)
- Categorie-badges
- Certificaten downloadbaar

**Succes-metrics**:
- 200 gebruikers
- 100 actieve
- 1.000 uur
- 10 Helper-niveau bereikt
- VOG-proces <2 weken gemiddeld

---

### Phase 3 (Maand 7-12) - Schaalvergroting

**Scope**:
- 3 gemeenten
- 3 woningcorporaties
- 30+ ketenpartners
- 1.000 gebruikers
- Sociale features (teams, delen)

**Financiering**:
- BZK Innovatiebudget (€150-300k)
- Oranje Fonds (€50-100k)
- 3 gemeenten × €20k pilotbudget

**Succes-metrics**:
- 1.000 gebruikers
- 500 actieve
- 10.000 uur
- €10k+ subsidies binnengehaald

---

### Phase 4: Landelijk (Jaar 2)

**Scope**:
- 10+ gemeenten
- 10+ woningcorporaties
- 10.000+ gebruikers

**Revenue target**: €500k-1M

---

## Concurrentiepositie

### vs. NLvoorelkaar (200K+ deelnemers, 60+ gemeenten)
- **Zij**: Landelijke matching database (vrijwilliger → organisatie), white-label platforms voor gemeenten
- **Wij**: Direct doen via kaart, real-time check-ins, impact-tracking met gemeentelijk dashboard
- **Positionering**: Complementair — "Zij matchen, wij faciliteren en meten het DOEN"
- **Bron**: NLvoorelkaar/Tracxn 2024, zakelijk.nlvoorelkaar.nl

### vs. OpenStad (50+ gemeenten, 3 provincies, open source)
- **Zij**: Algemene participatie (stemmen, participatief begroten, plannen indienen). Implementatie €3.500-€6.500 + hosting.
- **Wij**: Specifiek vrijwilligerswerk met check-ins, micro-taken, en impact-tracking
- **Positionering**: Complementair — "Zij doen beleidsparticipatie, wij doen vrijwilligerswerk"
- **Bron**: openstad.org, draad.nl

### vs. Deedmob (12.500+ organisaties, 75K+ first-time volunteers)
- **Zij**: Corporate volunteering focus, primaire revenue van bedrijven
- **Wij**: Gemeentelijke focus, micro-vrijwilligerswerk, kaart-gebaseerd
- **Positionering**: Ander segment — zij zijn B2B corporate, wij zijn B2G gemeentelijk
- **Bron**: deedmob.com

### vs. WeHelpen / BUUV / Volunteerly
- **WeHelpen**: Informele zorg / mantelzorg netwerken
- **BUUV (Haarlem)**: Lokaal platform, 10K+ matches/jaar, niet landelijk
- **Volunteerly**: Modern, lage drempel, dichtstbijzijnde concurrent qua filosofie — schaal onbekend
- **Onze unieke combinatie**: Kaart-first + check-in validatie + micro-tijdfilters + gemeente-dashboard

### Unique Value Proposition

**Enige platform dat combineert**:
- Interactieve kaart met real-time markers
- Check-in functionaliteit (QR + GPS)
- Micro-vrijwilligerswerk focus (flexibele taken)
- Gemeentelijke integratie (rapportages, compliance Wet Versterking Participatie)
- Privacy-first (opt-in sociale features)
- <5 minuten tot eerste activiteit

---

## Marktpositie & Urgentie

### Timing (URGENT)

| Deadline | Kans |
|----------|------|
| 1-1-2025 | Wet Versterking Participatie van kracht: gemeenten moeten participatieverordening opstellen (deadline 1-1-2027) |
| Maart 2026 | BZK Innovatiebudget 2026: totaalbudget €3M voor digitale overheidsinnovatie |
| Sept-Nov 2026 | Budget cycles: gemeenten beslissen voor 2027 |

### Top Prospects

1. **Provincie Groningen** - €100M Toukomst programma
2. **Gemeente Nijmegen** - €36.9M participatiebudget
3. **Humanitas** - 10.000 vrijwilligers, gemeentelijke funding
4. **Woonstad Rotterdam** - Leefbaarheid-focus, digitale innovatie

### Strategische Partnerships

- **VNG** - 342 gemeenten via framework agreement
- **Aedes** - 400 woningcorporaties
- **Nationale Coalitie tegen Eenzaamheid** - 200+ organisaties

---

## Activiteiten Matrix (MVP → Full)

### MVP Activiteiten (Geen VOG)

| Activiteit | Duur | Check-in | Gamification fit |
|------------|------|----------|------------------|
| Zwerfafval opruimen | Tot 1 uur | GPS | Perfecte micro-taak |
| Buurtvergroening | 1-2 uur | GPS | Zichtbaar resultaat |
| Buurtmoestuin | 1-2 uur | GPS | Seizoensgebonden |

### Phase 2 Activiteiten (VOG via ketenpartner)

| Activiteit | Duur | VOG | Check-in |
|------------|------|-----|----------|
| Ouderenbezoek | 1-2 uur | Ja | GPS |
| Voorlezen | 1 uur | Ja | QR |
| Repair Café | Halve dag | Nee | QR |
| Taalmaatjes | 1-2 uur | Ja | GPS |

---

## Belangrijke Wijzigingen t.o.v. Vorige Versie

### ERUIT
- Impact-gedreven Gamification als hoofdfocus
- Complexe VOG-wizard in app
- 10 gebruiker stories (nu 5 core + 5 future)
- Leaderboards, rankings, competitie
- Complexe puntensystemen met multipliers
- Virtual/Challenge marker types (niet MVP)

### ERIN
- Micro-vrijwilligerswerk als USP
- 5-stappen flow prominent
- Duur-filter (tot 1 uur, 1-2 uur, halve dag)
- VOG als ketenpartner-verantwoordelijkheid
- MVP-first roadmap (3 activiteiten → 7 → 10+)
- <5 minuten tot eerste activiteit claim
- Gemeente als koper expliciet

### HERFORMULEERD
- "Impact-gedreven Gamification" → "Micro-vrijwilligerswerk Platform"
- Uitgebreide gamification → MVP met 3 badges
- VOG in-app → VOG via ketenpartner
- Alle features tegelijk → Phased approach

---

**KarmaKaart maakt vrijwilligerswerk net zo makkelijk als een wandeling—open de kaart, kies iets, doe het.**
