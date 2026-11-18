import { channels } from "@/lib/content";

export default function Channels() {
  return (
    <section className="channels">
      <div className="container">
        <p className="center muted">주요 광고 채널과 데이터 소스를 바로 연동합니다</p>
        <ul className="chip-list">
          {channels.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
}
