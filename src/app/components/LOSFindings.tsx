import { useNavigate } from 'react-router';
import { ArrowRight, AlertTriangle, TrendingDown, DollarSign, ChevronRight } from 'lucide-react';

const FINDINGS = [
  {
    issue: 'Founder approves 82% of all customer discounts',
    evidence: 'Founder interview transcript + invoice sign-off pattern',
    risk: 'Critical',
    dimension: 'Pricing Dependency',
    implication: 'Discount culture will be lost — customers expect personal negotiation. Pricing risk without transition.',
    dealAction: 'Reduce multiple by 0.3–0.5x; require discount matrix before close',
  },
  {
    issue: 'Top 2 clients managed personally by founder (42% of revenue)',
    evidence: 'Customer list + interview: "I call them every week"',
    risk: 'Critical',
    dimension: 'Customer Concentration',
    implication: 'Retention risk for 42% of revenue in first 12 months post-acquisition',
    dealAction: 'Mandatory joint-introductions in LOI; earn-out clause tied to retention',
  },
  {
    issue: 'No CFO, no monthly reporting owner',
    evidence: 'Org chart + interviews: financial reporting done ad-hoc by founder',
    risk: 'High',
    dimension: 'Finance Risk',
    implication: 'No visibility into real-time P&L; reporting quality drops post-deal',
    dealAction: 'Hire CFO within 100 days; condition disbursement to hire',
  },
  {
    issue: 'Supplier terms relationship-based — no formal contracts with top 2 vendors',
    evidence: 'Supplier list + contract review: verbal agreements only',
    risk: 'High',
    dimension: 'Supply Chain Risk',
    implication: 'Pricing and supply continuity at risk without founder involvement',
    dealAction: 'Formalize contracts pre-close; add supply continuity rep & warranty',
  },
  {
    issue: 'No succession plan, no identified second-in-command',
    evidence: 'Management interviews + HR review',
    risk: 'High',
    dimension: 'Succession Risk',
    implication: 'Absence of founder = operational paralysis across functions',
    dealAction: 'Transition period clause + founder consulting agreement (24 months)',
  },
  {
    issue: 'SOPs partially documented — no purchasing or pricing procedures',
    evidence: 'Internal document review: 3/11 SOPs found',
    risk: 'Medium',
    dimension: 'Process Risk',
    implication: 'Institutional knowledge locked in founder — loss risk during transition',
    dealAction: 'SOP completion milestone tied to 100-day plan + escrow release',
  },
  {
    issue: '7 direct reports to founder with overlapping responsibilities',
    evidence: 'Org chart + interview: "everyone reports to me"',
    risk: 'Medium',
    dimension: 'Management Depth',
    implication: 'No functional heads with clear decision authority post-close',
    dealAction: 'Define functional org chart pre-close; hire Ops lead in 60 days',
  },
];

const RISK_STYLE: Record<string, { bg: string; color: string }> = {
  Critical: { bg: '#FEF2F2', color: '#DC2626' },
  High: { bg: '#FFFBEB', color: '#F59E0B' },
  Medium: { bg: '#EEF2FF', color: '#6366F1' },
  Low: { bg: '#F0FDF4', color: '#10B981' },
};

export function LOSFindings() {
  const navigate = useNavigate();

  const adjVal = 8.2 * 5.2;
  const initVal = 8.2 * 6.5;
  const avoided = initVal - adjVal;

  return (
    <div className="p-6 space-y-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Findings & Deal Implications</h1>
          <p className="text-[#64748B] text-sm mt-1">7 findings across 5 risk dimensions — NourPack Tunisia</p>
        </div>
        <button onClick={() => navigate('/action-plan')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white" style={{ background: '#0F172A', fontWeight: 600 }}>
          View Action Plan <ArrowRight size={15} />
        </button>
      </div>

      {/* Summary chips */}
      <div className="flex gap-3 flex-wrap">
        {[
          { label: 'Critical', count: 2, ...RISK_STYLE.Critical },
          { label: 'High', count: 3, ...RISK_STYLE.High },
          { label: 'Medium', count: 2, ...RISK_STYLE.Medium },
        ].map(c => (
          <div key={c.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: c.bg }}>
            <span style={{ color: c.color, fontWeight: 700 }}>{c.count}</span>
            <span className="text-sm" style={{ color: c.color }}>{c.label} Risk Findings</span>
          </div>
        ))}
      </div>

      {/* Findings Table */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
        <div className="grid text-xs px-4 py-3 border-b border-[#F1F5F9] bg-[#F8FAFC]" style={{ gridTemplateColumns: '2fr 2fr 1fr 1.5fr 2fr', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <div>Detected Issue</div>
          <div>Evidence</div>
          <div>Risk Level</div>
          <div>Dimension</div>
          <div>Deal Implication</div>
        </div>
        {FINDINGS.map((f, i) => {
          const rs = RISK_STYLE[f.risk];
          return (
            <div
              key={i}
              className="grid px-4 py-3.5 border-b border-[#F8FAFC] hover:bg-[#F8FAFC] transition cursor-pointer"
              style={{ gridTemplateColumns: '2fr 2fr 1fr 1.5fr 2fr', alignItems: 'start' }}
            >
              <div className="text-[#0F172A] text-sm pr-3" style={{ fontWeight: 500 }}>{f.issue}</div>
              <div className="text-[#64748B] text-xs pr-3 italic">{f.evidence}</div>
              <div>
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: rs.bg, color: rs.color, fontWeight: 700 }}>{f.risk}</span>
              </div>
              <div className="text-[#475569] text-xs">{f.dimension}</div>
              <div className="text-[#0F172A] text-xs">{f.implication}
                <div className="mt-1 text-[#14B8A6] text-xs" style={{ fontWeight: 600 }}>{f.dealAction}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Valuation card */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
        <div className="flex items-center gap-2 mb-5">
          <DollarSign size={18} color="#14B8A6" />
          <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 700 }}>Valuation Impact Analysis</h2>
          <span className="text-[#64748B] text-xs px-2 py-0.5 rounded-full bg-[#F1F5F9]">EBITDA basis · 8.2M TND revenue</span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: 'Initial Indicative Valuation', value: `${initVal.toFixed(1)}M TND`, sub: '6.5× EBITDA — no dependency adjustment', color: '#64748B', bg: '#F8FAFC' },
            { label: 'Risk-Adjusted Valuation', value: `${adjVal.toFixed(1)}M TND`, sub: '5.2× EBITDA — reflects founder dependency discount', color: '#F59E0B', bg: '#FFFBEB' },
            { label: 'Avoided Overpayment', value: `${avoided.toFixed(1)}M TND`, sub: 'Protected through LegacyOS dependency analysis', color: '#10B981', bg: '#F0FDF4' },
          ].map(v => (
            <div key={v.label} className="rounded-xl p-4" style={{ background: v.bg }}>
              <div className="text-2xl mb-1" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: v.color }}>{v.value}</div>
              <div className="text-[#0F172A] text-sm mb-1" style={{ fontWeight: 600 }}>{v.label}</div>
              <div className="text-[#64748B] text-xs">{v.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
