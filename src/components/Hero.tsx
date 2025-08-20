import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d4ed8]/80 to-[#1d4ed8]/10 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-roboto font-bold text-4xl md:text-5xl text-white text-center mb-4 drop-shadow-lg"
        >
          HIPAA Secure Patient Portal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-blue-100 font-roboto text-center max-w-2xl mb-7"
        >
          Securely access your medical records, appointments, prescriptions, and care team—anywhere, anytime. Your privacy, our passion.
        </motion.p>
        <Link to="/signup">
          <Button
            id="hero-get-started-btn"
            className="bg-white text-[#1d4ed8] px-8 py-4 rounded-full font-roboto font-bold shadow-lg hover:bg-blue-100 transition-colors text-lg"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
