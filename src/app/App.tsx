import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { LOSLayout } from './components/LOSLayout';
import { LOSWelcome } from './components/LOSWelcome';
import { LOSUpload } from './components/LOSUpload';
import { LOSCompanyForm } from './components/LOSCompanyForm';
import { LOSProcessing } from './components/LOSProcessing';
import { LOSExecutive } from './components/LOSExecutive';
import { LOSDependencyMap } from './components/LOSDependencyMap';
import { LOSAnalytics } from './components/LOSAnalytics';
import { LOSIntangible } from './components/LOSIntangible';
import { LOSFindings } from './components/LOSFindings';
import { LOSActionPlan } from './components/LOSActionPlan';
import { LOSMemo } from './components/LOSMemo';

function WithLayout({ children }: { children: React.ReactNode }) {
  return <LOSLayout>{children}</LOSLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithLayout><LOSWelcome /></WithLayout>} />
        <Route path="/upload" element={<WithLayout><LOSUpload /></WithLayout>} />
        <Route path="/company" element={<WithLayout><LOSCompanyForm /></WithLayout>} />
        <Route path="/processing" element={<WithLayout><LOSProcessing /></WithLayout>} />
        <Route path="/dashboard" element={<WithLayout><LOSExecutive /></WithLayout>} />
        <Route path="/dependency-map" element={<WithLayout><LOSDependencyMap /></WithLayout>} />
        <Route path="/analytics" element={<WithLayout><LOSAnalytics /></WithLayout>} />
        <Route path="/intangible" element={<WithLayout><LOSIntangible /></WithLayout>} />
        <Route path="/findings" element={<WithLayout><LOSFindings /></WithLayout>} />
        <Route path="/action-plan" element={<WithLayout><LOSActionPlan /></WithLayout>} />
        <Route path="/memo" element={<WithLayout><LOSMemo /></WithLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
