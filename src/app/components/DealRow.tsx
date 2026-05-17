import { Building2 } from 'lucide-react';

interface DealRowProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function DealRow({ name, isActive, onClick }: DealRowProps) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors relative ${
        isActive ? 'bg-white/5' : 'hover:bg-white/5'
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1D9E75] rounded-r" />
      )}
      <Building2 className="w-4 h-4 text-[#9FE1CB]" />
      <span className="text-[14px] text-white">{name}</span>
      <div
        className={`w-1.5 h-1.5 rounded-full ml-auto ${
          isActive ? 'bg-[#1D9E75]' : 'bg-gray-500'
        }`}
      />
    </div>
  );
}
