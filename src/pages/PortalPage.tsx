import { motion } from 'framer-motion';
import { CalendarCheck, FileText, Pill, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    icon: FileText,
    title: 'Medical Records',
    to: '/medical-records',
    desc: 'View, download, and upload your health history.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointments',
    to: '/appointments',
    desc: 'Manage your care visits and get reminders.',
  },
  {
    icon: Pill,
    title: 'Prescriptions',
    to: '/prescriptions',
    desc: 'Track and refill your medications securely.',
  },
  {
    icon: MessageCircle,
    title: 'Messages',
    to: '/messages',
    desc: 'Chat safely with your care team.',
  },
];

export function PortalPage() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-[#e0e7ff] to-[#f8fafc] flex flex-col items-center py-12">
      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10 mt-4 flex flex-col items-center"
      >
        <h1 className="font-roboto text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-3 text-center">Welcome to Your Portal</h1>
        <p className="font-roboto text-gray-700 text-lg text-center mb-4 max-w-xl">
          Securely access your health information and connect with your care team—all in one place. PortalGuard keeps everything private, protected, and always at your fingertips.
        </p>
        <span className="block w-20 h-1 rounded bg-[#1d4ed8] opacity-40 mb-2" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl w-full mb-8"
      >
        {quickLinks.map(({ icon: Icon, title, to, desc }) => (
          <Link to={to} key={to} className="focus:outline-none">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg flex flex-col items-center p-7 border border-blue-100 hover:shadow-2xl transition-shadow cursor-pointer h-full"
            >
              <Icon size={38} className="mb-3 text-[#1d4ed8]" />
              <h3 className="font-bold text-lg font-roboto text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 font-roboto text-base mb-2 text-center">{desc}</p>
              <Button
                id={`quicklink-${title.toLowerCase().replace(/ /g, '-')}-btn`}
                variant="outline"
                className="border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 mt-1"
              >
                Go
              </Button>
            </motion.div>
          </Link>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-[#1d4ed8] to-[#94a3b8] w-full max-w-2xl rounded-xl py-8 px-6 flex flex-col items-center shadow-lg"
      >
        <h2 className="font-roboto font-bold text-xl text-white mb-2">Need assistance or have privacy questions?</h2>
        <Link to="/support">
          <Button id="portal-support-btn" variant="secondary" className="bg-white text-[#1d4ed8] hover:bg-blue-50 font-semibold mt-2">
            Contact Support
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
