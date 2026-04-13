import styles from "./ResourceSection.module.css";

export default function ResourceSection({ title, items }) {
  const isSingle = items.length === 1;

  return (
    <div className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={isSingle ? styles.singleGrid : styles.grid}>
        {items.map((item) => (
          <a
            key={item.title}
            className={styles.card}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.image && (
              <img className={styles.image} src={item.image} alt="" />
            )}

            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{item.title}</h3>

              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}

              {item.subItems && (
                <ul className={styles.subList}>
                  {item.subItems.map((sub) => (
                    <li key={sub.title}>
                      <a href={sub.link} className={styles.subLink}>
                        {sub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
