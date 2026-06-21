#!/usr/bin/env bash
# KarmaKaart gemeente-video — ROUGH CUT / animatic (ffmpeg).
# 5 character clips + map (grijs open -> kleur payoff) + logo-eindkaart.
# NB: dit is een rough cut. De gepolijste "dots die aangaan" + VO = After Effects.
# Silent (geen audio) — bedoeld als VO-bed.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
CL="$HERE/clips"; KF="$HERE/keyframes"
B="$HERE/_build"; mkdir -p "$B"
OUT="$HERE/gemeente_roughcut_v1.mp4"
FONT="$HERE/_font.ttf"

W=1280; H=720; FPS=24
fit="scale=$W:$H:force_original_aspect_ratio=increase,crop=$W:$H,fps=$FPS,format=yuv420p"

echo "== prep font + endcard =="
# Copy a system font locally (avoids Windows drive-colon escaping in drawtext; not committed)
cp /c/Windows/Fonts/segoeuib.ttf "$FONT"
# Eindkaart: warm crème bg + logo + tagline
ffmpeg -y -loglevel error \
  -f lavfi -i color=c=0xECE4D3:s=${W}x${H} -i "$HERE/../logo/logo.png" \
  -filter_complex "[1]scale=720:-1[lg];[0][lg]overlay=(W-w)/2:170[bg];[bg]drawtext=fontfile=_font.ttf:text='Eén kaart. De hele wijk in beweging.':fontcolor=0x1E2B45:fontsize=40:x=(w-text_w)/2:y=540" \
  -frames:v 1 "$HERE/_endcard.png"

echo "== render segments =="
# 1. Map open — grijs, fade-in uit zwart (5s)
ffmpeg -y -loglevel error -loop 1 -t 5 -i "$KF/map_wijk_base_v1.png" \
  -vf "scale=$W:$H:force_original_aspect_ratio=increase,crop=$W:$H,hue=s=0,fade=t=in:st=0:d=1,fps=$FPS,format=yuv420p" -r $FPS "$B/s1.mp4"

# 2. Daan opent telefoon (4s, window 0.5-4.5)
ffmpeg -y -loglevel error -i "$CL/shot2_daan_phone_anim_v1.mp4" \
  -vf "trim=0.5:4.5,setpts=PTS-STARTPTS,$fit" -an "$B/s2.mp4"

# 3. Koffie — het hart (5s)
ffmpeg -y -loglevel error -i "$CL/shot3_daan_henk_koffie_v2.mp4" \
  -vf "trim=0:5,setpts=PTS-STARTPTS,$fit" -an "$B/s3.mp4"

# 4-6. Cascade (elk 3s, window 1.0-4.0)
ffmpeg -y -loglevel error -i "$CL/cascade_jan_koffie_anim_v1.mp4" \
  -vf "trim=1:4,setpts=PTS-STARTPTS,$fit" -an "$B/s4.mp4"
ffmpeg -y -loglevel error -i "$CL/cascade_amir_taalmaatje_anim_v2.mp4" \
  -vf "trim=1:4,setpts=PTS-STARTPTS,$fit" -an "$B/s5.mp4"
ffmpeg -y -loglevel error -i "$CL/cascade_marcus_voorlezen_anim_v1.mp4" \
  -vf "trim=1:4,setpts=PTS-STARTPTS,$fit" -an "$B/s6.mp4"

# 7. Map payoff — saturatie ramp grijs->kleur over 4s (5s totaal)
ffmpeg -y -loglevel error -loop 1 -t 5 -i "$KF/map_wijk_base_v1.png" \
  -vf "scale=$W:$H:force_original_aspect_ratio=increase,crop=$W:$H,hue=s='min(1,t/4)',fps=$FPS,format=yuv420p" -r $FPS "$B/s7.mp4"

# 8. Eindkaart (3.5s)
ffmpeg -y -loglevel error -loop 1 -t 3.5 -i "$HERE/_endcard.png" \
  -vf "$fit,fade=t=in:st=0:d=0.4" -r $FPS "$B/s8.mp4"

echo "== xfade concat =="
XF=0.4
# offsets cumulatief
O1=$(awk "BEGIN{print 5-$XF}")
O2=$(awk "BEGIN{print 5+4-2*$XF}")
O3=$(awk "BEGIN{print 5+4+5-3*$XF}")
O4=$(awk "BEGIN{print 5+4+5+3-4*$XF}")
O5=$(awk "BEGIN{print 5+4+5+3+3-5*$XF}")
O6=$(awk "BEGIN{print 5+4+5+3+3+3-6*$XF}")
O7=$(awk "BEGIN{print 5+4+5+3+3+3+5-7*$XF}")

ffmpeg -y -loglevel error -stats \
  -i "$B/s1.mp4" -i "$B/s2.mp4" -i "$B/s3.mp4" -i "$B/s4.mp4" \
  -i "$B/s5.mp4" -i "$B/s6.mp4" -i "$B/s7.mp4" -i "$B/s8.mp4" \
  -filter_complex "\
[0][1]xfade=transition=fade:duration=$XF:offset=$O1[x1]; \
[x1][2]xfade=transition=fade:duration=$XF:offset=$O2[x2]; \
[x2][3]xfade=transition=fade:duration=$XF:offset=$O3[x3]; \
[x3][4]xfade=transition=fade:duration=$XF:offset=$O4[x4]; \
[x4][5]xfade=transition=fade:duration=$XF:offset=$O5[x5]; \
[x5][6]xfade=transition=fade:duration=$XF:offset=$O6[x6]; \
[x6][7]xfade=transition=fade:duration=$XF:offset=$O7[v]" \
  -map "[v]" -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart "$OUT"

echo "Wrote $OUT"
ffprobe -v error -show_entries format=duration:stream=width,height -of default=noprint_wrappers=1 "$OUT" | head -4