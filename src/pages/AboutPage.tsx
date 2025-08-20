import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#f8fafc] py-16 px-4">
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <div className="bg-[#1d4ed8] rounded-full p-2 mb-4">
          <ShieldCheck className="text-white" size={32} />
        </div>
        <h1 className="font-roboto text-3xl font-bold text-[#1d4ed8] mb-3">About PortalGuard</h1>
        <p className="font-roboto text-gray-700 text-lg mb-2 text-center">
          Built for peace of mind, PortalGuard is your HIPAA-compliant gateway to health. We obsess over your security, privacy, and experience so you can focus on what matters most: your wellbeing.
        </p>
        <ul className="mt-6 space-y-2 text-left text-gray-600 font-roboto text-base">
          <li>🔐 <span className="font-medium">End-to-end encryption</span> — Your medical info stays private.</li>
          <li>👩‍⚕️ <span className="font-medium">For patients & providers</span> — One seamless, secure platform.</li>
          <li>🕒 <span className="font-medium">24/7 access</span> — Wherever you are, whenever you need it.</li>
        </ul>
      </motion.div>
    </div>
  );
}
