import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#e0e7ef] to-[#f1f5f9] px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full"
      >
        <h1 className="font-roboto font-bold text-2xl text-[#1d4ed8] mb-4">Log In</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="login-email" className="font-roboto text-gray-700 mb-1 block">Email</label>
            <input id="login-email" type="email" className="border rounded w-full px-3 py-2 focus:border-[#1d4ed8] focus:outline-none" required />
          </div>
          <div>
            <label htmlFor="login-password" className="font-roboto text-gray-700 mb-1 block">Password</label>
            <input id="login-password" type="password" className="border rounded w-full px-3 py-2 focus:border-[#1d4ed8] focus:outline-none" required />
          </div>
          <Button id="login-submit-btn" type="submit" className="mt-2 bg-[#1d4ed8] text-white font-semibold hover:bg-[#2563eb]">
            Log In
          </Button>
        </form>
        <div className="mt-6 flex justify-between text-sm">
          <Link to="/signup" className="text-[#1d4ed8] font-semibold hover:underline">Sign Up</Link>
          <Link to="#" className="text-gray-500 hover:underline">Forgot password?</Link>
        </div>
      </motion.div>
    </div>
  );
}
