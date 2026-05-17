import { useNavigate } from 'react-router';
import { ArrowRight, Users, Truck, Crown, Lightbulb, GitBranch, Heart, FileText, Mic, Receipt, BarChart2, Network, StickyNote, TrendingDown } from 'lucide-react';

const HIDDEN_VALUES = [
  { icon: Heart, label: 'Customer Trust', desc: 'Relationships built on personal rapport — not contracts', color: '#DC2626', bg: '#FEF2F2', risk: 'Critical' },
  { icon: Truck, label: 'Supplier Trust', desc: 'Preferential terms based on founder relationships', color: '#F59E0B', bg: '#FFFBEB', risk: 'High' },
  { icon: Crown, label: 'Informal Authority', desc: 'Decisions that happen outside formal org structure', color: '#8B5CF6', bg: '#F5F3FF', risk: 'High' },
  { icon: Lightbulb, label: 'Operational Know-How', desc: '26 years of undocumented process knowledge', color: '#F97316', bg: '#FFF7ED', risk: 'High' },
  { icon: GitBranch, label: 'Decision Power', desc: 'Founder approval required for 70%+ of key decisions', color: '#DC2626', bg: '#FEF2F2', risk: 'Critical' },
  { icon: Users, label: 'Relationship-Based Value', desc: 'Value embedded in personal network, not company systems', color: '#F59E0B', bg: '#FFFBEB', risk: 'High' },
];

const MEASUREMENT_INPUTS = [
  { icon: Mic, label: 'Founder & Team Interviews', desc: 'Transcript NLP reveals decision flows and authority patterns' },
  { icon: FileText, label: 'Contracts & Agreements', desc: 'Identify informal vs. formal customer/supplier ties' },
  { icon: Receipt, label: 'Invoices & Payment Flows', desc: 'Track who approves, signs, and controls cash' },
  { icon: Users, label: 'Customer / Supplier Lists', desc: 'Quantify concentration and relationship age' },
  { icon: Network, label: 'Org Chart Analysis', desc: 'Map formal vs. actual reporting lines and bottlenecks' },
  { icon: StickyNote, label: 'Internal Notes & Emails', desc: 'Detect informal authority and shadow decision-making' },
];

const OUTPUTS = [
  { label: 'Founder Dependency Score', value: '78/100', color: '#F59E0B', sub: 'Composite of 5 dependency dimensions' },
  { label: 'Risk Classification', value: 'HIGH', color: '#DC2626', sub: '3 Critical · 4 High · 2 Medium signals' },
  { label: 'Transfer Plan', value: '100 Days', color: '#14B8A6', sub: '34 structured actions across 7 stages' },
  { label: 'Governance Recommendations', value: '12 Items', color: '#6366F1', sub: 'CFO hire, board setup, SOP documentation' },
];

export function LOSIntangible() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Intangible Value & Hidden Risk</h1>
          <p className="text-[#64748B] text-sm mt-1">What financial statements don't capture — NourPack Tunisia</p>
        </div>
        <button onClick={() => navigate('/findings')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white" style={{ background: '#0F172A', fontWeight: 600 }}>
          View Findings <ArrowRight size={15} />
        </button>
      </div>

      {/* What financials miss */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown size={18} color="#DC2626" />
          <h2 className="text-[#0F172A] text-lg" style={{ fontWeight: 700 }}>What Financial Statements Miss</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {HIDDEN_VALUES.map(v => (
            <div key={v.label} className="bg-white rounded-xl border border-[#E2E8F0] p-5 hover:border-[#14B8A6]/40 transition">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: v.bg }}>
                  <v.icon size={18} color={v.color} />
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: v.color + '1A', color: v.color, fontWeight: 700 }}>{v.risk}</span>
              </div>
              <div className="text-[#0F172A] text-sm mb-1" style={{ fontWeight: 700 }}>{v.label}</div>
              <p className="text-[#64748B] text-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* How LegacyOS measures it */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
          <h2 className="text-[#0F172A] text-base mb-4" style={{ fontWeight: 700 }}>How LegacyOS Measures It</h2>
          <div className="space-y-3">
            {MEASUREMENT_INPUTS.map(m => (
              <div key={m.label} className="flex items-start gap-3 p-3 rounded-lg bg-[#F8FAFC]">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                  <m.icon size={15} color="#14B8A6" />
                </div>
                <div>
                  <div className="text-[#0F172A] text-sm" style={{ fontWeight: 600 }}>{m.label}</div>
                  <div className="text-[#64748B] text-xs">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final outputs */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
            <h2 className="text-[#0F172A] text-base mb-4" style={{ fontWeight: 700 }}>Final Outputs</h2>
            <div className="space-y-3">
              {OUTPUTS.map(o => (
                <div key={o.label} className="flex items-center gap-4 p-3 rounded-xl border border-[#E2E8F0]">
                  <div className="text-xl" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: o.color, minWidth: 80 }}>{o.value}</div>
                  <div>
                    <div className="text-[#0F172A] text-sm" style={{ fontWeight: 600 }}>{o.label}</div>
                    <div className="text-[#94A3B8] text-xs">{o.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary box */}
          <div className="rounded-xl p-5" style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)' }}>
            <p className="text-[#94A3B8] text-xs mb-2" style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>LegacyOS Intelligence</p>
            <p className="text-white text-sm mb-3">
              NourPack Tunisia carries significant intangible risk embedded in the founder's personal relationships. EBITDA of 1.6M TND is real — but its sustainability post-acquisition is not guaranteed without a structured transition.
            </p>
            <button
              onClick={() => navigate('/findings')}
              className="flex items-center gap-2 text-[#14B8A6] text-sm"
              style={{ fontWeight: 600 }}
            >
              View deal implications <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
