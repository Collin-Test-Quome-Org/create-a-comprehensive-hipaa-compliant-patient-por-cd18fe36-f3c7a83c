import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function SignupPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#e0e7ef] to-[#f1f5f9] px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full"
      >
        <h1 className="font-roboto font-bold text-2xl text-[#1d4ed8] mb-4">Create your PortalGuard Account</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="signup-name" className="font-roboto text-gray-700 mb-1 block">Full Name</label>
            <input id="signup-name" type="text" className="border rounded w-full px-3 py-2 focus:border-[#1d4ed8] focus:outline-none" required />
          </div>
          <div>
            <label htmlFor="signup-email" className="font-roboto text-gray-700 mb-1 block">Email</label>
            <input id="signup-email" type="email" className="border rounded w-full px-3 py-2 focus:border-[#1d4ed8] focus:outline-none" required />
          </div>
          <div>
            <label htmlFor="signup-password" className="font-roboto text-gray-700 mb-1 block">Password</label>
            <input id="signup-password" type="password" className="border rounded w-full px-3 py-2 focus:border-[#1d4ed8] focus:outline-none" required />
          </div>
          <Button id="signup-submit-btn" type="submit" className="mt-2 bg-[#1d4ed8] text-white font-semibold hover:bg-[#2563eb]">
            Sign Up
          </Button>
        </form>
        <div className="mt-6 flex justify-center text-sm">
          <span className="mr-2 text-gray-600">Already have an account?</span>
          <Link to="/login" className="text-[#1d4ed8] font-semibold hover:underline">Log In</Link>
        </div>
      </motion.div>
    </div>
  );
}
