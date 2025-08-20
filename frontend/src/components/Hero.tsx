import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="relative bg-cover bg-center min-h-[24rem] flex items-center"
    >
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 font-['Roboto']" style={{ fontWeight: 700 }}>
          Welcome to MedShield Portal
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 max-w-2xl font-['Roboto']" style={{ fontWeight: 400 }}>
          Your secure, all-in-one gateway to health records, appointments, prescriptions, and care team messaging. Powered by trust, wrapped in privacy.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild id="cta-get-started" className="text-base px-8 py-3 font-semibold">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="secondary" id="cta-login" className="text-base px-8 py-3 font-semibold">
            <Link to="/login">Log In</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
