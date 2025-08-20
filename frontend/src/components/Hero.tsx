import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      className="relative w-full h-[32rem] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <motion.div
        className="relative z-10 text-center text-white max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1
          className="text-5xl font-bold mb-6 font-['Roboto']"
          style={{ fontWeight: 700 }}
        >
          Welcome to PortalGuard
        </h1>
        <p
          className="text-lg md:text-xl mb-8 font-['Roboto']"
          style={{ fontWeight: 400 }}
        >
          Hello, Health Hero! Your one-stop secure portal for all things medical: records, appointments, prescriptions, and direct chat with your care team. Fast. Secure. Human. <br />
          <span className="text-blue-400 font-semibold">The future of healthcare, in your hands.</span>
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="text-lg px-6 py-3" id="get-started-cta">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="text-lg px-6 py-3 border-white text-white hover:text-blue-500 hover:border-blue-500" id="demo-cta">
            <Link to="/login">Demo Login</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
