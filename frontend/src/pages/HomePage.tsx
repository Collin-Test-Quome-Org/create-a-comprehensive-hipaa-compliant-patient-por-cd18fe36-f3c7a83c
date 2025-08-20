import { Hero } from '@/components/Hero'
import { DashboardCard } from '@/components/DashboardCard'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Appointments',
    description: 'Book, view, and manage your upcoming healthcare visits with confidence.',
    to: '/appointments',
    icon: 'appointments',
    color: 'blue',
  },
  {
    title: 'Medical Records',
    description: 'Access your secure medical records, lab results, and reports anytime.',
    to: '/medical-records',
    icon: 'records',
    color: 'slate',
  },
  {
    title: 'Prescriptions',
    description: 'Track medications, renew prescriptions, and stay on top of your wellness.',
    to: '/prescriptions',
    icon: 'prescriptions',
    color: 'blue',
  },
  {
    title: 'Messaging',
    description: 'Confidentially connect with your care team or ask questions 24/7.',
    to: '/messaging',
    icon: 'messaging',
    color: 'slate',
  },
  {
    title: 'Notifications',
    description: 'Get reminders, alerts, and updates tailored to your health journey.',
    to: '/notifications',
    icon: 'notifications',
    color: 'blue',
  },
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <motion.h2
          className="text-3xl font-bold text-blue-900 mb-8 text-center"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Your Secure Health Dashboard
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
        >
          {features.map((f, i) => (
            <motion.div
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              key={f.title}
            >
              <DashboardCard {...f} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
