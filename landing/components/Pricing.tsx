import { plans } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="section alt">
      <div className="container">
        <h2 className="section-title">규모에 맞는 요금제</h2>
        <div className="grid grid-3">
          {plans.map((p) => (
            <article key={p.name} className={`card plan ${p.highlight ? "hl" : ""}`}>
              {p.highlight && <span className="badge">추천</span>}
              <h3>{p.name}</h3>
              <strong className="price">{p.price}</strong>
              <p className="muted">{p.desc}</p>
              <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <a href="#contact" className={`btn ${p.highlight ? "btn-primary" : "btn-ghost-dark"}`}>상담 신청</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
