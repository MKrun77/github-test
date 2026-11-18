import { problems } from "@/lib/content";

export default function Problems() {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="section-title">마케터가 매일 겪는 세 가지 문제</h2>
        <div className="grid grid-3">
          {problems.map((p, i) => (
            <article key={p.title} className="card">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
