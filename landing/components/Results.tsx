import { roasData, cpaTrend } from "@/lib/content";

export default function Results() {
  const max = Math.max(...roasData.map((d) => d.after));
  const w = 300, h = 120;
  // 꺾은선 좌표 계산 (CPA 지수)
  const pts = cpaTrend
    .map((v, i) => `${(i / (cpaTrend.length - 1)) * w},${h - ((v - 40) / 70) * h}`)
    .join(" ");

  return (
    <section id="results" className="section alt">
      <div className="container">
        <h2 className="section-title">데이터로 확인되는 변화</h2>
        <p className="section-sub">도입 전후 비교 (시안용 예시 데이터, 게시 전 실제 수치로 교체)</p>
        <div className="grid grid-2">
          <div className="card">
            <h3>채널별 평균 ROAS (%)</h3>
            <div className="legend"><span className="dot before" />도입 전<span className="dot after" />도입 후</div>
            {roasData.map((d) => (
              <div key={d.channel} className="bar-row">
                <span className="bar-label">{d.channel}</span>
                <div className="bar-track">
                  <div className="bar before" style={{ width: `${(d.before / max) * 100}%` }}><em>{d.before}</em></div>
                  <div className="bar after" style={{ width: `${(d.after / max) * 100}%` }}><em>{d.after}</em></div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <h3>도입 후 CPA 추이 (도입 시점 = 100)</h3>
            <svg viewBox={`-10 -10 ${w + 20} ${h + 30}`} className="line" role="img" aria-label="CPA 지수가 100에서 59로 감소">
              <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinejoin="round" />
              {cpaTrend.map((v, i) => (
                <circle key={i} cx={(i / (cpaTrend.length - 1)) * w} cy={h - ((v - 40) / 70) * h} r="4" fill="var(--accent)" />
              ))}
            </svg>
            <div className="line-axis">
              {cpaTrend.map((v, i) => <span key={i}>{i}개월<br /><b>{v}</b></span>)}
            </div>
            <p className="muted">6개월 만에 획득 단가가 41% 낮아졌습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
