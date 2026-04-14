import styles from "./CommandReference.module.css";

type Tier = "indie" | "studio" | "both";

export default function CommandReference({
  command,
  shortcut,
  button,
  buttonIcon,
  tier,
}: {
  command: string;
  shortcut?: string;
  button?: string;
  buttonIcon?: string;
  tier?: Tier;
}) {
  const indieActive  = tier === "indie"  || tier === "both";
  const studioActive = tier === "studio" || tier === "both";

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        <div className={styles.item}>
          <span className={styles.label}>Command</span>
          <span className={styles.value}>{command}</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.item}>
          <span className={styles.label}>Shortcut</span>
          {shortcut && shortcut !== "-" ? (
            <span className={styles.kbdRow}>
              {shortcut.split("+").map((k, i) => (
                <span key={i} className={styles.kbdRow}>
                  {i > 0 && <span className={styles.plus}>+</span>}
                  <kbd className={styles.kbd}>{k.trim()}</kbd>
                </span>
              ))}
            </span>
          ) : (
            <span className={styles.valueMuted}>—</span>
          )}
        </div>

        {(button || buttonIcon) && (
          <>
            <div className={styles.divider} />
            <div className={styles.item}>
              <span className={styles.label}>Button</span>
              <span className={styles.buttonVal}>
                {buttonIcon && (
                  <span className={styles.btnIcon}>
                    <img src={buttonIcon} alt="" />
                  </span>
                )}
                <span className={styles.value}>{button}</span>
              </span>
            </div>
          </>
        )}

        {tier && (
          <>
            <div className={styles.dividerStrong} />
            <div className={styles.tierSection}>
              <span className={styles.tierLabel}>Available in</span>
              <div className={styles.tierBadges}>
                <span className={`${styles.badge} ${indieActive ? styles.badgeIndie : styles.badgeDim}`}>
                  <span className={styles.dot} />
                  Indie
                </span>
                <span className={`${styles.badge} ${studioActive ? styles.badgeStudio : styles.badgeDim}`}>
                  <span className={styles.dot} />
                  Studio
                </span>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}