# KarmaKaart Organisaties Website - Design Document

**Design Reference**: https://finture.webflow.io/about-us/about-2 (Finture About-2 template)  
**Date**: January 16, 2025  
**Project**: KarmaKaart - Organisaties Platform  
**Target Audience**: NGO's, corporaties, woningcorporaties, zorgorganisaties
**Primary Goal**: License/white-label deals (€15k-100k)

---

## 🎨 Project Overview

**Product**: KarmaKaart voor Organisaties  
**Mission**: Overtuig organisaties om vrijwilligerscoördinatie te digitaliseren  
**Target Audience**: 
- Primary: Vrijwilligerscoördinatoren, CSR managers, operationeel directeuren
- Secondary: HR managers, community managers, bestuurders

**Core Value Proposition**: Van email-chaos naar gelukkige vrijwilligers

**Unique Positioning**:
- Efficiency-gedreven (80% minder email, 15 uur/week besparing)
- Bewezen schaal (Humanitas 10k vrijwilligers, ABN AMRO 6.9k)
- Goedkoper dan concurrentie (50% vs Optimy)
- Nederlands gebouwd voor NL vrijwilligerscultuur

---

## 🎯 Content Strategy

### Proposition Hierarchy
1. **Herkenbare Problemen** (Primary) - "15 uur/week verloren aan email-threads"
2. **Concrete Oplossing** (Secondary) - "Real-time dashboard, geen Excel meer"
3. **Social Proof** (Tertiary) - "ABN AMRO betaalt €50k voor slechter platform"

### Voice & Tone
- **Empathisch** (we begrijpen coördinator-frustratie)
- **Praktisch** (focus op tijdsbesparing en gemak)
- **Eerlijk over status** ("Nog geen klant, maar ze hebben ons nodig")
- **Betaalbaar positioneren** (niet premium pricing)

### What NOT to Do
- ❌ Tech jargon (focus op benefits, niet features)
- ❌ Oversell als je geen klanten hebt
- ❌ Consumer-taal (niet over "Henk", maar over coördinatie)
- ❌ Complex pricing (helder en transparant)

---

## 📐 Page Structure (5 Sections)

### Template Analysis: About-2 Structure

Based on https://finture.webflow.io/about-us/about-2:

```
1. HERO SECTION
   - Large heading
   - Supporting text
   - 3 hero images (stacked/arranged)
   
2. TABBED CONTENT SECTION
   - Tab navigation (01, 02, 03)
   - Tab 1: "Our vision" - Heading + body copy
   - Tab 2: "Our core values" - Heading + body copy
   - Tab 3: "Our story" - Heading + body copy
   - Content toggles on tab click
   
3. TEAM SECTION
   - Heading + subheading
   - 8-person grid (2 rows × 4 columns)
   - Each: Photo + Name + Role
   
4. NEWSLETTER SIGNUP
   - Heading
   - Body text
   - Email form
   - Success/error states
   
5. FOOTER (multi-column)
```

---

## 📝 SECTION-BY-SECTION COPY PLACEHOLDERS

### 1. NAVIGATION HEADER

**Layout**: Horizontal sticky header

**Components**:
```
Logo: [KarmaKaart or KarmaKaart logo]

Menu Items:
- [Link 1: Platform Demo]
- [Link 2: Case Studies]
- [Link 3: Pricing]
- [Link 4: Integrations]
- [Link 5: Contact]

Primary CTA Button (right-aligned):
[Placeholder: "Start Pilot (Gratis 3 Maanden)"]
```

**Design Notes**:
- Warmer color palette than government site (approachable)
- Mobile: Hamburger menu
- CTA emphasizes "gratis" to lower barrier

---

### 2. HERO SECTION

**Template Element**: `<section class="hero">` with heading + 3 images

**HEADING (H1)**:
```
Van email-chaos naar gelukkige vrijwilligers
```

**SUBHEADING / SUPPORTING TEXT**:
```
KarmaKaart digitaliseert vrijwilligerscoördinatie voor organisaties die meer willen bereiken met minder gedoe.

Humanitas coördineert 10.000 vrijwilligers over 92 locaties. ABN AMRO beheert 6.903 corporate volunteers. Beide worstelen met handmatige systemen—spreadsheets, e-mail ping-pong en geen overzicht.

Herken je dit? Plaats jouw activiteiten op onze interactieve kaart. Vrijwilligers checken in via de app. Jij ziet real-time wie er meedoet en wat de impact is. Klaar om impact meetbaar te maken? De Wet Versterking Participatie (deadline participatieverordening: 1 jan 2027) vraagt om data.
```

**STATISTICS CARDS** (3 horizontal cards):
```
Card 1:
200.000+
Deelnemers op NLvoorelkaar
(Bron: NLvoorelkaar/Tracxn, 2024)

Card 2:
49%
Van vrijwilligers vindt flexibiliteit belangrijk
(Bron: CBS Vrijwilligerswerk 2024)

Card 3:
€70-210/woning
Leefbaarheidsinvestering woningcorporaties
(Bron: Aedes Forecast 2024)
```

**3 HERO IMAGES**:
```
Image 1 (Top/Left):
[Photo: Volunteer in action - authentic, diverse]
Alt text: [Placeholder description]

Image 2 (Middle/Right):
[Photo: Coordinator using dashboard - professional setting]
Alt text: [Placeholder description]

Image 3 (Bottom/Center):
[Photo: Group of volunteers - community feeling]
Alt text: [Placeholder description]
```

**PRIMARY CTA BUTTON**:
```
Button Text: Start Pilot (Gratis 3 Maanden)
Button Style: Large, warm color
Below button: Geen creditcard nodig | Direct aan de slag
```

**Design Notes**:
- Images should feel warm, human, not corporate
- Statistics cards: Clean, modern, not overwhelming
- CTA removes risk ("gratis", "geen credit card")

---

### 3. TABBED CONTENT SECTION

**Template Element**: Interactive tabs with content areas

#### TAB NAVIGATION

```
Tab 01: Het Probleem
Tab 02: De Oplossing
Tab 03: De Business Case

Design: 
- Tab numbers: Large (01, 02, 03)
- Active tab: Bold, colored indicator
- Inactive tabs: Muted, clickable
```

---

#### TAB 01 CONTENT: "HET PROBLEEM"

**HEADING (H2)**:
```
Waarom handmatige systemen je groei blokkeren
```

**BODY COPY** (Long-form, 400-600 words):
```
Je herkent het vast: je organiseert een buurtschoonmaak. Je krijgt 40 WhatsApp-berichten, 12 mailtjes en 3 telefoontjes. Wie komt er? Wie heeft afgezegd? Op de dag zelf sta je met 5 mensen te veel of te weinig.

**De verborgen kosten:**
- Uren kwijt aan roosterplanning en herinneringen sturen
- Geen overzicht: hoeveel vrijwilligers had je vorige maand?
- Geen data voor subsidieverantwoording
- Vrijwilligers haken af door slechte communicatie

**De urgentie:**
Sinds 1 januari 2025 is de **Wet Versterking Participatie** van kracht. Gemeenten moeten vóór 1 januari 2027 een participatieverordening opstellen *(Bron: Stb. 2024, 203)*. De wet verplicht geen digitale tools — maar meetbare participatiedata wordt cruciaal voor subsidie-verantwoording en beleidsonderbouwing.

**Case: Woningcorporaties investeren miljoenen—maar blijft onzichtbaar**
Woningcorporaties investeren **€70-210 per woning** aan leefbaarheid *(Bron: Aedes Forecast 2024)*. Toch geeft **40% van de huurders** aan geen idee te hebben wat de corporatie doet. Je investeert miljoenen, maar de sociale return blijft onzichtbaar in Excel-sheets. Zonder data geen bewijs, zonder bewijs geen draagvlak.
```

**Design Notes**:
- Use numbered/bulleted lists for clarity
- Bold sub-headings for scanability
- Include real org names/numbers where possible
- Break into digestible paragraphs (3-4 lines max)
- Consider icons for each problem (📧 💾 👥)

---

#### TAB 02 CONTENT: "WAAROM KARMAKAART"

**HEADING (H2)**:
```
Hoe KarmaKaart werkt: Simpel, effectief, betaalbaar
```

**BODY COPY** (Comparison format, 400-600 words):
```
**Stap 1: Plaats je activiteit**
Maak een marker aan op de kaart: titel, beschrijving, locatie, datum/tijd. Kies de categorie (groen, sociaal, educatief). Klik op "Publiceren". Klaar. Je activiteit is nu zichtbaar voor alle vrijwilligers in de buurt.

**Stap 2: Vrijwilligers checken zelf in**
Vrijwilligers zien je marker op de kaart, lezen wat er nodig is, en checken in via de app. Bij events: QR-code scan. Bij doorlopende activiteiten: GPS-validatie. Jij ziet real-time wie er meedoet—zonder handmatige registratie.

**Stap 3: Zie je impact in één dashboard**
- Hoeveel check-ins deze maand?
- Hoeveel uren vrijwilligerswerk?
- Welke activiteiten zijn het populairst?
- Exporteer direct voor subsidieverantwoording (VNG-formaten)

**Wat maakt KarmaKaart anders?**

| Feature | Handmatig / Excel | Enterprise Software (Optimy) | **KarmaKaart** |
| :--- | :--- | :--- | :--- |
| **Vrijwilliger check-in** | Handmatige lijsten | Complex proces | **QR-code / GPS (1 klik)** |
| **Coördinatie** | E-mail ping-pong | Complex dashboard | **Real-time App** |
| **Overzicht** | Geen data | Maandrapportages | **Live Dashboard** |
| **Kosten** | Verloren uren | €50.000+ / jaar | **Vanaf €5.000 / jaar** |
| **Setup** | N/A | 3-6 maanden implementatie | **Vandaag live** |
| **Cultuur** | Frustratie | Amerikaans/Corporate | **Nederlandse doe-mentaliteit** |

**Speciaal voor jouw sector:**
- **Woningcorporaties:** Maak leefbaarheidsinvesteringen eindelijk zichtbaar voor huurders
- **Zorgorganisaties:** Coördineer maatjesprojecten en thuisbezoeken (VOG-wizard ingebouwd)
- **Corporates (CSR):** Beheer employee volunteering days met white-label platform
- **NGO's:** Van Beach Cleanup tot wijktuinen—alles op één plek
- **Gemeenten:** Voldoe aan Wet Versterking Participatie met data-gedreven rapportages
```

**VISUAL ELEMENT** (optional):
```
[Comparison table placeholder]

Feature | Optimy | NLvoorelkaar | Excel | KarmaKaart
--------|--------|--------------|-------|------------
Check-in | Manual | No          | No    | ✅
Dashboard| ✅     | Partial     | No    | ✅
Dutch    | ❌     | ✅          | N/A   | ✅
Price    | €€€€   | Free        | Free  | €€
```

**Design Notes**:
- Use checkmarks/crosses consistently
- Highlight KarmaKaart section (color/border)
- Keep competitor mentions factual, not negative
- End with positive differentiator

---

#### TAB 03 CONTENT: "CASE STUDY"

**HEADING (H2)**:
```
Waarom investeren in KarmaKaart loont
```

**BODY COPY** (Case study format, 500-700 words):
```
**Case: Humanitas (10.000 vrijwilligers, 92 locaties)**

**Situatie nu:**
Elke lokale afdeling werkt met eigen systemen: e-maillijsten, Excel, WhatsApp-groepen. Centraal overzicht ontbreekt. Subsidierapportage kost weken werk.

**Met KarmaKaart:**
- Eén centraal dashboard voor alle 92 afdelingen
- Vrijwilligers checken zelf in → geen handmatige administratie
- Automatische rapportage voor subsidieverantwoording
- Real-time inzicht in impact per locatie

**ROI:**
- Minder tijd kwijt aan coördinatie (meer tijd voor missie)
- Betere data → meer subsidie-succes
- Vrijwilligers blijven langer betrokken

*Disclaimer: Humanitas is nog geen klant, maar een prospect waarmee we graag in gesprek gaan.*

───────────────────────────────────────────────────────

**Case: ABN AMRO Foundation (6.903 corporate volunteers)**

**Situatie nu:**
Gebruikt Optimy (internationale software, geschat €50-100k/jaar). Werkt, maar mist Nederlandse lokale focus en intuïtieve UX.

**Met KarmaKaart:**
- Nederlands platform dat aansluit bij lokale cultuur
- Betere UX → hogere employee engagement
- White-label optie voor corporate branding
- Directe integratie met lokale partners (scholen, NGO's)

───────────────────────────────────────────────────────

**Case: Stichting De Noordzee (2.000-2.500 vrijwilligers, Beach Cleanup Tour)**

**Situatie nu:**
Inschrijvingen via formulieren. No-shows zijn logistieke nachtmerrie. Handmatige check-in op strand met lijsten.

**Met KarmaKaart:**
- QR-check-in op locatie (1 scan = aanwezig)
- Real-time capaciteitsmanagement (vol = vol)
- Automatische herinneringen verminderen no-shows
- Direct inzicht: hoeveel kg afval per locatie?

───────────────────────────────────────────────────────

**Wat levert het jou op?**

✅ **Bereik meer vrijwilligers:** Sluit aan op 200.000+ deelnemers die flexibel willen helpen *(Bron: NLvoorelkaar/Tracxn, 2024)*

✅ **Minder administratie:** Automatiseer roosters, herinneringen, check-ins. Meer tijd voor je missie.

✅ **Bewijs je impact:** Real-time dashboards voor subsidieverantwoording (VNG-formaten) en stakeholder-rapportages.

✅ **Lever meetbare data:** Wet Versterking Participatie (deadline participatieverordening: 1 jan 2027) vraagt om bewijs van participatie — KarmaKaart levert die data.

✅ **Betaalbaar:** Vanaf €5.000/jaar. Geen setup fees. Geen verplichte jarencontracten. Pilot gratis (3 maanden).
```

**Design Notes**:
- Use horizontal dividers between sections
- Highlight ROI number (large, colored)
- Include disclaimer (transparency builds trust)
- CTA specific to this case study

---

### 4. TEAM SECTION → "SUCCESS STORIES"

**Template Element**: 8-person grid (2 rows × 4 columns)

**HEADING (H2)**:
```
Organisaties die we willen helpen
```

**SUBHEADING**:
```
Eerlijkheid duurt het langst: We zijn een startup. Deze organisaties zijn nog geen klanten, maar hebben exact het probleem dat wij oplossen. Wij zoeken pilot-partners voor Q2 2026.
```

**8 ORGANIZATION CARDS**:

**Card 1: Humanitas**
```
Logo/Icon: [Humanitas logo or generic NGO icon]
Name: [Placeholder: "Humanitas"]

Description lines:
- [10.000 vrijwilligers]
- [92 locaties]
- ["Maatjesprojecten tegen eenzaamheid"]

Problem tag: [Email-chaos 92 afdelingen]
Potential tag: [€191k tijdsbesparing/jaar]

Status badge: [Placeholder: "In gesprek"]

Optional: [Small "Learn more" link]
```

**Card 2: ABN AMRO Foundation**
```
Logo/Icon: [ABN AMRO logo or corporate icon]
Name: [Placeholder: "ABN AMRO Foundation"]

Description lines:
- [6.903 corporate volunteers]
- [23 jaar actief]
- ["1 week/jaar vrijwilligersprogramma"]

Problem tag: [Betaalt €50k+ voor Optimy]
Potential tag: [50% kostenbesparing]

Status badge: [Placeholder: "In gesprek"]
```

**Card 3: Woonstad Rotterdam**
```
Logo/Icon: [Woonstad logo or housing icon]
Name: [Placeholder: "Woonstad Rotterdam"]

Description lines:
- [Woningcorporatie]
- [Manager Digitale Innovatie]
- ["Leefbaarheid zichtbaar maken"]

Problem tag: [40% huurders onzichtbaarheid]
Potential tag: [Bewoners betrekken bij buurt]

Status badge: [Placeholder: "In gesprek"]
```

**Card 4: Natuurmonumenten**
```
Logo/Icon: [Natuurmonumenten logo or nature icon]
Name: [Placeholder: "Natuurmonumenten"]

Description lines:
- [7.000 vrijwilligers]
- [100+ natuurreserves]
- ["Werkdagen + natuurgidsen"]

Problem tag: [KIEK-Online geen scheduling]
Potential tag: [Real-time check-ins werkdagen]

Status badge: [Placeholder: "Interesse"]
```

**Card 5: Stichting De Noordzee**
```
Logo/Icon: [Noordzee logo or ocean icon]
Name: [Placeholder: "Stichting De Noordzee"]

Description lines:
- [Beach Cleanup Tour]
- [2.000-2.500 vrijwilligers/jaar]
- ["30 locaties tegelijk"]

Problem tag: [Systeem worstelt met demand]
Potential tag: [Real-time capacity management]

Status badge: [Placeholder: "Interesse"]
```

**Card 6: ING Nederland**
```
Logo/Icon: [ING logo or corporate icon]
Name: [Placeholder: "ING Nederland"]

Description lines:
- [57.000 employees]
- [2 CSR days/jaar (paid)]
- ["Financial literacy volunteering"]

Problem tag: [Corporate volunteering coördinatie]
Potential tag: [White-label Dutch operations]

Status badge: [Placeholder: "Verkennend"]
```

**Card 7: Cordaan Amsterdam**
```
Logo/Icon: [Cordaan logo or healthcare icon]
Name: [Placeholder: "Cordaan Amsterdam"]

Description lines:
- [2.000+ vrijwilligers]
- [120 zorglocaties]
- ["Ouderen + gehandicaptenzorg"]

Problem tag: [Multi-location coördinatie]
Potential tag: [120 locaties 1 dashboard]

Status badge: [Placeholder: "Verkennend"]
```

**Card 8: OPEN SLOT - CTA**
```
Icon: [Question mark or generic organization icon]
Name: [Placeholder: "Jouw Organisatie?"]

Description (form-style):
- [___ vrijwilligers?]
- [___ locaties?]
- [___ uur/week coördinatie?]

Problem line: [Placeholder: "Jouw probleem"]
Potential line: [Placeholder: "Jouw besparing"]

CTA Button: [Placeholder: "Bereken Jouw ROI"]
```

**Design Notes**:
- Cards: Equal height, clean borders
- Logo/icon: 60-80px, centered or top-left
- Description: 14px, 3 lines with breaks
- Problem/Potential: Color-coded tags
- Status badge: Small, subtle (top-right corner)
- Hover: Subtle lift effect
- Mobile: 2 columns (tablet), 1 column (phone)

---

### 5. NEWSLETTER SIGNUP → "PILOT UPDATES"

**Template Element**: Form section with heading + email input

**HEADING (H2)**:
```
Waarom nu starten?
```

**BODY TEXT**:
```
📅 **1 Januari 2027:** Deadline participatieverordening voor alle gemeenten *(Wet Versterking Participatie, Stb. 2024, 203)*. Organisaties die nu al meetbare data leveren, staan sterker bij subsidieaanvragen.

💰 **31 Maart 2026:** Deadline BZK Innovatiebudget 2026 (totaalbudget €3M). Wij helpen je bij de aanvraag *(Bron: digitaleoverheid.nl)*.

🚀 **Q2 2026:** We hebben plek voor **5 organisaties** in ons exclusieve pilot-programma:
- 3 maanden gratis
- Persoonlijke onboarding
- Direct invloed op productontwikkeling
- Geen verplicht jarencontract na pilot

**Wat zeggen early adopters?**
"We zijn in gesprek met KarmaKaart voor onze Beach Cleanup Tour. De QR-check-in lost ons grootste probleem op: no-shows en handmatige registratie."
— Stichting De Noordzee (prospect)
```

**FORM FIELDS**:
```
Field 1: [Placeholder: Organisatienaam]
Type: Text input
Placeholder text: "Humanitas, ABN AMRO, etc."
Required: Yes

Field 2: [Placeholder: Aantal vrijwilligers]
Type: Dropdown
Options:
- [< 50 vrijwilligers]
- [50-500]
- [500-1.000]
- [1.000-5.000]
- [5.000+]
Required: Yes

Field 3: [Placeholder: Email]
Type: Email input
Placeholder text: "jouw@email.nl"
Required: Yes
Validation: Email format

Field 4: [Placeholder: Jouw rol]
Type: Dropdown
Options:
- [Directeur/Bestuurslid]
- [Vrijwilligerscoördinator]
- [CSR/HR Manager]
- [Community Manager]
- [Anders]
Required: No
```

**SUBMIT BUTTON**:
```
Button Text: Claim jouw Pilot-plek voor Q2 2026
Style: Full-width on mobile, inline desktop
Color: Secondary/action color
```

**PRIVACY NOTE** (Below button):
```
[Placeholder: Privacy reassurance]

Example:
"We respecteren je inbox. Privacy policy."
[Link to privacy policy]
```

**SUCCESS STATE**:
```
Message: [Placeholder: "✅ Top! We sturen je updates voor [Organisatie naam]."]
Display: Replace form with success message
Auto-hide: After 5 seconds, fade out
```

**ERROR STATE**:
```
Message: [Placeholder: "Oeps! Probeer het nog een keer of mail ons op [email]."]
Display: Below submit button in red
Icon: ❌ or alert icon
```

**Design Notes**:
- Form: Clean, spacious (not cramped)
- Labels: Above inputs, not placeholder-only
- Focus states: Clear blue border
- Mobile: Full-width inputs
- Success: Green background, checkmark icon

---

### 6. FOOTER

**Layout**: Multi-column footer

**Logo Section** (Top of footer):
```
[KarmaKaart or KarmaKaart logo]
Tagline: Vrijwilligerscoördinatie zonder gedoe
```

**Column 1 - Platform**:
```
Heading: [Platform]

Links:
- [Demo Video]
- [Feature Overview]
- [Integrations] ← Note: NLvoorelkaar, GoodUp
- [Security & Privacy]
- [Roadmap]
```

**Column 2 - Voor Organisaties**:
```
Heading: [Voor Organisaties]

Links:
- [ROI Calculator]
- [Case Studies]
- [Implementation Guide]
- [Pilot Program]
- [White-Label Options]
```

**Column 3 - Pricing & Resources**:
```
Heading: [Pricing & Resources]

Links:
- [Pricing Tiers]
- [Small Organisations (< 500)]
- [Medium (500-1000)]
- [Large (1000-5000)]
- [Enterprise (5000+)]
```

**Column 4 - Hulp & Contact**:
```
Heading: [Hulp & Contact]

Links:
- [Veelgestelde Vragen]
- [Blog / Insights]
- [Subsidie Guides]
- [Contact]

Contact info:
Email: organisaties@karmakaart.nl
Tel: [nummer]

Social:
[LinkedIn icon/link]
[Twitter/X icon/link]
```

**Bottom Bar**:
```
Left side (Social proof badges):
[Placeholder: Icons + text]
"🤝 Gebouwd voor NL vrijwilligerscultuur"
"🔒 AVG-compliant"
"📊 Subsidie-export formats"

Center (Legal links):
[Privacy Policy] | [Terms of Service] | [Cookie Policy]

Right side (Made in):
[Placeholder: "Met ❤️ gemaakt in Nederland"]
```

**Sub-footer** (Very bottom):
```
In gesprek met: Humanitas, ABN AMRO Foundation, Woonstad Rotterdam, Natuurmonumenten, Stichting De Noordzee, ING Nederland, Cordaan, Provincie Groningen
```

**Design Notes**:
- Footer background: Slightly darker than page (#F5F5F5)
- Column headings: Bold, 16px
- Links: 14px, secondary color
- Hover: Underline
- Social proof badges: Small icons with text
- Mobile: Accordion columns or single stack

---

## 🎨 Design System Guidelines

### Color Palette (Warmer than Government Site)
```
Primary (Trust but Warm): [Blue-green or teal]
Secondary (Action): [Orange or coral for CTAs]
Success: [Green for badges]
Info: [Blue for informational]
Background: [Warm off-white #FAF9F7]
Text Primary: [Dark gray #2D2D2D]
Text Secondary: [Medium gray #666666]
Borders: [Warm gray #E0DDD9]
```

### Typography
```
Headline Font: [Sans-serif bold - same as government for consistency]
- H1: 48px desktop / 32px mobile
- H2: 36px desktop / 28px mobile
- H3: 24px desktop / 20px mobile

Body Font: [Sans-serif regular]
- Body: 18px / 16px mobile
- Small: 14px
- Line-height: 1.6-1.7 (readability)

Button Text: [Sans-serif semibold]
- Size: 16px
- Style: Sentence case
```

### Spacing System
```
Section Padding: 80px vertical desktop / 60px mobile
Container Max-Width: 1200px
Grid Gap: 32px desktop / 24px mobile
Card Padding: 32px
Button Padding: 16px 32px
Tab Content Padding: 48px (generous for long-form)
```

### Component Styles

**Buttons**:
```
Primary CTA:
- Background: Secondary color (warm)
- Text: White
- Border-radius: 8px
- Padding: 16px 32px
- Hover: Darken 10% + lift 2px

Secondary:
- Background: White
- Text: Primary color
- Border: 2px solid primary
- Hover: Fill with primary
```

**Tabs**:
```
Tab Button:
- Inactive: Gray text, no background
- Active: Primary color text, bottom border 3px
- Hover: Subtle background change
- Number (01, 02): Large, 24px, bold

Tab Content Area:
- Background: White
- Border: 1px solid border color
- Border-radius: 12px
- Padding: 48px desktop / 32px mobile
- Min-height: 600px (prevents jump on switch)
```

**Organization Cards** (Team section):
```
Background: White
Border: 1px solid border color
Border-radius: 12px
Padding: 24px
Shadow: 0 2px 8px rgba(0,0,0,0.06)
Hover: Shadow 0 4px 16px rgba(0,0,0,0.10), lift 4px

Logo/Icon: 64px, centered top
Name: 18px bold, centered
Description: 14px, left-aligned, 3 lines
Tags: Small badges (8px padding), colored backgrounds
Status: Subtle badge, top-right corner
```

**Form Elements**:
```
Input/Select:
- Border: 1px solid border color
- Border-radius: 8px
- Padding: 12px 16px
- Font-size: 16px (prevents iOS zoom)
- Focus: Primary color border, shadow

Label:
- 14px, medium weight
- Margin-bottom: 8px
- Color: Text primary

Error state:
- Red border
- Red helper text below
- Icon: ❌
```

---

## 📱 Responsive Design

### Breakpoints
```
Desktop: 1200px+
Tablet: 768px - 1199px
Mobile: < 768px
```

### Mobile Adaptations

**Hero Section**:
- Stack images vertically below text
- Statistics cards: 1 column (3 rows)
- CTA button: Full-width

**Tabbed Content**:
- Tab navigation: Scrollable horizontal if needed
- Tab content padding: Reduce to 32px
- Long-form text: Maintain readability (line-length)

**Organization Cards (8 cards)**:
- Desktop: 4 columns (2 rows)
- Tablet: 2 columns (4 rows)
- Mobile: 1 column (8 rows)

**Newsletter Form**:
- Full-width inputs
- Stack fields vertically
- Submit button: Full-width

**Footer**:
- Columns: Accordion or single stack
- Logo: Center-aligned
- Bottom bar: Stack items vertically

---

## ✅ Content Checklist (To Fill Later)

### Copy Needed:
- [ ] Hero headline (empathetic problem-solution)
- [ ] Hero subheading (4 sentences with social proof)
- [ ] Tab 1: Problem section (3 problems, 400-600 words)
- [ ] Tab 2: Competitive comparison (4 platforms)
- [ ] Tab 3: Case study (Humanitas, 500-700 words)
- [ ] 8 organization descriptions (50 words each)
- [ ] Newsletter value prop (150 words)
- [ ] Footer copy

### Visual Assets Needed:
- [ ] 3 hero images (volunteers, coordinator, group)
- [ ] 8 organization logos or icons
- [ ] Tab content icons (optional, for visual breaks)
- [ ] Form success/error icons
- [ ] Footer social icons

### Data/Stats Needed:
- [ ] All organization stats verified
- [ ] Timesaving calculations confirmed
- [ ] Cost comparisons accurate (Optimy pricing)
- [ ] Case study ROI verified
- [ ] Contact info (email, phone, social)

### Interactive Elements:
- [ ] Tab switching functionality (JS)
- [ ] Form validation (client + server)
- [ ] Success/error message display
- [ ] Newsletter integration (email service)
- [ ] ROI calculator link (if separate page)

---

## 🎯 Key Messaging Pillars (To Insert)

**Pillar 1: We Understand Your Pain**
- [Placeholder: Email chaos, Excel frustration]
- [Placeholder: 15 uur/week verloren]
- [Placeholder: Vrijwilligers verdwijnen]

**Pillar 2: We're Better Than Competitors**
- [Placeholder: 50% goedkoper dan Optimy]
- [Placeholder: Nederlands vs internationaal]
- [Placeholder: Real-time vs handmatig]

**Pillar 3: Proven Potential (Not Customers)**
- [Placeholder: Humanitas 80% tijdsbesparing]
- [Placeholder: ABN AMRO €50k+ besparing]
- [Placeholder: Honest: "Nog geen klant, maar..."]

**Pillar 4: Low Risk to Try**
- [Placeholder: Gratis 3 maanden pilot]
- [Placeholder: Geen credit card nodig]
- [Placeholder: Early adopter korting]

---

## 📊 Developer Implementation Notes

### Template Modifications Needed:

**Hero Section**:
- Replace "About FINTURE" eyebrow with category tag
- Change 3 image layout: Prefer 3 separate images vs overlapping
- Add statistics cards below/beside text

**Tabbed Content**:
- Ensure tab content min-height (prevent jump)
- Add loading state if content is heavy
- Consider default open tab (01)
- Smooth transition between tabs (fade effect)

**Team Section → Organization Cards**:
- Change structure: Not people, but organizations
- Add fields: Logo, description (3 lines), tags, status
- Last card: Different style (CTA, not organization)
- Consider different card heights (auto, not forced equal)

**Newsletter Form**:
- Add fields beyond email (org name, size, role)
- Implement proper validation
- Success state: Replace form
- Error state: Inline below button
- Connect to email service (Mailchimp, etc.)

**Footer**:
- 4 columns for this audience
- Add "In gesprek" sub-footer text
- Social proof badges (icons + text)

---

## 🔄 A/B Testing Opportunities

### High-Impact Tests:

**Hero Headline**:
```
A: "Van email-chaos naar gelukkige vrijwilligers"
B: "Vrijwilligers coördineren zonder de hoofdpijn"
C: "Stop met Excel. Start met KarmaKaart."

Metric: Click-through to demo
```

**Tab Order**:
```
A: Problem → Solution → Case Study (current)
B: Case Study → Problem → Solution (social proof first)

Metric: Tab engagement, time on page
```

**Organization Cards**:
```
A: Show all 8 prospects
B: Show only 4 (most relevant) + "See more"

Metric: Scroll depth, card interaction
```

**Newsletter Fields**:
```
A: 4 fields (org name, size, email, role)
B: 2 fields (email, org name only)

Metric: Form submission rate
```

**CTA Copy**:
```
A: "Boek Demo"
B: "Start Gratis Pilot"
C: "Bereken Jouw ROI"

Metric: Click-through rate
```

---

## 🎓 Tone Examples (Reference)

### ✅ GOOD (Empathetic, practical):
```
"We weten hoe het voelt. Je stuurt een email: 'Wie komt zaterdag?' 
27 antwoorden later weet je nog steeds niet wie komt. 
3 mensen komen niet opdagen. Je hebt geen idee wie er wél was.

Humanitas doet dit 92× per week. Over 92 locaties.
Dat is 15 uur per week kwijt aan email-chaos.

KarmaKaart lost dit op met simpele check-ins."
```

### ❌ BAD (Too corporate, not relatable):
```
"Onze geavanceerde platform-oplossing biedt geïntegreerde 
workflows voor volunteer lifecycle management met real-time 
analytics dashboards en seamless API integrations."
```

### ✅ GOOD (Honest about status):
```
"Humanitas is nog geen klant. Maar ze hebben dit probleem.
En wij hebben de oplossing. Word jij de eerste success story?"
```

### ❌ BAD (Overselling without proof):
```
"500+ tevreden klanten vertrouwen op KarmaKaart!"
(Als je geen klanten hebt, lieg je niet)
```

---

**Document Status**: ✅ Template structure + placeholder framework ready  
**Next Steps**: 
1. Developer: Clone About-2 template in Webflow
2. Content Team: Fill placeholders with copy
3. Design Team: Source 3 hero images + 8 org logos
4. Review: Test tabbed content functionality
5. Integration: Connect newsletter form to email service

**Version**: 1.0 - Template Mapping with Placeholders  
**Last Updated**: January 16, 2025

