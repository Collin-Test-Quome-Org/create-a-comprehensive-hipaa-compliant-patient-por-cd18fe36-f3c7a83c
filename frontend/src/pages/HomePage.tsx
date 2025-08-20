import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { ShieldCheck, CalendarCheck, Pill, MessageCircle } from 'lucide-react';

const featureData = [
  {
    icon: ShieldCheck,
    title: 'Bank-grade Security',
    desc: 'Your data is guarded by leading encryption and privacy protocols. Only you and your care team can access it.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointments & Reminders',
    desc: 'Book, manage, and get notified for appointments, with a beautiful, stress-free calendar.',
  },
  {
    icon: Pill,
    title: 'Prescriptions at a Tap',
    desc: 'Order refills, track medications, and chat with your pharmacist directly through PortalGuard.',
  },
  {
    icon: MessageCircle,
    title: 'Secure Messaging',
    desc: 'Chat with your doctor or care team, knowing every message is private and protected.',
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Hero />
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-roboto font-bold text-[#1d4ed8] mb-8 text-center"
        >
          Why PortalGuard?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featureData.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.14 }}
              className="rounded-xl bg-white shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <Icon size={40} className="mb-4 text-[#1d4ed8]" />
              <h3 className="font-bold font-roboto text-lg text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-base font-roboto">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#1d4ed8] to-[#94a3b8] py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-roboto font-bold text-white mb-2"
          >
            Your health, your privacy, your PortalGuard.
          </motion.h3>
          <p className="text-lg text-blue-100 font-roboto mb-6">
            We believe your medical portal should work for <span className="font-bold">you</span> — not the other way around.
          </p>
          <a href="/signup">
            <button
              id="cta-try-now-btn"
              className="bg-white text-[#1d4ed8] px-8 py-4 rounded-full font-roboto font-semibold shadow-lg hover:bg-blue-100 transition-colors text-lg"
            >
              Try PortalGuard Now
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
