import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      className="relative w-full h-[30rem] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/branding/assets/logo-1.png" className="w-24 h-24 mb-6" />
        <h1
          className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Welcome to BlueShield Health Portal
        </h1>
        <p
          className="text-slate-100 text-lg md:text-2xl mb-8 max-w-2xl"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
        >
          Securely access your medical records, appointments, and prescriptions—all in one calming, protected place. Because your health journey deserves peace of mind.
        </p>
        <div className="flex gap-4">
          <Button id="cta-get-started" size="lg" asChild>
            <Link to="/signup" className="flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button id="cta-login" variant="outline" size="lg" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
