"use client";
import { useState } from "react";
import { brand } from "@/lib/content";

// 상단 고정 내비게이션 (모바일에서는 햄버거 메뉴)
const links = [
  { href: "#features", label: "기능" },
  { href: "#results", label: "성과" },
  { href: "#roi", label: "ROI 계산" },
  { href: "#pricing", label: "요금" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">{brand.name}</a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="주요 메뉴">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>무료 진단 신청</a>
        </nav>
        <button
          className="menu-btn"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
