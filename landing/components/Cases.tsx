import { cases } from "@/lib/content";

export default function Cases() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">고객 성공 사례</h2>
        <p className="section-sub">시안용 예시 문구이며 게시 전 실제 고객 사례로 교체합니다.</p>
        <div className="grid grid-3">
          {cases.map((c) => (
            <figure key={c.industry} className="card case">
              <span className="pill">{c.industry}</span>
              <strong className="big">{c.result}</strong>
              <blockquote>{c.quote}</blockquote>
              <figcaption>{c.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
