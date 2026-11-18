"use client";
import { useState } from "react";

// 상담 신청 폼: 현재는 화면 처리만 하며 실제 전송 API 연결이 필요하다.
export default function ContactForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: 이 위치에서 CRM 또는 이메일 API로 전송한다.
    setDone(true);
  }

  return (
    <section id="contact" className="section cta">
      <div className="container narrow">
        <h2 className="section-title light">무료 마케팅 진단을 받아보세요</h2>
        <p className="section-sub light">영업일 기준 1일 이내에 담당자가 연락드립니다.</p>
        {done ? (
          <div className="card done" role="status">신청이 접수되었습니다. 감사합니다.</div>
        ) : (
          <form className="card form" onSubmit={onSubmit}>
            <label>이름<input required name="name" autoComplete="name" /></label>
            <label>회사명<input required name="company" autoComplete="organization" /></label>
            <label>이메일<input required type="email" name="email" autoComplete="email" /></label>
            <label>월 광고비 규모
              <select name="budget" defaultValue="">
                <option value="" disabled>선택해 주세요</option>
                <option>500만원 미만</option>
                <option>500만원 ~ 3,000만원</option>
                <option>3,000만원 ~ 1억원</option>
                <option>1억원 이상</option>
              </select>
            </label>
            <label className="check"><input required type="checkbox" /> 개인정보 수집 및 이용에 동의합니다.</label>
            <button className="btn btn-primary" type="submit">무료 진단 신청</button>
          </form>
        )}
      </div>
    </section>
  );
}
