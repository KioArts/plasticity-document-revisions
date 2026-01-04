export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className="hero-cta">{ctaText}</a>
      </div>

      <style jsx>{`
        .hero {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #0f0f0f, #1c1c1c);
          color: white;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-cta {
          display: inline-block;
          margin-top: 2rem;
          padding: 0.75rem 1.5rem;
          background: #4f8cff;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}
