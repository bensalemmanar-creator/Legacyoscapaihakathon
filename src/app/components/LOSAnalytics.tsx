import { Treemap, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router';
import { ArrowRight, Info } from 'lucide-react';

// ---- Treemap data ----
const TREEMAP_DATA = {
  name: 'Risk',
  children: [
    { name: 'Customer Dependency', size: 28, color: '#DC2626' },
    { name: 'Supplier Dependency', size: 22, color: '#EF4444' },
    { name: 'Decision Concentration', size: 18, color: '#F59E0B' },
    { name: 'Undocumented Processes', size: 14, color: '#F97316' },
    { name: 'Successor Weakness', size: 11, color: '#8B5CF6' },
    { name: 'Governance Gaps', size: 7, color: '#6366F1' },
  ],
};

const TREEMAP_LEGEND = TREEMAP_DATA.children;

// ---- Chord diagram data ----
const ENTITIES = ['Founder', 'Customers', 'Suppliers', 'Sales', 'Finance', 'Operations', 'HR', 'Family'];
const CHORD_MATRIX = [
  [0, 91, 85, 72, 73, 65, 69, 58],
  [91, 0, 12, 45, 8, 15, 5, 10],
  [85, 12, 0, 22, 18, 30, 8, 12],
  [72, 45, 22, 0, 20, 25, 15, 8],
  [73, 8, 18, 20, 0, 18, 12, 14],
  [65, 15, 30, 25, 18, 0, 22, 10],
  [69, 5, 8, 15, 12, 22, 0, 15],
  [58, 10, 12, 8, 14, 10, 15, 0],
];
const CHORD_COLORS = ['#0F172A', '#DC2626', '#F59E0B', '#3B82F6', '#6366F1', '#0891B2', '#8B5CF6', '#64748B'];

// ---- Custom Treemap cell ----
function CustomTreemapCell(props: any) {
  const { x, y, width, height, name, size, color } = props;
  if (!width || !height || !name) return null;
  return (
    <g>
      <rect x={x + 2} y={y + 2} width={width - 4} height={height - 4} fill={color} rx={6} opacity={0.9} />
      {width > 70 && height > 40 && (
        <>
          <text x={x + width / 2} y={y + height / 2 - 8} textAnchor="middle" fill="white" fontSize={width > 120 ? 13 : 10} fontWeight={700} fontFamily="Inter, sans-serif">
            {name.split(' ').slice(0, 2).join(' ')}
          </text>
          <text x={x + width / 2} y={y + height / 2 + 8} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize={width > 120 ? 12 : 10} fontFamily="JetBrains Mono, monospace" fontWeight={600}>
            {size}%
          </text>
        </>
      )}
    </g>
  );
}

// ---- Chord Diagram SVG ----
function ChordDiagram() {
  const cx = 200, cy = 200, r = 150, arcW = 18;
  const n = ENTITIES.length;

  // Total flows per entity
  const totals = CHORD_MATRIX.map(row => row.reduce((a, b) => a + b, 0));
  const grand = totals.reduce((a, b) => a + b, 0);

  // Convert to angles
  type Arc = { entity: string; start: number; end: number; color: string; index: number };
  const arcs: Arc[] = [];
  let offset = -Math.PI / 2;
  const gap = 0.03;
  for (let i = 0; i < n; i++) {
    const span = (totals[i] / grand) * (2 * Math.PI - n * gap);
    arcs.push({ entity: ENTITIES[i], start: offset, end: offset + span, color: CHORD_COLORS[i], index: i });
    offset += span + gap;
  }

  function polar(angle: number, radius: number) {
    return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
  }

  function arcPath(startAngle: number, endAngle: number, outerR: number, innerR: number) {
    const [ox1, oy1] = polar(startAngle, outerR);
    const [ox2, oy2] = polar(endAngle, outerR);
    const [ix1, iy1] = polar(endAngle, innerR);
    const [ix2, iy2] = polar(startAngle, innerR);
    const large = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M${ox1},${oy1} A${outerR},${outerR},0,${large},1,${ox2},${oy2} L${ix1},${iy1} A${innerR},${innerR},0,${large},0,${ix2},${iy2} Z`;
  }

  // Chords (top flows only to avoid clutter)
  const chords: { d: string; color: string; opacity: number }[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const v = CHORD_MATRIX[i][j];
      if (v < 20) continue;
      const ia = arcs[i], ja = arcs[j];
      const iMid = (ia.start + ia.end) / 2;
      const jMid = (ja.start + ja.end) / 2;
      const [x1, y1] = polar(iMid, r - arcW - 2);
      const [x2, y2] = polar(jMid, r - arcW - 2);
      chords.push({
        d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`,
        color: ia.color,
        opacity: Math.min(0.5, v / 100 + 0.2),
      });
    }
  }

  return (
    <svg viewBox="0 0 400 400" className="w-full" style={{ maxHeight: 340 }}>
      {chords.map((c, i) => (
        <path key={i} d={c.d} fill="none" stroke={c.color} strokeWidth={2} strokeOpacity={c.opacity} />
      ))}
      {arcs.map(a => (
        <g key={a.entity}>
          <path d={arcPath(a.start, a.end, r, r - arcW)} fill={a.color} opacity={0.9} />
          {/* Label */}
          {(() => {
            const mid = (a.start + a.end) / 2;
            const [lx, ly] = polar(mid, r + 16);
            return (
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill="#374151" fontSize={9} fontFamily="Inter, sans-serif" fontWeight={600}>
                {a.entity}
              </text>
            );
          })()}
        </g>
      ))}
    </svg>
  );
}

// ---- Dendrogram SVG ----
type DNode = { label: string; color?: string; children?: DNode[] };
const DENDRO: DNode = {
  label: 'Founder Dependency',
  color: '#0F172A',
  children: [
    {
      label: 'Revenue Risk', color: '#DC2626',
      children: [
        { label: 'Customer Dep.', color: '#EF4444', children: [{ label: 'Client A 28%' }, { label: 'Client B 14%' }, { label: 'Client C 12%' }] },
        { label: 'Pricing Control', color: '#F97316', children: [{ label: 'Discounts 82%' }, { label: 'Contract pricing' }] },
      ],
    },
    {
      label: 'Supply Risk', color: '#F59E0B',
      children: [
        { label: 'Supplier Dep.', color: '#FBBF24', children: [{ label: 'Supplier A' }, { label: 'Supplier B' }] },
        { label: 'Negotiation', color: '#F59E0B', children: [{ label: 'Informal terms' }, { label: 'No backup' }] },
      ],
    },
    {
      label: 'Governance Risk', color: '#6366F1',
      children: [
        { label: 'Mgmt Depth', color: '#8B5CF6', children: [{ label: 'No CFO' }, { label: 'No COO' }, { label: 'Thin 2nd line' }] },
        { label: 'Process Gaps', color: '#6366F1', children: [{ label: 'Partial SOPs' }, { label: 'No board' }] },
      ],
    },
  ],
};

function drawDendro(node: DNode, x: number, y: number, dx: number, dy: number, lines: { x1: number; y1: number; x2: number; y2: number }[], labels: { x: number; y: number; label: string; color: string; leaf: boolean }[]) {
  const isLeaf = !node.children || node.children.length === 0;
  const color = node.color || '#94A3B8';
  labels.push({ x, y, label: node.label, color, leaf: isLeaf });
  if (node.children) {
    const totalH = (node.children.length - 1) * dy;
    const startY = y - totalH / 2;
    node.children.forEach((child, i) => {
      const cy = startY + i * dy;
      lines.push({ x1: x, y1: y, x2: x + dx * 0.3, y2: y });
      lines.push({ x1: x + dx * 0.3, y1: y, x2: x + dx * 0.3, y2: cy });
      lines.push({ x1: x + dx * 0.3, y1: cy, x2: x + dx, y2: cy });
      drawDendro(child, x + dx, cy, dx * 0.9, dy * 0.7, lines, labels);
    });
  }
}

function Dendrogram() {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const labels: { x: number; y: number; label: string; color: string; leaf: boolean }[] = [];
  drawDendro(DENDRO, 20, 200, 110, 70, lines, labels);
  return (
    <svg viewBox="0 0 560 400" className="w-full" style={{ maxHeight: 340 }}>
      {lines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#E2E8F0" strokeWidth={1.5} />
      ))}
      {labels.map((lb, i) => (
        <g key={i}>
          <circle cx={lb.x} cy={lb.y} r={lb.leaf ? 4 : 6} fill={lb.color} />
          <text
            x={lb.x + (lb.leaf ? 8 : 10)} y={lb.y + 4}
            fill="#374151" fontSize={lb.leaf ? 9 : 10} fontFamily="Inter, sans-serif"
            fontWeight={lb.leaf ? 400 : 700}
          >
            {lb.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function LOSAnalytics() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Advanced Visual Analytics</h1>
          <p className="text-[#64748B] text-sm mt-1">NourPack Tunisia — Dependency clustering, relationship flows, and risk distribution</p>
        </div>
        <button onClick={() => navigate('/intangible')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white" style={{ background: '#0F172A', fontWeight: 600 }}>
          Intangible Value <ArrowRight size={15} />
        </button>
      </div>

      <div className="rounded-xl p-4 border border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="flex items-center gap-2">
          <Info size={14} color="#14B8A6" />
          <p className="text-[#475569] text-sm">These visualizations help investors understand where intangible control and operational value are concentrated — and what needs to change before a deal closes safely.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Treemap */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
          <div className="mb-3">
            <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 700 }}>Risk Weight Treemap</h2>
            <p className="text-[#64748B] text-sm">Relative weight of each dependency risk category</p>
          </div>
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={TREEMAP_DATA.children}
                dataKey="size"
                content={<CustomTreemapCell />}
                isAnimationActive={false}
              />
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {TREEMAP_LEGEND.map(d => (
              <div key={d.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: d.color }} />
                <span className="text-[#64748B] text-xs">{d.name} ({d.size}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chord Diagram */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
          <div className="mb-3">
            <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 700 }}>Relationship Chord Diagram</h2>
            <p className="text-[#64748B] text-sm">Strength of connections between key stakeholders</p>
          </div>
          <ChordDiagram />
          <div className="mt-2 flex flex-wrap gap-2">
            {ENTITIES.map((e, i) => (
              <div key={e} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: CHORD_COLORS[i] }} />
                <span className="text-[#64748B] text-xs">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dendrogram */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
        <div className="mb-3">
          <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 700 }}>Dependency Dendrogram</h2>
          <p className="text-[#64748B] text-sm">Hierarchical clustering of business functions and risks by dependency type</p>
        </div>
        <Dendrogram />
      </div>
    </div>
  );
}
