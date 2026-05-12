# KarmaKaart Gemeente/Provincie Website - Design Document

**Design Reference**: https://finture.webflow.io/about-us/about-1 (Finture About-1 template)  
**Date**: January 16, 2025  
**Project**: KarmaKaart - Gemeente/Provincie Platform  
**Target Audience**: Provincies, G4/G40 gemeenten, VNG, programmamanagers
**Primary Goal**: Platform acquisition/license deals (€50k-500k)

---

## 🎨 Project Overview

**Product**: KarmaKaart voor Gemeenten en Provincies  
**Mission**: Overtuig overheidsinstellingen om het platform te kopen/licenseren  
**Target Audience**: 
- Primary: Wethouders, programmamanagers, innovatiedirecteuren
- Secondary: Beleidsadviseurs, participatie-coördinatoren

**Core Value Proposition**: [Placeholder: Mobiliseer vrijwilligers zonder de chaos]

**Unique Positioning**:
- ROI-gedreven (6x return on investment)
- Meetbare participatie (Wet Versterking Participatie: participatieverordening deadline 1 jan 2027)
- Bewezen impact (34-62% eenzaamheidsreductie)
- VNG-compliant rapportages

---

## 🎯 Content Strategy

### Proposition Hierarchy
1. **Problem-First** (Primary) - "Email-chaos, geen data, budget moeilijk te verantwoorden"
2. **ROI Explicit** (Secondary) - "€25k investering → €150k societal value"
3. **Evidence of Impact** (Tertiary) - "Participatieverordening deadline 1 jan 2027, BZK subsidie maart 2026"

### Voice & Tone
- **Professioneel maar toegankelijk** (geen droge ambtenarentaal)
- **Data-driven** (elke claim onderbouwd met statistieken)
- **Eerlijk over status** ("In gesprek met" niet "500 klanten")
- **Urgentie zonder druk** (deadlines zijn reëel, geen salestactieken)

### What NOT to Do
- ❌ Corporate buzzwords ("synergy", "leverage", "disrupt")
- ❌ Overdreven claims zonder bewijs
- ❌ Fake testimonials of klanten
- ❌ Consumer-taal (focus op besluitvormers, niet eindgebruikers)

---

## 📐 Page Structure (7 Sections)

### Template Analysis: About-1 Structure

Based on https://finture.webflow.io/about-us/about-1:

```
1. HERO SECTION
   - Large heading
   - Supporting text
   - Hero graphic/image placeholder
   
2. TWO-COLUMN MISSION SECTION
   - Left column: Heading + body copy (long form)
   - Right column: Supporting images (multiple stacked)
   
3. FOUNDING TEAM SECTION
   - Heading + subheading
   - 6-person grid (2 rows × 3 columns)
   - Each: Photo + Name + Role (no description in template)
   
4. INVESTORS LOGO BAR
   - Heading: "Our investors"
   - Horizontal logo carousel/grid
   - 5+ logos (repeating pattern)
   
5. ADVISORS GRID
   - Heading: "Our advisors"
   - 4-person grid (1 row × 4 columns)
   - Each: Photo + Name only
   
6. FOOTER (standard)
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
- [Link 3: Pricing & ROI]
- [Link 4: Subsidies]
- [Link 5: Contact]

Primary CTA Button (right-aligned):
[Placeholder: "Boek Demo (30 min)"]
```

**Design Notes**:
- Fixed/sticky for B2B professional feel
- CTA button prominent (high-contrast color)
- Mobile: Hamburger menu

---

### 2. HERO SECTION

**Template Element**: `<section class="hero">` with heading + graphic

**HEADING (H1)**:
```
[Placeholder: Powerful headline about solving coordination chaos]

Examples:
- "Mobiliseer vrijwilligers zonder de chaos"
- "Stop met Excel. Start met impact."
- "Van email-threads naar real-time dashboards"
```

**SUBHEADING / SUPPORTING TEXT**:
```
[Placeholder: 2-3 sentences explaining platform + urgency + social proof]

Format:
- Sentence 1: What platform does
- Sentence 2: Why it matters (law/budget)
- Sentence 3: Who's interested (whale prospects)

Example structure:
"KarmaKaart digitaliseert vrijwilligerscoördinatie voor gemeenten en provincies. 
[Specific benefits]. [Whale prospect name] coördineert [€X amount]. 
[Other whale prospect]. Beide zoeken een oplossing."
```

**HERO GRAPHIC/IMAGE**:
```
Template shows: Large graphic placeholder

Option A (Keep template structure):
[Professional image: Dashboard screenshot or city illustration]

Option B (Customize with statistics):
Replace graphic area with 3 statistics cards horizontal:

Card 1:
[Statistic number]
[Short label]
[Context text]

Card 2:
[Statistic number]
[Short label]
[Context text]

Card 3:
[Statistic number]
[Short label]
[Context text]

Design Note: Statistics cards require custom implementation
Template default: Single graphic/image area
```

**PRIMARY CTA BUTTON**:
```
Button Text: [Placeholder: "Boek Demo" or "Claim Pilotplaats"]
Button Style: Large, primary color
Below button text: [Placeholder: Urgency note like "8 exclusieve plaatsen Q2 2026"]
```

**SECONDARY CTA** (optional):
```
Link text: [Placeholder: "Download Business Case (PDF)"]
Style: Text link, less prominent
```

**Design Notes**:
- Heading: 48px desktop / 32px mobile, bold
- Statistics cards should be visually prominent
- CTA button minimum 56px height (easy to click)
- White space around elements (professional, not cluttered)

---

### 3. TWO-COLUMN MISSION SECTION

**Template Element**: Left text column + Right image column

#### LEFT COLUMN: THE PROBLEM

**HEADING (H2)**:
```
[Placeholder: Problem statement heading]

Examples:
- "Het probleem dat élke gemeente herkent"
- "Waarom coördinatie zo moeilijk is"
- "De drie dingen die niet meer werken"
```

**BODY COPY** (Long-form, 300-500 words):
```
[Placeholder: Detailed problem description with specifics]

Structure:
1. Opening: Relatable pain point
2. Specific examples (email chaos, Excel, no data)
3. Consequences (budget questions, wasted time)
4. Legal pressure (Wet Versterking Participatie)
5. Opportunity cost (56% bereid vs 41% actief, Motivaction 2023)
6. Transition: "Dit is niet alleen inefficiënt. Het is..."

Use:
- Bullet points for clarity
- Specific statistics (backed by research)
- Quotes from decision-makers (if available)
- Empathetic tone (we understand your pain)
```

**Design Notes**:
- Line height 1.6-1.8 for readability
- Break into short paragraphs (3-4 lines max)
- Use bold for key statistics
- Consider pull quotes for emphasis

#### RIGHT COLUMN: SUPPORTING VISUALS

**Template shows**: Multiple stacked images

**Replace with options**:

**Option A: Photo + Quote Card**
```
Image: [Photo of gemeente official or city hall]

Quote Card below:
"[Placeholder: Quote from wethouder or manager]"

— [Name, Title, Organization]

Example:
"We investeren €36.9M maar kunnen raad niet 
vertellen hoeveel mensen we bereiken."
— Grete Visser, Wethouder, Nijmegen
```

**Option B: Problem Statistics Grid**
```
3 stat cards stacked vertically:

Card 1: [99% gemeenten] [handmatige coördinatie]
Card 2: [€150M] [zonder centraal tracking]
Card 3: [342 gemeenten] [participatieverordening deadline 1-1-2027]
```

**Option C: Before/After Comparison**
```
"NU" Section:
❌ Email chaos
❌ Excel per wijk
❌ Geen real-time data

"MET KARMAKAART" Section:
✅ Real-time dashboard
✅ Centraal systeem
✅ VNG-format export
```

**Design Notes**:
- Images should be professional (city halls, officials, dashboards)
- Quote cards: Light background, clear attribution
- Maintain vertical visual flow

---

### 4. SOLUTION SECTION (Add between Mission and Team)

**Note**: Template doesn't have this, but recommend adding for B2B flow

**HEADING (H2)**:
```
[Placeholder: Solution headline with ROI focus]

Examples:
- "KarmaKaart lost dit op—met bewezen ROI"
- "Wat als coördinatie geen gedoe meer is?"
```

**THREE COLUMNS** (Benefits breakdown):

**Column 1**:
```
ICON: [Dashboard icon]

HEADING: [Placeholder: Efficiency benefit]
Example: "Real-Time Coördinatie"

BODY: [Placeholder: 100-150 words explaining benefit]
- What it does
- How it saves time
- Specific metric (80% tijdsbesparing)
- Cost calculation
```

**Column 2**:
```
ICON: [Chart/graph icon]

HEADING: [Placeholder: Measurement benefit]
Example: "Impact Je Kunt Meten"

BODY: [Placeholder: 100-150 words]
- VNG-format exports
- Gemeenteraad-ready reports
- Subsidie verantwoording
- Proven impact metrics (34-62%)
```

**Column 3**:
```
ICON: [Euro/money icon]

HEADING: [Placeholder: ROI benefit]
Example: "6x Return on Investment"

BODY: [Placeholder: 100-150 words]
- Investment amount
- Societal value output
- Subsidy deduction
- Net positive calculation
```

**Design Notes**:
- Icons: Line style, consistent weight
- Equal column heights
- Cards with subtle borders or backgrounds
- Mobile: Stack vertically

---

### 5. FOUNDING TEAM → "HET KARMAKAART TEAM"

**Template Element**: 6-person grid (2 rows × 3 columns)

**HEADING (H2)**:
```
[Placeholder: Team section heading]

Examples:
- "Het team achter KarmaKaart"
- "Wie bouwt dit platform"
```

**SUBHEADING**:
```
[Placeholder: One sentence about team expertise]

Example:
"Ervaring met gemeentelijk beleid, digitale participatie, 
en grootschalige vrijwilligerscoördinatie."
```

**6 TEAM MEMBER SLOTS**:

**Slot 1 (Top Left)**:
```
Photo: [Headshot founder/CEO]
Name: [Placeholder: Full name]
Role: [Placeholder: "Founder & Product" or similar]
Note: Template has no bio/description field - only Photo + Name + Role
```

**Slot 2 (Top Center)**:
```
Photo: [Headshot co-founder]
Name: [Placeholder: Full name]
Role: [Placeholder: "Co-founder" or specific role]
Optional: [LinkedIn icon]
Optional bio: [1 sentence]
```

**Slot 3 (Top Right)**:
```
Photo: [Headshot team member or advisor]
Name: [Placeholder: Full name]
Role: [Placeholder: "Government Relations" or similar]
Optional: [LinkedIn icon]
Optional bio: [1 sentence government experience]
```

**Slot 4 (Bottom Left)**:
```
Photo: [Headshot advisor]
Name: [Placeholder: "Dr. [Name]" or "Prof. [Name]"]
Role: [Placeholder: "Adviseur Participatiebeleid"]
Bio: [Placeholder: "Voormalig beleidsadviseur VNG" or similar credentials]
```

**Slot 5 (Bottom Center)**:
```
Photo: [Headshot advisor or partner]
Name: [Placeholder: Full name]
Role: [Placeholder: "Adviseur Digitale Overheid"]
Bio: [Placeholder: "X jaar ervaring gemeentelijke IT"]
```

**Slot 6 (Bottom Right) - SPECIAL SLOT**:
```
Photo: [Icon or placeholder graphic, not person]
Name: [Placeholder: "Jouw gemeente?"]
Role: [Placeholder: "Pilot Partner Q2 2026"]
CTA: [Small button or link: "Word partner"]

Alternative: Use this slot for actual partner (Gemeente Nijmegen contact person)
```

**Design Notes**:
- Photos: Professional headshots, consistent style
- Name: Bold, 18-20px
- Role: Regular weight, 14-16px, secondary color
- Bio (if used): 12-14px, 2 lines max
- Hover effect: Subtle lift or shadow
- Mobile: 2 columns or single column stack

---

### 6. INVESTORS LOGO BAR → "STRATEGISCHE PARTNERS"

**Template Element**: Horizontal logo carousel/bar

**HEADING (H3 or H4)**:
```
[Placeholder: Partners heading]

Examples:
- "In gesprek met"
- "Strategische partners"
- "Potentiële klanten"
```

**LOGO SLOTS** (5-6 logos horizontal):

```
Logo 1: [Provincie Groningen logo or text placeholder]
Logo 2: [VNG logo or text placeholder]
Logo 3: [G40 Stedennetwerk logo or text placeholder]
Logo 4: [Gemeente Nijmegen logo or text placeholder]
Logo 5: [BZK logo or text placeholder]
Logo 6: [Aedes logo or text placeholder]
```

**FALLBACK IF NO LOGOS**:
```
Text-based cards instead:

Card format:
┌────────────────────┐
│ PROVINCIE GRONINGEN│
│ In gesprek         │
└────────────────────┘

┌────────────────────┐
│ GEMEENTE NIJMEGEN  │
│ Advanced gesprek   │
└────────────────────┘

etc.
```

**SUBTEXT BELOW LOGOS**:
```
[Placeholder: Status note]

Example:
"Pilot partnerships in ontwikkeling | Exclusieve plaatsen Q2 2026"
```

**Design Notes**:
- Logos: Grayscale or monochrome for consistency
- Equal sizing (height-based, width flexible)
- Padding between logos: 32-48px
- Background: Light gray or subtle pattern
- Mobile: 2-3 logos per row, stack as needed

---

### 7. ADVISORS GRID → "WHALE PROSPECTS"

**Template Element**: 4-person advisor grid (1 row × 4 columns)

**HEADING (H2)**:
```
[Placeholder: Prospects heading]

Examples:
- "Deze organisaties zoeken een oplossing"
- "Potentiële klanten"
- "Wie heeft dit platform nodig"
```

**SUBHEADING**:
```
[Placeholder: Honest status statement]

Example:
"Nog geen klant? Word de eerste. Exclusieve pilot in Groningen."
```

**4 PROSPECT CARDS**:

**Card 1**:
```
Icon/Logo: [Provincie Groningen icon]
Name: [Placeholder: "Provincie Groningen"]

Stats section:
- [€100M Toukomst programma]
- [900+ burgerinitiatieven]
- [Handmatige coördinatie]

Status tag: [Placeholder: "In advanced gesprek"]

Optional: [Link or CTA if appropriate]
```

**Card 2**:
```
Icon/Logo: [Gemeente Nijmegen icon]
Name: [Placeholder: "Gemeente Nijmegen"]

Stats section:
- [€36.9M participatiebudget]
- [350+ initiatieven]
- [MijnWijkplan integratie gewenst]

Contact: [Placeholder: Name + phone if approved]

Optional CTA: ["Contact opnemen"]
```

**Card 3**:
```
Icon/Logo: [VNG icon]
Name: [Placeholder: "VNG"]

Stats section:
- [342 gemeenten vertegenwoordigd]
- [Framework agreement potential]
- [€40B+ procurement power]

Status tag: [Placeholder: "Kennismaking gepland"]
```

**Card 4 - OPEN SLOT**:
```
Icon: [Question mark or generic city icon]
Name: [Placeholder: "Jouw gemeente?"]

Form fields as text:
- [€_M participatiebudget?]
- [___ initiatieven?]
- [Wet compliance nodig?]

CTA Button: [Placeholder: "Claim pilotplaats"]
```

**Design Notes**:
- Cards: Equal height, subtle border
- Stats: Bullet list or stacked text
- Status tag: Small badge (green = active, blue = planned)
- Hover: Lift effect
- Mobile: 2 columns or single column stack

---

### 8. URGENTIE CTA SECTION (Add before footer)

**Note**: Not in template, but critical for B2B conversion

**HEADING (H2)**:
```
[Placeholder: Urgency headline]

Example: "Waarom Q2 2026 cruciaal is"
```

**THREE DEADLINE BOXES** (Horizontal layout):

**Box 1**:
```
Icon: [Calendar icon]
Date: [🗓️ 1 JANUARI 2027 — DEADLINE]

Heading: [Participatieverordening deadline]

Body:
[Wet Versterking Participatie (van kracht 1-1-2025) verplicht participatieverordening, niet digitale tools — maar meetbare data is cruciaal voor verantwoording]
- 342 gemeenten moeten verordening opstellen
- Eerste adopters hebben de data om impact te bewijzen
```

**Box 2**:
```
Icon: [Money/Euro icon]
Date: [💰 31 MAART 2026]

Heading: [BZK Innovatiebudget Deadline]

Body:
[Totaalbudget €3M voor digitale overheidsinnovatie (Bron: digitaleoverheid.nl)]
- Subsidie beschikbaar voor consortia
- 25-40% co-financiering vereist
```

**Box 3**:
```
Icon: [Target icon]
Date: [🎯 Q2 2026]

Heading: [8 Exclusieve Pilotplaatsen]

Body:
[Placeholder: Pilot details]
- Groningen, Nijmegen + 6
- Na Q1: wachtlijst
```

**LARGE CTA BUTTON**:
```
Button text: [Placeholder: "Boek Gesprek Deze Week"]
Button style: Extra large, high contrast
Below button: [Placeholder: "Laatste kans voor subsidie"]
```

**Design Notes**:
- Boxes: Cards with colored borders (different per deadline)
- Visual hierarchy: Icons → Date → Heading → Body
- Background: Subtle gradient or pattern for emphasis
- Mobile: Stack vertically

---

### 9. FOOTER

**Layout**: Multi-column footer

**Column 1 - Platform**:
```
Links:
- [Demo Video]
- [Feature Overview]
- [Technical Specs]
- [Security & Privacy]
```

**Column 2 - Voor Gemeenten**:
```
Links:
- [ROI Calculator]
- [VNG Framework Info]
- [BZK Subsidie Hulp]
- [Case Studies]
```

**Column 3 - Resources**:
```
Links:
- [Business Case (PDF)]
- [Implementation Guide]
- [Pricing Tiers]
- [FAQ]
```

**Column 4 - Contact**:
```
- [Boek Demo]
- [Email: gemeente@karmakaart.nl]
- [Tel: Placeholder number]
- [LinkedIn icon]
```

**Bottom Bar**:
```
Left side:
"🇳🇱 [Placeholder: Social proof badges]"
Examples:
- "Pilot in Groningen"
- "AVG-compliant"
- "VNG Framework compatible"

Center:
[Privacy Policy] | [Terms] | [Cookies]

Right side:
"Met ❤️ [Placeholder: Made in NL tagline]"
```

**Design Notes**:
- Logo top of footer (left-aligned)
- Columns: Equal width desktop, stack mobile
- Links: Secondary color, hover underline
- Bottom bar: Smaller text (14px), subtle background

---

## 🎨 Design System Guidelines

### Color Palette (Professional Government)
```
Primary (Trust): [Dutch blue or institutional blue]
Secondary (Action): [Orange or green for CTAs]
Success: [Green for status badges]
Warning: [Orange for urgency]
Background: [Off-white #F9F9F9]
Text Primary: [Dark gray #333333]
Text Secondary: [Medium gray #666666]
Borders: [Light gray #E0E0E0]
```

### Typography
```
Headline Font: [Sans-serif bold - Montserrat, Inter, or similar]
- H1: 48px desktop / 32px mobile
- H2: 36px desktop / 28px mobile
- H3: 24px desktop / 20px mobile

Body Font: [Sans-serif regular - Inter, Open Sans]
- Body: 18px / 16px mobile
- Small: 14px

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
Button Padding: 16px 32px (large), 12px 24px (medium)
```

### Component Styles

**Buttons**:
```
Primary CTA:
- Background: Primary color
- Text: White
- Border-radius: 8px
- Padding: 16px 32px
- Font-size: 16px
- Hover: Darken 10%

Secondary CTA:
- Background: White
- Text: Primary color
- Border: 2px solid primary
- Same other properties
```

**Cards (Statistics/Benefits)**:
```
Background: White
Border: 1px solid #E0E0E0
Border-radius: 12px
Padding: 32px
Shadow: 0 2px 8px rgba(0,0,0,0.08)
Hover: Shadow 0 4px 16px rgba(0,0,0,0.12)
```

**Team/Prospect Cards**:
```
Background: White or light gray
Border-radius: 12px
Padding: 24px
Photo: 120px circle (team) or 80px (prospects)
Name: 18px bold
Role: 14px regular, secondary color
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
- Stack statistics cards vertically
- Reduce heading size
- CTA button full-width

**Two-Column Mission**:
- Stack columns (text first, images second)
- Maintain paragraph line length

**Team Grid (6 members)**:
- Desktop: 3 columns (2 rows)
- Tablet: 2 columns (3 rows)
- Mobile: 1 column (6 rows)

**Prospect Cards (4 cards)**:
- Desktop: 4 columns (1 row)
- Tablet: 2 columns (2 rows)
- Mobile: 1 column (4 rows)

**Logo Bar**:
- Desktop: All logos visible
- Tablet: Horizontal scroll or wrap
- Mobile: 2-3 logos per row, wrap

---

## ✅ Content Checklist (To Fill Later)

### Copy Needed:
- [ ] Hero headline (A/B test 3 options)
- [ ] Hero subheading (2-3 sentences)
- [ ] Problem section (300-500 words)
- [ ] Solution benefits (3 × 150 words)
- [ ] Team bios (6 people)
- [ ] Prospect descriptions (4 cards)
- [ ] Footer links text

### Visual Assets Needed:
- [ ] Hero statistics cards (3 data visualizations)
- [ ] Problem section photo or quote card
- [ ] Team headshots (6 professional photos)
- [ ] Partner logos (6 logos or text cards)
- [ ] Prospect icons (4 icons/logos)
- [ ] Urgency section icons (3 icons)

### Data/Stats Needed:
- [ ] All statistics verified from research
- [ ] ROI calculations confirmed
- [ ] Deadline dates accurate
- [ ] Contact information (email, phone)
- [ ] Legal pages ready (Privacy, Terms)

---

## 🎯 Key Messaging Pillars (To Insert)

**Pillar 1: The Problem**
- [Placeholder: Email chaos, Excel, no data]
- [56% bereid vs 41% actief (Motivaction 2023)]
- [Placeholder: Budget moeilijk verantwoorden]

**Pillar 2: The Solution**
- [Placeholder: Real-time dashboard]
- [Placeholder: VNG-format export]
- [Placeholder: 80% tijdsbesparing]

**Pillar 3: The ROI**
- [Placeholder: 6x return calculation]
- [Placeholder: €25k → €150k]
- [Placeholder: Subsidy coverage 50-75%]

**Pillar 4: The Urgency**
- [Participatieverordening deadline 1 jan 2027]
- [BZK subsidie deadline maart 2026, totaal €3M]
- [Placeholder: 8 pilotplaatsen only]

---

## 📊 Developer Implementation Notes

### Template Modifications Needed:

**Section 2 (Mission)**:
- Add "Solution Section" between Mission and Team
- 3-column layout for benefits

**Section 7 (Advisors)**:
- Change from people to organization cards
- Add stats/status fields
- Last card = CTA form-style

**Add Section 8**:
- New "Urgency CTA" before footer
- 3 deadline boxes + large CTA

**Footer**:
- 4 columns specific to government audience
- Add social proof badges bottom bar

---

**Document Status**: ✅ Template structure + placeholder framework ready  
**Next Steps**: 
1. Developer: Clone About-1 template in Webflow
2. Content Team: Fill placeholders with copy from strategy doc
3. Design Team: Create/source visual assets
4. Review: Test with target audience (gemeente contacts)

**Version**: 1.0 - Template Mapping with Placeholders  
**Last Updated**: January 16, 2025

