'use client';
import { useState } from 'react';

const faqs = [
  { q: 'Are you available for freelance work?', a: 'Yes — I take on selected freelance and contract projects. I\'m particularly interested in early-stage products and technically interesting problems.' },
  { q: 'What kind of projects do you enjoy most?', a: 'I love working on products where engineering decisions genuinely matter — distributed systems, developer tooling, data pipelines, and performance-critical applications.' },
  { q: 'How do you approach a new project?', a: 'I start with understanding the problem deeply before writing a line of code. I like to map out the system, identify constraints early, and ship iteratively.' },
  { q: 'Are you open to full-time roles?', a: 'Absolutely. I\'m open to senior and staff-level engineering roles at companies building something meaningful. I\'m based in London but open to remote and hybrid arrangements.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '6rem 3rem', borderTop: '1px solid var(--line)' }}>
      <p style={labelStyle}>FAQ</p>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '3rem' }}>
        Common<br /><span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>questions.</span>
      </h2>
      <div style={{ borderTop: '1px solid var(--line)' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              width: '100%', background: 'none', border: 'none', color: 'var(--ink)',
              fontFamily: 'var(--display)', fontSize: '1.05rem', fontWeight: 600,
              letterSpacing: '-0.02em', textAlign: 'left', padding: '1.4rem 0',
              cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              {f.q}
              <span style={{
                width: 28, height: 28, borderRadius: '50%', border: '1px solid var(--line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', color: 'var(--muted)', flexShrink: 0,
                transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s',
              }}>+</span>
            </button>
            <div style={{
              fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8,
              maxHeight: open === i ? 300 : 0, overflow: 'hidden',
              transition: 'max-height 0.4s ease, padding 0.3s',
              paddingBottom: open === i ? '1.4rem' : 0, fontWeight: 300,
            }}>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = { fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' };
