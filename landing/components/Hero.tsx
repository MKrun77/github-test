import { brand, heroStats } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{brand.tagline}</p>
          <h1>
            흩어진 마케팅 데이터를
            <br />
            <span className="accent">하나의 성장 전략</span>으로
          </h1>
          <p className="lead">
            광고, 웹, CRM 데이터를 자동으로 통합하고 채널별 기여도를 분석해
            예산을 가장 효율적인 곳에 배분합니다.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">무료 진단 신청</a>
            <a href="#results" className="btn btn-ghost">성과 데이터 보기</a>
          </div>
        </div>

        {/* 대시보드 미리보기 카드 (순수 CSS로 구성) */}
        <div className="hero-card" aria-hidden="true">
          <div className="hc-head"><span>이번 달 성과</span><span className="pill">실시간</span></div>
          <div className="hc-kpis">
            <div><small>ROAS</small><strong>5.2배</strong></div>
            <div><small>CPA</small><strong>-41%</strong></div>
            <div><small>전환수</small><strong>+86%</strong></div>
          </div>
          <div className="hc-bars">
            {[40, 55, 48, 66, 74, 70, 92].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="container stats">
        {heroStats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
