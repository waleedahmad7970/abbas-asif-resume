type TagType = 'frontend' | 'backend' | 'db' | 'infra' | 'neutral';

const colors: Record<TagType, React.CSSProperties> = {
  frontend: { background: '#0f2a1a', color: '#4ade80', borderColor: '#166534' },
  backend:  { background: '#1a1a0a', color: '#fbbf24', borderColor: '#92400e' },
  db:       { background: '#1a0a1a', color: '#c084fc', borderColor: '#6b21a8' },
  infra:    { background: '#0a1a2a', color: '#60a5fa', borderColor: '#1e40af' },
  neutral:  { background: '#1c1c1a', color: '#aaa', borderColor: '#333' },
};

export default function Tag({ label, type = 'neutral' }: { label: string; type?: TagType }) {
  return (
    <span style={{
      fontSize: '0.65rem', padding: '0.3rem 0.65rem', borderRadius: '100px',
      letterSpacing: '0.03em', border: '1px solid',
      ...colors[type],
    }}>{label}</span>
  );
}
