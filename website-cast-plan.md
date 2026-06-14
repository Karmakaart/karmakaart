# Website-plan — de vaste cast inzetten op karmakaart-site-react

Plan om de losse persona's op de marketingsite (`Karmakaart/karmakaart-site-react`) te
vervangen door één terugkerende cast (Maya · Marcus · Jan · Lisa · Amir), zodat site,
socials, decks en app dezelfde gezichten tonen. Vignette-bron: [`cast-storytelling.md`](cast-storytelling.md).
Cast-canon: `hero-video/prompts/_characters.md`. Status: **plan ter review — nog geen code.**

---

## 1. Uitgangspunt

De site dóét al aan persona-storytelling (Daan, Fatima, Sandra, Henk), maar elke persoon
komt één keer voor met een naamloze illustratie. Niemand bouwt herkenning op, en Home toont
maar één vrijwilliger terwijl de propositie juist *breedte* is.

**Principe:** niet bijplakken, maar vervangen. Eén cast, overal hetzelfde gezicht. We hebben
de assets al (5 portret-cards + 9 activity-stills + hero-video).

Wat **niet** verandert: de toon (concreet, "geen gedoe", data met bronnen, fictief-disclaimers),
de B2B/B2G-personas (Fatima/Sandra blijven — dat zijn kopers, geen vrijwilligers), de huisstijl.

---

## 2. Site-structuur: voor → na

| | Nu | Na |
|---|---|---|
| Home | 1 losse vrijwilliger (Daan) | Cast-etalage (5 buurtgenoten) + Maya als uitgelichte story |
| — | *geen consument-pagina* | **Nieuw: `/verhalen`** — de volledige 5 vignettes |
| Gemeentes | Sandra, losse illos | Sandra + cast-strip "de mensen achter je cijfers" |
| Organisaties | Fatima, losse illos | Fatima (ongewijzigd) + optionele cast-strip |
| Nav | Home · Organisaties · Gemeentes · Contact | + **Verhalen** (tussen Home en Organisaties) |

---

## 3. Home — nieuwe copy per sectie

### 3a. Hero — kleine aanpassing
Behoud `h1` "Doe iets goeds in jouw buurt". De subtitle noemt al Henk/voorlezen/boodschappen —
dat blijft, want het zijn nu **cast-activiteiten** (Jan bezoekt Henk, Marcus leest voor).
**Eén fix:** de hero-knoppen ("Voor organisaties" / "Voor gemeentes") sturen de consument weg
naar de koperspagina's. Voeg een consument-CTA toe als primaire knop:

> Primair: **"Bekijk de verhalen"** → `/verhalen`  ·  Secundair behoudt "Voor organisaties / gemeentes"

*(Open punt: zodra de app live is wordt dit "Download de app".)*

### 3b. NIEUW blok — "Vijf buurtgenoten, vijf redenen" (vervangt niets, komt na *Hoe het werkt*)

> **Eyebrow:** Wie doet er mee
> **H2:** Geen twee vrijwilligers doen het om dezelfde reden
> **Intro:** En dat is precies het punt. De één geeft om de buurt, de ander om dieren, om mensen,
> om wie net is komen wonen. KarmaKaart laat je doen wat bij jóú past.

Vijf portretkaarten (`card_*.png`), elk: portret · naam · motivatie-label · pull-quote · activiteit-tag.

| Portret | Naam | Label | Pull-quote | Activiteit |
|---|---|---|---|---|
| `card_maya` | **Maya, 28** | Natuur & klimaat | "Ik dacht steeds: iemand zou daar iets aan moeten doen. Tot ik doorhad dat ik die iemand kon zijn." | zwerfafval · 1–2 uur |
| `card_marcus` | **Marcus, 35** | Mensen & sociaal | "Ik ben niet zo'n vergader-vrijwilliger. Ik wil gewoon dingen dóén, met mensen." | voorlezen · tot 1 uur |
| `card_jan` | **Jan, 76** | Verbinding | "We praten, en we zwijgen ook gewoon samen. Voor hem ben ik aanspraak." | koffie met Henk · 1–2 uur |
| `card_lisa` | **Lisa, 28** | Dieren | "Ik heb hem niet gered of zo. Ik heb hem gewoon uitgelaten. Dat was genoeg." | asiel · tot 1 uur |
| `card_amir` | **Amir, 38** | Nieuwkomers | "Iemand hielp mij de weg te vinden. Nu ben ik die iemand." | taalmaatje · 1–2 uur |

CTA onder het blok: **"Lees hun verhalen →"** `/verhalen`.

### 3c. Case-story — Daan wordt Maya (directe swap)
De bestaande `case-story` sectie gebruikt al `fp-1.png` (Maya's zwerfafval-scène). Vervang de Daan-tekst:

**Voor:** "Daan wilde al twee jaar iets doen" — 31, zzp'er, formulier van twaalf velden…
**Na:**

> **Eyebrow:** Waarom dit ertoe doet
> **H2:** Maya kon niet meer langs dat bruggetje fietsen
> **Quote:** "Ik dacht steeds: iemand zou daar iets aan moeten doen. Tot ik doorhad dat ik die iemand kon zijn."
> **Body:** Elke ochtend fietste Maya (28) over het bruggetje bij het park, en elke ochtend lag er meer troep. Blikjes, een kapotte step, weer een tasje. Ze had geen vaste vrije dag en geen zin in een formulier van drie pagina's.
> Op de kaart zag ze dat er die zaterdag een opruimactie was, tien minuten van huis. Aanmelden, komen, zakje pakken. Na twee uur was het bruggetje schoon.
> **Disclaimer (behouden):** *Dit scenario is gebaseerd op gesprekken met gemeenten en organisaties. Namen zijn fictief.*

### 3d. VOG-sectie & "Samen doen" — ongewijzigd van structuur, beeld naar cast
- VOG-sectie (`fp-2.png`): koppel aan een VOG-activiteit uit de cast (Jan→Henk of Amir→taalmaatje). Beeld evt. vervangen door `scene3_ouderenbezoek`.
- "Neem iemand mee" (`fp-3.png`, soep koken): vervang beeld door `scene8_samenkoken` (Lisa + Maya). Copy blijft.

---

## 4. NIEUW: `/verhalen` — de consument-pagina

De pagina die nu ontbreekt. Host de volledige anthologie.

> **Hero H1:** Vijf buurtgenoten. Vijf redenen. Eén kaart.
> **Intro:** Dit zijn geen abstracte goede doelen. Dit zijn mensen uit je eigen straat, elk met hun eigen reden om mee te doen. Misschien herken je jezelf in één van ze.

Daaronder de **5 vignettes** uit [`cast-storytelling.md`](cast-storytelling.md) (kop · het moment · activiteit-regel · pull-quote), elk met een activity-still als beeld:

| Vignette | Beeld-asset |
|---|---|
| Maya — zwerfafval | `fp-1.png` (of `scene7`/`scene1`) |
| Marcus — voorlezen | `scene4_voorlezen` |
| Jan — koffie met Henk | `scene3_ouderenbezoek` |
| Lisa — honden uitlaten | `scene7_honduitlaten` (zie open punt: hond/Lisa) |
| Amir — taalmaatje | **Scene 10 (pending, credits)** — tot dan `card_amir` |

> **Afsluiter / CTA:** Welke reden is van jou? — knop "Open de kaart" / "Download de app".

Vignette-volgorde-advies: Maya (MVP, sterkste "zonder gedoe") → Marcus → Lisa → Jan (emotioneel hart) → Amir.

---

## 5. Gemeentes & Organisaties — de cast-tie-in

Behoud Sandra (B2G) en Fatima (B2B) volledig. Voeg op **Gemeentes** één strip toe die data aan
mensen koppelt — direct na de Sandra-case of de oplossing-sectie:

> **Eyebrow:** De mensen achter de cijfers
> **H2:** Elk getal op het dashboard is iemand uit de wijk
> **Body:** Sandra's dashboard telt geen abstracties. Het telt Maya die het park opruimt, Jan die bij Henk koffie drinkt, Amir die een taalmaatje is. (rij van 5 `card_*.png` portretten)

Op Organisaties optioneel dezelfde strip; lagere prioriteit.

---

## 6. Asset-lijst — overzetten naar `karmakaart-site-react/public/`

Bron: `C:\dev\karmakaart\hero-video\marketing-activities\`. Voorstel: in een submap `public/cast/`.

| Bron | Doel | Gebruik |
|---|---|---|
| `card_maya_v1.png` … `card_amir_v1.png` (5) | `public/cast/card_*.png` | Home-etalage, /verhalen, B2G-strip |
| `scene3_ouderenbezoek_v1.png` | `public/cast/jan-henk.png` | /verhalen, VOG-sectie |
| `scene4_voorlezen_v1.png` | `public/cast/marcus-voorlezen.png` | /verhalen |
| `scene7_honduitlaten_v1.png` | `public/cast/lisa-dieren.png` | /verhalen |
| `scene8_samenkoken_v1.png` | `public/cast/samen-koken.png` | Home "Samen doen" |
| *(Scene 10 Amir — pending credits)* | `public/cast/amir-taalmaatje.png` | /verhalen (later) |

`fp-1.png` blijft (= Maya's zwerfafval). De stale `karmakaart_hero_desktop.mp4` (mei-v1) kan
later vervangen worden door de AE-export — los traject.

---

## 7. Copy-accuratesse (los van de cast, bij het "nalopen" gezien)
- **Consument-CTA ontbreekt** — Home stuurt de consument naar koperspagina's. Opgelost via 3a + de /verhalen-knoppen.
- **Stat-check** — naast je gecorrigeerde research leggen: org-pagina zegt "59% zou meer doen" (CLAUDE.md noemde 56%); Home "70% wil anderen helpen" en "46% eenzaam (RIVM 2024)" verifiëren. Aparte mini-audit, blokkeert dit plan niet.
- **package.json** `"name": "larmakaart-site"` — typo (cosmetisch).

---

## 8. Bouwvolgorde (zodra goedgekeurd)
1. Assets overzetten naar `public/cast/`.
2. Home: cast-etalage-blok (3b) + Daan→Maya swap (3c) + hero-CTA (3a).
3. `/verhalen`-pagina + route + nav-link.
4. Gemeentes cast-strip (5).
5. Beeld-swaps VOG/Samen (3d) + optionele Organisaties-strip.
6. (later) Amir Scene 10 als credits er zijn; stat-audit.

Elke stap is los te reviewen en te mergen.

---

## 9. Open beslissingen
- **`/verhalen` of `/meedoen`** als route-naam? (advies: `/verhalen` — past bij storytelling.)
- **Henk vs Jan** in scene6/9 van de activity-set (boodschappen/klusje): is de oudere man daar Jan of Henk? Bepaalt bijschriften.
- **Hond & Lisa:** `scene7` toont Maya met Lisa's golden retriever. Voor /verhalen Lisa's dieren-beeld: asiel-still maken (credits) of `scene2_moestuin` (Lisa+hond) hergebruiken.
- **Consument-CTA-doel:** app-store-link, demo, of wachtlijst? Bepaalt de knop-tekst overal.
