"use client";
import { useState } from "react";

// 월 광고비와 현재 ROAS로 예상 개선 효과를 계산하는 인터랙티브 도구
const UPLIFT = 0.4; // 보수적 가정: ROAS 40% 개선

export default function RoiCalculator() {
  const [spend, setSpend] = useState(3000); // 단위: 만원
  const [roas, setRoas] = useState(250); // 단위: %

  const curRevenue = (spend * roas) / 100;
  const newRevenue = curRevenue * (1 + UPLIFT);
  const gain = newRevenue - curRevenue;
  const fmt = (n: number) => Math.round(n).toLocaleString("ko-KR");

  return (
    <section id="roi" className="section">
      <div className="container narrow">
        <h2 className="section-title">우리 회사는 얼마나 개선될까요?</h2>
        <p className="section-sub">월 광고비와 현재 ROAS를 입력하면 예상 효과를 계산합니다.</p>
        <div className="card calc">
          <label>
            월 광고비: <b>{fmt(spend)}만원</b>
            <input type="range" min={300} max={20000} step={100} value={spend} onChange={(e) => setSpend(+e.target.value)} />
          </label>
          <label>
            현재 ROAS: <b>{roas}%</b>
            <input type="range" min={80} max={800} step={10} value={roas} onChange={(e) => setRoas(+e.target.value)} />
          </label>
          <div className="calc-out">
            <div><small>현재 월 매출</small><strong>{fmt(curRevenue)}만원</strong></div>
            <div><small>개선 후 예상 매출</small><strong>{fmt(newRevenue)}만원</strong></div>
            <div className="hl"><small>월 추가 매출</small><strong>+{fmt(gain)}만원</strong></div>
          </div>
          <p className="muted small">ROAS {UPLIFT * 100}% 개선을 가정한 단순 추정치이며 실제 결과는 업종과 상황에 따라 다릅니다.</p>
        </div>
      </div>
    </section>
  );
}
