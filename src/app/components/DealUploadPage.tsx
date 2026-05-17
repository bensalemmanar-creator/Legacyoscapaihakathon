import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FileText, Table, Mic, Network, X, CheckCircle, User } from 'lucide-react';
import { UploadZone } from './UploadZone';

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  processed: boolean;
}

export function DealUploadPage() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    { id: '1', name: 'Financial_Statements_2023.pdf', size: '2.4 MB', processed: true },
    { id: '2', name: 'Balance_Sheet_Q4.xlsx', size: '1.1 MB', processed: true },
    { id: '3', name: 'Founder_Interview_Part1.mp4', size: '145 MB', processed: true },
    { id: '4', name: 'Contract_Main_Supplier.pdf', size: '845 KB', processed: true },
    { id: '5', name: 'Org_Chart_Current.xlsx', size: '456 KB', processed: true },
    { id: '6', name: 'P&L_Statement_2023.pdf', size: '1.8 MB', processed: true },
    { id: '7', name: 'Cash_Flow_Analysis.xlsx', size: '967 KB', processed: true },
    { id: '8', name: 'CFO_Interview.mp3', size: '87 MB', processed: true },
    { id: '9', name: 'Client_Contracts.pdf', size: '3.2 MB', processed: true },
    { id: '10', name: 'Revenue_Breakdown.xlsx', size: '1.5 MB', processed: true },
    { id: '11', name: 'Board_Meeting_Notes.pdf', size: '678 KB', processed: true },
    { id: '12', name: 'Strategic_Plan_2024.pdf', size: '2.1 MB', processed: true },
    { id: '13', name: 'Employee_List.xlsx', size: '543 KB', processed: true },
    { id: '14', name: 'Operations_Manager_Interview.mp4', size: '112 MB', processed: true }
  ]);

  const handleStartAnalysis = () => {
    navigate('/processing');
  };

  const removeFile = (id: string) => {
    setUploadedFiles(files => files.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#085041] flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-full" />
          </div>
          <span className="text-[16px]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
            FounderLens
          </span>
        </div>
        <input
          type="text"
          defaultValue="New deal: Samir Industries"
          className="flex-1 max-w-md text-center border-0 focus:outline-none text-[16px] font-medium"
        />
        <div className="w-8 h-8 rounded-full bg-[#085041] flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2
          className="text-[20px] mb-8"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
        >
          Upload company documents
        </h2>

        {/* Upload zones grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <UploadZone icon={FileText} label="Contracts & PDFs" state="uploaded" fileCount={6} />
          <UploadZone icon={Table} label="Excel & financial files" state="uploaded" fileCount={5} />
          <UploadZone icon={Mic} label="Interviews (audio/video)" state="uploaded" fileCount={3} />
          <UploadZone icon={Network} label="Org chart" state="idle" />
        </div>

        {/* Uploaded files list */}
        <div className="bg-white border border-border rounded-lg p-4">
          <h3 className="text-[14px] font-medium mb-4">Uploaded files</h3>
          <div className="space-y-2">
            {uploadedFiles.map(file => (
              <div
                key={file.id}
                className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-50 group"
              >
                <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-[14px] flex-1 min-w-0 truncate">{file.name}</span>
                <span className="text-[12px] text-muted-foreground">{file.size}</span>
                {file.processed && (
                  <CheckCircle className="w-4 h-4 text-[#639922] flex-shrink-0" />
                )}
                <button
                  onClick={() => removeFile(file.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-6 py-4 flex items-center justify-between">
        <div className="text-[14px] text-muted-foreground">
          {uploadedFiles.length} files uploaded · Ready to analyze
        </div>
        <button
          onClick={handleStartAnalysis}
          className="h-[44px] px-6 bg-[#085041] text-white rounded-lg font-medium hover:bg-[#085041]/90 transition-colors flex items-center gap-2"
        >
          Start analysis
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
