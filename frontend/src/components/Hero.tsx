import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative w-full min-h-[28rem] flex items-center justify-center overflow-hidden">
      <div
        style={{backgroundImage: "url('/branding/assets/hero-0.png')"}}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-white text-5xl font-bold mb-4 font-['Roboto']" style={{fontWeight: 700}}>
          Welcome to Medivault
        </h1>
        <p className="text-slate-100 text-xl mb-6 max-w-2xl font-['Roboto']" style={{fontWeight: 400}}>
          Where your health meets security. Seamlessly manage appointments, records, and communication—all in one encrypted portal. We keep your care confidential, always.
        </p>
        <div className="flex gap-4">
          <Button asChild id="get-started-cta" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white text-lg shadow-lg">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild id="learn-more-cta" variant="outline" size="lg" className="text-lg border-white text-white hover:bg-blue-700/10">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
