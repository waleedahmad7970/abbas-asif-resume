'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 6, suffix: '+', label: 'Years of Experience' },
  { target: 57, suffix: '+', label: 'Projects Completed' },
  { target: 99, suffix: '%', label: 'Client Satisfaction' },
  { val: '🌍', label: 'Global Clients' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / (1800 / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <p ref={ref} style={valStyle}>{count}{suffix}</p>;
}

export default function Stats() {
  return (
    <section style={{ padding: '5rem 3rem', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--line)', borderRadius: 16, overflow: 'hidden' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: 'var(--bg2)', padding: '2.5rem 2rem', textAlign: 'center' }}>
            {'target' in s
              ? <Counter target={s.target!} suffix={s.suffix!} />
              : <p style={valStyle}>{s.val}</p>
            }
            <p style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){ .stats-inner { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
    </section>
  );
}

const valStyle: React.CSSProperties = {
  fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem,4vw,3.5rem)',
  fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--ink)',
  lineHeight: 1, marginBottom: '0.5rem',
};
