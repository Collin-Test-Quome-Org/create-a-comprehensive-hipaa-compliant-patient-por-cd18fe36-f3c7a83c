import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[30rem] md:h-[36rem] w-full relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, translateY: 32 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center px-4 md:px-0"
          >
            <h1
              className="text-white font-roboto font-extrabold text-4xl md:text-6xl mb-4 drop-shadow-xl"
              style={{ letterSpacing: '.01em', fontWeight: 700 }}
            >
              Your Digital Medical Portal, <span className="text-blue-400">Secured</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 mb-8 font-roboto max-w-xl mx-auto">
              Meet PortalGuard: The most secure, friendly, and modern way to access your health records, appointments, and prescriptions. Guarding your privacy, empowering your care.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button id="hero-get-started-btn" size="lg" className="bg-[#1d4ed8] text-white font-bold text-lg px-8 py-5 shadow-xl hover:bg-[#2563eb]">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button id="hero-learn-more-btn" variant="outline" size="lg" className="border-white text-white font-semibold text-lg px-8 py-5 hover:bg-white hover:text-[#1d4ed8]">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
