'use client';
import { useCV } from '@/context/CVContext';

export default function CV() {
  const { isOpen, closeCV } = useCV();

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
      zIndex: 700, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'all' : 'none',
      transition: 'opacity 0.4s', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: '2rem 1rem', overflowY: 'auto',
    }}>
      <div style={{
        background: '#fff', color: '#1a1a18', width: '100%', maxWidth: 820,
        borderRadius: 8, overflow: 'hidden', marginBottom: '2rem',
        fontFamily: "'Montserrat', sans-serif",
      }}>
        {/* Close bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', background: '#f7f6f2', borderBottom: '1px solid #ddd' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>Curriculum Vitae</span>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button onClick={() => window.print()} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: '100px', padding: '0.4rem 1rem', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'inherit' }}>⬇ Download / Print</button>
            <button onClick={closeCV} style={{ background: 'none', border: '1px solid #ddd', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>
        </div>

        <div style={{ padding: '3rem 3.5rem' }}>
          {/* Header */}
          <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '2px solid #111' }}>
            <p style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#111', marginBottom: '0.25rem' }}>Abbas Asif Butt</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Full Stack Developer</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
              <a href="mailto:abbas2a2@gmail.com" style={cvContactStyle}>📧 abbas2a2@gmail.com</a>
              <a href="https://www.linkedin.com/in/abbas-butt-111036131/" target="_blank" rel="noreferrer" style={cvContactStyle}>💼 linkedin.com/in/abbas-butt</a>
              <span style={cvContactStyle}>🌍 Available Globally</span>
            </div>
          </div>

          {/* Profile */}
          <CVSection title="Profile">
            <p style={cvTextStyle}>Full Stack Developer with 6+ years of experience designing and building scalable web applications, mobile platforms, and AI-powered systems. Proficient in the MERN stack, Python, React Native, and cloud infrastructure (AWS). Experienced in delivering end-to-end solutions — from UI/UX design to backend APIs and cloud deployment — for clients across the UAE, Pakistan, and globally.</p>
          </CVSection>

          {/* Experience */}
          <CVSection title="Experience">
            {[
              { role: 'Full Stack Developer', company: 'Sky IT Services', date: 'Mar 2025 — Jan 2026', desc: 'Developed and maintained full-stack web applications using the MERN stack. Built scalable RESTful APIs, implemented responsive frontends, and collaborated with cross-functional teams.' },
              { role: 'Full Stack Developer', company: 'Babystore — UAE (Remote)', date: 'May 2021 — Feb 2025', desc: 'Led the migration of a large-scale e-commerce platform from Magento to MERN stack on AWS, serving 27M+ users annually. Built custom UI/UX, scalable APIs, and integrated AWS EC2, S3, CloudFront, and RDS.' },
              { role: 'Software Engineer', company: 'Argon Tech', date: '2019 — Nov 2020', desc: 'Contributed to software development projects across web and mobile platforms. Gained hands-on experience in frontend development, API integration, and agile delivery.' },
            ].map((e, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '2px solid #111' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '0.15rem' }}>{e.role}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#444' }}>{e.company}</span>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{e.date}</span>
                </div>
                <p style={cvTextStyle}>{e.desc}</p>
              </div>
            ))}
          </CVSection>

          {/* Education */}
          <CVSection title="Education">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>Bachelor of Science in Computer Science</p>
                <p style={{ fontSize: '0.8rem', color: '#555', marginTop: '0.2rem' }}>University of Lahore</p>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#888' }}>2014 — 2019</span>
            </div>
          </CVSection>

          {/* Skills */}
          <CVSection title="Skills">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
              {[
                { label: 'Frontend', tags: ['React.js','Next.js','React Native','TypeScript','Tailwind CSS','HTML5','CSS3','Figma'] },
                { label: 'Backend', tags: ['Node.js','Express.js','NestJS','Python','REST APIs','GraphQL','FastAPI'] },
                { label: 'Database', tags: ['MongoDB','PostgreSQL','MySQL','Redis','Firebase'] },
                { label: 'AI / ML', tags: ['TensorFlow','PyTorch','Scikit-learn','Pandas','NumPy','OpenAI API'] },
                { label: 'Cloud & DevOps', tags: ['AWS EC2','AWS S3','CloudFront','Docker','CI/CD','Git','Vercel'] },
                { label: 'E-Commerce', tags: ['Shopify','WooCommerce','Magento','Stripe'] },
              ].map(g => (
                <div key={g.label}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#111', marginBottom: '0.6rem' }}>{g.label}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {g.tags.map(t => <span key={t} style={{ fontSize: '0.68rem', padding: '0.25rem 0.6rem', borderRadius: '100px', border: '1px solid #ddd', color: '#333', background: '#f7f6f2' }}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </CVSection>
        </div>

        <button onClick={() => window.print()} style={{ display: 'block', width: '100%', padding: '0.85rem', background: '#111', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.06em' }}>
          ⬇ Download / Print CV
        </button>
      </div>
    </div>
  );
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: '#111', padding: '0.35rem 0.75rem', display: 'inline-block', marginBottom: '1.1rem', borderRadius: 2 }}>{title}</p>
      {children}
    </div>
  );
}

const cvContactStyle: React.CSSProperties = { fontSize: '0.78rem', color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' };
const cvTextStyle: React.CSSProperties = { fontSize: '0.82rem', color: '#555', lineHeight: 1.7 };
