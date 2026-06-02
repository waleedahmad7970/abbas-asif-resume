'use client';
import Image from 'next/image';
import { Project } from '@/data/projects';
import Tag from '@/components/ui/Tag';

interface Props { project: Project | null; onClose: () => void; }

export default function CaseStudyPanel({ project, onClose }: Props) {
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
        zIndex: 500, backdropFilter: 'blur(4px)',
        opacity: project ? 1 : 0, transition: 'opacity 0.4s',
      }} />

      {/* Panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(680px, 100vw)', background: '#0f0f0e',
        borderLeft: '1px solid var(--line)', zIndex: 600,
        transform: project ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        overflowY: 'auto', display: 'flex', flexDirection: 'column',
      }}>
        {/* Close bar */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.2rem 2rem', background: 'rgba(15,15,14,0.9)',
          backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)',
        }}>
          <span style={{ fontFamily: 'var(--display)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Case Study</span>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--line)',
            background: 'none', color: 'var(--ink)', cursor: 'pointer', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✕</button>
        </div>

        {/* Hero image */}
        <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
          <Image src={project.image} alt={project.name} width={680} height={382} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>

        {/* Content */}
        <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Header */}
          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: 16, height: 1, background: 'var(--muted)', display: 'inline-block' }} />{cs.tag}
            </p>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>{project.name}</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{project.type}</p>
          </div>

          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--line)', borderRadius: 12, overflow: 'hidden' }}>
            {cs.metrics.map((m, i) => (
              <div key={i} style={{ background: '#0f0f0e', padding: '1.25rem 1rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.3rem' }}>{m.val}</p>
                <p style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</p>
              </div>
            ))}
          </div>

          <PanelSection title="Overview">
            {cs.overview.map((p, i) => <p key={i} style={textStyle}>{p}</p>)}
          </PanelSection>

          <PanelSection title="Challenge">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {cs.challenges.map((c, i) => (
                <div key={i} style={challengeBox}>
                  <p style={{ fontSize: '0.68rem', color: '#f87171', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 600 }}>⚠</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{c}</p>
                </div>
              ))}
            </div>
          </PanelSection>

          <PanelSection title="Solution">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {cs.solutions.map((s, i) => (
                <div key={i} style={challengeBox}>
                  <p style={{ fontSize: '0.68rem', color: '#4ade80', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 600 }}>✓</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s}</p>
                </div>
              ))}
            </div>
          </PanelSection>

          <PanelSection title="Technologies Used">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cs.stack.map((t, i) => <Tag key={i} label={t.label} type={t.type} />)}
            </div>
          </PanelSection>

          <PanelSection title="Key Features">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              {cs.features.map((f, i) => (
                <div key={i} style={{ background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: 8, padding: '0.9rem 1rem', fontSize: '0.78rem', color: 'var(--ink)' }}>
                  {f.icon} {f.label}
                </div>
              ))}
            </div>
          </PanelSection>

          <PanelSection title="Result">
            <p style={textStyle}>{cs.result}</p>
          </PanelSection>
        </div>

        {/* Footer */}
        <div style={{ padding: '1.5rem 2rem 2.5rem', borderTop: '1px solid var(--line)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', padding: '0.75rem 1.8rem', borderRadius: '100px', background: 'var(--ink)', color: 'var(--bg)', textDecoration: 'none' }}>
              Visit Live Site ↗
            </a>
          )}
          <button onClick={onClose} style={{ fontSize: '0.78rem', padding: '0.75rem 1.8rem', borderRadius: '100px', border: '1px solid var(--line)', background: 'none', color: 'var(--ink)', cursor: 'pointer' }}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

function PanelSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontFamily: 'var(--display)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {title}<span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>{children}</div>
    </div>
  );
}

const textStyle: React.CSSProperties = { fontSize: '0.88rem', color: 'var(--ink)', lineHeight: 1.85, fontWeight: 300 };
const challengeBox: React.CSSProperties = { background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: 10, padding: '0.9rem 1.1rem' };
