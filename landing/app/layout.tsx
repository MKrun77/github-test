import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "마케팅앱 | 데이터로 증명하는 마케팅 성과",
  description:
    "광고, 웹, CRM 데이터를 하나로 통합하고 기여도 분석과 예산 최적화로 ROAS를 높이는 마케팅 성과 플랫폼.",
  openGraph: {
    title: "마케팅앱 | 데이터로 증명하는 마케팅 성과",
    description: "통합 대시보드와 예산 최적화로 광고 효율을 높이세요.",
    type: "website",
    locale: "ko_KR",
  },
};

// 모바일 반응형을 위한 뷰포트 설정
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1b3a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
