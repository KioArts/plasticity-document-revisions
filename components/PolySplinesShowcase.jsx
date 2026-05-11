import { useState } from 'react';
import styles from './PolySplinesShowcase.module.css';

/**
 * PolySplinesShowcase
 * --------------------------------------------------------------------------
 * A tabbed image showcase with optional badge overlay. Same interaction as
 * RefacetShowcase — clickable tabs above an image area, metadata strip below.
 * Metadata strip takes any key/value pairs.
 *
 * Drop in anywhere:
 *
 *   import { PolySplinesShowcase } from './components/PolySplinesShowcase';
 *
 *   <PolySplinesShowcase
 *     imageSize={500}
 *     badge="Studio Only"
 *     items={[
 *       {
 *         stage: 'Sub-D Mesh',
 *         src: '/img/polysplines-mesh.png',
 *         alt: 'Subdivision mesh in Blender',
 *         meta: [
 *           { label: 'source',   value: 'Blender' },
 *           { label: 'vertices', value: '80' },
 *         ],
 *       },
 *       // ...
 *     ]}
 *   />
 *
 * Props:
 *
 *   - `imageSize` — target display size (number in px, default 500). The
 *      image, tabs, and metadata strip all share this max-width so they
 *      align cleanly. Pass `[w, h]` for non-square frames:
 *      `imageSize={[800, 450]}`
 *
 *   - `items` — array of items, each with stage / src / alt / meta.
 *     `meta` is an array of `{ label, value }` pairs (typically 1–3).
 *
 *   - `badge` — optional label that overlays the image's top-right corner.
 *     Useful for marking tier-exclusive features (e.g. "Studio Only").
 *     Omit the prop to hide the badge entirely.
 *
 * If `src` is omitted on an item, that tab shows a placeholder.
 * --------------------------------------------------------------------------
 */

const defaultItems = [
  {
    stage: 'Sub-D Mesh',
    meta: [
      { label: 'source',   value: 'Blender' },
      { label: 'vertices', value: '80' },
    ],
  },
  {
    stage: 'NURBS',
    meta: [
      { label: 'source',     value: 'Plasticity' },
      { label: 'continuity', value: 'G2' },
    ],
  },
];

export function PolySplinesShowcase({
  items = defaultItems,
  imageSize = 500,
  badge,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  const [frameW, frameH] = Array.isArray(imageSize)
    ? imageSize
    : [imageSize, imageSize];

  const sharedWidthStyle = { maxWidth: `${frameW}px` };
  const frameStyle = {
    ...sharedWidthStyle,
    aspectRatio: `${frameW} / ${frameH}`,
  };

  const metaPairs = active.meta ?? [];

  return (
    <div className={styles.showcase}>
      {/* Tabs */}
      <div className={styles.tabs} style={sharedWidthStyle} role="tablist">
        {items.map((item, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            className={`${styles.tab} ${i === activeIndex ? styles.tabActive : ''}`}
            onClick={() => setActiveIndex(i)}
          >
            <span className={styles.tabNum}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.tabStage}>{item.stage}</span>
          </button>
        ))}
      </div>

      {/* Image area */}
      <div className={styles.frame} style={frameStyle}>
        {active.src ? (
          <img
            key={activeIndex}
            src={active.src}
            alt={active.alt ?? active.stage ?? ''}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>image placeholder</span>
            <small>{active.stage}</small>
          </div>
        )}

        {/* Optional corner badge */}
        {badge && <div className={styles.badge}>{badge}</div>}
      </div>

      {/* Metadata strip — takes whatever pairs you give it */}
      {metaPairs.length > 0 && (
        <div className={styles.meta} style={sharedWidthStyle}>
          {metaPairs.map((pair, i) => (
            <span key={i} className={styles.metaGroup}>
              {i > 0 && <span className={styles.metaDivider} aria-hidden="true" />}
              <span className={styles.metaItem}>
                <span className={styles.metaKey}>{pair.label}</span>
                <span className={styles.metaVal}>{pair.value}</span>
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}