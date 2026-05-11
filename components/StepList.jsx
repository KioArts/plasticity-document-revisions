import styles from './StepList.module.css';

/**
 * StepList
 * --------------------------------------------------------------------------
 * Vertical numbered list of step cards. Each step has a number, a title,
 * an optional subtitle (e.g. a UI breadcrumb path), and an optional link
 * out to docs.
 *
 * Use on its own:
 *
 *   import { StepList } from './components/StepList';
 *
 *   <StepList
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
 * Or use it inside <GetStartedPanel>, which wraps it with marketing copy.
 *
 * Props:
 *
 *   - `steps` — array of `{ title, subtitle?, link? }`. Steps are numbered
 *     in order automatically.
 *   - `startNumber` — first step number (default 1). Useful if you split
 *     a long sequence across multiple StepLists.
 * --------------------------------------------------------------------------
 */

export function StepList({ steps = [], startNumber = 1 }) {
  return (
    <ol className={styles.list}>
      {steps.map((step, i) => (
        <li key={i} className={styles.step}>
          <span className={styles.num}>{startNumber + i}</span>
          <span className={styles.body}>
            <span className={styles.title}>{step.title}</span>
            {step.subtitle && (
              <span className={styles.subtitle}>{step.subtitle}</span>
            )}
          </span>
          {step.link && (
            <a className={styles.link} href={step.link.href}>
              {step.link.label ?? 'Docs'}
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}