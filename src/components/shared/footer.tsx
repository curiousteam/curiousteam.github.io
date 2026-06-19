export function Footer() {
  return (
    <>
      <footer className="footer">
        <div>(c) {new Date().getFullYear()} Curious Team - All rights reserved</div>
        <div style={{ display: "flex", gap: 24 }}>
          <span>Available - Remote projects</span>
          <span>v.04 / Portfolio</span>
        </div>
        <div>Designed and built in-house</div>
      </footer>
    </>
  );
}
