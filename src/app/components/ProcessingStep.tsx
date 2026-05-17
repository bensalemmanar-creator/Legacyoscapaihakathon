import { Check, LucideIcon } from 'lucide-react';

interface ProcessingStepProps {
  icon: LucideIcon;
  label: string;
  state: 'pending' | 'active' | 'completed';
}

export function ProcessingStep({ icon: Icon, label, state }: ProcessingStepProps) {
  const stateStyles = {
    pending: {
      textColor: 'text-muted-foreground',
      iconColor: 'text-muted-foreground',
      fontWeight: 'font-normal'
    },
    active: {
      textColor: 'text-foreground',
      iconColor: 'text-[#1D9E75]',
      fontWeight: 'font-medium'
    },
    completed: {
      textColor: 'text-foreground',
      iconColor: 'text-[#639922]',
      fontWeight: 'font-normal'
    }
  };

  const styles = stateStyles[state];

  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        {state === 'completed' ? (
          <Check className={`w-5 h-5 ${styles.iconColor}`} />
        ) : state === 'active' ? (
          <div className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
        ) : (
          <Icon className={`w-5 h-5 ${styles.iconColor}`} />
        )}
      </div>
      <span className={`text-[14px] ${styles.textColor} ${styles.fontWeight}`}>
        {label}
      </span>
    </div>
  );
}
