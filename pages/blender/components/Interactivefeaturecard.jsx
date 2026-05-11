import { useState } from 'react';
import styles from './InteractiveFeatureCard.module.css';

/**
 * InteractiveFeatureCard
 * --------------------------------------------------------------------------
 * A wide feature card with an interactive panel of buttons and a live preview.
 * Title and description sit below, full-width.
 *
 * Layout: [sleek vertical tab] [buttons panel] [preview canvas]
 *
 * Props:
 *   - `panelLabel` — small label above the buttons (default 'Utilities:').
 *   - `panelTab`   — text for the vertical tab on the left. Pass null/empty to hide.
 *   - `items`      — array of { key, label, caption, preview } objects.
 *   - `defaultKey` — key of the item that should be active on first render.
 *   - `title`      — heading text shown below the interactive area.
 *   - `text`       — body text shown below the title.
 * --------------------------------------------------------------------------
 */

export function InteractiveFeatureCard({
  panelLabel = 'Utilities:',
  panelTab = 'PLASTICITY',
  items = [],
  defaultKey,
  title,
  text,
}) {
  const initialKey = defaultKey ?? items[0]?.key;
  const [activeKey, setActiveKey] = useState(initialKey);
  const active = items.find((it) => it.key === activeKey) ?? items[0];

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <div className={styles.interactive}>
          {panelTab && <div className={styles.tab}>{panelTab}</div>}

          <div className={styles.panel}>
            <div className={styles.panelLabel}>{panelLabel}</div>
            {items.map((item) => (
              <button
                key={item.key}
                className={`${styles.btn} ${item.key === activeKey ? styles.btnActive : ''}`}
                onMouseEnter={() => setActiveKey(item.key)}
                onFocus={() => setActiveKey(item.key)}
                onClick={() => setActiveKey(item.key)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={styles.preview}>
            <div className={styles.previewCanvas}>{active?.preview}</div>
            {active?.caption && (
              <div className={styles.previewCaption}>{active.caption}</div>
            )}
          </div>
        </div>
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