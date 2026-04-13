// components/ChapterOverview.tsx

import Link from 'next/link';
import styles from './ChapterOverview.module.css';

export default function ChapterOverview({ title, description, items, thumbnail }) {
  return (
    <section className={styles.wrapper}>
  {thumbnail && (
    <div
      className={styles.thumbnailBackground}
      style={{ backgroundImage: `url(${thumbnail})` }}
    />
  )}

  <div className={styles.overlayContent}>
    <h1 className={styles.heading}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </div>

  <h2 className={styles.subheading}>Contents</h2>
  <div className={styles.cardRow}>
    {items.map(({ title, description, href }) => (
      <Link key={href} href={href} className={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    ))}
  </div>
</section>

  );
}
