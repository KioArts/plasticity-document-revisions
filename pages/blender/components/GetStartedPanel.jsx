import styles from './GetStartedPanel.module.css';
import { StepList } from './StepList';

/**
 * GetStartedPanel
 * --------------------------------------------------------------------------
 * A docs-style CTA panel. Two-column layout: description and action buttons
 * on the left, numbered steps on the right.
 *
 * Drop in anywhere:
 *
 *   import { GetStartedPanel } from './components/GetStartedPanel';
 *
 *   <GetStartedPanel
 *     description="Free with every Plasticity license. Works with Blender 3.6 LTS and newer on Windows, macOS, and Linux."
 *     primaryCta={{ label: 'Download add-on (.zip)', href: 'https://example.com/download' }}
 *     secondaryCta={{ label: 'Read setup guide', href: '/blender/install-blender-addon' }}
 *     steps={[
 *       {
 *         title: 'Install the .zip in Blender',
 *         subtitle: 'Edit → Preferences → Add-ons → Install',
 *         link: { label: 'Docs', href: '/blender/install-blender-addon' },
 *       },
 *       // ...
 *     ]}
 *   />
 *
 * Props:
 *
 *   - `description`  — supporting paragraph text on the left.
 *   - `primaryCta`   — `{ label, href }` for the filled button.
 *   - `secondaryCta` — `{ label, href }` for the outlined button (optional).
 *   - `steps`        — array passed to <StepList> (see StepList for shape).
 * --------------------------------------------------------------------------
 */

export function GetStartedPanel({
  title,
  description,
  primaryCta,
  secondaryCta,
  steps = [],
}) {
  return (
    <section className={styles.panel}>
      <div className={styles.grid}>
        <div className={styles.intro}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <p className={styles.description}>{description}</p>}

          {(primaryCta || secondaryCta) && (
            <div className={styles.actions}>
              {primaryCta && (
                <a
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  href={primaryCta.href}
                >
                  {primaryCta.label} →
                </a>
              )}
              {secondaryCta && (
                <a
                  className={`${styles.btn} ${styles.btnGhost}`}
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>

        <div className={styles.steps}>
          <StepList steps={steps} />
        </div>
      </div>
    </section>
  );
}