import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <Hero />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <section className="flex flex-col md:flex-row gap-14 items-center md:items-stretch">
          <motion.div
            className="flex-1 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-900" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
              All Your Health Info, One Trusted Portal
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                Access your records and prescriptions instantly
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                Book, manage, and sync appointments with ease
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                Direct, private chat with your care team
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                Upload/share files securely
              </li>
            </ul>
            <Button id="learn-more" asChild className="mt-8">
              <Link to="/signup">Experience BlueShield Now</Link>
            </Button>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-100 rounded-2xl p-6 w-full max-w-xs shadow-lg flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-blue-700 mb-2" />
              <p className="text-slate-800 text-lg font-medium text-center mb-2">"My health info feels protected and always at my fingertips!"</p>
              <span className="text-blue-600 text-xs">— A BlueShield Patient</span>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
