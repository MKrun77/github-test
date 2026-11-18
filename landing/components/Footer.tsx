import { brand } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>{brand.name}</strong>
        <span>{brand.email}</span>
        <small>2026 {brand.name}. All rights reserved.</small>
      </div>
    </footer>
  );
}
