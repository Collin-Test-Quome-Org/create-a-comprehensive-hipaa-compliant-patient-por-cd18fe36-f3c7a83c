// Hero.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="bg-cover bg-center h-96 relative rounded-lg overflow-hidden shadow-lg mb-10"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl font-bold mb-3 font-['Roboto']"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Welcome to Medivault
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-200 text-lg mb-6 font-['Roboto'] max-w-xl mx-auto"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
        >
          Your secure, modern portal for managing appointments, medical records, prescriptions, and direct care team messaging. Because you deserve healthcare access as connected as your life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex gap-4 justify-center"
        >
          <Link to="/signup">
            <Button id="hero-signup-btn" className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-6 py-3 rounded-full shadow-lg font-semibold">Get Started</Button>
          </Link>
          <Link to="/login">
            <Button id="hero-login-btn" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-blue-800 text-lg px-6 py-3 rounded-full font-semibold">Login</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
