const skills = ['TypeScript','React Native','Node.js','PostgreSQL','AWS','Docker','Next.js','Python','Go','GraphQL','Redis','TensorFlow','MongoDB','NestJS','Shopify','Figma'];

export default function Marquee() {
  const doubled = [...skills, ...skills];
  return (
    <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden', padding: '1.1rem 0', margin: '0' }}>
      <div style={{ display: 'flex', gap: '3rem', width: 'max-content', animation: 'marquee 22s linear infinite' }}>
        {doubled.map((s, i) => (
          <span key={i} style={{
            fontFamily: 'var(--display)', fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: i % 2 === 0 ? 'var(--muted)' : 'var(--accent)', whiteSpace: 'nowrap',
          }}>{i % 2 === 0 ? s : '·'}</span>
        ))}
      </div>
    </div>
  );
}
