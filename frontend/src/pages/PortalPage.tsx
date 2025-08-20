import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function PortalPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#e0e7ef] to-[#f1f5f9] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl shadow-xl p-10 max-w-xl w-full text-center"
      >
        <h1 className="font-roboto font-bold text-3xl text-[#1d4ed8] mb-2">Welcome to your PortalGuard</h1>
        <p className="font-roboto text-gray-700 mb-6">
          Access your records, book appointments, and manage your health — all in one trusted place. (This is a demo — real portal coming soon!)
        </p>
        <Link to="/login">
          <Button id="portal-login-btn" className="bg-[#1d4ed8] text-white font-semibold hover:bg-[#2563eb] px-8 py-4 text-lg">
            Log In to Portal
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
