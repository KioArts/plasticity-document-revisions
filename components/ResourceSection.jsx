export default function ResourceSection({ title, items }) {
  return (
    <section className="resources">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <a className="resource-card" href={item.link} key={item.title}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        ))}
      </div>

      <style jsx>{`
        .resources {
          padding: 4rem 2rem;
        }
        .items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .resource-card {
          background: #fafafa;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .resource-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .resource-card h3 {
          margin: 1rem;
        }
        .resource-card p {
          margin: 0 1rem 1.5rem;
        }
      `}</style>
    </section>
  );
}
