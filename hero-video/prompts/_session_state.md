# Session state — KarmaKaart hero video v2 revision

Snapshot at MCP disconnect (2026-05-14, ~24 cr spent of 820).

## Locked
- `keyframes/shot1_maya_v2.png` — Maya disappointed, litter prominent, mustard cardigan, gradient phone (no UI). Job ID: `e54d9e79-dff4-477c-bfe7-f9a6f5462ecc`
- `clips/shot1_maya_v3.mp4` — Maya 5s: sad→determined expression shift, taps phone, camera steady. Job ID: `3151f720-a50b-4be1-9f10-4b3d238c6b7b`. **User approved.**

## In flight (pending Marcus keyframe re-roll)
- `keyframes/shot2a_marcus_v2.png` — present but superseded. User asked for re-roll: phone should be ON TABLE with notification banner (not in hand), Marcus reaches for phone while placing coffee mug down. Re-roll prompt drafted but NOT submitted (MCP dropped).

## Reusable upload IDs (Higgsfield workspace)
- `441f1f36-1a7c-4de0-b607-33079ed4863e` — original `shot1_maya.png` (Maya char ref)
- `6a46fbfb-541a-46b8-9755-9006cec6b38d` — original `shot2a_marcus.png` (Marcus char ref)
- `de06a4b0-49c9-4fce-b51f-05f301ada70a` — `fp-1.png` (style anchor — reuse on every keyframe call)

## Next when MCP reconnects

**Style learning (applies to ALL upcoming generations)** — user flagged Pixar-drift + oversized phone on the v2 clips:
- Push fp-1.png style anchor MUCH harder
- Pass `fp-1.png` (`de06a4b0-...`) FIRST in medias[] for higher weight
- Use phrasing "FLAT 2D EDITORIAL ILLUSTRATION in the exact style of fp-1.png", "minimal facial detail", "color blocking", "matte printed quality"
- Stronger negative: Pixar, 3D animation, rendered character, smooth digital painting, photorealistic skin, saturated colors, oversized phone
- See `_characters.md` for updated universal style spine + negatives.

**Pending submits**:
1. Jan v3 keyframe — full prompt in `scene4_jan.md` under "v3 PENDING" header. Same scene direction (stands, rolls sleeves) but stricter flat-2D style.
2. After Jan v3 keyframe approved → Kling 3.0 clip with style-locking negatives applied.
3. Scene 5 group cleanup keyframe (multi-character continuity test) — same stricter style.
4. Scene 6+7 merged finale (aerial → horizon → logo, Kling end_image interpolation).

## Locked scenes (4 of 5 desktop scenes done)
- Scene 1 Maya: `clips/shot1_maya_v3.mp4` (10 cr)
- Scene 2 Marcus: `clips/shot2a_marcus_v2.mp4` (10 cr)
- Scene 3 Lisa: `clips/shot2b_lisa_v2.mp4` (10 cr)
- Scene 4 Jan: `clips/shot2c_jan_v2.mp4` (10 cr)

## Pending finalization
- Scene 5 group: keyframe `shot3_group_v3.png` (Maya standing) locked. Clip v4 too slow-motion; v5 pending with 8s duration + faster gripper. Job submitted next when MCP reconnects.
- Scene 6+7 finale: not started.

## Budget so far
- Scenes 1-4 locked: 4 keyframes (~8 cr) + 4 clips (~40 cr) = 48 cr
- Scene 5: 3 keyframe iterations (~6 cr) + 1 Kling clip (10 cr) + 2 Seedance clips (44 cr) = 60 cr
- Iteration rejects (Maya clip v2, Marcus kf v2, Jan kf v2): ~14 cr
- **Total spent: ~130 cr** of 820
- **Remaining: ~690 cr**

## Insight: Seedance 2.0 outperforms Kling 3.0 for multi-character continuity
Seedance preserves character identity dramatically better than Kling for group/multi-character shots. Cost is higher (22 cr vs 10 cr per 5s) but it pays off in fewer re-rolls. Use Seedance for the rest of multi-character work; Kling is fine for solo character shots and landscape/horizon work.

## Budget so far
- Maya keyframe v2: 2 cr
- Maya clip v2 (rejected): 10 cr
- Maya clip v3 (locked): 10 cr
- Marcus keyframe v2 (superseded): 2 cr
- **Total spent: 24 cr**
- **Remaining: ~796 cr** (was 820)

## Continuity strategy (locked)
- Skip Soul training. Use ref-pass: each Nano Banana 2 keyframe call includes (a) the character's original keyframe ID as `medias[]` ref, (b) `fp-1.png` ID as style anchor, (c) verbatim character description from `_characters.md`.
- For group shot: all 4 character keyframe IDs as multi-ref.

## Models
- Keyframes: `nano_banana_2`, 1k resolution (defaults). ~2 cr each.
- Clips: `kling3_0`, 16:9, std mode, sound on, 5s default. ~10 cr each.
- 1k keyframes scale fine into 720p Kling output.
