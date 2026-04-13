import styles from "./HeadBannerThumbnail.module.css";

export default function HeadBannerThumbnail({
  src,
  alt,
  title,
  command,
  shortcut,
  button,
  buttonIcon,
  icon
}) {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <div className={styles.wrapper}>
      {isVideo ? (
        <video
          src={src}
          className={styles.thumbnail}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img src={src} alt={alt} className={styles.thumbnail} />
      )}

      <div className={styles.fade} />

      <div className={styles.dialogue}>
        <div className={styles.commandBox}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.row}>
            <span className={styles.label}>Command:</span>
            <span className={styles.value}>{command}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Shortcut:</span>
            <span className={styles.value}>{shortcut}</span>
          </div>

          {(button || buttonIcon) && (
            <div className={styles.row}>
              <span className={styles.label}>Button:</span>
              <span className={styles.valueRow}>
                {buttonIcon && (
                  <span className={styles.inlineIcon}>{buttonIcon}</span>
                )}
                <span className={styles.buttonText}>{button}</span>
              </span>
            </div>
          )}

          {icon && <div className={styles.icon}>{icon}</div>}
        </div>
      </div>
    </div>
  );
}
