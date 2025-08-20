// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { SignupPage } from '@/pages/SignupPage'
import { MedicalRecordsPage } from '@/pages/MedicalRecordsPage'
import { AppointmentsPage } from '@/pages/AppointmentsPage'
import { PrescriptionsPage } from '@/pages/PrescriptionsPage'
import { MessagingPage } from '@/pages/MessagingPage'
import { NotificationsPanel } from '@/pages/NotificationsPanel'
import { FileUploadsPage } from '@/pages/FileUploadsPage'
import { Providers } from './Providers'

export const App = () => {
  return (
    <Router>
      <Providers>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/records" element={<MedicalRecordsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/prescriptions" element={<PrescriptionsPage />} />
          <Route path="/messages" element={<MessagingPage />} />
          <Route path="/notifications" element={<NotificationsPanel />} />
          <Route path="/uploads" element={<FileUploadsPage />} />
        </Routes>
      </Providers>
    </Router>
  )
}
