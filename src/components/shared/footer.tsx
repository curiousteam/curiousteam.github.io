export function Footer() {
  return (
    <>
      <div className="footer-bigtype">Curious — Team —</div>
      <footer className="footer">
        <div>© {new Date().getFullYear()} Curious Team · All rights reserved</div>
        <div style={{ display: "flex", gap: 24 }}>
          <span>◉ Available · Q3 24</span>
          <span>v.04 / Refresh</span>
        </div>
        <div>Designed & built in-house</div>
      </footer>
    </>
  );
}
