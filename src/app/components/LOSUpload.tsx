import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Upload, FileText, Mic, Users, UsersRound, ShoppingCart, Truck, FileSignature, Receipt, BarChart2, Landmark, StickyNote, Mail, CheckCircle2, X, ArrowRight, Info } from 'lucide-react';

const FILE_CATEGORIES = [
  { icon: Mic, label: 'Founder Interview Transcript', formats: 'DOCX, PDF, TXT', color: '#6366F1', bg: '#EEF2FF' },
  { icon: Mic, label: 'Audio / Video Interviews', formats: 'MP3, WAV, MP4', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: Users, label: 'Org Chart', formats: 'PDF, PNG, DOCX', color: '#0891B2', bg: '#ECFEFF' },
  { icon: UsersRound, label: 'Customer List', formats: 'CSV, XLSX', color: '#14B8A6', bg: '#F0FDFA' },
  { icon: Truck, label: 'Supplier List', formats: 'CSV, XLSX', color: '#10B981', bg: '#ECFDF5' },
  { icon: FileSignature, label: 'Contracts', formats: 'PDF, DOCX', color: '#F59E0B', bg: '#FFFBEB' },
  { icon: Receipt, label: 'Invoices', formats: 'PDF', color: '#F97316', bg: '#FFF7ED' },
  { icon: BarChart2, label: 'Financial Statements', formats: 'PDF, XLSX', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: Landmark, label: 'Bank Statements', formats: 'PDF', color: '#6366F1', bg: '#EEF2FF' },
  { icon: FileText, label: 'Internal Policies / SOPs', formats: 'PDF, DOCX', color: '#DC2626', bg: '#FEF2F2' },
  { icon: Mail, label: 'Emails / Meeting Notes', formats: 'PDF, DOCX, TXT', color: '#64748B', bg: '#F8FAFC' },
];

const DEMO_FILES = [
  { name: 'founder_interview_nourpack.docx', size: '142 KB', progress: 100, category: 'Founder Interview' },
  { name: 'org_chart_2024.pdf', size: '89 KB', progress: 100, category: 'Org Chart' },
  { name: 'financials_2023_2024.xlsx', size: '2.1 MB', progress: 100, category: 'Financial Statements' },
  { name: 'customer_list_q4.csv', size: '45 KB', progress: 72, category: 'Customer List' },
  { name: 'supplier_agreements.pdf', size: '318 KB', progress: 44, category: 'Contracts' },
];

export function LOSUpload() {
  const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState(DEMO_FILES);

  return (
    <div className="p-6 space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Upload Company Data</h1>
          <p className="text-[#64748B] text-sm mt-1">Upload documents and files for AI analysis. NourPack Tunisia</p>
        </div>
        <button
          onClick={() => navigate('/company')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white transition-all hover:opacity-90"
          style={{ background: '#0F172A', fontWeight: 600 }}
        >
          Next: Company Profile <ArrowRight size={15} />
        </button>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); }}
        className="rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center py-12 px-8"
        style={{ borderColor: dragging ? '#14B8A6' : '#CBD5E1', background: dragging ? '#F0FDFA' : '#F8FAFC' }}
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: dragging ? '#14B8A6' : '#E2E8F0' }}>
          <Upload size={26} color={dragging ? 'white' : '#64748B'} />
        </div>
        <p className="text-[#0F172A] text-base mb-1" style={{ fontWeight: 600 }}>Drop files here or click to browse</p>
        <p className="text-[#64748B] text-sm mb-4">PDF · DOCX · TXT · XLSX · CSV · MP3 · WAV · PNG · JPG</p>
        <button className="px-5 py-2 rounded-lg text-sm text-white" style={{ background: '#14B8A6', fontWeight: 600 }}>
          Upload Files
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* File categories */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 600 }}>Document Categories</h2>
            <div className="flex items-center gap-1 text-[#64748B] text-xs px-2 py-0.5 rounded-full bg-[#F1F5F9]">
              <Info size={11} />
              Upload by category for best AI results
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {FILE_CATEGORIES.map(cat => (
              <div key={cat.label} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#14B8A6] cursor-pointer transition-all group">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: cat.bg }}>
                  <cat.icon size={16} color={cat.color} />
                </div>
                <div className="min-w-0">
                  <div className="text-[#0F172A] text-xs truncate" style={{ fontWeight: 600 }}>{cat.label}</div>
                  <div className="text-[#94A3B8] text-xs">{cat.formats}</div>
                </div>
                <Upload size={13} className="ml-auto text-[#CBD5E1] group-hover:text-[#14B8A6] transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
            <p className="text-[#475569] text-sm">
              <span style={{ fontWeight: 600, color: '#14B8A6' }}>LegacyOS </span>
              extracts relationships, decision rights, and operational dependencies from structured and unstructured data — including interview audio, contracts, and financial records.
            </p>
          </div>
        </div>

        {/* Upload queue */}
        <div className="bg-white rounded-xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#F1F5F9]">
            <h3 className="text-[#0F172A] text-sm" style={{ fontWeight: 600 }}>Upload Queue</h3>
            <span className="text-xs text-[#64748B]">{files.filter(f => f.progress === 100).length}/{files.length} complete</span>
          </div>
          <div className="p-3 space-y-2.5">
            {files.map((f, i) => (
              <div key={i} className="p-3 rounded-lg bg-[#F8FAFC]">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="min-w-0">
                    <div className="text-[#0F172A] text-xs truncate" style={{ fontWeight: 500 }}>{f.name}</div>
                    <div className="text-[#94A3B8] text-xs">{f.size} · {f.category}</div>
                  </div>
                  {f.progress === 100 ? (
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                  ) : (
                    <span className="text-xs text-[#64748B] shrink-0">{f.progress}%</span>
                  )}
                </div>
                <div className="h-1 rounded-full bg-[#E2E8F0]">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${f.progress}%`, background: f.progress === 100 ? '#10B981' : '#14B8A6' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4 pt-2">
            <button
              onClick={() => navigate('/company')}
              className="w-full py-2 rounded-lg text-sm text-white"
              style={{ background: '#14B8A6', fontWeight: 600 }}
            >
              Continue to Company Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
