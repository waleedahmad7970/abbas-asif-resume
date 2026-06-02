'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects, Project } from '@/data/projects';
import Tag from '@/components/ui/Tag';
import CaseStudyPanel from '@/components/ui/CaseStudyPanel';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" style={{ padding: '6rem 3rem', borderTop: '1px solid var(--line)' }}>
      <p style={labelStyle}>Selected Work</p>
      <p style={introStyle}>A handful of things I&apos;ve built and shipped.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
        {projects.map(p => (
          <div key={p.id}
            onClick={() => setActive(p)}
            style={{
              ...cardStyle,
              gridColumn: p.featured ? 'span 2' : 'span 1',
            }}
          >
            {/* Image */}
            <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#1a1a18', flexShrink: 0 }}>
              <Image src={p.image} alt={p.name} width={800} height={450}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', transition: 'transform 0.6s ease' }}
              />
            </div>

            {/* Body */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>{p.num}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>↗</span>
              </div>
              <p style={{ fontFamily: 'var(--display)', fontSize: p.featured ? '1.3rem' : '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{p.name}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{p.type}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--ink)', lineHeight: 1.75, fontWeight: 300 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                {p.tags.map((t, i) => <Tag key={i} label={t.label} type={t.type} />)}
              </div>
              <button style={learnBtn}>Learn More ↗</button>
            </div>
          </div>
        ))}
      </div>

      <CaseStudyPanel project={active} onClose={() => setActive(null)} />

      <style>{`
        @media(max-width:768px){
          #projects > div:last-of-type { grid-template-columns: 1fr !important; }
          #projects > div:last-of-type > div { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
  color: 'var(--muted)', marginBottom: '1.5rem',
  display: 'flex', alignItems: 'center', gap: '0.75rem',
};
const introStyle: React.CSSProperties = {
  fontFamily: 'var(--display)', fontSize: 'clamp(1.4rem,3vw,2.4rem)',
  fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2,
  marginBottom: '2.5rem', color: 'var(--ink)',
};
const cardStyle: React.CSSProperties = {
  background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: 16,
  overflow: 'hidden', display: 'flex', flexDirection: 'column',
  cursor: 'pointer', transition: 'border-color 0.3s, transform 0.3s',
};
const learnBtn: React.CSSProperties = {
  marginTop: '1rem', fontFamily: 'var(--display)', fontSize: '0.78rem', fontWeight: 600,
  letterSpacing: '0.04em', background: 'var(--ink)', color: 'var(--bg)',
  border: 'none', borderRadius: '100px', padding: '0.6rem 1.4rem',
  cursor: 'pointer', alignSelf: 'flex-start',
};
