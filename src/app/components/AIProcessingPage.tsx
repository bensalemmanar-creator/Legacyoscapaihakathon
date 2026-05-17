import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FileAudio, Network, BarChart3, FileText, Sparkles } from 'lucide-react';
import { ProcessingStep } from './ProcessingStep';

type StepState = 'pending' | 'active' | 'completed';

interface Step {
  icon: typeof FileAudio;
  label: string;
  state: StepState;
}

export function AIProcessingPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState<Step[]>([
    { icon: FileAudio, label: 'Transcribing interviews', state: 'completed' },
    { icon: Network, label: 'Extracting entities and relationships', state: 'completed' },
    { icon: BarChart3, label: 'Building dependency graph', state: 'active' },
    { icon: Sparkles, label: 'Scoring succession readiness', state: 'pending' },
    { icon: FileText, label: 'Generating investment memo', state: 'pending' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/dashboard'), 500);
          return 100;
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    if (progress >= 20 && progress < 40) {
      setSteps([
        { icon: FileAudio, label: 'Transcribing interviews', state: 'completed' },
        { icon: Network, label: 'Extracting entities and relationships', state: 'active' },
        { icon: BarChart3, label: 'Building dependency graph', state: 'pending' },
        { icon: Sparkles, label: 'Scoring succession readiness', state: 'pending' },
        { icon: FileText, label: 'Generating investment memo', state: 'pending' }
      ]);
    } else if (progress >= 40 && progress < 60) {
      setSteps([
        { icon: FileAudio, label: 'Transcribing interviews', state: 'completed' },
        { icon: Network, label: 'Extracting entities and relationships', state: 'completed' },
        { icon: BarChart3, label: 'Building dependency graph', state: 'active' },
        { icon: Sparkles, label: 'Scoring succession readiness', state: 'pending' },
        { icon: FileText, label: 'Generating investment memo', state: 'pending' }
      ]);
    } else if (progress >= 60 && progress < 80) {
      setSteps([
        { icon: FileAudio, label: 'Transcribing interviews', state: 'completed' },
        { icon: Network, label: 'Extracting entities and relationships', state: 'completed' },
        { icon: BarChart3, label: 'Building dependency graph', state: 'completed' },
        { icon: Sparkles, label: 'Scoring succession readiness', state: 'active' },
        { icon: FileText, label: 'Generating investment memo', state: 'pending' }
      ]);
    } else if (progress >= 80) {
      setSteps([
        { icon: FileAudio, label: 'Transcribing interviews', state: 'completed' },
        { icon: Network, label: 'Extracting entities and relationships', state: 'completed' },
        { icon: BarChart3, label: 'Building dependency graph', state: 'completed' },
        { icon: Sparkles, label: 'Scoring succession readiness', state: 'completed' },
        { icon: FileText, label: 'Generating investment memo', state: 'active' }
      ]);
    }
  }, [progress]);

  const timeRemaining = Math.ceil((100 - progress) / 5 * 0.2);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F7F6F2' }}>
      <div className="w-[560px]">
        <div className="text-center mb-6">
          <h2
            className="text-[20px] mb-2"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
          >
            Samir Industries
          </h2>
          <p className="text-[14px] text-muted-foreground">Analyzing 14 documents…</p>
        </div>

        {/* Animated network graph */}
        <div className="bg-white rounded-lg border border-border p-8 mb-6 h-[280px] flex items-center justify-center">
          <svg width="240" height="200" viewBox="0 0 240 200" className="animate-pulse">
            {/* Central node */}
            <circle cx="120" cy="100" r="16" fill="#085041" opacity="0.8" />

            {/* Connected nodes */}
            <circle cx="60" cy="50" r="10" fill="#1D9E75" opacity="0.6">
              <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="180" cy="50" r="10" fill="#1D9E75" opacity="0.6">
              <animate attributeName="r" values="10;12;10" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="120" r="10" fill="#1D9E75" opacity="0.6">
              <animate attributeName="r" values="10;12;10" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="120" r="10" fill="#1D9E75" opacity="0.6">
              <animate attributeName="r" values="10;12;10" dur="2s" begin="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="160" r="10" fill="#1D9E75" opacity="0.6">
              <animate attributeName="r" values="10;12;10" dur="2s" begin="0.25s" repeatCount="indefinite" />
            </circle>
            <circle cx="160" cy="160" r="10" fill="#1D9E75" opacity="0.6">
              <animate attributeName="r" values="10;12;10" dur="2s" begin="0.75s" repeatCount="indefinite" />
            </circle>

            {/* Connection lines */}
            <line x1="120" y1="100" x2="60" y2="50" stroke="#1D9E75" strokeWidth="1.5" opacity="0.3" />
            <line x1="120" y1="100" x2="180" y2="50" stroke="#1D9E75" strokeWidth="1.5" opacity="0.3" />
            <line x1="120" y1="100" x2="40" y2="120" stroke="#1D9E75" strokeWidth="1.5" opacity="0.3" />
            <line x1="120" y1="100" x2="200" y2="120" stroke="#1D9E75" strokeWidth="1.5" opacity="0.3" />
            <line x1="120" y1="100" x2="80" y2="160" stroke="#1D9E75" strokeWidth="1.5" opacity="0.3" />
            <line x1="120" y1="100" x2="160" y2="160" stroke="#1D9E75" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </div>

        {/* Status feed */}
        <div className="bg-white rounded-lg border border-border p-6 mb-6">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <ProcessingStep
                key={index}
                icon={step.icon}
                label={step.label}
                state={step.state}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-3">
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1D9E75] rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-[12px] text-center text-muted-foreground">
          ~{timeRemaining} min remaining
        </p>
      </div>
    </div>
  );
}
