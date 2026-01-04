export default function FeatureGrid({ features }) {
  return (
    <section className="grid">
      {features.map((f) => (
        <div className="card" key={f.title}>
          <img src={f.icon} alt="" />
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
        }
        .card {
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          text-align: center;
        }
        .card img {
          width: 48px;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
}
