#!/usr/bin/env bash
# KarmaKaart gemeente-video — ROUGH CUT / animatic (ffmpeg), v4 "De wijk die oplicht" (script.md v4).
# Opening: strak op de grijze kaart, langzaam uitzoomen (telefoon-reveal = AE-composite), 3 koele pins verschijnen.
# Dan 3 gelijkwaardige mini-scènes (eenzaamheid Daan→Henk · zorg Maya · zwerfafval/park Marcus & Jan),
# elke scène binnenkomend via een kaart-beat: vorige marker slaat om naar warm, volgende marker pulseert.
# Finale: alle markers warm + ripple-dots + kaart kleurt in (grijs→warm), wijk gloeit. Eindkaart.
# Silent (VO-bed). Gepolijste dots/camera/phone-composite = AE-optie. Cascade-clips (v3) niet meer in de cut.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
CL="$HERE/clips"; KF="$HERE/keyframes"; MAP="$KF/map_wijk_base_v1.png"
B="$HERE/_build"; mkdir -p "$B"
OUT="$HERE/gemeente_roughcut_v4.mp4"
FONT="$HERE/_font.ttf"
W=1280; H=720; FPS=24
fit="scale=$W:$H:force_original_aspect_ratio=increase,crop=$W:$H,fps=$FPS,format=yuv420p"
crop="scale=$W:$H:force_original_aspect_ratio=increase,crop=$W:$H"
crop2x="scale=2560:1440:force_original_aspect_ratio=increase,crop=2560:1440"

# scène-markers + ripple-dots voor de finale (m1/m2 op huizenblokken; m3 in het park = de zwerfafval-melding)
MX=(340 770 660);      MY=(200 480 320)      # m1 Henk/eenzaamheid · m2 Maya/zorg · m3 park/zwerfafval
RX=(450 560 980 1080); RY=(470 130 250 440)  # extra dots die in de finale warm aanrippelen

echo "== prep assets (font, endcard, dots) =="
cp /c/Windows/Fonts/segoeuib.ttf "$FONT"
# NB: drawtext vereist fontconfig; bij unset FONTCONFIG_FILE crasht ffmpeg (gyan.dev) → hergebruik bestaande endcard.
if [ ! -f "$HERE/_endcard.png" ]; then
ffmpeg -y -loglevel error -f lavfi -i color=c=0xECE4D3:s=${W}x${H} -i "$HERE/../logo/logo.png" \
  -filter_complex "[1]scale=720:-1[lg];[0][lg]overlay=(W-w)/2:170[bg];[bg]drawtext=fontfile=_font.ttf:text='Eén kaart. De hele wijk in beweging.':fontcolor=0x1E2B45:fontsize=40:x=(w-text_w)/2:y=540" \
  -frames:v 1 "$HERE/_endcard.png"
else echo "  (reuse existing _endcard.png — drawtext/fontconfig skipped)"; fi
# dots: amber warm (hulp) + koel-blauw dof (probleem), beide 140px, core+halo alpha
ffmpeg -y -loglevel error -f lavfi -i color=c=0xFFB347:s=140x140 -frames:v 1 \
  -vf "format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='min(255, 255*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/200) + 150*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/1000))'" "$B/warm.png"
ffmpeg -y -loglevel error -f lavfi -i color=c=0x7FB0DC:s=140x140 -frames:v 1 \
  -vf "format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='min(220, 220*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/200) + 95*exp(-((X-70)*(X-70)+(Y-70)*(Y-70))/900))'" "$B/blue.png"

echo "== s01: opening — grijze kaart, langzaam uitzoomen, 3 koele pins verschijnen =="
# zoompan op 2x-crop zodat het inzoom-begin scherp blijft; pins pas ná het settlen (4s) zodat ze niet driften.
ffmpeg -y -loglevel error -framerate $FPS -loop 1 -t 6.5 -i "$MAP" -framerate $FPS -loop 1 -t 6.5 -i "$B/blue.png" \
 -filter_complex "\
[0]$crop2x,hue=s=0,zoompan=z='if(lte(on,96),1.3-0.3*on/96,1.0)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=${W}x${H}:fps=$FPS,fade=t=in:st=0:d=0.8[m];\
[1]split=3[g1][g2][g3];\
[g1]fade=t=in:st=4.3:d=0.5:alpha=1[f1];\
[g2]fade=t=in:st=4.9:d=0.5:alpha=1[f2];\
[g3]fade=t=in:st=5.5:d=0.5:alpha=1[f3];\
[m][f1]overlay=${MX[0]}-70:${MY[0]}-70[a];\
[a][f2]overlay=${MX[1]}-70:${MY[1]}-70[b];\
[b][f3]overlay=${MX[2]}-70:${MY[2]}-70,fps=$FPS,format=yuv420p[v]" \
 -map "[v]" -r $FPS "$B/s01.mp4"

echo "== character clips =="
ffmpeg -y -loglevel error -i "$CL/shot2_daan_phone_anim_v1.mp4"    -vf "trim=0.5:4.5,setpts=PTS-STARTPTS,$fit" -an "$B/s02.mp4"
ffmpeg -y -loglevel error -i "$CL/shot2b_daan_arrival_anim_v1.mp4" -vf "trim=1.5:4.5,setpts=PTS-STARTPTS,$fit" -an "$B/s03.mp4"
ffmpeg -y -loglevel error -i "$CL/shot3_daan_henk_koffie_v2.mp4"   -vf "trim=0:5,setpts=PTS-STARTPTS,$fit"     -an "$B/s04.mp4"
ffmpeg -y -loglevel error -i "$CL/shot3b_daan_leaves_anim_v1.mp4"  -vf "trim=1:4,setpts=PTS-STARTPTS,$fit"     -an "$B/s05.mp4"
ffmpeg -y -loglevel error -i "$CL/shot4_maya_boodschappen_anim_v1.mp4" -vf "trim=0.2:4.7,setpts=PTS-STARTPTS,$fit" -an "$B/s07.mp4"
ffmpeg -y -loglevel error -i "$CL/shot5_zwerfafval_park_anim_v1.mp4"   -vf "trim=0.2:4.7,setpts=PTS-STARTPTS,$fit" -an "$B/s09.mp4"

echo "== s06: kaart-beat — marker 1 slaat om naar warm, marker 2 pulseert =="
ffmpeg -y -loglevel error -framerate $FPS -loop 1 -t 2.5 -i "$MAP" -framerate $FPS -loop 1 -t 2.5 -i "$B/blue.png" -framerate $FPS -loop 1 -t 2.5 -i "$B/warm.png" \
 -filter_complex "\
[0]$crop,hue=s=0[m];\
[1]split=4[bA][bB][bC][bD];\
[bD]scale=200:200,fade=t=in:st=0.2:d=0.4:alpha=1,fade=t=out:st=0.8:d=0.4:alpha=1,fade=t=in:st=1.4:d=0.4:alpha=1,fade=t=out:st=2.0:d=0.4:alpha=1[bp];\
[2]fade=t=in:st=0.3:d=0.6:alpha=1[w1];\
[m][bA]overlay=${MX[0]}-70:${MY[0]}-70[a];\
[a][w1]overlay=${MX[0]}-70:${MY[0]}-70[b];\
[b][bB]overlay=${MX[1]}-70:${MY[1]}-70[c];\
[c][bp]overlay=${MX[1]}-100:${MY[1]}-100[d];\
[d][bC]overlay=${MX[2]}-70:${MY[2]}-70,fps=$FPS,format=yuv420p[v]" \
 -map "[v]" -r $FPS "$B/s06.mp4"

echo "== s08: kaart-beat — markers 1+2 warm, marker 3 pulseert =="
ffmpeg -y -loglevel error -framerate $FPS -loop 1 -t 2.5 -i "$MAP" -framerate $FPS -loop 1 -t 2.5 -i "$B/blue.png" -framerate $FPS -loop 1 -t 2.5 -i "$B/warm.png" \
 -filter_complex "\
[0]$crop,hue=s=0[m];\
[1]split=3[bB][bC][bD];\
[bD]scale=200:200,fade=t=in:st=0.2:d=0.4:alpha=1,fade=t=out:st=0.8:d=0.4:alpha=1,fade=t=in:st=1.4:d=0.4:alpha=1,fade=t=out:st=2.0:d=0.4:alpha=1[bp];\
[2]split=2[wA][wB];\
[wB]fade=t=in:st=0.3:d=0.6:alpha=1[w2];\
[m][wA]overlay=${MX[0]}-70:${MY[0]}-70[a];\
[a][bB]overlay=${MX[1]}-70:${MY[1]}-70[b];\
[b][w2]overlay=${MX[1]}-70:${MY[1]}-70[c];\
[c][bC]overlay=${MX[2]}-70:${MY[2]}-70[d];\
[d][bp]overlay=${MX[2]}-100:${MY[2]}-100,fps=$FPS,format=yuv420p[v]" \
 -map "[v]" -r $FPS "$B/s08.mp4"

echo "== s10: finale — marker 3 slaat om, ripple-dots aan, wijk kleurt in en gloeit =="
ffmpeg -y -loglevel error -framerate $FPS -loop 1 -t 6.5 -i "$MAP" -framerate $FPS -loop 1 -t 6.5 -i "$B/blue.png" -framerate $FPS -loop 1 -t 6.5 -i "$B/warm.png" \
 -filter_complex "\
[0]$crop,hue=s='min(1,max(0,(t-0.8)/3))'[m];\
[1]fade=t=out:st=0.3:d=0.5:alpha=1[b3];\
[2]split=7[w1][w2][w3][w4][w5][w6][w7];\
[w3]fade=t=in:st=0.3:d=0.5:alpha=1[f3];\
[w4]fade=t=in:st=1.6:d=0.6:alpha=1[f4];\
[w5]fade=t=in:st=2.2:d=0.6:alpha=1[f5];\
[w6]fade=t=in:st=2.8:d=0.6:alpha=1[f6];\
[w7]fade=t=in:st=3.4:d=0.6:alpha=1[f7];\
[m][w1]overlay=${MX[0]}-70:${MY[0]}-70[a];\
[a][w2]overlay=${MX[1]}-70:${MY[1]}-70[b];\
[b][b3]overlay=${MX[2]}-70:${MY[2]}-70[c];\
[c][f3]overlay=${MX[2]}-70:${MY[2]}-70[d];\
[d][f4]overlay=${RX[0]}-70:${RY[0]}-70[e];\
[e][f5]overlay=${RX[1]}-70:${RY[1]}-70[f];\
[f][f6]overlay=${RX[2]}-70:${RY[2]}-70[g];\
[g][f7]overlay=${RX[3]}-70:${RY[3]}-70,fps=$FPS,format=yuv420p[v]" \
 -map "[v]" -r $FPS "$B/s10.mp4"

echo "== s11: eindkaart =="
ffmpeg -y -loglevel error -loop 1 -t 3.5 -i "$HERE/_endcard.png" -vf "$fit,fade=t=in:st=0:d=0.4" -r $FPS "$B/s11.mp4"

echo "== xfade concat =="
XF=0.4
# volgorde: s01 opening(6.5) s02 phone(4) s03 arrival(3) s04 koffie(5) s05 leaves(3)
#           s06 kaart-beat(2.5) s07 maya(4.5) s08 kaart-beat(2.5) s09 tuin(4.5) s10 finale(6.5) s11 endcard(3.5)
O1=$(awk  "BEGIN{print 6.5-$XF}")
O2=$(awk  "BEGIN{print 6.5+4-2*$XF}")
O3=$(awk  "BEGIN{print 6.5+4+3-3*$XF}")
O4=$(awk  "BEGIN{print 6.5+4+3+5-4*$XF}")
O5=$(awk  "BEGIN{print 6.5+4+3+5+3-5*$XF}")
O6=$(awk  "BEGIN{print 6.5+4+3+5+3+2.5-6*$XF}")
O7=$(awk  "BEGIN{print 6.5+4+3+5+3+2.5+4.5-7*$XF}")
O8=$(awk  "BEGIN{print 6.5+4+3+5+3+2.5+4.5+2.5-8*$XF}")
O9=$(awk  "BEGIN{print 6.5+4+3+5+3+2.5+4.5+2.5+4.5-9*$XF}")
O10=$(awk "BEGIN{print 6.5+4+3+5+3+2.5+4.5+2.5+4.5+6.5-10*$XF}")
ffmpeg -y -loglevel error -stats \
  -i "$B/s01.mp4" -i "$B/s02.mp4" -i "$B/s03.mp4" -i "$B/s04.mp4" -i "$B/s05.mp4" \
  -i "$B/s06.mp4" -i "$B/s07.mp4" -i "$B/s08.mp4" -i "$B/s09.mp4" -i "$B/s10.mp4" -i "$B/s11.mp4" \
  -filter_complex "\
[0][1]xfade=transition=fade:duration=$XF:offset=$O1[x1];\
[x1][2]xfade=transition=fade:duration=$XF:offset=$O2[x2];\
[x2][3]xfade=transition=fade:duration=$XF:offset=$O3[x3];\
[x3][4]xfade=transition=fade:duration=$XF:offset=$O4[x4];\
[x4][5]xfade=transition=fade:duration=$XF:offset=$O5[x5];\
[x5][6]xfade=transition=fade:duration=$XF:offset=$O6[x6];\
[x6][7]xfade=transition=fade:duration=$XF:offset=$O7[x7];\
[x7][8]xfade=transition=fade:duration=$XF:offset=$O8[x8];\
[x8][9]xfade=transition=fade:duration=$XF:offset=$O9[x9];\
[x9][10]xfade=transition=fade:duration=$XF:offset=$O10[v]" \
  -map "[v]" -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart "$OUT"
echo "Wrote $OUT"
ffprobe -v error -show_entries format=duration:stream=width,height -of default=noprint_wrappers=1 "$OUT" | head -4
