import styles from './FeatureCard.module.css';

/**
 * FeatureCard
 * --------------------------------------------------------------------------
 * A single card with an image on top and a title + text below.
 *
 * Usage on its own:
 *
 *   import { FeatureCard } from './components/FeatureCard';
 *
 *   <FeatureCard
 *     src="/img/materials.png"
 *     alt="Three material swatches"
 *     title="Materials preserved"
 *     text="Modify geometry in Plasticity and your Blender shaders survive the refresh."
 *   />
 *
 * Usage inside a grid:
 *
 *   import { FeatureGrid } from './components/FeatureGrid';
 *   import { FeatureCard } from './components/FeatureCard';
 *
 *   <FeatureGrid>
 *     <FeatureCard src="..." title="..." text="..." />
 *     <FeatureCard src="..." title="..." text="..." />
 *   </FeatureGrid>
 *
 * Props:
 *
 *   - `src`    — image URL. If omitted, a placeholder shows.
 *   - `alt`    — alt text for the image.
 *   - `title`  — heading text shown below the image.
 *   - `text`   — body text shown below the title.
 *   - `imageAspectRatio` — aspect ratio for the image area (default '4 / 3').
 *      Pass any CSS aspect-ratio value, e.g. '16 / 9', '1 / 1', '3 / 2'.
 *      Use the same value across all cards in a grid for a tidy row.
 * --------------------------------------------------------------------------
 */

export function FeatureCard({
  src,
  alt = '',
  title,
  text,
  imageAspectRatio = '4 / 3',
}) {
  return (
    <article className={styles.card}>
      <div
        className={styles.imageWrap}
        style={{ aspectRatio: imageAspectRatio }}
      >
        {src ? (
          <img src={src} alt={alt} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>image</div>
        )}
      </div>

      {(title || text) && (
        <div className={styles.body}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {text && <p className={styles.text}>{text}</p>}
        </div>
      )}
    </article>
  );
}