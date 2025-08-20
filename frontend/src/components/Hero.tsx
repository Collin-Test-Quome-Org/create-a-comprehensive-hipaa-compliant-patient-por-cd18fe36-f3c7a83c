import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-[28rem] md:h-[32rem] relative mb-8 md:mb-16 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/branding/assets/hero-0.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-500/40" />
      </div>
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold font-['Roboto'] text-white drop-shadow-lg mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          HIPAA Secure Patient Portal
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg md:text-xl font-['Roboto'] text-blue-100 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Welcome to <span className="font-bold text-white">PortalGuard</span>—your trusted digital health companion. Effortlessly access your medical records, manage appointments, and connect securely with your care team. Your privacy, our promise.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/portal">
            <Button id="hero-get-started-btn" className="bg-[#1d4ed8] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-[#2563eb] transition">Get Started</Button>
          </Link>
          <Link to="/about">
            <Button id="hero-learn-more-btn" variant="outline" className="border-white/50 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-blue-900/30">Learn More</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
