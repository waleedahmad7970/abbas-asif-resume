'use client';
import { useState } from 'react';
import { useCV } from '@/context/CVContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCV } = useCV();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.4rem 3rem',
        background: 'rgba(12,12,11,0.88)', backdropFilter: 'blur(12px)',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1rem',
          color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.01em',
        }}>Abbas.</a>

        {/* Desktop center links */}
        <div className="nav-center" style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '1.8rem', alignItems: 'center', whiteSpace: 'nowrap',
        }}>
          {[['#projects','Work'],['#about','About'],['#faq','FAQ']].map(([href, label]) => (
            <a key={label} href={href} style={{
              color: '#fff', fontSize: '1.35rem', fontWeight: 600,
              textDecoration: 'none', letterSpacing: '-0.01em', transition: 'opacity 0.2s',
            }}>{label}</a>
          ))}
          <span style={{ width: 1, height: '1.2rem', background: '#555', display: 'inline-block' }} />
          <button onClick={openCV} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#fff', fontSize: '1.35rem', fontWeight: 600,
            letterSpacing: '-0.01em', padding: 0,
          }}>Resume</button>
        </div>

        {/* Desktop right icons */}
        <div className="nav-right" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="https://www.linkedin.com/in/abbas-butt-111036131/" target="_blank" rel="noreferrer"
            style={iconStyle}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:abbas2a2@gmail.com" style={iconStyle}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="2,4 12,13 22,4"/>
            </svg>
          </a>
          <a href="#contact" style={{
            fontSize: '0.78rem', color: 'var(--bg)', background: 'var(--ink)',
            textDecoration: 'none', padding: '0.5rem 1.2rem', borderRadius: '100px',
            transition: 'opacity 0.2s',
          }}>Let's Talk</a>

          {/* Hamburger */}
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(true)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <span style={barStyle} /><span style={barStyle} /><span style={barStyle} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', inset: 0, background: '#0c0c0b',
        zIndex: 150, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.35s ease',
        flexDirection: 'column', gap: '2rem', textAlign: 'center',
      }}>
        <button onClick={closeMenu} style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          background: 'none', border: '1px solid #333', borderRadius: '50%',
          width: 36, height: 36, color: 'var(--ink)', cursor: 'pointer', fontSize: '1rem',
        }}>✕</button>
        {[['#projects','Work'],['#about','About'],['#faq','FAQ']].map(([href, label]) => (
          <a key={label} href={href} onClick={closeMenu} style={{
            fontFamily: 'var(--display)', fontSize: '2.5rem', fontWeight: 800,
            color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.03em',
          }}>{label}</a>
        ))}
        <button onClick={() => { closeMenu(); openCV(); }} style={{
          fontFamily: 'var(--display)', fontSize: '2.5rem', fontWeight: 800,
          color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer',
          letterSpacing: '-0.03em',
        }}>Resume</button>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <a href="https://www.linkedin.com/in/abbas-butt-111036131/" target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:abbas2a2@gmail.com"
            style={{ color: 'var(--muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            Email
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-center { display: none !important; }
          .nav-right a, .nav-right > a { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const iconStyle: React.CSSProperties = {
  color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--line)',
  transition: 'color 0.2s', textDecoration: 'none',
};
const barStyle: React.CSSProperties = {
  display: 'block', width: 24, height: 2, background: 'var(--ink)', borderRadius: 2,
};
