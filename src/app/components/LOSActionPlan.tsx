import { useNavigate } from 'react-router';
import { ArrowRight, CheckCircle2, Clock, Target, User, TrendingDown } from 'lucide-react';

const PHASES = [
  {
    days: 'Days 1–15',
    title: 'Diagnose Critical Dependencies',
    output: 'Dependency map + priority risk register',
    color: '#DC2626',
    bg: '#FEF2F2',
    actions: [
      { action: 'List all founder-controlled decisions across functions', owner: 'PE Analyst + Founder', priority: 'P1', kpi: 'Decision inventory complete', reduction: '—' },
      { action: 'Identify top 10 customer and supplier relationships', owner: 'Deal Team', priority: 'P1', kpi: '10 relationships mapped', reduction: '—' },
      { action: 'Identify roles with no backup or documented handover', owner: 'HR Advisor', priority: 'P1', kpi: 'Single-point-of-failure list', reduction: '—' },
      { action: 'Map undocumented critical processes and know-how gaps', owner: 'Operations Advisor', priority: 'P1', kpi: 'Process gap register', reduction: '5%' },
    ],
  },
  {
    days: 'Days 16–30',
    title: 'Secure Revenue & Supply Continuity',
    output: 'Relationship transition list',
    color: '#F59E0B',
    bg: '#FFFBEB',
    actions: [
      { action: 'Joint founder–manager meetings with top 5 customers', owner: 'Founder + Sales Lead', priority: 'P1', kpi: 'All 5 introductions completed', reduction: '12%' },
      { action: 'Joint founder–manager meetings with top 5 suppliers', owner: 'Founder + Ops Lead', priority: 'P1', kpi: 'All 5 introductions completed', reduction: '8%' },
      { action: 'Document current pricing and discount logic', owner: 'Finance Advisor', priority: 'P1', kpi: 'Pricing matrix v1 completed', reduction: '10%' },
      { action: 'Assign provisional relationship owners for each key account', owner: 'CEO / Deal Team', priority: 'P2', kpi: 'Owner assigned per account', reduction: '8%' },
    ],
  },
  {
    days: 'Days 31–45',
    title: 'Formalize Decision Rights',
    output: 'Decision-rights authority matrix',
    color: '#F97316',
    bg: '#FFF7ED',
    actions: [
      { action: 'Create approval thresholds: discounts, purchases, hiring, payments', owner: 'CFO / Finance Advisor', priority: 'P1', kpi: 'Approval matrix signed off', reduction: '15%' },
      { action: 'Define who approves what — reduce founder-only bottlenecks', owner: 'CEO + Board Advisor', priority: 'P1', kpi: 'Founder-only decisions < 40%', reduction: '12%' },
      { action: 'Formalize escalation paths and override rules', owner: 'Operations Advisor', priority: 'P2', kpi: 'Escalation procedures documented', reduction: '5%' },
    ],
  },
  {
    days: 'Days 46–60',
    title: 'Strengthen Management Layer',
    output: 'Management ownership structure',
    color: '#6366F1',
    bg: '#EEF2FF',
    actions: [
      { action: 'Identify missing leadership roles (CFO, Ops Lead, Sales Director)', owner: 'HR Advisor + Deal Team', priority: 'P1', kpi: 'Role gap report complete', reduction: '—' },
      { action: 'Start CFO recruitment process', owner: 'Deal Team + Recruiter', priority: 'P1', kpi: 'CFO shortlist of 3 candidates', reduction: '10%' },
      { action: 'Give managers controlled decision authority by function', owner: 'CEO', priority: 'P1', kpi: 'Decision rights delegated', reduction: '15%' },
      { action: 'Define accountability KPIs per functional owner', owner: 'CFO / CEO', priority: 'P2', kpi: 'KPI dashboard live', reduction: '5%' },
    ],
  },
  {
    days: 'Days 61–75',
    title: 'Capture Tacit Know-How',
    output: 'Operating knowledge library',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    actions: [
      { action: 'Record founder knowledge interviews across all functions', owner: 'Operations Advisor', priority: 'P1', kpi: '6 recorded interviews', reduction: '8%' },
      { action: 'Document SOPs: purchasing, pricing, customer complaints, hiring, cash', owner: 'Ops Team', priority: 'P1', kpi: '5 SOPs completed', reduction: '12%' },
      { action: 'Centralize all process documents in shared system', owner: 'IT / Admin', priority: 'P2', kpi: 'Document library live', reduction: '5%' },
    ],
  },
  {
    days: 'Days 76–90',
    title: 'Install Governance & Reporting',
    output: 'Live governance rhythm',
    color: '#0891B2',
    bg: '#ECFEFF',
    actions: [
      { action: 'Launch monthly operating review with standardized format', owner: 'CFO + CEO', priority: 'P1', kpi: 'First MOR completed', reduction: '5%' },
      { action: 'Define company KPIs and install management dashboard', owner: 'CFO', priority: 'P1', kpi: 'Dashboard live', reduction: '5%' },
      { action: 'Set recurring management meeting rhythm (weekly/monthly)', owner: 'CEO', priority: 'P2', kpi: 'Meeting cadence established', reduction: '5%' },
    ],
  },
  {
    days: 'Days 91–100',
    title: 'Reassess Transferability',
    output: 'Day-100 investment readiness review',
    color: '#10B981',
    bg: '#F0FDF4',
    actions: [
      { action: 'Rerun LegacyOS dependency scoring and compare to Day 0', owner: 'PE Analyst + LegacyOS', priority: 'P1', kpi: 'Score delta documented', reduction: 'Full' },
      { action: 'Validate customer and supplier transitions are working', owner: 'Sales + Ops Lead', priority: 'P1', kpi: 'Transition success rate > 80%', reduction: '—' },
      { action: 'Identify remaining bottlenecks and finalize 6-month plan', owner: 'Deal Team', priority: 'P2', kpi: 'Next-phase plan approved by IC', reduction: '—' },
    ],
  },
];

const PRIORITY_COLOR: Record<string, string> = { P1: '#DC2626', P2: '#F59E0B', P3: '#6366F1' };

export function LOSActionPlan() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>100-Day Action Plan</h1>
          <p className="text-[#64748B] text-sm mt-1">Structured transition roadmap — NourPack Tunisia · 34 actions · 7 phases</p>
        </div>
        <button onClick={() => navigate('/memo')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white" style={{ background: '#0F172A', fontWeight: 600 }}>
          Export PE Memo <ArrowRight size={15} />
        </button>
      </div>

      {/* Phase timeline bar */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-4">
        <div className="flex items-center gap-1 mb-2">
          {PHASES.map((p, i) => (
            <div key={i} className="flex-1 relative group cursor-pointer" title={p.title}>
              <div className="h-6 rounded transition-opacity hover:opacity-80" style={{ background: p.color }} />
              <div className="text-center text-xs mt-1 text-[#64748B] truncate">{p.days}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[#94A3B8] text-xs">
          <span>Day 0 — Acquisition close</span>
          <span>Day 100 — Investment readiness review</span>
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-4">
        {PHASES.map((phase, pi) => (
          <div key={pi} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4" style={{ background: phase.bg }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: phase.color }}>
                <span className="text-white text-xs" style={{ fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>{pi + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-base" style={{ fontWeight: 700, color: phase.color }}>{phase.days}</span>
                  <span className="text-[#0F172A] text-base" style={{ fontWeight: 700 }}> — {phase.title}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Target size={12} color={phase.color} />
                  <span className="text-sm" style={{ color: phase.color, fontWeight: 500 }}>Output: {phase.output}</span>
                </div>
              </div>
              <div className="text-[#64748B] text-sm shrink-0">{phase.actions.length} actions</div>
            </div>

            <div className="divide-y divide-[#F8FAFC]">
              <div className="grid px-5 py-2 bg-[#F8FAFC] text-xs" style={{ gridTemplateColumns: '3fr 1.5fr 0.7fr 2fr 1.2fr', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <div>Action</div>
                <div>Owner</div>
                <div>Priority</div>
                <div>KPI</div>
                <div>Risk Reduction</div>
              </div>
              {phase.actions.map((a, ai) => (
                <div key={ai} className="grid px-5 py-3 items-start" style={{ gridTemplateColumns: '3fr 1.5fr 0.7fr 2fr 1.2fr' }}>
                  <div className="text-[#0F172A] text-sm pr-3">{a.action}</div>
                  <div className="text-[#64748B] text-xs flex items-center gap-1.5 pr-2">
                    <User size={11} className="shrink-0" />
                    {a.owner}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded text-xs" style={{ background: PRIORITY_COLOR[a.priority] + '1A', color: PRIORITY_COLOR[a.priority], fontWeight: 700 }}>
                      {a.priority}
                    </span>
                  </div>
                  <div className="text-[#475569] text-xs">{a.kpi}</div>
                  <div>
                    {a.reduction !== '—' ? (
                      <div className="flex items-center gap-1">
                        <TrendingDown size={12} color="#10B981" />
                        <span className="text-[#10B981] text-xs" style={{ fontWeight: 700 }}>{a.reduction}</span>
                      </div>
                    ) : (
                      <span className="text-[#94A3B8] text-xs">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
