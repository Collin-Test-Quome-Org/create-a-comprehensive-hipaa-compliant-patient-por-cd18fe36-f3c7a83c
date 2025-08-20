import { Hero } from '@/components/Hero';
import { DashboardCard } from '@/components/DashboardCard';
import { motion } from 'framer-motion';

const dashboardLinks = [
  {
    title: 'Appointments',
    description: 'Book, view, or manage your appointments with ease.',
    to: '/appointments',
    icon: 'appointments',
  },
  {
    title: 'Medical Records',
    description: 'Access your health history and lab results securely.',
    to: '/medical-records',
    icon: 'records',
  },
  {
    title: 'Prescriptions',
    description: 'View active prescriptions and request refills in one tap.',
    to: '/prescriptions',
    icon: 'prescriptions',
  },
  {
    title: 'Messaging',
    description: 'Chat directly with your care team anytime.',
    to: '/messaging',
    icon: 'messaging',
  },
  {
    title: 'Notifications',
    description: 'All your important alerts and reminders, in one spot.',
    to: '/notifications',
    icon: 'notifications',
  },
  {
    title: 'File Uploads',
    description: 'Upload insurance cards, forms, or images securely.',
    to: '/uploads',
    icon: 'uploads',
  },
];

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold font-['Roboto'] mb-8 text-blue-900 text-center"
          style={{ fontWeight: 700 }}
        >
          Your Health Portal Dashboard
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {dashboardLinks.map((card, idx) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <DashboardCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
