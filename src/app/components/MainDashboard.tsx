import { useNavigate } from 'react-router';
import { Building2, Users, Settings, FileDown } from 'lucide-react';
import { ScoreCard } from './ScoreCard';
import { RiskRow } from './RiskRow';
import { DealRow } from './DealRow';

export function MainDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      {/* Left sidebar */}
      <div
        className="w-[220px] flex flex-col"
        style={{ backgroundColor: '#1A1A18' }}
      >
        <div className="p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#085041] flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-full" />
            </div>
            <span
              className="text-[16px] text-white"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
            >
              FounderLens
            </span>
          </div>
        </div>

        <div className="flex-1 px-3 py-4">
          <div className="mb-6">
            <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-2 px-3">
              Active deals
            </div>
            <div className="space-y-1">
              <DealRow name="Samir Industries" isActive />
              <DealRow name="TechWave Solutions" />
              <DealRow name="Atlas Manufacturing" />
            </div>
          </div>

          <div>
            <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-2 px-3">
              Team
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 px-3 py-2 text-[14px] text-gray-400 hover:bg-white/5 rounded cursor-pointer">
                <Users className="w-4 h-4" />
                <span>Associates</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-[14px] text-gray-400 hover:bg-white/5 rounded cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="border-b border-border bg-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1
              className="text-[20px]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
            >
              Samir Industries
            </h1>
            <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
              <span>Manufacturing</span>
              <span>·</span>
              <span>Tunis, Tunisia</span>
              <span>·</span>
              <span>127 employees</span>
              <span>·</span>
              <span>14 files</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50 transition-colors">
            <FileDown className="w-4 h-4" />
            <span className="text-[14px] font-medium">Export report</span>
          </button>
        </div>

        {/* Score strip */}
        <div className="bg-white border-b border-border px-6 py-4">
          <div className="grid grid-cols-5 gap-4">
            <ScoreCard label="Overall Score" score={39} variant="critical" />
            <ScoreCard label="Founder Dependency" score={25} variant="critical" />
            <ScoreCard label="Management Depth" score={45} variant="moderate" />
            <ScoreCard label="Process Documentation" score={30} variant="critical" />
            <ScoreCard label="Customer Concentration" score={60} variant="acceptable" />
          </div>
        </div>

        {/* Content panels */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-2 gap-6 p-6">
            {/* Left panel - Founder dependency map */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3
                className="text-[16px] mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
              >
                Founder Dependency Map
              </h3>
              <div className="h-[400px] flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 400 400">
                  {/* Founder node (center) */}
                  <circle cx="200" cy="200" r="30" fill="#085041" />
                  <text x="200" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">
                    Founder
                  </text>

                  {/* Supplier nodes (red) */}
                  <g>
                    {[0, 1, 2, 3, 4].map((i) => {
                      const angle = (i * 72 - 90) * Math.PI / 180;
                      const x = 200 + Math.cos(angle) * 120;
                      const y = 200 + Math.sin(angle) * 120;
                      return (
                        <g key={`supplier-${i}`}>
                          <line
                            x1="200"
                            y1="200"
                            x2={x}
                            y2={y}
                            stroke="#E24B4A"
                            strokeWidth={4 - i * 0.5}
                            opacity="0.6"
                            markerEnd="url(#arrowhead)"
                          />
                          <circle cx={x} cy={y} r="18" fill="#E24B4A" opacity="0.8" />
                          <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="10">
                            S{i + 1}
                          </text>
                        </g>
                      );
                    })}
                  </g>

                  {/* Client nodes (amber) */}
                  <g>
                    {[0, 1, 2].map((i) => {
                      const angle = (i * 60 + 30) * Math.PI / 180;
                      const x = 200 + Math.cos(angle) * 160;
                      const y = 200 + Math.sin(angle) * 160;
                      return (
                        <g key={`client-${i}`}>
                          <line
                            x1="200"
                            y1="200"
                            x2={x}
                            y2={y}
                            stroke="#EF9F27"
                            strokeWidth={3 - i * 0.5}
                            opacity="0.5"
                          />
                          <circle cx={x} cy={y} r="16" fill="#EF9F27" opacity="0.7" />
                          <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="10">
                            C{i + 1}
                          </text>
                        </g>
                      );
                    })}
                  </g>

                  {/* Decision nodes (gray) */}
                  <g>
                    {[0, 1, 2].map((i) => {
                      const angle = (i * 90 + 180) * Math.PI / 180;
                      const x = 200 + Math.cos(angle) * 140;
                      const y = 200 + Math.sin(angle) * 140;
                      return (
                        <g key={`decision-${i}`}>
                          <line
                            x1="200"
                            y1="200"
                            x2={x}
                            y2={y}
                            stroke="#9ca3af"
                            strokeWidth="2"
                            opacity="0.4"
                          />
                          <circle cx={x} cy={y} r="14" fill="#9ca3af" opacity="0.6" />
                          <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="9">
                            D{i + 1}
                          </text>
                        </g>
                      );
                    })}
                  </g>

                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#E24B4A" opacity="0.6" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right panel - Risk table */}
            <div className="bg-white border border-border rounded-lg p-6 flex flex-col">
              <h3
                className="text-[16px] mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
              >
                Key Risks for PE Investment
              </h3>
              <div className="flex-1 overflow-auto">
                <RiskRow
                  name="Single point of failure"
                  rationale="Founder personally manages top 5 suppliers. If he exits, supply chain breaks."
                  severity="critical"
                  dotColor="#E24B4A"
                />
                <RiskRow
                  name="Client relationship risk"
                  rationale="70% of revenue tied to 3 clients who only trust the founder."
                  severity="critical"
                  dotColor="#E24B4A"
                />
                <RiskRow
                  name="Decision bottleneck"
                  rationale="All discounts above 5% require founder approval. Slows deal flow."
                  severity="high"
                  dotColor="#EF9F27"
                />
                <RiskRow
                  name="Weak management layer"
                  rationale="No CFO or COO. Operations manager lacks authority to make key decisions."
                  severity="critical"
                  dotColor="#E24B4A"
                />
                <RiskRow
                  name="Undocumented processes"
                  rationale="No SOPs for procurement or pricing. Knowledge lives in founder's head."
                  severity="high"
                  dotColor="#EF9F27"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <button
                  onClick={() => navigate('/export')}
                  className="w-full h-[44px] bg-[#085041] text-white rounded-lg font-medium hover:bg-[#085041]/90 transition-colors flex items-center justify-center gap-2"
                >
                  Generate 100-day plan
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI insight bar */}
        <div className="bg-[#1D9E75]/10 border-t border-[#1D9E75]/20 px-6 py-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="text-[14px] leading-relaxed">
                <span className="font-medium">AI Insight:</span> Company is attractive but founder-dependent.
                Recommend: appoint CFO, delegate discount approval below 10%, formalize top-3 supplier contacts.
              </p>
            </div>
            <button className="text-[13px] text-[#085041] font-medium hover:underline whitespace-nowrap">
              Read full memo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
