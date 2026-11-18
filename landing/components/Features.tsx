import { features } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">성과를 만드는 핵심 기능</h2>
        <p className="section-sub">데이터 수집부터 실행 제안까지, 하나의 플랫폼에서 끝냅니다.</p>
        <div className="grid grid-2">
          {features.map((f) => (
            <article key={f.title} className="card feature">
              <span className="pill">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
