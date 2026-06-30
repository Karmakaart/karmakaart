#!/usr/bin/env bash
# KarmaKaart gemeente-video — ROUGH CUT / animatic (ffmpeg), v3 met "wijk die oplicht" dots + Daan-boog (beats A & B).
# Open: grijze wijk, dots verschijnen dof één voor één (stille problemen).
# Finale: wijk kleurt in + dots lichten warm op één voor één (de cascade), tot alles gloeit.
# Tussenin de 7 character-clips (incl. Daan-aankomst + afscheid). Silent (VO-bed). Gepolijste dots/camera = nog AE-optie.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
CL="$HERE/clips"; KF="$HERE/keyframes"; MAP="$KF/map_wijk_base_v1.png"
B="$HERE/_build"; mkdir -p "$B"
OUT="$HERE/gemeente_roughcut_v3.mp4"
FONT="$HERE/_font.ttf"
W=1280; H=720; FPS=24
fit="scale=$W:$H:force_original_aspect_ratio=increase,crop=$W:$H,fps=$FPS,format=yuv420p"
crop="scale=$W:$H:force_original_aspect_ratio=increase,crop=$W:$H"

# dot centers (op huizenblokken, weg van park/grachten)
CX=(340 450 560 770 980 1080); CY=(200 470 130 480 250 440)

echo "== prep assets (font, endcard, dots) =="
cp /c/Windows/Fonts/segoeuib.ttf "$FONT"
# NB: drawtext vereist fontconfig; bij unset FONTCONFIG_FILE crasht ffmpeg (gyan.dev) → hergebruik bestaande endcard.
if [ ! -f "$HERE/_endcard.png" ]; then
ffmpeg -y -loglevel error -f lavfi -i color=c=0xECE4D3:s=${W}x${H} -i "$HERE/../logo/logo.png" \
  -filter_complex "[1]scale=720:-1[lg];[0][lg]overlay=(W-w)/2:170[bg];[bg]drawtext=fontfile=_font.ttf:text='Eén kaart. De hele wijk in beweging.':fontcolor=0x1E2B45:fontsize=40:x=(w-text_w)/2:y=540" \
  -frames:v 1 "$HERE/_endcard.png"
else echo "  (reuse existing _endcard.png — drawtext/fontconfig skipped)"; fi
# dots: amber warm (hulp) + koel-blauw dorm (probleem), beide 140px, core+halo alpha
ffmpeg -y -loglevel error -f lavfi -i color=c=0xFFB347:s=140x140 -frames:v 1 \
  -vf "format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='min(255, 255*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/200) + 150*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/1000))'" "$B/warm.png"
ffmpeg -y -loglevel error -f lavfi -i color=c=0x7FB0DC:s=140x140 -frames:v 1 \
  -vf "format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='min(220, 220*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/200) + 95*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/900))'" "$B/blue.png"

echo "== seg1: open — grijze wijk, koel-blauwe dots verschijnen één voor één =="
# blue dot 140px -> offset 70. appear stagger 0.8..3.8
ffmpeg -y -loglevel error -loop 1 -t 6 -i "$MAP" -loop 1 -t 6 -i "$B/blue.png" \
 -filter_complex "\
[0]$crop,hue=s=0,fade=t=in:st=0:d=1[m];\
[1]split=6[g1][g2][g3][g4][g5][g6];\
[g1]fade=t=in:st=0.8:d=0.5:alpha=1[f1];\
[g2]fade=t=in:st=1.4:d=0.5:alpha=1[f2];\
[g3]fade=t=in:st=2.0:d=0.5:alpha=1[f3];\
[g4]fade=t=in:st=2.6:d=0.5:alpha=1[f4];\
[g5]fade=t=in:st=3.2:d=0.5:alpha=1[f5];\
[g6]fade=t=in:st=3.8:d=0.5:alpha=1[f6];\
[m][f1]overlay=${CX[0]}-70:${CY[0]}-70[a];\
[a][f2]overlay=${CX[1]}-70:${CY[1]}-70[b];\
[b][f3]overlay=${CX[2]}-70:${CY[2]}-70[c];\
[c][f4]overlay=${CX[3]}-70:${CY[3]}-70[d];\
[d][f5]overlay=${CX[4]}-70:${CY[4]}-70[e];\
[e][f6]overlay=${CX[5]}-70:${CY[5]}-70,fps=$FPS,format=yuv420p[v]" \
 -map "[v]" -r $FPS "$B/s1.mp4"

echo "== character clips =="
ffmpeg -y -loglevel error -i "$CL/shot2_daan_phone_anim_v1.mp4"      -vf "trim=0.5:4.5,setpts=PTS-STARTPTS,$fit" -an "$B/s2.mp4"
ffmpeg -y -loglevel error -i "$CL/shot2b_daan_arrival_anim_v1.mp4"   -vf "trim=1.5:4.5,setpts=PTS-STARTPTS,$fit" -an "$B/s2b.mp4"
ffmpeg -y -loglevel error -i "$CL/shot3_daan_henk_koffie_v2.mp4"     -vf "trim=0:5,setpts=PTS-STARTPTS,$fit"   -an "$B/s3.mp4"
ffmpeg -y -loglevel error -i "$CL/shot3b_daan_leaves_anim_v1.mp4"    -vf "trim=1:4,setpts=PTS-STARTPTS,$fit"     -an "$B/s3b.mp4"
ffmpeg -y -loglevel error -i "$CL/cascade_jan_koffie_anim_v1.mp4"    -vf "trim=1:4,setpts=PTS-STARTPTS,$fit"   -an "$B/s4.mp4"
ffmpeg -y -loglevel error -i "$CL/cascade_amir_taalmaatje_anim_v2.mp4" -vf "trim=1:4,setpts=PTS-STARTPTS,$fit" -an "$B/s5.mp4"
ffmpeg -y -loglevel error -i "$CL/cascade_marcus_voorlezen_anim_v1.mp4" -vf "trim=1:4,setpts=PTS-STARTPTS,$fit" -an "$B/s6.mp4"

echo "== seg7: finale — blauwe dots slaan om naar amber (één voor één) + wijk kleurt in =="
# blue dots full vanaf start (de problemen), amber dots faden er staggered overheen (hulp),
# map kleurt grijs->kleur in als climax. blue+warm 140px -> offset 70.
ffmpeg -y -loglevel error -loop 1 -t 6 -i "$MAP" -loop 1 -t 6 -i "$B/blue.png" -loop 1 -t 6 -i "$B/warm.png" \
 -filter_complex "\
[0]$crop,hue=s='min(1,max(0,(t-1.0)/3))'[m];\
[1]split=6[b1][b2][b3][b4][b5][b6];\
[2]split=6[w1][w2][w3][w4][w5][w6];\
[w1]fade=t=in:st=0.6:d=0.6:alpha=1[a1];\
[w2]fade=t=in:st=1.2:d=0.6:alpha=1[a2];\
[w3]fade=t=in:st=1.8:d=0.6:alpha=1[a3];\
[w4]fade=t=in:st=2.4:d=0.6:alpha=1[a4];\
[w5]fade=t=in:st=3.0:d=0.6:alpha=1[a5];\
[w6]fade=t=in:st=3.6:d=0.6:alpha=1[a6];\
[m][b1]overlay=${CX[0]}-70:${CY[0]}-70[m1];\
[m1][b2]overlay=${CX[1]}-70:${CY[1]}-70[m2];\
[m2][b3]overlay=${CX[2]}-70:${CY[2]}-70[m3];\
[m3][b4]overlay=${CX[3]}-70:${CY[3]}-70[m4];\
[m4][b5]overlay=${CX[4]}-70:${CY[4]}-70[m5];\
[m5][b6]overlay=${CX[5]}-70:${CY[5]}-70[mb];\
[mb][a1]overlay=${CX[0]}-70:${CY[0]}-70[p1];\
[p1][a2]overlay=${CX[1]}-70:${CY[1]}-70[p2];\
[p2][a3]overlay=${CX[2]}-70:${CY[2]}-70[p3];\
[p3][a4]overlay=${CX[3]}-70:${CY[3]}-70[p4];\
[p4][a5]overlay=${CX[4]}-70:${CY[4]}-70[p5];\
[p5][a6]overlay=${CX[5]}-70:${CY[5]}-70,fps=$FPS,format=yuv420p[v]" \
 -map "[v]" -r $FPS "$B/s7.mp4"

echo "== seg8: eindkaart =="
ffmpeg -y -loglevel error -loop 1 -t 3.5 -i "$HERE/_endcard.png" -vf "$fit,fade=t=in:st=0:d=0.4" -r $FPS "$B/s8.mp4"

echo "== xfade concat =="
XF=0.4
# playback order: s1(6) s2(4) s2b(3) s3(5) s3b(3) s4(3) s5(3) s6(3) s7(6) s8(3.5)
O1=$(awk "BEGIN{print 6-$XF}")
O2=$(awk "BEGIN{print 6+4-2*$XF}")
O3=$(awk "BEGIN{print 6+4+3-3*$XF}")
O4=$(awk "BEGIN{print 6+4+3+5-4*$XF}")
O5=$(awk "BEGIN{print 6+4+3+5+3-5*$XF}")
O6=$(awk "BEGIN{print 6+4+3+5+3+3-6*$XF}")
O7=$(awk "BEGIN{print 6+4+3+5+3+3+3-7*$XF}")
O8=$(awk "BEGIN{print 6+4+3+5+3+3+3+3-8*$XF}")
O9=$(awk "BEGIN{print 6+4+3+5+3+3+3+3+6-9*$XF}")
ffmpeg -y -loglevel error -stats \
  -i "$B/s1.mp4" -i "$B/s2.mp4" -i "$B/s2b.mp4" -i "$B/s3.mp4" -i "$B/s3b.mp4" \
  -i "$B/s4.mp4" -i "$B/s5.mp4" -i "$B/s6.mp4" -i "$B/s7.mp4" -i "$B/s8.mp4" \
  -filter_complex "\
[0][1]xfade=transition=fade:duration=$XF:offset=$O1[x1];\
[x1][2]xfade=transition=fade:duration=$XF:offset=$O2[x2];\
[x2][3]xfade=transition=fade:duration=$XF:offset=$O3[x3];\
[x3][4]xfade=transition=fade:duration=$XF:offset=$O4[x4];\
[x4][5]xfade=transition=fade:duration=$XF:offset=$O5[x5];\
[x5][6]xfade=transition=fade:duration=$XF:offset=$O6[x6];\
[x6][7]xfade=transition=fade:duration=$XF:offset=$O7[x7];\
[x7][8]xfade=transition=fade:duration=$XF:offset=$O8[x8];\
[x8][9]xfade=transition=fade:duration=$XF:offset=$O9[v]" \
  -map "[v]" -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart "$OUT"
echo "Wrote $OUT"
ffprobe -v error -show_entries format=duration:stream=width,height -of default=noprint_wrappers=1 "$OUT" | head -4