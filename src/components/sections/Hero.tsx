export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: 'max(50vh, 500px)', display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', padding: '7rem 3rem 4rem',
      position: 'relative', overflow: 'hidden',
      borderBottom: '1px solid var(--line)',
    }}>
      <h1 style={{
        fontFamily: 'var(--display)',
        fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
        fontWeight: 800, lineHeight: 1.0,
        letterSpacing: '-0.04em', maxWidth: 900,
        marginBottom: '3rem',
      }}>
        Hello, I&apos;m a developer<br />
        <span style={{ color: 'var(--muted)' }}>building products, systems</span><br />
        &amp; solutions for the<br />digital world.
      </h1>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
        <p style={{
          fontSize: '0.92rem', color: 'var(--muted)', maxWidth: 380,
          lineHeight: 1.75, fontWeight: 300,
        }}>
          I turn complex engineering challenges into clean, reliable software — from scalable backends to polished interfaces. Currently open to new opportunities.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#projects" style={btnPrimary}>See My Work</a>
          <a href="#contact" style={btnOutline}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

const btnPrimary: React.CSSProperties = {
  fontSize: '0.8rem', padding: '0.75rem 1.8rem', borderRadius: '100px',
  textDecoration: 'none', background: 'var(--ink)', color: 'var(--bg)',
  letterSpacing: '0.02em', display: 'inline-block',
};
const btnOutline: React.CSSProperties = {
  fontSize: '0.8rem', padding: '0.75rem 1.8rem', borderRadius: '100px',
  textDecoration: 'none', border: '1px solid var(--line)', color: 'var(--ink)',
  letterSpacing: '0.02em', display: 'inline-block',
};
