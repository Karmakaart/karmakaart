#!/usr/bin/env bash
# KarmaKaart desktop hero v9 — 2026-06-04.
# Changes vs v7: hands/can close-up DROPPED; cleanup is now one Marcus<->Maya
# CONNECTION beat (drop litter -> look at each other -> shared smile). Person
# scenes given GENEROUS windows (intentionally long, easy to trim down later).
# 7 clips, 0.5s xfade. ~42s (a generous cut to edit from).

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
CLIPS="$HERE/clips"
OUT="$HERE/karmakaart_hero_desktop_v9.mp4"

C1="$CLIPS/shot1_maya_park_v1.mp4"       # Maya trigger (10s)
C2="$CLIPS/shot2a_marcus_v6.mp4"         # Marcus (10s)
C3="$CLIPS/shot2b_lisa_v8.mp4"           # Lisa (10s)
C4="$CLIPS/shot2c_jan_v5.mp4"            # Jan (5s, capped)
C5="$CLIPS/shot3a_connection_v1.mp4"     # Marcus<->Maya connection (10s)
C6="$CLIPS/shot3c_aerial_four_v2.mp4"    # aerial of the four (5s)
C7="$CLIPS/shot5_horizon_logo_v2.mp4"    # finale logo (5s)

# generous person-scene windows; trim down later by shrinking D values
S1=2.0; D1=7.0   # Maya  2.0-9.0  : frustration -> determined -> tap -> resolve
S2=1.5; D2=8.0   # Marcus 1.5-9.5 : look at phone -> smile -> stand -> walk
S3=1.0; D3=8.0   # Lisa  1.0-9.0  : stand still -> look -> expression -> turn
S4=0.0; D4=5.0   # Jan   full 5s  (re-roll at 10s if more room needed)
S5=1.0; D5=7.5   # connection 1.0-8.5 : drop -> look at each other -> smile
S6=0.3; D6=4.7   # aerial 0.3-5.0
S7=0.0; D7=5.0   # finale
XF=0.5

E1=$(awk "BEGIN{print $S1+$D1}"); E2=$(awk "BEGIN{print $S2+$D2}")
E3=$(awk "BEGIN{print $S3+$D3}"); E4=$(awk "BEGIN{print $S4+$D4}")
E5=$(awk "BEGIN{print $S5+$D5}"); E6=$(awk "BEGIN{print $S6+$D6}")
E7=$(awk "BEGIN{print $S7+$D7}")

O1=$(awk "BEGIN{print $D1 - $XF}")
O2=$(awk "BEGIN{print $D1+$D2 - 2*$XF}")
O3=$(awk "BEGIN{print $D1+$D2+$D3 - 3*$XF}")
O4=$(awk "BEGIN{print $D1+$D2+$D3+$D4 - 4*$XF}")
O5=$(awk "BEGIN{print $D1+$D2+$D3+$D4+$D5 - 5*$XF}")
O6=$(awk "BEGIN{print $D1+$D2+$D3+$D4+$D5+$D6 - 6*$XF}")

ffmpeg -y -loglevel error -stats \
  -i "$C1" -i "$C2" -i "$C3" -i "$C4" -i "$C5" -i "$C6" -i "$C7" \
  -filter_complex "\
[0:v]trim=$S1:$E1,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v0]; \
[1:v]trim=$S2:$E2,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v1]; \
[2:v]trim=$S3:$E3,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v2]; \
[3:v]trim=$S4:$E4,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v3]; \
[4:v]trim=$S5:$E5,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v4]; \
[5:v]trim=$S6:$E6,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v5]; \
[6:v]trim=$S7:$E7,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v6]; \
[v0][v1]xfade=transition=fade:duration=$XF:offset=$O1[vx1]; \
[vx1][v2]xfade=transition=fade:duration=$XF:offset=$O2[vx2]; \
[vx2][v3]xfade=transition=fade:duration=$XF:offset=$O3[vx3]; \
[vx3][v4]xfade=transition=fade:duration=$XF:offset=$O4[vx4]; \
[vx4][v5]xfade=transition=fade:duration=$XF:offset=$O5[vx5]; \
[vx5][v6]xfade=transition=fade:duration=$XF:offset=$O6[vout]; \
[0:a]atrim=$S1:$E1,asetpts=PTS-STARTPTS[a0]; \
[1:a]atrim=$S2:$E2,asetpts=PTS-STARTPTS[a1]; \
[2:a]atrim=$S3:$E3,asetpts=PTS-STARTPTS[a2]; \
[3:a]atrim=$S4:$E4,asetpts=PTS-STARTPTS[a3]; \
[4:a]atrim=$S5:$E5,asetpts=PTS-STARTPTS[a4]; \
[5:a]atrim=$S6:$E6,asetpts=PTS-STARTPTS[a5]; \
[6:a]atrim=$S7:$E7,asetpts=PTS-STARTPTS[a6]; \
[a0][a1]acrossfade=d=$XF:c1=tri:c2=tri[ax1]; \
[ax1][a2]acrossfade=d=$XF:c1=tri:c2=tri[ax2]; \
[ax2][a3]acrossfade=d=$XF:c1=tri:c2=tri[ax3]; \
[ax3][a4]acrossfade=d=$XF:c1=tri:c2=tri[ax4]; \
[ax4][a5]acrossfade=d=$XF:c1=tri:c2=tri[ax5]; \
[ax5][a6]acrossfade=d=$XF:c1=tri:c2=tri[aout]" \
  -map "[vout]" -map "[aout]" \
  -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -ar 48000 \
  -movflags +faststart \
  "$OUT"

echo "Wrote $OUT"
ffprobe -v error -show_entries format=duration:stream=width,height,r_frame_rate,codec_name -of default=noprint_wrappers=1 "$OUT"
