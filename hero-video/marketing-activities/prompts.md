# KarmaKaart marketing — activiteiten-set (liggend 16:9, web/hero)

Model: `nano_banana_2` (Nano Banana Pro), `--aspect_ratio 16:9 --resolution 2k`.
Refs per scene: `fp-1.png` FIRST (style), dan de character solo-keyframe(s).

## Style spine (verbatim, elke prompt)
FLAT 2D EDITORIAL ILLUSTRATION matching the fp-1.png reference exactly — minimal facial
detail, color blocking with very subtle gradient hints only, matte printed quality, no
rendered 3D feel, no smooth digital painting, simple iconic faces, no harsh outlines.
Muted earthy palette with warm autumn oranges and dusty teals, KarmaKaart brand aesthetic.

## Relationship instruction (verbatim)
Use the attached style reference ONLY for painterly flatness and color palette — do NOT
copy its composition, framing, or prop scale.

## Negatives (inline, elke prompt)
Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed
facial features, harsh outlines, comic book style, oversized props, any logo or wordmark
or text anywhere, empty sky.

## Cast (verbatim)
- Maya: Middle Eastern woman, late 20s, long straight dark hair, mustard-yellow knit cardigan over plain white t-shirt, dark jeans, soft thoughtful expression, painterly flat illustration
- Marcus: Black man, mid 30s, short afro, warm-toned skin, teal cotton hoodie over a white t-shirt, slim grey jeans, grounded attentive expression, painterly flat illustration
- Lisa: Blonde woman, late 20s, wavy shoulder-length hair, soft dusty-pink puffer jacket, olive green trousers, friendly grounded expression, painterly flat illustration + golden retriever, mid-size
- Jan: Elderly Dutch man, mid 70s, neatly combed white hair, light tanned skin, dark green canvas gardening apron over cream knit sweater, dark trousers, weathered hands, kind alert expression, painterly flat illustration
- Amir: Middle Eastern man, late 30s, short dark hair, neatly trimmed short black beard, warm medium-brown skin, rust-brown crew-neck sweater over a light collared shirt, calm warm expression, painterly flat illustration

## Scenes
1. Buurtvergroening — Marcus + Jan plant a young tree in a street planting strip; brick row houses fill the background. Calm open space upper-left for headline.
2. Buurtmoestuin — Lisa + golden retriever tend a raised vegetable bed, holding fresh harvest; community garden fences + greenery fill background.
3. Ouderenbezoek — Maya having coffee with Jan at his kitchen table; warm interior, plants on the windowsill fill background. The "Henk" storytelling moment.
4. Voorlezen — Marcus reading a picture book to two small children in a cozy library/community-house reading corner; bookshelves fill the background.
5. Taalmaatjes — Maya and one new adult character at a café table with notebooks and coffee, mid-conversation; café interior fills background.

## DONE 2026-06-14 — Scene 10: Taalmaatjes (Amir) → `scene10_taalmaatjes_amir_v1.png`
Amir's eigen taalmaatje-scene, hoort bij zijn vignette (helpt een nieuwkomer met een brief).
**Vervangt de off-canon `scene5_taalmaatjes_v1.png`** (naamloze man van vóór Amir). Ook in site-repo
gezet als `public/cast/scene_taalmaatjes.png` (de daar gevlagde placeholder is hiermee opgelost).
Refs in volgorde: `fp-1.png` (stijl) + `card_amir_v1.png` (Amir identiteit).
Model `nano_banana_2`, `--aspect_ratio 16:9 --resolution 2k`.

Prompt (verbatim):
> Two people at a small café table, mid-conversation, warm and friendly. On the right: Middle Eastern man, late 30s, short dark hair, neatly trimmed short black beard, warm medium-brown skin, rust-brown crew-neck sweater over a light collared shirt, calm warm expression, painterly flat illustration. On the left: a younger newcomer man, mid 20s, short black hair, warm brown skin, simple olive jacket, attentive hopeful expression, painterly flat illustration. On the table between them: two coffee cups, an open notebook, and an official-looking letter. The older man points gently at the letter, explaining; the younger man follows along. A cozy café interior fills the entire background — wooden counter, shelves, warm hanging lights, a few blurred patrons as simple flat color blocks, no empty wall. Calm open space in the upper-left for a headline. FLAT 2D EDITORIAL ILLUSTRATION matching the fp-1.png reference exactly — minimal facial detail, color blocking with very subtle gradient hints only, matte printed quality, no rendered 3D feel, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy palette with warm autumn oranges and dusty teals, KarmaKaart brand aesthetic. Use the attached style reference ONLY for painterly flatness and color palette — do NOT copy its composition, framing, or prop scale. Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed facial features, harsh outlines, comic book style, oversized props, any logo or wordmark or text anywhere, empty sky.

## DONE 2026-06-14 — Lisa card re-gen → `card_lisa_v3.png` (canoniek)
Opgelost. v3 matcht nu de vlakke matte stijl van Maya/Marcus (grote open amandelogen, geen
blos). Recept dat werkte: refs `fp-1.png` (stijl) + **`card_marcus_v1.png` (gezichts-/oogstijl
als directe target)**, model `nano_banana_2`, `1:1 2k`. De prompt drukte op het échte verschil:
"flat matte, NOT soft/painterly, no rosy blushy cheeks" — niet alleen oggrootte. Ook nieuwe
Lisa-scène gemaakt met v3 als identiteits-ref: `scene7_honduitlaten_lisa_v1.png` (hond uitlaten
bij asiel — vervangt de oude Maya+hond scene7, canon-fix dieren=Lisa).

<details><summary>Oorspronkelijke pending-notitie (eye-style fix)</summary>

`card_lisa_v1.png` had te kleine/"kraaloog"-ogen — inconsistent met Marcus/Amir (grote, open
amandelogen). Recept als de andere cards:
Model `nano_banana_2`, `--aspect_ratio 1:1 --resolution 2k`, ref `fp-1.png` (stijl).
Kernfix in de prompt: **"eyes larger and open, almond-shaped, clearly defined — matching the eye
style of the other KarmaKaart cast cards, NOT small or beady."**

Prompt (verbatim):
> Square portrait card, 1:1 aspect. Upper body — head, shoulders and upper chest — of a single person, centered, subtle three-quarter pose, soft gentle eye contact with the viewer, calm warm slight smile. The person: Blonde woman, late 20s, wavy shoulder-length hair, soft dusty-pink puffer jacket over a white t-shirt, friendly grounded expression, painterly flat illustration. IMPORTANT eyes larger and open, almond-shaped, clearly defined with visible iris — matching the open eye style of the other cast cards, NOT small or beady or squinting. Plain flat muted terracotta color-block background filling the entire frame, no objects. FLAT 2D EDITORIAL ILLUSTRATION matching the fp-1.png reference exactly — minimal facial detail, color blocking with very subtle gradient hints only, matte printed quality, no rendered 3D feel, no smooth digital painting, simple iconic faces, no harsh outlines. Muted earthy palette with warm autumn oranges and dusty teals, KarmaKaart brand aesthetic. Use the attached style reference ONLY for painterly flatness and color palette — do NOT copy its composition, framing, or prop scale. Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed facial features, harsh outlines, comic book style, oversized props, small beady eyes, any logo or wordmark or text anywhere.

</details>

## DONE 2026-06-14 — Scene 7 (Lisa): hond uitlaten bij asiel → `scene7_honduitlaten_lisa_v1.png`
Vervangt de oude `scene7_honduitlaten_v1.png` (Maya + hond) — canon-fix: dieren = Lisa.
Refs in volgorde: `fp-1.png` (stijl) + `card_lisa_v3.png` (Lisa identiteit). Model `nano_banana_2`, `16:9 2k`.

Prompt (verbatim):
> Wide editorial illustration, 16:9. A blonde woman in her late 20s — wavy shoulder-length hair, soft dusty-pink puffer jacket over a white t-shirt, olive-green trousers — walks a mid-size golden retriever on a leash through the fenced outdoor yard of an animal shelter. She holds the leash in one hand and smiles warmly down at the dog, mid-stride; the dog trots happily beside her. CRITICAL — render her face in EXACTLY the flat matte editorial style of the SECOND attached reference (her cast card): large open ALMOND-shaped eyes clearly defined with visible iris, NOT beady or squinting, crisp flat matte color-blocking, minimal facial detail, no rosy blushy cheeks, no soft painterly shading. Keep her identity, hair and clothing consistent with that reference. Background fills the ENTIRE frame as simple flat color blocks: a low single-storey animal-shelter building with kennel doors, a wire-mesh fence, and a few green shrubs and trees — no empty sky visible. Calm open negative space in the upper-left for a headline. Use the FIRST attached reference ONLY for painterly flatness and colour palette — do NOT copy its composition, framing or prop scale. Muted earthy palette with warm autumn oranges and dusty teals, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed facial features, harsh outlines, comic book style, small beady eyes, rosy cheeks, oversized props, any logo or wordmark or text anywhere, empty sky.

## DONE 2026-06-14 — Scene 11 (Lisa): asiel band-moment → `scene11_lisa_asiel_portret_v1.png`
Emotioneel anker voor Lisa's "dieren"-motivatie. Refs in volgorde: `fp-1.png` (stijl) + `card_lisa_v3.png` (Lisa identiteit). Model `nano_banana_2`, `16:9 2k`.

Prompt (verbatim):
> Warm editorial illustration, 16:9. A blonde woman in her late 20s — wavy shoulder-length hair, soft dusty-pink puffer jacket over a white t-shirt, olive-green trousers — kneels on one knee inside an animal shelter, gently embracing a mid-size golden retriever with both arms. Her face is close to the dog's head, warmly smiling with eyes open and soft, looking at the dog with affection; the dog leans into her, calm and trusting. CRITICAL — render her face in EXACTLY the flat matte editorial style of the SECOND attached reference (her cast card): large open ALMOND-shaped eyes clearly defined with visible iris, NOT beady or squinting, crisp flat matte color-blocking, minimal facial detail, no rosy blushy cheeks, no soft painterly shading. Keep her identity, hair and clothing consistent with that reference. Background fills the ENTIRE frame as simple flat color blocks: a row of animal-shelter kennel doors with wire mesh, a concrete floor, a few green potted plants — no empty wall or sky visible. Calm open negative space in the upper-right for a headline. Use the FIRST attached reference ONLY for painterly flatness and colour palette — do NOT copy its composition, framing or prop scale. Muted earthy palette with warm autumn oranges and dusty teals, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed facial features, harsh outlines, comic book style, small beady eyes, rosy cheeks, oversized props, any logo or wordmark or text anywhere, empty sky.

## DONE 2026-06-14 — Lisa solo-portret (verticaal) → `lisa_solo_outdoor_v1.png`
Tweede solo-pose voor social/marketing-variatie (naast de 1:1-card). Refs in volgorde: `fp-1.png` (stijl) + `card_lisa_v3.png` (Lisa identiteit). Model `nano_banana_2`, `3:4 2k`.

Prompt (verbatim):
> Vertical editorial illustration portrait, 3:4. Three-quarter-length view of a single blonde woman in her late 20s — wavy shoulder-length hair, soft dusty-pink puffer jacket over a white t-shirt, olive-green trousers — standing relaxed outdoors, hands loosely tucked in her jacket pockets, weight on one leg, body turned slightly three-quarter, looking toward the viewer with a calm warm smile. CRITICAL — render her face in EXACTLY the flat matte editorial style of the SECOND attached reference (her cast card): large open ALMOND-shaped eyes clearly defined with visible iris, NOT beady or squinting, crisp flat matte color-blocking, minimal facial detail, no rosy blushy cheeks, no soft painterly shading. Keep her identity, hair and clothing consistent with that reference. Background fills the ENTIRE frame as simple flat color blocks: a soft autumn park — trees, hedges and a path in muted oranges and dusty teals fill the upper background, only a thin sliver of soft sky at the very top. Calm uncluttered area behind her head for a headline. Use the FIRST attached reference ONLY for painterly flatness and colour palette — do NOT copy its composition, framing or prop scale. Muted earthy palette, KarmaKaart brand aesthetic. Avoid: Pixar style, 3D render, smooth digital painting, photorealistic skin, detailed facial features, harsh outlines, comic book style, small beady eyes, rosy cheeks, oversized props, any logo or wordmark or text anywhere, large empty sky.
