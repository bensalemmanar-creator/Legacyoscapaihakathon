interface SeverityBadgeProps {
  variant: 'critical' | 'high' | 'acceptable';
}

export function SeverityBadge({ variant }: SeverityBadgeProps) {
  const config = {
    critical: {
      label: 'Critical',
      bg: '#E24B4A',
      text: '#ffffff'
    },
    high: {
      label: 'High',
      bg: '#EF9F27',
      text: '#ffffff'
    },
    acceptable: {
      label: 'Acceptable',
      bg: '#639922',
      text: '#ffffff'
    }
  };

  const { label, bg, text } = config[variant];

  return (
    <span
      className="inline-flex items-center px-2 py-1 rounded-full text-[11px]"
      style={{
        backgroundColor: bg,
        color: text,
        fontFamily: 'var(--font-mono)',
        fontWeight: 500
      }}
    >
      {label}
    </span>
  );
}
