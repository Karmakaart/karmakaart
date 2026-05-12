import { useState, useEffect, useRef, useCallback } from "react";
import { MapPin, Clock, Users, ChevronRight, ArrowRight, Shield, BarChart3, Leaf, Heart, BookOpen, Globe, Check, Sparkles, Building2, User, Menu, X } from "lucide-react";

// ─── Scroll Animation Hook ───────────────────────────────────
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

// ─── Animated Counter ────────────────────────────────────────
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal(0.3);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString("nl-NL")}{suffix}</span>;
}

// ─── Map Marker Data ─────────────────────────────────────────
const MARKERS = [
  { id: 1, x: 35, y: 28, label: "Zwerfafval opruimen", location: "Park Selwerd", time: "Za 10:00", duration: "1 uur", category: "groen", people: 4, icon: "leaf" },
  { id: 2, x: 55, y: 42, label: "Buurtmoestuin", location: "Tuin van Noord", time: "Wo 14:00", duration: "2 uur", category: "groen", people: 7, icon: "leaf" },
  { id: 3, x: 72, y: 35, label: "Voorlezen bij ouderen", location: "Zorgcentrum De Linde", time: "Di 10:30", duration: "1,5 uur", category: "sociaal", people: 2, icon: "heart" },
  { id: 4, x: 25, y: 55, label: "Taalmaatje worden", location: "Buurthuis Oost", time: "Do 13:00", duration: "1 uur", category: "sociaal", people: 3, icon: "book" },
  { id: 5, x: 60, y: 62, label: "Buurtvergroening", location: "Plein Helpman", time: "Za 09:00", duration: "Halve dag", category: "groen", people: 12, icon: "leaf" },
  { id: 6, x: 45, y: 75, label: "Koffie met ouderen", location: "Buurtkamer Zuid", time: "Ma 10:00", duration: "1 uur", category: "sociaal", people: 5, icon: "heart" },
  { id: 7, x: 80, y: 58, label: "Speeltuin opknappen", location: "Speeltuin Oosterpark", time: "Za 13:00", duration: "Halve dag", category: "groen", people: 8, icon: "leaf" },
];

const FILTERS = [
  { key: "all", label: "Alles", icon: Globe },
  { key: "groen", label: "Groen", icon: Leaf },
  { key: "sociaal", label: "Sociaal", icon: Heart },
];

const DURATION_FILTERS = [
  { key: "all", label: "Alle tijden" },
  { key: "1", label: "≤ 1 uur" },
  { key: "2", label: "1-2 uur" },
  { key: "half", label: "Halve dag" },
];

// ─── Interactive Map Component ───────────────────────────────
function InteractiveMap() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeDuration, setActiveDuration] = useState("all");
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const filteredMarkers = MARKERS.filter((m) => {
    const catMatch = activeFilter === "all" || m.category === activeFilter;
    const durMatch =
      activeDuration === "all" ||
      (activeDuration === "1" && m.duration === "1 uur") ||
      (activeDuration === "2" && (m.duration === "1,5 uur" || m.duration === "2 uur")) ||
      (activeDuration === "half" && m.duration === "Halve dag");
    return catMatch && durMatch;
  });

  const iconMap = { leaf: Leaf, heart: Heart, book: BookOpen };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfeff 50%, #f0f9ff 100%)" }}>
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 p-4 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-100">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">Categorie:</span>
        {FILTERS.map((f) => {
          const Icon = f.icon;
          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f.key
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Icon size={14} />
              {f.label}
            </button>
          );
        })}
        <div className="w-px h-6 bg-gray-200 mx-2 hidden sm:block" />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2 hidden sm:block">Duur:</span>
        {DURATION_FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveDuration(f.key)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDuration === f.key
                ? "bg-sky-500 text-white shadow-md shadow-sky-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Map Area */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {/* Stylized Map Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
          {/* Roads */}
          <path d="M0,40 Q25,38 50,40 T100,42" stroke="#d1d5db" strokeWidth="0.3" fill="none" />
          <path d="M50,0 Q48,20 50,40 T52,80" stroke="#d1d5db" strokeWidth="0.3" fill="none" />
          <path d="M20,0 Q22,20 25,40 T28,80" stroke="#e5e7eb" strokeWidth="0.2" fill="none" />
          <path d="M70,0 Q72,20 75,40 T78,80" stroke="#e5e7eb" strokeWidth="0.2" fill="none" />
          <path d="M0,20 Q30,18 60,22 T100,20" stroke="#e5e7eb" strokeWidth="0.2" fill="none" />
          <path d="M0,60 Q30,58 60,62 T100,60" stroke="#e5e7eb" strokeWidth="0.2" fill="none" />
          {/* Parks */}
          <ellipse cx="35" cy="30" rx="8" ry="6" fill="#bbf7d0" opacity="0.4" />
          <ellipse cx="70" cy="55" rx="6" ry="5" fill="#bbf7d0" opacity="0.3" />
          <ellipse cx="50" cy="70" rx="10" ry="5" fill="#bbf7d0" opacity="0.25" />
          {/* Water */}
          <path d="M0,10 Q20,8 40,12 Q60,16 80,10 L100,10 L100,0 L0,0 Z" fill="#bae6fd" opacity="0.2" />
        </svg>

        {/* Markers */}
        {filteredMarkers.map((marker) => {
          const Icon = iconMap[marker.icon] || MapPin;
          const isHovered = hoveredMarker === marker.id;
          const isSelected = selectedMarker === marker.id;
          return (
            <div
              key={marker.id}
              className="absolute transition-all duration-500 ease-out"
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
                transform: `translate(-50%, -50%) scale(${isHovered || isSelected ? 1.3 : 1})`,
                zIndex: isHovered || isSelected ? 50 : 10,
              }}
              onMouseEnter={() => setHoveredMarker(marker.id)}
              onMouseLeave={() => setHoveredMarker(null)}
              onClick={() => setSelectedMarker(isSelected ? null : marker.id)}
            >
              {/* Pulse ring */}
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  background: marker.category === "groen" ? "#10b981" : "#3b82f6",
                  opacity: 0.2,
                  animationDuration: "2s",
                  width: 40,
                  height: 40,
                  margin: -8,
                }}
              />
              {/* Marker dot */}
              <div
                className="relative w-6 h-6 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{
                  background: marker.category === "groen"
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #3b82f6, #2563eb)",
                  boxShadow: isHovered || isSelected
                    ? `0 0 20px ${marker.category === "groen" ? "rgba(16,185,129,0.5)" : "rgba(59,130,246,0.5)"}`
                    : "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <Icon size={12} className="text-white" />
              </div>

              {/* Tooltip */}
              {(isHovered || isSelected) && (
                <div
                  className="absolute left-1/2 bottom-full mb-3 bg-white rounded-xl shadow-xl p-3 min-w-48 pointer-events-none"
                  style={{ transform: "translateX(-50%)", zIndex: 100 }}
                >
                  <div className="font-bold text-gray-900 text-sm">{marker.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{marker.location}</div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                    <span className="flex items-center gap-1"><Clock size={11} />{marker.time}</span>
                    <span className="flex items-center gap-1"><Users size={11} />{marker.people} aangemeld</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                      style={{
                        background: marker.category === "groen"
                          ? "linear-gradient(135deg, #10b981, #059669)"
                          : "linear-gradient(135deg, #3b82f6, #2563eb)",
                      }}
                    >
                      {marker.duration}
                    </span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -bottom-1.5 w-3 h-3 bg-white rotate-45" style={{ transform: "translateX(-50%) rotate(45deg)" }} />
                </div>
              )}
            </div>
          );
        })}

        {/* Map overlay text */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-gray-500 shadow-sm">
          {filteredMarkers.length} activiteiten in jouw buurt
        </div>
      </div>
    </div>
  );
}

// ─── Step Flow Component ─────────────────────────────────────
function StepFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, isVisible] = useScrollReveal(0.2);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const steps = [
    { icon: User, title: "Aanmelden", desc: "E-mail of socials. Klaar in 30 seconden.", color: "#10b981" },
    { icon: MapPin, title: "Kaart bekijken", desc: "Zie wat er in jouw buurt gebeurt.", color: "#3b82f6" },
    { icon: Check, title: "Kiezen & doen", desc: "Tik op een activiteit. Klaar.", color: "#8b5cf6" },
    { icon: Users, title: "Samen doen", desc: "Nodig een vriend uit. Of ga solo.", color: "#f59e0b" },
    { icon: Sparkles, title: "Impact zien", desc: "Optioneel: bekijk je dashboard.", color: "#ec4899" },
  ];

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-stretch gap-3">
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isActive = i === activeStep;
        const isPast = i < activeStep;
        return (
          <div
            key={i}
            onClick={() => setActiveStep(i)}
            className="flex-1 relative cursor-pointer group"
          >
            <div
              className="relative rounded-xl p-5 transition-all duration-500 h-full"
              style={{
                background: isActive ? `linear-gradient(135deg, ${step.color}15, ${step.color}08)` : "white",
                border: `2px solid ${isActive ? step.color : isPast ? step.color + "40" : "#e5e7eb"}`,
                transform: isActive ? "translateY(-4px)" : "none",
                boxShadow: isActive ? `0 12px 32px ${step.color}20` : "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-500"
                style={{
                  background: isActive || isPast ? `linear-gradient(135deg, ${step.color}, ${step.color}cc)` : "#f3f4f6",
                }}
              >
                <Icon size={20} className={isActive || isPast ? "text-white" : "text-gray-400"} />
              </div>
              <div className="font-bold text-gray-900 text-sm">{step.title}</div>
              <div className="text-gray-500 text-xs mt-1">{step.desc}</div>
              {/* Step number */}
              <div
                className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500"
                style={{
                  background: isActive || isPast ? step.color : "#f3f4f6",
                  color: isActive || isPast ? "white" : "#9ca3af",
                }}
              >
                {i + 1}
              </div>
            </div>
            {/* Connector */}
            {i < 4 && (
              <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Phone Mockup ────────────────────────────────────────────
function PhoneMockup() {
  const [screen, setScreen] = useState(0);
  const screens = [
    {
      title: "Welkom bij KarmaKaart",
      content: (
        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4 shadow-lg">
            <MapPin size={32} className="text-white" />
          </div>
          <div className="text-lg font-bold text-gray-900 text-center">KarmaKaart</div>
          <div className="text-sm text-gray-500 text-center mt-1">Doe iets goeds in jouw buurt</div>
          <button
            className="mt-6 px-6 py-2.5 rounded-xl text-white text-sm font-semibold shadow-lg"
            style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
            onClick={() => setScreen(1)}
          >
            Aan de slag
          </button>
        </div>
      ),
    },
    {
      title: "Activiteiten",
      content: (
        <div className="px-3 pt-2">
          <div className="text-sm font-bold text-gray-900 mb-2">In jouw buurt</div>
          {[
            { name: "Zwerfafval opruimen", loc: "Park Selwerd", time: "Za 10:00", cat: "groen" },
            { name: "Koffie met ouderen", loc: "Buurtkamer Zuid", time: "Ma 10:00", cat: "sociaal" },
            { name: "Buurtmoestuin", loc: "Tuin van Noord", time: "Wo 14:00", cat: "groen" },
          ].map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2.5 rounded-lg mb-2 cursor-pointer transition-all hover:shadow-md"
              style={{ background: i === 0 ? "#f0fdf4" : "white", border: "1px solid #e5e7eb" }}
              onClick={() => setScreen(2)}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: a.cat === "groen"
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #3b82f6, #2563eb)",
                }}
              >
                {a.cat === "groen" ? <Leaf size={14} className="text-white" /> : <Heart size={14} className="text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-900 truncate">{a.name}</div>
                <div className="text-xs text-gray-400">{a.loc} · {a.time}</div>
              </div>
              <ChevronRight size={14} className="text-gray-300" />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Zwerfafval opruimen",
      content: (
        <div className="px-3 pt-2">
          <div className="w-full h-24 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-3">
            <Leaf size={40} className="text-emerald-400" />
          </div>
          <div className="text-sm font-bold text-gray-900">Zwerfafval opruimen</div>
          <div className="text-xs text-gray-500 mt-0.5">Park Selwerd · Zaterdag 10:00</div>
          <div className="flex gap-2 mt-3">
            <div className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
              <Clock size={14} className="text-gray-400 mx-auto" />
              <div className="text-xs font-semibold mt-1">1 uur</div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
              <Users size={14} className="text-gray-400 mx-auto" />
              <div className="text-xs font-semibold mt-1">4 aangemeld</div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
              <Shield size={14} className="text-gray-400 mx-auto" />
              <div className="text-xs font-semibold mt-1">Geen VOG</div>
            </div>
          </div>
          <button
            className="w-full mt-4 py-2.5 rounded-xl text-white text-sm font-semibold shadow-lg"
            style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
            onClick={() => setScreen(3)}
          >
            Ik doe mee!
          </button>
        </div>
      ),
    },
    {
      title: "Bevestigd!",
      content: (
        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <Check size={32} className="text-emerald-500" />
          </div>
          <div className="text-lg font-bold text-gray-900 text-center">Je doet mee!</div>
          <div className="text-sm text-gray-500 text-center mt-1">Zwerfafval opruimen · Za 10:00</div>
          <div className="mt-6 p-3 bg-gray-50 rounded-xl w-full">
            <div className="text-xs text-gray-400 mb-1">Je karma dit kwartaal</div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-emerald-600">4</span>
              <span className="text-sm text-gray-400">uur bijgedragen</span>
            </div>
          </div>
          <button
            className="mt-3 text-sm text-emerald-600 font-semibold"
            onClick={() => setScreen(0)}
          >
            Terug naar start
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="relative mx-auto" style={{ width: 260 }}>
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-20" />
        {/* Screen */}
        <div className="relative bg-white rounded-2xl overflow-hidden" style={{ height: 440 }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-white">
            <span className="text-xs font-semibold text-gray-900">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-gray-900 rounded-sm" />
            </div>
          </div>
          {/* Nav */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
            {screen > 0 ? (
              <button onClick={() => setScreen(screen - 1)} className="text-emerald-600 text-xs font-semibold">← Terug</button>
            ) : (
              <div />
            )}
            <span className="text-xs font-bold text-gray-900">{screens[screen].title}</span>
            <div className="w-8" />
          </div>
          {/* Content */}
          <div className="h-full overflow-hidden" style={{ height: 370 }}>
            {screens[screen].content}
          </div>
        </div>
      </div>
      {/* Reflection */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)" }} />
    </div>
  );
}

// ─── Dashboard Preview ───────────────────────────────────────
function DashboardPreview() {
  const bars = [65, 82, 45, 90, 73, 88, 55, 78, 95, 62, 70, 85];
  const months = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div>
          <div className="text-sm font-bold text-gray-900">Gemeente Dashboard</div>
          <div className="text-xs text-gray-400">Participatie-overzicht 2026</div>
        </div>
        <div className="flex gap-2">
          <div className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold">Live</div>
        </div>
      </div>
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-px bg-gray-100">
        {[
          { label: "Actieve vrijwilligers", value: "1.247", change: "+12%", up: true },
          { label: "Uren deze maand", value: "3.891", change: "+8%", up: true },
          { label: "Activiteiten", value: "156", change: "+23%", up: true },
          { label: "Ketenpartners", value: "34", change: "+3", up: true },
        ].map((s, i) => (
          <div key={i} className="bg-white p-3">
            <div className="text-xs text-gray-400">{s.label}</div>
            <div className="text-lg font-black text-gray-900 mt-0.5">{s.value}</div>
            <div className={`text-xs font-semibold mt-0.5 ${s.up ? "text-emerald-500" : "text-red-500"}`}>{s.change}</div>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="p-4">
        <div className="text-xs font-semibold text-gray-500 mb-3">Vrijwilligersuren per maand</div>
        <div className="flex items-end gap-1.5" style={{ height: 100 }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-sm transition-all duration-700"
                style={{
                  height: `${h}%`,
                  background: i === 11
                    ? "linear-gradient(180deg, #10b981, #059669)"
                    : i >= 9
                    ? "linear-gradient(180deg, #34d399, #6ee7b7)"
                    : "#e5e7eb",
                }}
              />
              <span className="text-xs text-gray-300" style={{ fontSize: 8 }}>{months[i]}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Export row */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
        <span className="text-xs text-gray-400">VNG-rapportage klaar</span>
        <button className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
          Exporteer <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

// ─── Navigation ──────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(229,231,235,0.5)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-200">
            <MapPin size={18} className="text-white" />
          </div>
          <span className="font-black text-lg text-gray-900">KarmaKaart</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#hoe-het-werkt" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Hoe het werkt</a>
          <a href="#kaart" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Kaart</a>
          <a href="#gemeentes" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Voor gemeentes</a>
          <a href="#vrijwilligers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Voor vrijwilligers</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">Inloggen</button>
          <button
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-emerald-200 hover:shadow-xl transition-all"
            style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
          >
            Demo aanvragen
          </button>
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <a href="#hoe-het-werkt" className="block text-sm text-gray-700 font-medium">Hoe het werkt</a>
          <a href="#kaart" className="block text-sm text-gray-700 font-medium">Kaart</a>
          <a href="#gemeentes" className="block text-sm text-gray-700 font-medium">Voor gemeentes</a>
          <a href="#vrijwilligers" className="block text-sm text-gray-700 font-medium">Voor vrijwilligers</a>
          <button
            className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white mt-2"
            style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
          >
            Demo aanvragen
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Section Wrapper with Scroll Reveal ──────────────────────
function Section({ children, className = "", id = "", delay = 0 }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
}

// ─── Main App ────────────────────────────────────────────────
export default function KarmaKaartWebsite() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Nav />

      {/* ─── HERO ─────────────────────────────────────── */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.06) 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)",
            }}
          />
          {/* Floating dots */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4 + Math.random() * 8,
                height: 4 + Math.random() * 8,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                background: i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#3b82f6" : "#8b5cf6",
                opacity: 0.1 + Math.random() * 0.15,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-6">
                <Sparkles size={14} />
                Micro-vrijwilligerswerk platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Doe iets goeds.
                <br />
                <span style={{ background: "linear-gradient(135deg, #10b981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Zonder gedoe.
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
                Binnen 5 minuten je eerste vrijwilligersactiviteit. Geen formulieren, geen wachtlijsten, geen verplichtingen. Gewoon kiezen en doen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-emerald-200 hover:shadow-xl transition-all"
                  style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
                >
                  <Building2 size={18} />
                  Demo voor gemeentes
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="group flex items-center gap-2 px-6 py-3 rounded-xl text-gray-700 font-semibold bg-white border-2 border-gray-200 hover:border-emerald-300 hover:text-emerald-700 transition-all">
                  <User size={18} />
                  Bekijk activiteiten
                </button>
              </div>
              {/* Social proof */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b"][i] }}
                    >
                      {["J", "M", "R", "A"][i]}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">49%</span> van Nederlanders doet vrijwilligerswerk
                  <span className="text-xs text-gray-400 ml-1">(CBS 2024)</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="hidden md:flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-400 font-medium">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* ─── PROBLEM ──────────────────────────────────── */}
      <Section className="py-24 bg-gray-50" id="probleem">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Vrijwilligerswerk is toe aan een <span className="line-through text-gray-300">upgrade</span>{" "}
            <span style={{ background: "linear-gradient(135deg, #10b981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              reset
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Mensen willen wél helpen. Maar niet zo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "📋", problem: "Lange aanmeldformulieren", desc: "Drie pagina's invullen voordat je een boom mag planten." },
              { icon: "⏳", problem: "Weken wachten op intake", desc: "Motivatie is er nu. Niet over zes weken na een kennismakingsgesprek." },
              { icon: "📅", problem: "Wekelijkse verplichtingen", desc: "Elke dinsdag van 10 tot 12. En als je een keer niet kan? Schuldgevoel." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-left border border-gray-100 hover:shadow-lg transition-shadow">
                <span className="text-3xl">{item.icon}</span>
                <div className="mt-3 font-bold text-gray-900">{item.problem}</div>
                <div className="mt-1 text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─────────────────────────────── */}
      <Section className="py-24" id="hoe-het-werkt">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              5 stappen. Meer niet.
            </h2>
            <p className="mt-3 text-gray-500 text-lg">Van aanmelden tot impact in minder dan 5 minuten.</p>
          </div>
          <StepFlow />
        </div>
      </Section>

      {/* ─── INTERACTIVE MAP ──────────────────────────── */}
      <Section className="py-24 bg-gray-50" id="kaart">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-4">
              <MapPin size={14} />
              Interactieve kaart
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Kijk wat er in jouw buurt gebeurt
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
              Filter op categorie of duur. Klik op een marker. Klaar.
            </p>
          </div>
          <InteractiveMap />
        </div>
      </Section>

      {/* ─── FOR GEMEENTES ────────────────────────────── */}
      <Section className="py-24" id="gemeentes">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold mb-4">
                <Building2 size={14} />
                Voor gemeentes
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Participatie-evidence.
                <br />
                Niet nog een platform.
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Jullie kennen de ketenpartners. Jullie hebben de communicatiekanalen. Wij leveren de software die laat zien dat het werkt.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: BarChart3, title: "VNG-ready rapportages", desc: "Exporteer participatiedata in het juiste format. Automatisch." },
                  { icon: Shield, title: "AVG-compliant by design", desc: "Privacy-first architectuur. Pseudoniemen toegestaan, opt-in voor alles." },
                  { icon: Clock, title: "Live binnen 4 weken", desc: "Geen jarenlang implementatietraject. Setup, ketenpartners onboarden, live." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-violet-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                        <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="text-sm font-semibold text-amber-800">Wet Versterking Participatie</div>
                <div className="text-sm text-amber-700 mt-1">
                  Gemeentes moeten voor 1 januari 2027 een participatieverordening vaststellen.
                  KarmaKaart levert de data om die verordening te onderbouwen.
                </div>
              </div>
            </div>
            <div>
              <DashboardPreview />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FOR VRIJWILLIGERS ────────────────────────── */}
      <Section className="py-24 bg-gray-50" id="vrijwilligers">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4">
            <Heart size={14} />
            Voor vrijwilligers
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Geen gedoe. Gewoon doen.
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Zaterdag een uurtje over? Kijk op de kaart, kies iets, en ga.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "🌱",
                title: "Groen",
                activities: ["Zwerfafval opruimen", "Buurtvergroening", "Buurtmoestuin"],
                color: "#10b981",
              },
              {
                icon: "💛",
                title: "Sociaal",
                activities: ["Koffie met ouderen", "Voorlezen", "Taalmaatje"],
                color: "#f59e0b",
              },
              {
                icon: "🏗️",
                title: "Praktisch",
                activities: ["Speeltuin opknappen", "Buurtklusjes", "Evenement helpen"],
                color: "#3b82f6",
              },
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-left border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <span className="text-3xl">{cat.icon}</span>
                <div className="mt-3 font-bold text-gray-900">{cat.title}</div>
                <div className="mt-3 space-y-2">
                  {cat.activities.map((a, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⏱️", text: "Geen minimale uren" },
              { icon: "📝", text: "Geen intakeformulier" },
              { icon: "🔒", text: "Privacy-first" },
              { icon: "🎯", text: "Kies per keer" },
            ].map((perk, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-100">
                <span className="text-lg">{perk.icon}</span>
                <span className="text-sm font-medium text-gray-700">{perk.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── IMPACT STATS ─────────────────────────────── */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              De cijfers spreken
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 49, suffix: "%", label: "van Nederlanders doet vrijwilligerswerk", source: "CBS 2024" },
              { value: 56, suffix: "%", label: "wil flexibel vrijwilligerswerk", source: "Motivaction" },
              { value: 342, suffix: "", label: "gemeenten in Nederland", source: "VNG" },
              { value: 5, suffix: " min", label: "tot je eerste activiteit", source: "KarmaKaart belofte" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-gray-900">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
                <div className="text-xs text-gray-300 mt-1">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16"
            style={{
              background: "linear-gradient(135deg, #065f46 0%, #064e3b 50%, #1e3a5f 100%)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #10b981, transparent)", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #3b82f6, transparent)", transform: "translate(-30%, 30%)" }} />

            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Klaar om participatie
                <br />
                meetbaar te maken?
              </h2>
              <p className="mt-4 text-emerald-100 text-lg max-w-lg mx-auto">
                Of je nu een gemeente bent die impact wil aantonen, of iemand die iets wil doen in de buurt.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button className="group flex items-center gap-2 px-8 py-4 rounded-xl text-emerald-900 font-bold bg-white hover:bg-emerald-50 shadow-xl transition-all">
                  <Building2 size={20} />
                  Plan een demo
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold border-2 border-emerald-400 hover:bg-emerald-400 hover:bg-opacity-20 transition-all">
                  <MapPin size={20} />
                  Bekijk de kaart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ───────────────────────────────────── */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <MapPin size={12} className="text-white" />
              </div>
              <span className="font-bold text-gray-900">KarmaKaart</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Voorwaarden</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Contact</a>
            </div>
            <div className="text-sm text-gray-300">
              Micro-vrijwilligerswerk zonder gedoe.
            </div>
          </div>
        </div>
      </footer>

      {/* ─── CSS Animations ───────────────────────────── */}
      <style>{`
        @keyframes float {
          from { transform: translateY(0px) rotate(0deg); }
          to { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::selection { background: #a7f3d0; }
      `}</style>
    </div>
  );
}
