# Scene 5 — Group cleanup (collective action)

## Beats
All 4 leads (Maya, Marcus, Lisa with golden retriever, Jan) plus 6-8 diverse extras working together to clean up the litter-strewn park from Scene 1. Calm, purposeful, communal feeling — not staged, not posed. Style consistency is the critical fix here (originally the 4 leads looked different than their solo shots).

## Keyframe — Nano Banana 2

**Model**: `nano_banana_2`
**Aspect ratio**: `16:9`
**Medias** (5 refs — style anchor FIRST, then 4 leads in narrative order):
- `de06a4b0-49c9-4fce-b51f-05f301ada70a` → `fp-1.png` style anchor
- `e54d9e79-dff4-477c-bfe7-f9a6f5462ecc` → Maya v2 keyframe
- `06513f84-1513-4172-a7b3-2a1dda6e8535` → Marcus v3 keyframe
- `87c943ec-e2ff-4c8d-ae2e-a877e4b23a72` → Lisa v2 keyframe
- `d6d6c961-8cde-4eef-a4f0-facb68c2758b` → Jan v3 keyframe

**Prompt**:
> FLAT 2D EDITORIAL ILLUSTRATION in the exact style of the fp-1.png reference image — minimal facial detail, color blocking with very subtle gradient hints, matte printed quality, no rendered 3D feel, no smooth digital painting, simple iconic faces, no harsh outlines. Match the visual flatness of fp-1.png exactly.
>
> A diverse group of about 10-12 volunteers cleaning up an autumn city park together. In the foreground, FOUR recognizable lead characters working as a team:
> - MAYA: Middle Eastern woman, late 20s, long dark hair, mustard-yellow cardigan, bending down to pick up a plastic bottle from the grass.
> - MARCUS: Black man, mid 30s, short afro, teal hoodie, holding open a black trash bag, gathering wrappers into it.
> - LISA: Blonde woman, late 20s, pink puffer, olive trousers, holding a piece of litter, golden retriever sitting calmly at her feet.
> - JAN: Elderly Dutch man, mid 70s, white hair, green gardening apron over cream sweater, sleeves rolled up, using a small grabber tool to pick up litter from the path.
>
> Around them: 6-8 diverse extras of varied ages and backgrounds — some bending to pick up trash, some holding bags, some chatting, all engaged in the cleanup. The park feels lived-in and communal, not staged.
>
> The litter on the ground is visibly being cleared — some patches still messy, some clean. Trees in warm autumn colors, faint city skyline far behind, soft late-afternoon golden light.
>
> Muted earthy palette with warm autumn oranges and dusty teals, KarmaKaart brand aesthetic matching fp-1.png exactly. Faces must match their solo keyframes — same painterly flat style, same colors, same features.

**Negative**: looking at camera, demo for advertisement pose, Pixar style, 3D animation, rendered character, glossy 3D render, smooth digital painting style, detailed facial features, photorealistic skin, photo-realistic, saturated colors, characters posing, characters smiling at camera, harsh outlines, comic book style.

## Keyframe v4 PENDING (Jan + Marcus item fixes)

User feedback on v5 clip + the v3 keyframe it used: Jan stands too far from the group, Jan already has a can stuck on his grabber (which doesn't release during the clip), and Marcus holds BOTH the trash bag AND plastic litter in his hands (should only be holding the empty bag).

**Re-roll keyframe v4 with these specific corrections** (when MCP reconnects):

- **Model**: `nano_banana_2`, aspect_ratio `16:9`
- **Medias** (same 5 as before):
  - `de06a4b0-...` (fp-1.png style)
  - `e54d9e79-...` (Maya)
  - `06513f84-...` (Marcus)
  - `87c943ec-...` (Lisa)
  - `d6d6c961-...` (Jan)
- **Key prompt changes**:
  - Jan CLOSE TO THE GROUP near Marcus/Lisa (not far away)
  - Jan's grabber EMPTY at start — open jaws, no can, no item on grabber
  - Marcus's hands BOTH on the empty trash bag, NO plastic, NO litter in either hand
  - Maya still standing upright with content smile
  - Lisa standing close to Marcus, holding ONE piece of paper litter (will drop into Marcus's bag during clip)

**Then re-roll clip v6** via Seedance 2.0, 8s, normal pacing. Motion: Lisa drops her paper litter into Marcus's bag. Jan uses grabber to pick up a piece of litter from the ground (grabber is empty at start), brings it to Marcus's bag, releases (drops it in). Maya watches happily. Marcus holds bag steady throughout.

---

## Clip — Seedance 2.0 (locked model after v3-vs-v4 comparison)

**v4 status**: Maya standing-and-happy variant approved compositionally. User feedback: slightly too slow-mo, want longer duration, gripper-to-bag motion should be FASTER.

**v5 PENDING** when MCP reconnects:
- **Model**: `seedance_2_0`
- **Duration**: 8s (longer than v4's 5s)
- **Keyframe**: `445ede99-aa26-4de7-bc24-dc4f44e4b699` (Maya standing variant)
- **Motion prompt**:
> Natural-paced group park cleanup, normal real-time speed (NOT slow motion). Four lead characters and 6-8 extras working at a calm but lively pace, not languid. Maya stays standing upright the whole time with a warm content smile, hands relaxed at her sides, watching her team. Marcus holds his open black trash bag with both hands, ready to receive litter. Lisa stands with a piece of litter, the golden retriever beside her gives a small tail wag and brief look around. JAN moves his grabber with PURPOSEFUL, BRISK natural speed: extends quickly, clamps a piece of litter from the ground, smoothly and FAST swings it over toward Marcus’s bag, opens to drop the litter in. The grabber motion should feel decisive and quick, like a regular person doing a cleanup task at normal pace — NOT slow, NOT lingering. Jan's other hand stays at his side, empty. Background extras have gentle natural cleanup motion at normal real-time speed. All four lead characters remain visible. Painterly flat illustration, matte color blocking, NO Pixar style, NO 3D rendering, NO smiling at camera, NO camera movement, NO falling leaves, NO slow-motion feel, NORMAL REAL-TIME PACING throughout.

**Original v4 prompt** (for reference):
