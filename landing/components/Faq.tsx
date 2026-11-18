import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container narrow">
        <h2 className="section-title">자주 묻는 질문</h2>
        {faqs.map((f) => (
          <details key={f.q} className="faq">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
