import { useNavigate } from 'react-router';
import { Plus, Upload, Building2, ArrowRight, TrendingUp, Users, ShieldAlert, BarChart3, Network, CheckCircle2 } from 'lucide-react';

const STATS = [
  { label: 'Companies Analyzed', value: '47', icon: Building2, color: '#14B8A6', bg: '#F0FDFA' },
  { label: 'Avg. Founder Dependency', value: '72%', icon: ShieldAlert, color: '#DC2626', bg: '#FEF2F2' },
  { label: 'Avg. Succession Readiness', value: '34%', icon: TrendingUp, color: '#F59E0B', bg: '#FFFBEB' },
  { label: 'Open Analyses', value: '8', icon: BarChart3, color: '#6366F1', bg: '#EEF2FF' },
];

const RECENT = [
  { name: 'NourPack Tunisia', sector: 'Food Distribution', score: 78, risk: 'High', status: 'In Progress', date: 'May 14, 2026' },
  { name: 'Agro-Export Sfax', sector: 'Agriculture', score: 61, risk: 'Medium', status: 'Complete', date: 'May 10, 2026' },
  { name: 'MediSupply Tunis', sector: 'Medical Devices', score: 84, risk: 'Critical', status: 'In Progress', date: 'May 8, 2026' },
  { name: 'Textiles BenArous', sector: 'Manufacturing', score: 55, risk: 'Medium', status: 'Complete', date: 'May 2, 2026' },
];

const RISK_COLOR: Record<string, string> = {
  Critical: '#DC2626',
  High: '#F59E0B',
  Medium: '#6366F1',
  Low: '#10B981',
};

export function LOSWelcome() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F2845 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #14B8A6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6366F1 0%, transparent 40%)' }} />
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14B8A6, #0891B2)' }}>
                  <Network size={16} color="white" />
                </div>
                <span className="text-[#14B8A6] text-sm" style={{ fontWeight: 600 }}>LegacyOS</span>
              </div>
              <h1 className="text-white text-3xl mb-2" style={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                AI-Powered Founder<br />Dependency Intelligence
              </h1>
              <p className="text-[#94A3B8] text-base mb-6 max-w-lg">
                Turn hidden founder dependency into measurable investment risk. Know what you're really buying before you close.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate('/upload')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white transition-all hover:opacity-90"
                  style={{ background: '#14B8A6', fontWeight: 600 }}
                >
                  <Plus size={16} />
                  New Analysis
                </button>
                <button
                  onClick={() => navigate('/upload')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm border transition-all hover:bg-white/10"
                  style={{ border: '1px solid #334155', color: '#CBD5E1', fontWeight: 500 }}
                >
                  <Upload size={16} />
                  Upload Company Data
                </button>
                <button
                  onClick={() => navigate('/company')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm border transition-all hover:bg-white/10"
                  style={{ border: '1px solid #334155', color: '#CBD5E1', fontWeight: 500 }}
                >
                  <Building2 size={16} />
                  Enter Company Info
                </button>
              </div>
            </div>
            <div className="hidden xl:block shrink-0 ml-8">
              <div className="rounded-xl p-4 w-52" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-[#94A3B8] text-xs mb-3" style={{ fontWeight: 500 }}>NourPack Tunisia</div>
                {[
                  { label: 'Founder Dependency', value: 78, color: '#F59E0B' },
                  { label: 'Succession Readiness', value: 29, color: '#DC2626' },
                  { label: 'Governance Maturity', value: 41, color: '#F59E0B' },
                ].map(item => (
                  <div key={item.label} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#64748B] text-xs">{item.label}</span>
                      <span className="text-white text-xs" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 }}>{item.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#1E293B]">
                      <div className="h-full rounded-full transition-all" style={{ width: `${item.value}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-white rounded-xl p-5 border border-[#E2E8F0] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: s.bg }}>
              <s.icon size={22} color={s.color} />
            </div>
            <div>
              <div className="text-2xl" style={{ fontWeight: 700, color: '#0F172A', fontFamily: 'JetBrains Mono, monospace' }}>{s.value}</div>
              <div className="text-[#64748B] text-sm">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent analyses */}
        <div className="col-span-2 bg-white rounded-xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
            <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 600 }}>Recent Analyses</h2>
            <button className="flex items-center gap-1 text-[#14B8A6] text-sm" style={{ fontWeight: 500 }}>View all <ArrowRight size={14} /></button>
          </div>
          <div className="divide-y divide-[#F1F5F9]">
            {RECENT.map(r => (
              <div key={r.name} className="flex items-center gap-4 px-5 py-3.5 hover:bg-[#F8FAFC] cursor-pointer transition-colors" onClick={() => navigate('/dashboard')}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#F1F5F9' }}>
                  <Building2 size={16} color="#0F172A" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[#0F172A] text-sm" style={{ fontWeight: 600 }}>{r.name}</div>
                  <div className="text-[#64748B] text-xs">{r.sector}</div>
                </div>
                <div className="text-center">
                  <div className="text-base" style={{ fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', color: r.score >= 70 ? '#DC2626' : '#F59E0B' }}>{r.score}</div>
                  <div className="text-[#94A3B8] text-xs">Dep. Score</div>
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: RISK_COLOR[r.risk] + '1A', color: RISK_COLOR[r.risk], fontWeight: 600 }}>
                    {r.risk}
                  </span>
                </div>
                <div>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${r.status === 'Complete' ? 'bg-[#F0FDF4] text-[#10B981]' : 'bg-[#FFFBEB] text-[#F59E0B]'}`} style={{ fontWeight: 500 }}>
                    {r.status}
                  </span>
                </div>
                <div className="text-[#94A3B8] text-xs shrink-0">{r.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow guide */}
        <div className="bg-white rounded-xl border border-[#E2E8F0]">
          <div className="px-5 py-4 border-b border-[#F1F5F9]">
            <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 600 }}>Workflow</h2>
          </div>
          <div className="p-4 space-y-2">
            {[
              { step: '01', label: 'Upload Documents', path: '/upload', done: true },
              { step: '02', label: 'Enter Company Profile', path: '/company', done: true },
              { step: '03', label: 'AI Analysis', path: '/processing', done: false, active: true },
              { step: '04', label: 'Review Dashboard', path: '/dashboard', done: false },
              { step: '05', label: 'Explore Analytics', path: '/analytics', done: false },
              { step: '06', label: 'Review Findings', path: '/findings', done: false },
              { step: '07', label: 'Export PE Memo', path: '/memo', done: false },
            ].map(w => (
              <div
                key={w.step}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${w.active ? 'border' : 'hover:bg-[#F8FAFC]'}`}
                style={w.active ? { border: '1px solid #14B8A6', background: '#F0FDFA' } : {}}
                onClick={() => navigate(w.path)}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${w.done ? 'bg-[#10B981]' : w.active ? 'bg-[#14B8A6]' : 'bg-[#E2E8F0]'}`}>
                  {w.done ? <CheckCircle2 size={12} color="white" /> : <span className="text-[9px]" style={{ color: w.active ? 'white' : '#64748B', fontWeight: 700 }}>{w.step}</span>}
                </div>
                <span className="text-sm" style={{ fontWeight: w.active ? 600 : 400, color: w.active ? '#0F172A' : w.done ? '#64748B' : '#0F172A' }}>
                  {w.label}
                </span>
                {w.active && <ArrowRight size={14} className="ml-auto text-[#14B8A6]" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value proposition */}
      <div className="rounded-xl p-6 border border-[#14B8A6]/30" style={{ background: 'linear-gradient(135deg, #F0FDFA, #ECFDF5)' }}>
        <p className="text-[#0F172A] text-base text-center" style={{ fontWeight: 500 }}>
          "Are we buying a real company, or the founder's personal operating system?"
        </p>
        <p className="text-[#475569] text-sm text-center mt-1">LegacyOS converts hidden operational dependency into structured investment intelligence.</p>
      </div>
    </div>
  );
}
