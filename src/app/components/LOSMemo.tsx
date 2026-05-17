import { useNavigate } from 'react-router';
import { Download, Share2, FileText, AlertTriangle, CheckCircle2, TrendingDown, DollarSign, CalendarDays, Building2 } from 'lucide-react';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-xs uppercase tracking-widest mb-3 pb-2 border-b border-[#E2E8F0]" style={{ fontWeight: 700, color: '#64748B' }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

export function LOSMemo() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Exportable PE Memo</h1>
          <p className="text-[#64748B] text-sm mt-1">Investment Committee Memorandum — NourPack Tunisia · May 16, 2026</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] transition">
            <Share2 size={14} />
            Share with IC
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] transition">
            <FileText size={14} />
            Board Pack
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white" style={{ background: '#14B8A6', fontWeight: 600 }}>
            <Download size={14} />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Memo preview */}
        <div className="col-span-2 bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
          {/* Memo header */}
          <div className="px-8 py-6 border-b border-[#E2E8F0]" style={{ background: '#0F172A' }}>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#14B8A6' }}>
                    <FileText size={12} color="white" />
                  </div>
                  <span className="text-[#94A3B8] text-xs" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>LegacyOS · Investment Committee Memo</span>
                </div>
                <h2 className="text-white text-xl mb-1" style={{ fontWeight: 700 }}>NourPack Tunisia</h2>
                <p className="text-[#94A3B8] text-sm">Founder Dependency Due Diligence — Majority Acquisition Analysis</p>
              </div>
              <div className="text-right">
                <div className="text-[#94A3B8] text-xs mb-1">Analysis Date</div>
                <div className="text-white text-sm" style={{ fontWeight: 600 }}>May 16, 2026</div>
                <div className="text-[#94A3B8] text-xs mt-2">Prepared by</div>
                <div className="text-white text-sm" style={{ fontWeight: 600 }}>Sana Amari, PE Analyst</div>
              </div>
            </div>
          </div>

          <div className="px-8 py-6">
            <Section title="Company Summary">
              <div className="grid grid-cols-3 gap-3 mb-3">
                {[
                  ['Company', 'NourPack Tunisia'],
                  ['Sector', 'Food Distribution & Packaging'],
                  ['HQ', 'Sfax, Tunisia'],
                  ['Founded', '1998 (26 years)'],
                  ['Revenue', '8.2M TND'],
                  ['EBITDA', '1.6M TND (19.5%)'],
                  ['Employees', '47'],
                  ['Export Share', '35%'],
                  ['Deal Type', 'Majority Acquisition'],
                ].map(([label, value]) => (
                  <div key={label} className="py-2 border-b border-[#F1F5F9]">
                    <div className="text-[#94A3B8] text-xs">{label}</div>
                    <div className="text-[#0F172A] text-sm" style={{ fontWeight: 600 }}>{value}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Founder Dependency Scores">
              <div className="grid grid-cols-5 gap-2">
                {[
                  { label: 'Founder Dependency', score: 78, color: '#F59E0B', risk: 'High' },
                  { label: 'Succession Readiness', score: 29, color: '#DC2626', risk: 'Critical' },
                  { label: 'Governance Maturity', score: 41, color: '#F59E0B', risk: 'Medium' },
                  { label: 'Management Depth', score: 35, color: '#DC2626', risk: 'High' },
                  { label: 'Transferability', score: 38, color: '#F59E0B', risk: 'High' },
                ].map(s => (
                  <div key={s.label} className="p-3 rounded-lg text-center" style={{ background: s.color + '12' }}>
                    <div className="text-2xl mb-1" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: s.color }}>{s.score}</div>
                    <div className="text-[#0F172A] text-xs" style={{ fontWeight: 600 }}>{s.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: s.color, fontWeight: 600 }}>{s.risk}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Key Findings">
              <div className="space-y-2">
                {[
                  { sev: 'Critical', text: 'Founder approves 82% of all discounts — pricing is personalized and non-transferable' },
                  { sev: 'Critical', text: 'Top 2 clients (42% revenue) managed personally — no relationship handover plan exists' },
                  { sev: 'High', text: 'No CFO, no monthly reporting — financial visibility limited to founder knowledge' },
                  { sev: 'High', text: 'Top 2 supplier agreements are verbal — supply chain at risk without founder involvement' },
                  { sev: 'High', text: 'No succession plan and no identified operational successor' },
                ].map((f, i) => {
                  const color = f.sev === 'Critical' ? '#DC2626' : '#F59E0B';
                  return (
                    <div key={i} className="flex items-start gap-2.5">
                      <AlertTriangle size={12} color={color} className="mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs px-1.5 py-0.5 rounded mr-1.5" style={{ background: color + '1A', color, fontWeight: 700 }}>{f.sev}</span>
                        <span className="text-[#374151] text-sm">{f.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Section title="Deal Implications & Conditions">
              <div className="space-y-2">
                {[
                  'Reduce multiple from 6.5× to 5.2× EBITDA — dependency discount of 1.3× (saves ~2.1M TND)',
                  'Require CFO hire within 100 days as condition to full disbursement',
                  'Founder consulting agreement minimum 24 months with handover milestones',
                  'Customer retention earn-out: 10% of acquisition price tied to 80% revenue retention at month 18',
                  'Pre-close: formalize supplier contracts with top 2 vendors',
                  'Escrow release tied to SOP completion and approval matrix sign-off',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={12} color="#14B8A6" className="mt-0.5 shrink-0" />
                    <span className="text-[#374151] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Recommendation Summary">
              <div className="rounded-xl p-4 border border-[#14B8A6]/30 bg-[#F0FDFA]">
                <p className="text-[#0F172A] text-sm" style={{ fontWeight: 600, marginBottom: 6 }}>
                  Proceed with investment — subject to dependency transition conditions
                </p>
                <p className="text-[#475569] text-sm">
                  NourPack Tunisia is a financially sound, growing business with real EBITDA and market position. However, the company operates as the founder's personal operating system — not an independent institutional business.
                  Investment is viable only with contractual transition clauses, CFO hire, customer handover plan, and a structured 100-day dependency reduction program.
                </p>
              </div>
            </Section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
            <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontWeight: 700 }}>Export Options</h3>
            <div className="space-y-2">
              {[
                { label: 'Full IC Memo (PDF)', desc: '14 pages, all sections', icon: FileText, color: '#0F172A' },
                { label: 'Executive Summary', desc: '2-page snapshot', icon: TrendingDown, color: '#14B8A6' },
                { label: 'Board Pack', desc: 'Slides-ready format', icon: Share2, color: '#6366F1' },
                { label: '100-Day Plan Export', desc: 'Detailed roadmap', icon: CalendarDays, color: '#F59E0B' },
              ].map(opt => (
                <button key={opt.label} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[#E2E8F0] hover:bg-[#F8FAFC] transition text-left">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: opt.color + '1A' }}>
                    <opt.icon size={14} color={opt.color} />
                  </div>
                  <div>
                    <div className="text-[#0F172A] text-sm" style={{ fontWeight: 600 }}>{opt.label}</div>
                    <div className="text-[#94A3B8] text-xs">{opt.desc}</div>
                  </div>
                  <Download size={12} className="ml-auto text-[#CBD5E1]" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
            <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontWeight: 700 }}>Memo Sections</h3>
            {[
              'Company Summary', 'Founder Dependency Scores', 'Key Findings', 'Main Risks',
              'Deal Implications', 'Valuation Considerations', '100-Day Plan Summary', 'Recommendation',
            ].map((sec, i) => (
              <div key={sec} className="flex items-center gap-2 py-1.5 border-b border-[#F8FAFC]">
                <span className="text-[#CBD5E1] text-xs w-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[#475569] text-sm">{sec}</span>
                <CheckCircle2 size={12} className="ml-auto text-[#10B981]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
