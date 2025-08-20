import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const heroBg = '/branding/assets/hero-0.png';
const logo = '/branding/assets/logo-0.png';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url('${heroBg}')` }}
        className="bg-cover bg-center h-96 relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <img src={logo} className="w-20 h-20 mb-2" />
            <h1 className="text-white text-5xl font-bold tracking-tight font-['Roboto']">Welcome to SecureMed Portal</h1>
            <p className="text-white text-lg max-w-xl text-center font-['Roboto']">Empowering you to access, manage, and share your health data with confidence. Trust, safety, and seamless care for every step of your journey.</p>
            <div className="flex gap-4 mt-4">
              <Button asChild id="cta-signup" className="bg-[#1d4ed8] text-white font-bold text-lg px-8 py-4 shadow-lg hover:bg-[#243fa8]">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" id="cta-login" className="text-white border-white border-2 font-bold text-lg px-8 py-4 hover:bg-white hover:text-[#1d4ed8]">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-['Roboto'] text-[#1d4ed8]">All Your Care, One Portal</h2>
          <p className="text-gray-800 text-lg mb-6 font-['Roboto']">
            SecureMed Portal is your digital front door to healthcare: view medical records, manage appointments, chat with providers, and handle prescriptions—all in a single, secure place. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <FeatureCard icon="calendar" title="Appointments" to="/appointments" desc="Book, view, or manage your upcoming visits with ease." />
            <FeatureCard icon="folder-lock" title="Records" to="/medical-records" desc="Access your personal health records securely and instantly." />
            <FeatureCard icon="pill" title="Prescriptions" to="/prescriptions" desc="View prescriptions, request refills, and track medication." />
            <FeatureCard icon="messages-square" title="Messaging" to="/messaging" desc="Message your care team for timely answers and support." />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

import { Calendar, FolderLock, Pill, MessagesSquare } from 'lucide-react';

function FeatureCard({ icon, title, desc, to }: { icon: string, title: string, desc: string, to: string }) {
  const icons: Record<string, JSX.Element> = {
    calendar: <Calendar className="w-8 h-8 text-[#1d4ed8]" />, 
    'folder-lock': <FolderLock className="w-8 h-8 text-[#1d4ed8]" />, 
    pill: <Pill className="w-8 h-8 text-[#1d4ed8]" />, 
    'messages-square': <MessagesSquare className="w-8 h-8 text-[#1d4ed8]" />
  };
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 10px 32px 0 rgba(29,78,216,0.16)' }}
      className="rounded-xl bg-white border border-[#e5e7eb] shadow transition-all p-6 flex flex-col gap-4 items-start"
    >
      <div>{icons[icon]}</div>
      <h3 className="font-bold text-xl font-['Roboto']">{title}</h3>
      <p className="text-gray-700 font-['Roboto']">{desc}</p>
      <Button asChild variant="link" id={`feature-${title.toLowerCase()}-link`} className="text-[#1d4ed8] font-semibold px-0 mt-auto">
        <Link to={to}>Go to {title}</Link>
      </Button>
    </motion.div>
  );
}
