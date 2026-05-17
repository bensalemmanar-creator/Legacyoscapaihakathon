import { SeverityBadge } from './SeverityBadge';

interface RiskRowProps {
  name: string;
  rationale: string;
  severity: 'critical' | 'high' | 'acceptable';
  dotColor: string;
}

export function RiskRow({ name, rationale, severity, dotColor }: RiskRowProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">
      <div
        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
        style={{ backgroundColor: dotColor }}
      />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-[14px] mb-1">{name}</div>
        <div className="text-[12px] text-muted-foreground">{rationale}</div>
      </div>
      <SeverityBadge variant={severity} />
    </div>
  );
}
