#!/usr/bin/env bash
# Stitch KarmaKaart desktop hero v3 — all clips re-rolled in strict flat-2D
# style. Group shot extended from 4.0s to 6.0s per user feedback. Total: 22.5s.

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
CLIPS="$HERE/clips"
OUT="$HERE/karmakaart_hero_desktop_v3.mp4"

C1="$CLIPS/shot1_maya_v3.mp4"
C2="$CLIPS/shot2a_marcus_v3.mp4"
C3="$CLIPS/shot2b_lisa_v3.mp4"
C4="$CLIPS/shot2c_jan_v3.mp4"
C5="$CLIPS/shot3_group_v7_seedance_8s.mp4"
C6="$CLIPS/shot4_birdseye_v2.mp4"
C7="$CLIPS/shot5_horizon_logo_v2.mp4"

# Per-clip target durations (seconds, after trim)
D1=4.0; D2=2.5; D3=2.5; D4=2.5; D5=6.0; D6=3.0; D7=5.0
XF=0.5

# Cumulative xfade offsets
O1=$(awk "BEGIN{print $D1 - $XF}")                                # 3.5
O2=$(awk "BEGIN{print $D1 + $D2 - 2*$XF}")                        # 5.5
O3=$(awk "BEGIN{print $D1 + $D2 + $D3 - 3*$XF}")                  # 7.5
O4=$(awk "BEGIN{print $D1 + $D2 + $D3 + $D4 - 4*$XF}")            # 9.5
O5=$(awk "BEGIN{print $D1 + $D2 + $D3 + $D4 + $D5 - 5*$XF}")      # 15.0
O6=$(awk "BEGIN{print $D1 + $D2 + $D3 + $D4 + $D5 + $D6 - 6*$XF}") # 17.5

ffmpeg -y -loglevel error -stats \
  -i "$C1" -i "$C2" -i "$C3" -i "$C4" -i "$C5" -i "$C6" -i "$C7" \
  -filter_complex "\
[0:v]trim=0:$D1,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v0]; \
[1:v]trim=0:$D2,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v1]; \
[2:v]trim=0:$D3,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v2]; \
[3:v]trim=0:$D4,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v3]; \
[4:v]trim=0:$D5,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v4]; \
[5:v]trim=0:$D6,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v5]; \
[6:v]trim=0:$D7,setpts=PTS-STARTPTS,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,format=yuv420p[v6]; \
[v0][v1]xfade=transition=fade:duration=$XF:offset=$O1[vx1]; \
[vx1][v2]xfade=transition=fade:duration=$XF:offset=$O2[vx2]; \
[vx2][v3]xfade=transition=fade:duration=$XF:offset=$O3[vx3]; \
[vx3][v4]xfade=transition=fade:duration=$XF:offset=$O4[vx4]; \
[vx4][v5]xfade=transition=fade:duration=$XF:offset=$O5[vx5]; \
[vx5][v6]xfade=transition=fade:duration=$XF:offset=$O6[vout]; \
[0:a]atrim=0:$D1,asetpts=PTS-STARTPTS[a0]; \
[1:a]atrim=0:$D2,asetpts=PTS-STARTPTS[a1]; \
[2:a]atrim=0:$D3,asetpts=PTS-STARTPTS[a2]; \
[3:a]atrim=0:$D4,asetpts=PTS-STARTPTS[a3]; \
[4:a]atrim=0:$D5,asetpts=PTS-STARTPTS[a4]; \
[5:a]atrim=0:$D6,asetpts=PTS-STARTPTS[a5]; \
[6:a]atrim=0:$D7,asetpts=PTS-STARTPTS[a6]; \
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
