import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import {
  LayoutDashboard, Upload, Building2, Cpu, BarChart3,
  Network, TrendingUp, Layers, AlertTriangle, CalendarDays,
  FileText, Bell, Search, Download, ChevronRight, LogOut, Settings
} from 'lucide-react';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Upload, label: 'Upload Data', path: '/upload' },
  { icon: Building2, label: 'Company Profile', path: '/company' },
  { icon: Cpu, label: 'AI Processing', path: '/processing' },
  { icon: BarChart3, label: 'Executive View', path: '/dashboard' },
  { icon: Network, label: 'Dependency Map', path: '/dependency-map' },
  { icon: TrendingUp, label: 'Analytics', path: '/analytics' },
  { icon: Layers, label: 'Intangible Value', path: '/intangible' },
  { icon: AlertTriangle, label: 'Findings', path: '/findings' },
  { icon: CalendarDays, label: '100-Day Plan', path: '/action-plan' },
  { icon: FileText, label: 'PE Memo', path: '/memo' },
];

export function LOSLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside
        className="flex flex-col shrink-0 transition-all duration-200"
        style={{
          width: collapsed ? 64 : 220,
          background: '#0F172A',
          borderRight: '1px solid #1E293B',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-[#1E293B]">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #14B8A6, #0891B2)' }}>
            <Network size={16} color="white" />
          </div>
          {!collapsed && (
            <div>
              <div className="text-white text-sm" style={{ fontWeight: 700, letterSpacing: '-0.01em' }}>LegacyOS</div>
              <div className="text-[#64748B] text-xs">Due Diligence AI</div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto text-[#475569] hover:text-white transition-colors"
          >
            <ChevronRight size={14} className={`transition-transform ${collapsed ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Company chip */}
        {!collapsed && (
          <div className="mx-3 mt-3 mb-1 px-3 py-2 rounded-lg" style={{ background: '#1E293B' }}>
            <div className="text-[#94A3B8] text-xs mb-0.5">Active Analysis</div>
            <div className="text-white text-xs" style={{ fontWeight: 600 }}>NourPack Tunisia</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] inline-block"></span>
              <span className="text-[#F59E0B] text-xs">High Dependency Risk</span>
            </div>
          </div>
        )}

        {/* Nav */}
        <nav className="flex-1 py-2 overflow-y-auto">
          {NAV_ITEMS.map(({ icon: Icon, label, path }) => {
            const active = location.pathname === path;
            return (
              <NavLink
                key={path}
                to={path}
                title={collapsed ? label : undefined}
                className={`flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg mb-0.5 transition-all text-sm ${
                  active
                    ? 'bg-[#14B8A6] text-white'
                    : 'text-[#94A3B8] hover:bg-[#1E293B] hover:text-white'
                }`}
                style={{ fontWeight: active ? 600 : 400 }}
              >
                <Icon size={16} className="shrink-0" />
                {!collapsed && <span className="truncate">{label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-[#1E293B] p-3">
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#14B8A6] flex items-center justify-center text-white text-xs shrink-0" style={{ fontWeight: 700 }}>
                SA
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs truncate" style={{ fontWeight: 500 }}>Sana Amari</div>
                <div className="text-[#64748B] text-xs">PE Analyst</div>
              </div>
              <button className="text-[#475569] hover:text-white"><Settings size={14} /></button>
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full bg-[#14B8A6] flex items-center justify-center text-white text-xs mx-auto" style={{ fontWeight: 700 }}>
              SA
            </div>
          )}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="shrink-0 flex items-center gap-4 px-6 py-3 bg-white border-b border-[#E2E8F0]" style={{ height: 60 }}>
          <div className="flex-1 flex items-center gap-3">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                placeholder="Search deals, companies, findings..."
                className="pl-9 pr-4 py-1.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] outline-none focus:border-[#14B8A6] w-64"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-lg hover:bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#DC2626] rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-white transition-colors" style={{ background: '#0F172A', fontWeight: 500 }}>
              <Download size={15} />
              Export
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
