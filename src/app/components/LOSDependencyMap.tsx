import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Users, ShoppingCart, Truck, DollarSign, UserPlus, Settings, Home, User } from 'lucide-react';

const NODES = [
  { id: 'founder', x: 400, y: 280, label: 'Karim Nouri', sublabel: 'Founder & CEO', color: '#0F172A', textColor: 'white', r: 48 },
  { id: 'customer1', x: 160, y: 130, label: 'Client A', sublabel: '28% revenue', color: '#DC2626', textColor: 'white', r: 36 },
  { id: 'customer2', x: 110, y: 310, label: 'Client B', sublabel: '14% revenue', color: '#F59E0B', textColor: 'white', r: 30 },
  { id: 'customer3', x: 200, y: 470, label: 'Client C', sublabel: '12% revenue', color: '#F59E0B', textColor: 'white', r: 28 },
  { id: 'supplier1', x: 640, y: 120, label: 'Supplier A', sublabel: 'Primary packaging', color: '#DC2626', textColor: 'white', r: 34 },
  { id: 'supplier2', x: 700, y: 320, label: 'Supplier B', sublabel: 'Raw materials', color: '#F59E0B', textColor: 'white', r: 30 },
  { id: 'pricing', x: 270, y: 80, label: 'Pricing', sublabel: '82% decisions', color: '#6366F1', textColor: 'white', r: 28 },
  { id: 'hiring', x: 540, y: 470, label: 'Hiring', sublabel: 'All approvals', color: '#8B5CF6', textColor: 'white', r: 26 },
  { id: 'ops', x: 380, y: 500, label: 'Operations', sublabel: 'Daily decisions', color: '#0891B2', textColor: 'white', r: 28 },
  { id: 'finance', x: 650, y: 220, label: 'Finance', sublabel: 'Cash sign-off', color: '#DC2626', textColor: 'white', r: 30 },
  { id: 'family', x: 560, y: 80, label: 'Family (×3)', sublabel: 'Informal influence', color: '#64748B', textColor: 'white', r: 26 },
];

const EDGES = [
  { from: 'founder', to: 'customer1', strength: 5, color: '#DC2626' },
  { from: 'founder', to: 'customer2', strength: 3, color: '#F59E0B' },
  { from: 'founder', to: 'customer3', strength: 3, color: '#F59E0B' },
  { from: 'founder', to: 'supplier1', strength: 4, color: '#DC2626' },
  { from: 'founder', to: 'supplier2', strength: 3, color: '#F59E0B' },
  { from: 'founder', to: 'pricing', strength: 5, color: '#6366F1' },
  { from: 'founder', to: 'hiring', strength: 4, color: '#8B5CF6' },
  { from: 'founder', to: 'ops', strength: 3, color: '#0891B2' },
  { from: 'founder', to: 'finance', strength: 4, color: '#DC2626' },
  { from: 'founder', to: 'family', strength: 2, color: '#64748B' },
];

const SIDE_RISKS = [
  { category: 'Top Founder-Controlled Functions', items: ['Pricing & discount approvals (82%)', 'Top 3 customer relationships', 'Supplier negotiation terms', 'Cash approvals >5K TND', 'All hiring decisions'] },
  { category: 'Key-Person Risk Areas', items: ['Revenue continuity — Client A (28%)', 'Supply chain continuity', 'Institutional knowledge — 26 years', 'Cross-functional coordination'] },
  { category: 'Transferability Blockers', items: ['No documented pricing matrix', 'No formal account management', 'No backup for supplier relations', 'No formal reporting cadence'] },
];

function getNodeById(id: string) {
  return NODES.find(n => n.id === id)!;
}

export function LOSDependencyMap() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Dependency Map</h1>
          <p className="text-[#64748B] text-sm mt-1">Founder-controlled relationships and decision nodes — NourPack Tunisia</p>
        </div>
        <button onClick={() => navigate('/analytics')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white" style={{ background: '#0F172A', fontWeight: 600 }}>
          Advanced Analytics <ArrowRight size={15} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Network SVG */}
        <div className="col-span-2 bg-white rounded-xl border border-[#E2E8F0] p-4">
          <div className="flex items-center gap-4 mb-3 flex-wrap">
            {[
              { color: '#DC2626', label: 'Critical dependency' },
              { color: '#F59E0B', label: 'High dependency' },
              { color: '#6366F1', label: 'Decision control' },
              { color: '#64748B', label: 'Family influence' },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-3 h-1.5 rounded" style={{ background: l.color }} />
                <span className="text-[#64748B] text-xs">{l.label}</span>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 800 580" className="w-full" style={{ maxHeight: 420 }}>
            {/* Edges */}
            {EDGES.map(e => {
              const from = getNodeById(e.from);
              const to = getNodeById(e.to);
              return (
                <line
                  key={`${e.from}-${e.to}`}
                  x1={from.x} y1={from.y}
                  x2={to.x} y2={to.y}
                  stroke={e.color}
                  strokeWidth={e.strength}
                  strokeOpacity={0.5}
                  strokeLinecap="round"
                />
              );
            })}
            {/* Nodes */}
            {NODES.map(node => {
              const isSel = selected === node.id;
              return (
                <g key={node.id} onClick={() => setSelected(isSel ? null : node.id)} style={{ cursor: 'pointer' }}>
                  <circle
                    cx={node.x} cy={node.y} r={node.r + (isSel ? 4 : 0)}
                    fill={node.color}
                    stroke={isSel ? '#14B8A6' : 'white'}
                    strokeWidth={isSel ? 3 : 2}
                    opacity={selected && !isSel ? 0.6 : 1}
                  />
                  <text x={node.x} y={node.y - 4} textAnchor="middle" fill={node.textColor} fontSize={node.r > 30 ? 11 : 9} fontWeight={700} fontFamily="Inter, sans-serif">
                    {node.label}
                  </text>
                  <text x={node.x} y={node.y + 10} textAnchor="middle" fill={node.textColor} fontSize={8} opacity={0.8} fontFamily="Inter, sans-serif">
                    {node.sublabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Side Panel */}
        <div className="space-y-3 overflow-y-auto" style={{ maxHeight: 500 }}>
          {SIDE_RISKS.map(section => (
            <div key={section.category} className="bg-white rounded-xl border border-[#E2E8F0] p-4">
              <h3 className="text-[#0F172A] text-xs mb-3" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shrink-0 mt-1.5"></span>
                    <span className="text-[#475569] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4">
            <h3 className="text-[#0F172A] text-xs mb-3" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Dependency Index</h3>
            {[
              { label: 'Customers', pct: 91 },
              { label: 'Suppliers', pct: 85 },
              { label: 'Pricing', pct: 88 },
              { label: 'Finance', pct: 73 },
              { label: 'HR / Hiring', pct: 69 },
            ].map(d => (
              <div key={d.label} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-[#475569] text-xs">{d.label}</span>
                  <span className="text-xs" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: d.pct >= 80 ? '#DC2626' : '#F59E0B' }}>{d.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#F1F5F9]">
                  <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: d.pct >= 80 ? '#DC2626' : '#F59E0B' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
