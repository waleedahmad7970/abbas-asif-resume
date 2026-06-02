export default function Footer() {
  return (
    <footer style={{ padding: '2rem 3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
      <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>© 2026 Abbas Asif Butt · London, UK</p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'GitHub', href: '#' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abbas-butt-111036131/' },
          { label: 'Email', href: 'mailto:abbas2a2@gmail.com' },
        ].map(l => (
          <a key={l.label} href={l.href} style={{ fontSize: '0.75rem', color: 'var(--muted)', textDecoration: 'none' }}>{l.label}</a>
        ))}
      </div>
    </footer>
  );
}
