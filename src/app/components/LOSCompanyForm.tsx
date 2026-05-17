import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Save, Building2 } from 'lucide-react';

const YES_NO = ['Yes', 'No'];
const YES_NO_PARTIAL = ['Yes', 'Partial', 'No'];
const DEAL_TYPES = ['Minority', 'Majority', 'Buyout', 'Growth Capital'];
const SECTORS = ['Food Distribution', 'Packaging', 'Agriculture', 'Manufacturing', 'Retail', 'Services', 'Technology', 'Healthcare', 'Logistics'];
const OWNERSHIP = ['Family-owned', 'Founder-owned', 'Founder + investors', 'Partnership'];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[#374151] text-sm mb-1.5" style={{ fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ defaultValue, placeholder, type = 'text' }: { defaultValue?: string; placeholder?: string; type?: string }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10 transition"
      style={{ fontFamily: 'Inter, sans-serif' }}
    />
  );
}

function Select({ options, defaultValue }: { options: string[]; defaultValue?: string }) {
  return (
    <select
      defaultValue={defaultValue || options[0]}
      className="w-full px-3 py-2 text-sm rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] outline-none focus:border-[#14B8A6] cursor-pointer"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-b border-[#E2E8F0] pb-3 mb-5">
      <h2 className="text-[#0F172A] text-base" style={{ fontWeight: 700 }}>{title}</h2>
      <p className="text-[#64748B] text-sm">{subtitle}</p>
    </div>
  );
}

export function LOSCompanyForm() {
  const navigate = useNavigate();

  return (
    <div className="p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[#0F172A] text-2xl" style={{ fontWeight: 700 }}>Company Profile</h1>
          <p className="text-[#64748B] text-sm mt-1">Enter company data for AI dependency analysis — NourPack Tunisia</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] transition">
            <Save size={15} />
            Save Draft
          </button>
          <button
            onClick={() => navigate('/processing')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white transition hover:opacity-90"
            style={{ background: '#14B8A6', fontWeight: 600 }}
          >
            Run AI Analysis <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Column 1+2: Main form */}
        <div className="col-span-2 space-y-8">
          {/* Company Profile */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
            <SectionTitle title="Company Profile" subtitle="Core company identifiers and financials" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Company Name">
                <Input defaultValue="NourPack Tunisia" />
              </Field>
              <Field label="Sector">
                <Select options={SECTORS} defaultValue="Food Distribution" />
              </Field>
              <Field label="Headquarters / City">
                <Input defaultValue="Sfax, Tunisia" />
              </Field>
              <Field label="Year Founded">
                <Input defaultValue="1998" type="number" />
              </Field>
              <Field label="Revenue (TND)">
                <Input defaultValue="8,200,000" />
              </Field>
              <Field label="EBITDA (TND)">
                <Input defaultValue="1,600,000" />
              </Field>
              <Field label="EBITDA Margin (%)">
                <Input defaultValue="19.5" type="number" />
              </Field>
              <Field label="Number of Employees">
                <Input defaultValue="47" type="number" />
              </Field>
              <Field label="Export Share (%)">
                <Input defaultValue="35" type="number" />
              </Field>
              <Field label="Ownership Type">
                <Select options={OWNERSHIP} defaultValue="Family-owned" />
              </Field>
              <Field label="Founder Age">
                <Input defaultValue="58" type="number" />
              </Field>
              <Field label="Founder Role / Title">
                <Input defaultValue="CEO & Managing Director" />
              </Field>
              <div className="col-span-2">
                <Field label="Target Deal Type">
                  <Select options={DEAL_TYPES} defaultValue="Majority" />
                </Field>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
            <SectionTitle title="Governance & Management" subtitle="Organizational structure and decision authority" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Family Members Involved">
                <Input defaultValue="3" type="number" />
              </Field>
              <Field label="Direct Reports to Founder">
                <Input defaultValue="7" type="number" />
              </Field>
              <Field label="CFO in place?">
                <Select options={YES_NO} defaultValue="No" />
              </Field>
              <Field label="COO in place?">
                <Select options={YES_NO} defaultValue="No" />
              </Field>
              <Field label="Formal Board?">
                <Select options={YES_NO} defaultValue="No" />
              </Field>
              <Field label="Succession Plan?">
                <Select options={YES_NO_PARTIAL} defaultValue="No" />
              </Field>
              <div className="col-span-2">
                <Field label="SOPs Documented?">
                  <Select options={YES_NO_PARTIAL} defaultValue="Partial" />
                </Field>
              </div>
            </div>
          </div>

          {/* Concentration */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
            <SectionTitle title="Customer & Supplier Concentration" subtitle="Revenue and procurement dependency analysis" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Top 3 Customers — % of Revenue">
                <Input defaultValue="64" type="number" />
              </Field>
              <Field label="Top 5 Suppliers — % of Purchases">
                <Input defaultValue="71" type="number" />
              </Field>
              <Field label="Founder Manages Top Customers?">
                <Select options={YES_NO_PARTIAL} defaultValue="Yes" />
              </Field>
              <Field label="Founder Manages Top Suppliers?">
                <Select options={YES_NO_PARTIAL} defaultValue="Yes" />
              </Field>
            </div>
          </div>
        </div>

        {/* Column 3: Summary + tips */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 sticky top-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] flex items-center justify-center">
                <Building2 size={16} color="#14B8A6" />
              </div>
              <div>
                <div className="text-[#0F172A] text-sm" style={{ fontWeight: 700 }}>NourPack Tunisia</div>
                <div className="text-[#64748B] text-xs">Draft · Food Distribution</div>
              </div>
            </div>

            <div className="space-y-2.5 mb-4">
              {[
                { label: 'Revenue', value: '8.2M TND' },
                { label: 'EBITDA', value: '1.6M TND' },
                { label: 'Employees', value: '47' },
                { label: 'Sector', value: 'Food Distribution' },
                { label: 'Founder Age', value: '58' },
                { label: 'Export Share', value: '35%' },
              ].map(f => (
                <div key={f.label} className="flex justify-between py-1.5 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B] text-xs">{f.label}</span>
                  <span className="text-[#0F172A] text-xs" style={{ fontWeight: 600 }}>{f.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/processing')}
              className="w-full py-2.5 rounded-lg text-sm text-white"
              style={{ background: '#14B8A6', fontWeight: 600 }}
            >
              Run AI Analysis
            </button>
          </div>

          <div className="rounded-xl p-4 border border-[#FEF3C7] bg-[#FFFBEB]">
            <p className="text-[#92400E] text-xs" style={{ fontWeight: 600 }}>⚠ Risk Signals Detected</p>
            <ul className="mt-2 space-y-1.5">
              {['No CFO or COO in place', 'Founder manages key customers', 'No formal board', 'SOPs only partially documented'].map(s => (
                <li key={s} className="text-[#78350F] text-xs flex items-start gap-1.5">
                  <span className="text-[#F59E0B] mt-0.5">•</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
