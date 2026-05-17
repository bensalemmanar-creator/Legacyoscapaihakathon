import { useNavigate } from 'react-router';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { ArrowRight, TrendingDown, AlertTriangle, CheckCircle2, Map, CalendarDays, FileText } from 'lucide-react';

const KPI_SCORES = [
  { label: 'Founder Dependency', score: 78, max: 100, color: '#F59E0B', bg: '#FFFBEB', risk: 'High', desc: 'Founder controls >70% of critical decisions' },
  { label: 'Succession Readiness', score: 29, max: 100, color: '#DC2626', bg: '#FEF2F2', risk: 'Critical', desc: 'No identified successor, no formal plan' },
  { label: 'Governance Maturity', score: 41, max: 100, color: '#F59E0B', bg: '#FFFBEB', risk: 'Medium', desc: 'No CFO, no board, partial SOPs' },
  { label: 'Management Depth', score: 35, max: 100, color: '#DC2626', bg: '#FEF2F2', risk: 'High', desc: 'Thin second-line, 7 direct reports' },
  { label: 'Transferability Score', score: 38, max: 100, color: '#F59E0B', bg: '#FFFBEB', risk: 'High', desc: 'Significant transition conditions required' },
];

const HEATMAP = [
  { function: 'Customer Relationships', level: 'Critical', score: 91 },
  { function: 'Pricing & Discounts', level: 'Critical', score: 88 },
  { function: 'Supplier Negotiation', level: 'Critical', score: 85 },
  { function: 'Cash & Finance', level: 'High', score: 73 },
  { function: 'Hiring & HR', level: 'High', score: 69 },
  { function: 'Operations Management', level: 'High', score: 65 },
  { function: 'Sales & BD', level: 'Medium', score: 54 },
  { function: 'IT / Systems', level: 'Medium', score: 42 },
  { function: 'Administration', level: 'Low', score: 28 },
];

const RISK_COLORS: Record<string, string> = {
  Critical: '#DC2626',
  High: '#F59E0B',
  Medium: '#6366F1',
  Low: '#10B981',
};

function ScoreGauge({ score, color, size = 80 }: { score: number; color: string; size?: number }) {
  const data = [{ value: score, fill: color }, { value: 100 - score, fill: '#F1F5F9' }];
  return (
    <div style={{ width: size, height: size }} className="relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius="65%" outerRadius="100%" data={data} startAngle={225} endAngle={-45} barSize={8}>
          <RadialBar dataKey="value" cornerRadius={4} background={false} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: size * 0.22, color }}>{score}</span>
      </div>
    </div>
  );
}

export function LOSExecutive() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Executive Dashboard</h1>
          <p className="text-[#64748B] text-sm mt-1">NourPack Tunisia · Food Distribution · Due Diligence Summary</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => navigate('/dependency-map')} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] transition">
            <Map size={14} /> Dependency Map
          </button>
          <button onClick={() => navigate('/action-plan')} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] transition">
            <CalendarDays size={14} /> Action Plan
          </button>
          <button onClick={() => navigate('/memo')} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white" style={{ background: '#0F172A', fontWeight: 600 }}>
            <FileText size={14} /> Export IC Memo
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-5 gap-3">
        {KPI_SCORES.map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl border border-[#E2E8F0] p-4 text-center">
            <ScoreGauge score={kpi.score} color={kpi.color} size={72} />
            <div className="mt-3 mb-1">
              <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: RISK_COLORS[kpi.risk] + '1A', color: RISK_COLORS[kpi.risk], fontWeight: 700 }}>
                {kpi.risk}
              </span>
            </div>
            <div className="text-[#0F172A] text-xs mt-1.5" style={{ fontWeight: 600 }}>{kpi.label}</div>
            <div className="text-[#94A3B8] text-xs mt-1">{kpi.desc}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Risk Heatmap */}
        <div className="col-span-2 bg-white rounded-xl border border-[#E2E8F0] p-5">
          <h2 className="text-[#0F172A] text-base mb-4" style={{ fontWeight: 700 }}>Risk Heatmap — Founder Control by Function</h2>
          <div className="space-y-2">
            {HEATMAP.map(row => (
              <div key={row.function} className="flex items-center gap-3">
                <div className="w-40 shrink-0 text-[#475569] text-sm">{row.function}</div>
                <div className="flex-1 h-6 rounded-lg bg-[#F8FAFC] relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-lg transition-all"
                    style={{ width: `${row.score}%`, background: `linear-gradient(90deg, ${RISK_COLORS[row.level]}88, ${RISK_COLORS[row.level]})` }}
                  />
                  <div className="absolute inset-0 flex items-center px-3">
                    <span className="text-xs relative z-10" style={{ fontWeight: 600, color: row.score > 60 ? 'white' : '#0F172A' }}>{row.score}%</span>
                  </div>
                </div>
                <div className="w-16 shrink-0">
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: RISK_COLORS[row.level] + '1A', color: RISK_COLORS[row.level], fontWeight: 600 }}>
                    {row.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PE Interpretation */}
        <div className="space-y-3">
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
            <h2 className="text-[#0F172A] text-base mb-4" style={{ fontWeight: 700 }}>PE Interpretation</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FEF2F2]">
                <AlertTriangle size={14} color="#DC2626" className="shrink-0 mt-0.5" />
                <p className="text-[#991B1B] text-xs">The company is profitable but highly founder-dependent — EBITDA quality at risk post-acquisition.</p>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFBEB]">
                <TrendingDown size={14} color="#F59E0B" className="shrink-0 mt-0.5" />
                <p className="text-[#78350F] text-xs">Main risks: customer relationship concentration, undocumented pricing decisions, weak second-line management.</p>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F0FDF4]">
                <CheckCircle2 size={14} color="#10B981" className="shrink-0 mt-0.5" />
                <p className="text-[#065F46] text-xs">Recommendation: invest only with contractual governance and transition conditions covering CFO hire and customer handover.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
            <h3 className="text-[#0F172A] text-sm mb-3" style={{ fontWeight: 600 }}>Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: 'View Full Dependency Map', path: '/dependency-map', color: '#6366F1' },
                { label: 'View Action Plan', path: '/action-plan', color: '#14B8A6' },
                { label: 'Review Findings', path: '/findings', color: '#F59E0B' },
                { label: 'Export IC Memo', path: '/memo', color: '#10B981' },
              ].map(a => (
                <button
                  key={a.label}
                  onClick={() => navigate(a.path)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border border-[#E2E8F0] hover:bg-[#F8FAFC] transition"
                  style={{ color: a.color, fontWeight: 500 }}
                >
                  {a.label}
                  <ArrowRight size={13} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
