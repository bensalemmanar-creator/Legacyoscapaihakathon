import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle2, Loader2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

const STAGES = [
  { id: 1, label: 'Transcribing interviews', detail: 'Converting audio and text inputs to structured transcripts', duration: 1200 },
  { id: 2, label: 'Extracting entities', detail: 'Identifying people, roles, relationships, and named companies', duration: 900 },
  { id: 3, label: 'Mapping relationships', detail: 'Building organizational and influence graph', duration: 1100 },
  { id: 4, label: 'Detecting founder-controlled decisions', detail: 'Identifying where founder authority is required', duration: 1300 },
  { id: 5, label: 'Scoring dependency risk', detail: 'Calibrating 5 dimensions of founder dependency', duration: 800 },
  { id: 6, label: 'Generating recommendations', detail: 'Prioritizing risk mitigation actions', duration: 700 },
  { id: 7, label: 'Building 100-day action plan', detail: 'Mapping transition roadmap by priority and ownership', duration: 600 },
];

const INSIGHTS = [
  { severity: 'high', text: 'Founder personally manages 2 largest customers (42% of revenue)' },
  { severity: 'high', text: 'No documented discount approval matrix — all pricing decisions centralized' },
  { severity: 'high', text: 'Supplier negotiation for top 3 vendors centralized in founder' },
  { severity: 'medium', text: 'Successor not clearly identified — no succession plan documented' },
  { severity: 'medium', text: '7 direct reports with overlapping responsibilities' },
  { severity: 'medium', text: 'Cash-flow decisions require founder sign-off above 5,000 TND' },
];

const SEV_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  high: { bg: '#FEF2F2', color: '#DC2626', label: 'High' },
  medium: { bg: '#FFFBEB', color: '#F59E0B', label: 'Medium' },
  low: { bg: '#F0FDF4', color: '#10B981', label: 'Low' },
};

export function LOSProcessing() {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState<number[]>(STAGES.map(() => 0));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let stageIdx = 0;
    const runStage = () => {
      if (stageIdx >= STAGES.length) { setDone(true); return; }
      setCurrentStage(stageIdx);
      const duration = STAGES[stageIdx].duration;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const pct = Math.min(100, Math.round((elapsed / duration) * 100));
        setProgress(prev => { const n = [...prev]; n[stageIdx] = pct; return n; });
        if (pct < 100) requestAnimationFrame(tick);
        else { stageIdx++; setTimeout(runStage, 200); }
      };
      requestAnimationFrame(tick);
    };
    runStage();
  }, []);

  return (
    <div className="p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>AI Analysis in Progress</h1>
          <p className="text-[#64748B] text-sm mt-1">Analyzing NourPack Tunisia — 5 documents, 47 employees, 26 variables</p>
        </div>
        {done && (
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white"
            style={{ background: '#14B8A6', fontWeight: 600 }}
          >
            View Dashboard <ArrowRight size={15} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Stages */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
          <h2 className="text-[#0F172A] text-base mb-5" style={{ fontWeight: 700 }}>Processing Stages</h2>
          <div className="space-y-5">
            {STAGES.map((stage, i) => {
              const p = progress[i];
              const complete = p === 100;
              const active = i === currentStage && !complete;
              return (
                <div key={stage.id}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${complete ? 'bg-[#10B981]' : active ? 'bg-[#14B8A6]' : 'bg-[#F1F5F9]'}`}>
                      {complete ? (
                        <CheckCircle2 size={14} color="white" />
                      ) : active ? (
                        <Loader2 size={14} color="white" className="animate-spin" />
                      ) : (
                        <span className="text-[#94A3B8] text-xs" style={{ fontWeight: 700 }}>{i + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm" style={{ fontWeight: active || complete ? 600 : 400, color: active ? '#14B8A6' : complete ? '#10B981' : i < currentStage ? '#0F172A' : '#94A3B8' }}>
                          {stage.label}
                        </span>
                        {(active || complete) && (
                          <span className="text-xs" style={{ fontFamily: 'JetBrains Mono, monospace', color: complete ? '#10B981' : '#14B8A6' }}>
                            {p}%
                          </span>
                        )}
                      </div>
                      {(active || complete) && (
                        <p className="text-[#64748B] text-xs mt-0.5 truncate">{stage.detail}</p>
                      )}
                    </div>
                  </div>
                  {(active || complete) && (
                    <div className="ml-10">
                      <div className="h-1.5 rounded-full bg-[#F1F5F9]">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${p}%`, background: complete ? '#10B981' : 'linear-gradient(90deg, #14B8A6, #0891B2)' }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {done && (
            <div className="mt-5 p-4 rounded-xl border border-[#10B981]/30 bg-[#F0FDF4]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} color="#10B981" />
                <span className="text-[#047857] text-sm" style={{ fontWeight: 600 }}>Analysis Complete — 7 stages, 142 findings</span>
              </div>
            </div>
          )}
        </div>

        {/* Live Insights */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} color="#14B8A6" />
              <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 700 }}>AI Insights Detected</h2>
            </div>
            <div className="space-y-2.5">
              {INSIGHTS.map((ins, i) => {
                const s = SEV_STYLE[ins.severity];
                const visible = i <= currentStage;
                return visible ? (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: s.bg }}>
                    <AlertCircle size={14} color={s.color} className="mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs" style={{ color: s.color, fontWeight: 600 }}>{ins.text}</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-xs shrink-0" style={{ background: s.color + '22', color: s.color, fontWeight: 700 }}>{s.label}</span>
                  </div>
                ) : null;
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
            <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontWeight: 600 }}>Analysis Statistics</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Documents Parsed', value: '5' },
                { label: 'Entities Extracted', value: '83' },
                { label: 'Relationships Mapped', value: '127' },
                { label: 'Risk Signals Found', value: '24' },
                { label: 'Decisions Flagged', value: '18' },
                { label: 'Actions Generated', value: '34' },
              ].map(s => (
                <div key={s.label} className="p-3 rounded-lg bg-[#F8FAFC]">
                  <div className="text-lg" style={{ fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', color: '#0F172A' }}>{s.value}</div>
                  <div className="text-[#64748B] text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
