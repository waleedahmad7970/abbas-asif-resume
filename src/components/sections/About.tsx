const skillGroups = [
  { label: 'Languages', tags: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { label: 'Frontend', tags: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'Figma'] },
  { label: 'Backend', tags: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL'] },
  { label: 'Database', tags: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
  { label: 'AI / ML', tags: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'OpenAI API'] },
  { label: 'Cloud', tags: ['AWS EC2', 'AWS S3', 'CloudFront', 'Docker', 'CI/CD'] },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: '6rem 3rem', borderTop: '1px solid var(--line)',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start',
    }}>
      <div>
        <p style={labelStyle}>About</p>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
          I build software that lasts.
        </h2>
        <p style={textStyle}>With 6+ years of experience across global clients, I&apos;ve shipped products used by millions. I care deeply about code quality, system design, and making things that feel right to use.</p>
        <p style={{ ...textStyle, marginTop: '1rem' }}>From full-stack MERN applications to AI-powered systems and mobile apps — I deliver end-to-end solutions that are fast, scalable, and maintainable.</p>
        <br />
        <a href="#contact" style={{ fontSize: '0.8rem', padding: '0.75rem 1.8rem', borderRadius: '100px', border: '1px solid var(--line)', color: 'var(--ink)', textDecoration: 'none', display: 'inline-block' }}>
          Work with me ↗
        </a>
      </div>

      <div style={{ paddingTop: '3.5rem' }}>
        {skillGroups.map(g => (
          <div key={g.label} style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>{g.label}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {g.tags.map(t => (
                <span key={t} style={{ fontSize: '0.75rem', border: '1px solid var(--line)', color: 'var(--ink)', padding: '0.35rem 0.75rem', borderRadius: '100px' }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`@media(max-width:768px){ #about { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = { fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem' };
const textStyle: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 };
