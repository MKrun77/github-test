import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="section-title">도입은 4단계면 충분합니다</h2>
        <div className="grid grid-4">
          {steps.map((s) => (
            <article key={s.no} className="card step">
              <span className="num">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
