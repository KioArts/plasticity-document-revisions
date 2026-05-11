import { useState } from 'react';
import styles from './RefacetShowcase.module.css';

/**
 * RefacetShowcase
 * --------------------------------------------------------------------------
 * A tabbed image showcase. Tabs above, image in the middle, metadata below.
 * All three pieces share the same width (set by the `imageSize` prop), so
 * the showcase reads as one unit rather than a stretched tab row over a
 * small image.
 *
 * Drop in anywhere:
 *
 *   import { RefacetShowcase } from './components/RefacetShowcase';
 *
 *   <RefacetShowcase
 *     imageSize={500}
 *     items={[
 *       { stage: 'Default',   tolerance: '0.0005', faces: '600', src: '/img/default.png',   alt: 'Low-poly mesh' },
 *       { stage: 'Low-Poly',  tolerance: '0.05',   faces: '5k',  src: '/img/low-poly.png',  alt: 'Medium-density mesh' },
 *       { stage: 'High-Poly', tolerance: '0.02',   faces: '60k', src: '/img/high-poly.png', alt: 'High-density mesh' },
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
 *   - `items` — array of items, each with stage / tolerance / faces / src / alt.
 *
 * If `src` is omitted on an item, that tab shows a placeholder.
 * --------------------------------------------------------------------------
 */

const defaultItems = [
  { stage: 'Quick', tolerance: '0.8',  faces: '600' },
  { stage: 'Mid',   tolerance: '0.2',  faces: '5k' },
  { stage: 'Final', tolerance: '0.02', faces: '60k' },
];

export function RefacetShowcase({ items = defaultItems, imageSize = 500 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  // Allow imageSize as a single number (square) or [w, h] tuple
  const [frameW, frameH] = Array.isArray(imageSize)
    ? imageSize
    : [imageSize, imageSize];

  // Inline style applied to all three sections so they share max-width.
  // The frame additionally gets aspect-ratio.
  const sharedWidthStyle = { maxWidth: `${frameW}px` };
  const frameStyle = {
    ...sharedWidthStyle,
    aspectRatio: `${frameW} / ${frameH}`,
  };

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
      </div>

      {/* Metadata strip */}
      <div className={styles.meta} style={sharedWidthStyle}>
        <span className={styles.metaItem}>
          <span className={styles.metaKey}>tolerance</span>
          <span className={styles.metaVal}>{active.tolerance}</span>
        </span>
        <span className={styles.metaDivider} aria-hidden="true" />
        <span className={styles.metaItem}>
          <span className={styles.metaKey}>faces</span>
          <span className={styles.metaVal}>{active.faces}</span>
        </span>
      </div>
    </div>
  );
}