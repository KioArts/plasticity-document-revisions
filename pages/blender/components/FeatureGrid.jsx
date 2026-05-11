import styles from './FeatureGrid.module.css';

/**
 * FeatureGrid
 * --------------------------------------------------------------------------
 * Auto-flowing horizontal grid for FeatureCards (or any cards). Fits as
 * many columns as the container width allows, wrapping naturally.
 *
 * Usage:
 *
 *   import { FeatureGrid } from './components/FeatureGrid';
 *   import { FeatureCard } from './components/FeatureCard';
 *
 *   <FeatureGrid>
 *     <FeatureCard src="..." title="..." text="..." />
 *     <FeatureCard src="..." title="..." text="..." />
 *     <FeatureCard src="..." title="..." text="..." />
 *     <FeatureCard src="..." title="..." text="..." />
 *   </FeatureGrid>
 *
 * Props:
 *
 *   - `minCardWidth` — minimum width per card before the grid wraps to a
 *      new row (default 220). Smaller value = more cards per row on
 *      narrow containers.
 *
 *   - `gap` — gap between cards in pixels (default 12).
 *
 * Behavior:
 *
 *   The grid uses CSS `auto-fit` + `minmax()`. If the container is wide
 *   enough, all cards line up on one row. As the container narrows,
 *   cards wrap to additional rows to maintain at least `minCardWidth`.
 * --------------------------------------------------------------------------
 */

export function FeatureGrid({ children, minCardWidth = 220, gap = 12 }) {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minCardWidth}px, 100%), 1fr))`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
}