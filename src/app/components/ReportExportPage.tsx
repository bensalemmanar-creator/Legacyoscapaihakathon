import { FileText, AlertTriangle, Calendar, Copy, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

interface ExportCardProps {
  icon: typeof FileText;
  title: string;
  description: string;
  iconColor: string;
  featured?: boolean;
}

function ExportCard({ icon: Icon, title, description, iconColor, featured }: ExportCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 flex flex-col ${
        featured ? 'border-2 border-[#1D9E75]' : 'border border-border'
      }`}
    >
      <div className="mb-4">
        <Icon className="w-8 h-8" style={{ color: iconColor }} />
      </div>
      <h3
        className="text-[16px] mb-3"
        style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
      >
        {title}
      </h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <button className="w-full h-[44px] bg-[#085041] text-white rounded-lg font-medium hover:bg-[#085041]/90 transition-colors">
        Download PDF
      </button>
    </div>
  );
}

export function ReportExportPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-white px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#085041] flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-full" />
          </div>
          <span className="text-[16px]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
            FounderLens
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1
            className="text-[28px] mb-3"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
          >
            Download reports — Samir Industries
          </h1>
          <p className="text-[14px] text-muted-foreground">
            Generated May 15, 2026 · 14 documents analyzed · 3 interviews transcribed
          </p>
        </div>

        {/* Export cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <ExportCard
            icon={FileText}
            title="PE Investment Memo"
            description="12 pages · Succession risk analysis, dependency map, governance gaps, investment recommendation"
            iconColor="#1D9E75"
          />
          <ExportCard
            icon={AlertTriangle}
            title="Succession Risk Report"
            description="8 pages · Scored risk categories, key-person analysis, what breaks if founder exits"
            iconColor="#EF9F27"
            featured
          />
          <ExportCard
            icon={Calendar}
            title="100-Day Governance Plan"
            description="6 pages · Role transfer checklist, SOP drafts, hiring recommendations, decision delegation plan"
            iconColor="#639922"
          />
        </div>

        {/* Share with team */}
        <div className="bg-white border border-border rounded-2xl p-6">
          <h3
            className="text-[16px] mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
          >
            Share with team
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['#085041', '#1D9E75', '#639922', '#EF9F27'].map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-[14px] font-medium"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50 transition-colors">
              <Copy className="w-4 h-4" />
              <span className="text-[14px] font-medium">Copy link</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
