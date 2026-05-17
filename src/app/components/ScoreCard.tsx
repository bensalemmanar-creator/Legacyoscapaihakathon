interface ScoreCardProps {
  label: string;
  score: number;
  variant: 'critical' | 'moderate' | 'acceptable';
}

export function ScoreCard({ label, score, variant }: ScoreCardProps) {
  const colors = {
    critical: { bg: '#E24B4A', text: '#E24B4A' },
    moderate: { bg: '#EF9F27', text: '#EF9F27' },
    acceptable: { bg: '#639922', text: '#639922' }
  };

  const color = colors[variant];

  return (
    <div className="bg-white rounded-lg border border-border p-4 flex flex-col gap-2">
      <div className="text-[11px] text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
      <div
        className="text-[36px] leading-none"
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          color: color.text
        }}
      >
        {score}
      </div>
      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${score}%`,
            backgroundColor: color.bg
          }}
        />
      </div>
    </div>
  );
}
