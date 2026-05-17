import { useNavigate } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/upload');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#111110' }}>
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #ffffff 1px, #ffffff 2px),
                           repeating-linear-gradient(90deg, transparent, transparent 1px, #ffffff 1px, #ffffff 2px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative bg-white rounded-2xl w-[440px] border border-black/5 shadow-sm" style={{ padding: '48px' }}>
        {/* Logo and wordmark */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded bg-[#085041] flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full" />
            </div>
            <span
              className="text-[20px]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
            >
              FounderLens
            </span>
          </div>
          <p className="text-[13px] text-muted-foreground text-center">
            Turn founder dependency into investable clarity
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[44px] px-4 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#085041]/20"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[44px] px-4 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#085041]/20"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-[44px] bg-[#085041] text-white rounded-lg font-medium hover:bg-[#085041]/90 transition-colors"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="text-[13px] text-[#085041] hover:underline">
            Join an existing fund
          </button>
          <span className="text-muted-foreground">·</span>
          <button className="text-[13px] text-[#085041] hover:underline">
            Request access
          </button>
        </div>

        <p className="text-[11px] text-center text-muted-foreground mt-8">
          Trusted by PE firms in Tunisia, Morocco, and the GCC
        </p>
      </div>
    </div>
  );
}
