import { LucideIcon } from 'lucide-react';

interface UploadZoneProps {
  icon: LucideIcon;
  label: string;
  state?: 'idle' | 'hover' | 'uploaded';
  fileCount?: number;
}

export function UploadZone({ icon: Icon, label, state = 'idle', fileCount }: UploadZoneProps) {
  const borderStyle = state === 'hover'
    ? 'border-[#1D9E75]'
    : state === 'uploaded'
    ? 'border-[#1D9E75] border-solid'
    : 'border-border border-dashed';

  return (
    <div
      className={`${borderStyle} border-2 rounded-lg h-[160px] flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors hover:border-[#1D9E75] relative`}
    >
      <Icon className="w-8 h-8 text-muted-foreground" />
      <div className="text-[14px] font-medium text-center">{label}</div>
      {fileCount !== undefined && fileCount > 0 && (
        <div className="absolute top-2 right-2 bg-[#1D9E75] text-white rounded-full w-6 h-6 flex items-center justify-center text-[11px] font-medium">
          {fileCount}
        </div>
      )}
    </div>
  );
}
