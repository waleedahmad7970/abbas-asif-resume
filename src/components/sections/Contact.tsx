export default function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '60vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', textAlign: 'center',
      padding: '6rem 3rem', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Let&apos;s work together
      </p>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,7vw,6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '2.5rem' }}>
        Got an idea?<br /><em style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Let&apos;s talk.</em>
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { label: 'abbas2a2@gmail.com', href: 'mailto:abbas2a2@gmail.com' },
          { label: 'GitHub', href: '#' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abbas-butt-111036131/' },
          { label: 'CV / Résumé', href: '#' },
        ].map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
            fontSize: '0.8rem', color: 'var(--muted)', textDecoration: 'none',
            border: '1px solid var(--line)', padding: '0.65rem 1.4rem', borderRadius: '100px',
            transition: 'all 0.2s',
          }}>{l.label}</a>
        ))}
      </div>
    </section>
  );
}
