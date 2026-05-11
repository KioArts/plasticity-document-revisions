import { InteractiveFeatureCard } from './InteractiveFeatureCard';

/**
 * SelectionUtilitiesCard
 * --------------------------------------------------------------------------
 * The concrete instance of InteractiveFeatureCard configured for the
 * Plasticity selection utilities. Drop directly into a FeatureGrid:
 *
 *   <FeatureGrid>
 *     <FeatureCard ... />
 *     <FeatureCard ... />
 *     <SelectionUtilitiesCard />
 *   </FeatureGrid>
 *
 * To swap out the SVG previews for screen-recordings or different art,
 * just replace the `preview` field on each item below with your own ReactNode.
 * --------------------------------------------------------------------------
 */

const ACCENT = '#d97540';

const Preview = ({ children }) => (
  <svg
    viewBox="0 0 320 200"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const utilities = [
  {
    key: 'mark',
  label: 'Auto Mark Edges',
  caption: 'Mark edges as sharp or seams from source',
  preview: (
    <Preview>
      <g transform="translate(160 100)">
        <polygon
          points="-90,-60 90,-60 105,-40 105,50 90,72 -90,72 -105,50 -105,-40"
          fill="#1c1c1f"
          stroke="#3a3a3d"
          strokeWidth="0.5"
        />

        {/* Center split guide */}
        <line x1="0" y1="-60" x2="0" y2="72" stroke="#3a3a3d" strokeWidth="0.5" strokeDasharray="2 3" />

        {/* Left half — SHARP (orange, solid) */}
        <g stroke="#d97540" strokeWidth="2.5" strokeLinecap="round" fill="none">
          <line x1="-90" y1="-60" x2="0" y2="-60" />
          <line x1="-90" y1="-60" x2="-105" y2="-40" />
          <line x1="-105" y1="-40" x2="-105" y2="50" />
          <line x1="-105" y1="50" x2="-90" y2="72" />
          <line x1="-90" y1="72" x2="0" y2="72" />
        </g>

        {/* Right half — SEAM (magenta, dashed) */}
        <g stroke="#e84a8c" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="6 3">
          <line x1="0" y1="-60" x2="90" y2="-60" />
          <line x1="90" y1="-60" x2="105" y2="-40" />
          <line x1="105" y1="-40" x2="105" y2="50" />
          <line x1="105" y1="50" x2="90" y2="72" />
          <line x1="90" y1="72" x2="0" y2="72" />
        </g>

        {/* Vertex dots */}
        <g>
          <circle cx="-90" cy="-60" r="3.5" fill="#d97540" />
          <circle cx="-105" cy="-40" r="3.5" fill="#d97540" />
          <circle cx="-105" cy="50" r="3.5" fill="#d97540" />
          <circle cx="-90" cy="72" r="3.5" fill="#d97540" />

          <circle cx="90" cy="-60" r="3.5" fill="#e84a8c" />
          <circle cx="105" cy="-40" r="3.5" fill="#e84a8c" />
          <circle cx="105" cy="50" r="3.5" fill="#e84a8c" />
          <circle cx="90" cy="72" r="3.5" fill="#e84a8c" />

          <circle cx="0" cy="-60" r="3.5" fill="#f5f4ef" />
          <circle cx="0" cy="72" r="3.5" fill="#f5f4ef" />
        </g>

        {/* Labels */}
        <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="0.15em">
          <text x="-55" y="-78" textAnchor="middle" fill="#d97540">SHARP</text>
          <text x="55" y="-78" textAnchor="middle" fill="#e84a8c">SEAM</text>
        </g>
      </g>
    </Preview>
  ),
  },
  {
    key: 'merge',
  label: 'Merge UV Seams',
  caption: 'Merge UV seams based on selected face',
  preview: (
    <Preview>
      {/* Top labels */}
      <g fontFamily="ui-monospace, monospace" fontSize="8" fill="#6a6a68" letterSpacing="0.2em">
        <text x="75" y="22" textAnchor="middle">BEFORE</text>
        <text x="245" y="22" textAnchor="middle">AFTER</text>
      </g>

      {/* LEFT: two selected faces with seam */}
      <g transform="translate(75 105)">
        <rect x="-55" y="-45" width="51" height="90" fill={ACCENT} fillOpacity="0.18" stroke="#f5f5f3" strokeOpacity="0.4" strokeWidth="0.5" />
        <rect x="4" y="-45" width="51" height="90" fill={ACCENT} fillOpacity="0.18" stroke="#f5f5f3" strokeOpacity="0.4" strokeWidth="0.5" />

        <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" fill="none">
          <line x1="-4" y1="-45" x2="-4" y2="45" />
          <line x1="4" y1="-45" x2="4" y2="45" />
        </g>

        <g fill={ACCENT}>
          <circle cx="-4" cy="-45" r="2.8" />
          <circle cx="4" cy="-45" r="2.8" />
          <circle cx="-4" cy="45" r="2.8" />
          <circle cx="4" cy="45" r="2.8" />
        </g>

        <g fill={ACCENT} fillOpacity="0.7">
          <circle cx="-55" cy="-45" r="2.5" />
          <circle cx="55" cy="-45" r="2.5" />
          <circle cx="-55" cy="45" r="2.5" />
          <circle cx="55" cy="45" r="2.5" />
        </g>

        <text x="0" y="65" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#6a6a68" letterSpacing="0.1em">2 FACES SELECTED</text>
      </g>

      {/* Center arrows */}
      <g transform="translate(160 100)">
        <g stroke="#a4a39d" strokeWidth="1.2" strokeLinecap="round" fill="none">
          <path d="M -16 -3 L -4 -3" />
          <path d="M 16 -3 L 4 -3" />
        </g>
        <polygon points="-4,-3 -8,-6 -8,0" fill="#a4a39d" />
        <polygon points="4,-3 8,-6 8,0" fill="#a4a39d" />
        <text x="0" y="18" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#a4a39d" letterSpacing="0.2em">MERGE</text>
      </g>

      {/* RIGHT: one continuous face */}
      <g transform="translate(245 105)">
        <rect x="-55" y="-45" width="110" height="90" fill={ACCENT} fillOpacity="0.18" stroke="#f5f5f3" strokeOpacity="0.4" strokeWidth="0.5" />

        <g fill={ACCENT} fillOpacity="0.7">
          <circle cx="-55" cy="-45" r="2.5" />
          <circle cx="55" cy="-45" r="2.5" />
          <circle cx="-55" cy="45" r="2.5" />
          <circle cx="55" cy="45" r="2.5" />
        </g>

        <text x="0" y="65" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#6a6a68" letterSpacing="0.1em">1 CONTINUOUS FACE</text>
      </g>
    </Preview>
  ),
  },
  {
    key: 'faces',
    label: 'Select Plasticity Face(s)',
    caption: 'Select faces by plasticity_id',
    preview: (
      <Preview>
        <g transform="translate(160 100)">
          <polygon
            points="-105,-60 105,-60 105,60 -105,60"
            fill="#1c1c1f"
            stroke="#3a3a3d"
            strokeWidth="0.5"
          />
          <g stroke="#3a3a3d" strokeWidth="0.5" fill="none">
            <line x1="-105" y1="-20" x2="105" y2="-20" />
            <line x1="-105" y1="20" x2="105" y2="20" />
            <line x1="-35" y1="-60" x2="-35" y2="60" />
            <line x1="35" y1="-60" x2="35" y2="60" />
          </g>
          <g fill={ACCENT} fillOpacity="0.35" stroke={ACCENT} strokeWidth="1.5">
            <rect x="-35" y="-20" width="70" height="40" />
          </g>
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="13"
            fill="#f0a070"
            letterSpacing="1"
          >
            FACE 12
          </text>
        </g>
      </Preview>
    ),
  },
  {
    key: 'edges',
    label: 'Select Plasticity Edges',
    caption: 'Edge loop from one Plasticity edge',
    preview: (
      <Preview>
        <g transform="translate(160 100)">
          <polygon
            points="-105,-60 105,-60 105,60 -105,60"
            fill="#1c1c1f"
            stroke="#3a3a3d"
            strokeWidth="0.5"
          />
          <g stroke="#3a3a3d" strokeWidth="0.5" fill="none">
            <line x1="-105" y1="-20" x2="105" y2="-20" />
            <line x1="-105" y1="20" x2="105" y2="20" />
            <line x1="-35" y1="-60" x2="-35" y2="60" />
            <line x1="35" y1="-60" x2="35" y2="60" />
          </g>
          <g stroke={ACCENT} strokeWidth="3" strokeLinecap="round">
            <line x1="-35" y1="-60" x2="-35" y2="60" />
          </g>
          <g fill={ACCENT}>
            <circle cx="-35" cy="-60" r="4" />
            <circle cx="-35" cy="-20" r="4" />
            <circle cx="-35" cy="20" r="4" />
            <circle cx="-35" cy="60" r="4" />
          </g>
        </g>
      </Preview>
    ),
  },
  {
    key: 'paint',
    label: 'Paint Plasticity Faces',
    caption: 'Unique vertex color per face ID',
    preview: (
      <Preview>
        <g transform="translate(160 100)">
          <polygon
            points="-105,-60 105,-60 105,60 -105,60"
            fill="#1c1c1f"
            stroke="#3a3a3d"
            strokeWidth="0.5"
          />
          <polygon points="-105,-60 -35,-60 -35,-20 -105,-20" fill="#d97540" fillOpacity="0.75" />
          <polygon points="-35,-60 35,-60 35,-20 -35,-20" fill="#3a6a9e" fillOpacity="0.75" />
          <polygon points="35,-60 105,-60 105,-20 35,-20" fill="#6e843a" fillOpacity="0.75" />
          <polygon points="-105,-20 -35,-20 -35,20 -105,20" fill="#7c4ea8" fillOpacity="0.75" />
          <polygon points="-35,-20 35,-20 35,20 -35,20" fill="#c44a6e" fillOpacity="0.75" />
          <polygon points="35,-20 105,-20 105,20 35,20" fill="#3c9e8c" fillOpacity="0.75" />
          <polygon points="-105,20 -35,20 -35,60 -105,60" fill="#9e8c3c" fillOpacity="0.75" />
          <polygon points="-35,20 35,20 35,60 -35,60" fill="#a86e3c" fillOpacity="0.75" />
          <polygon points="35,20 105,20 105,60 35,60" fill="#4a6ec4" fillOpacity="0.75" />
          <g stroke="#0d0d0f" strokeWidth="0.5" fill="none">
            <line x1="-105" y1="-20" x2="105" y2="-20" />
            <line x1="-105" y1="20" x2="105" y2="20" />
            <line x1="-35" y1="-60" x2="-35" y2="60" />
            <line x1="35" y1="-60" x2="35" y2="60" />
          </g>
        </g>
      </Preview>
    ),
  },
];

export function SelectionUtilitiesCard() {
  return (
    <InteractiveFeatureCard
      panelLabel="Utilities:"
      panelTab="PLASTICITY"
      items={utilities}
      defaultKey="edges"
      title="Selection utilities"
      text="Five Blender commands for working with imported Plasticity geometry: auto mark sharps and seams, merge UV seams, select faces or edges by their original Plasticity ID, and paint faces with vertex colors. Hover any command to see what it does."
    />
  );
}