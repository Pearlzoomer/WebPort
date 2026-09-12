export default function NetworkBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="nodeGlowDark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF79B0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF79B0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <line x1="10%" y1="18%" x2="33%" y2="52%" stroke="#FF79B0" strokeWidth="0.7" strokeOpacity="0.2" strokeDasharray="5 8" />
      <line x1="33%" y1="52%" x2="63%" y2="28%" stroke="#FF79B0" strokeWidth="0.7" strokeOpacity="0.15" strokeDasharray="5 8" />
      <line x1="63%" y1="28%" x2="87%" y2="62%" stroke="#C4A882" strokeWidth="0.7" strokeOpacity="0.15" strokeDasharray="5 8" />
      <line x1="33%" y1="52%" x2="68%" y2="74%" stroke="#FF79B0" strokeWidth="0.6" strokeOpacity="0.12" strokeDasharray="5 8" />
      <line x1="10%" y1="18%" x2="54%" y2="8%" stroke="#FF79B0" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="5 8" />
      <line x1="54%" y1="8%" x2="87%" y2="62%" stroke="#C4A882" strokeWidth="0.6" strokeOpacity="0.1" strokeDasharray="5 8" />
      <line x1="68%" y1="74%" x2="87%" y2="62%" stroke="#FF79B0" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="5 8" />
      <line x1="18%" y1="78%" x2="33%" y2="52%" stroke="#FF79B0" strokeWidth="0.6" strokeOpacity="0.14" strokeDasharray="5 8" />

      <circle cx="10%" cy="18%" r="5" fill="#FF79B0" fillOpacity="0.55" className="node-float" />
      <circle cx="10%" cy="18%" r="14" fill="url(#nodeGlowDark)" className="node-float" />
      <circle cx="33%" cy="52%" r="7" fill="#FF79B0" fillOpacity="0.6" className="node-float node-float-delay-1" />
      <circle cx="33%" cy="52%" r="18" fill="url(#nodeGlowDark)" className="node-float node-float-delay-1" />
      <circle cx="63%" cy="28%" r="5" fill="#C4A882" fillOpacity="0.5" className="node-float node-float-delay-2" />
      <circle cx="63%" cy="28%" r="14" fill="url(#nodeGlowDark)" className="node-float node-float-delay-2" />
      <circle cx="87%" cy="62%" r="6" fill="#FF79B0" fillOpacity="0.45" className="node-float node-float-delay-3" />
      <circle cx="87%" cy="62%" r="16" fill="url(#nodeGlowDark)" className="node-float node-float-delay-3" />
      <circle cx="54%" cy="8%" r="4" fill="#C4A882" fillOpacity="0.45" className="node-float node-float-delay-4" />
      <circle cx="68%" cy="74%" r="4" fill="#FF79B0" fillOpacity="0.4" className="node-float node-float-delay-2" />
      <circle cx="18%" cy="78%" r="3.5" fill="#FF79B0" fillOpacity="0.35" className="node-float node-float-delay-1" />
      <circle cx="44%" cy="38%" r="2.5" fill="#FF79B0" fillOpacity="0.3" />
      <circle cx="77%" cy="20%" r="2" fill="#C4A882" fillOpacity="0.3" />
    </svg>
  );
}
