import { Hero } from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarCheck, ClipboardList, MessageCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Appointments',
    description: 'Book, track, and manage visits with your care team. Never miss a checkup.',
    icon: CalendarCheck,
    href: '/appointments',
  },
  {
    title: 'Medical Records',
    description: 'Access your entire medical history securely, whenever you need it.',
    icon: ClipboardList,
    href: '/medical-records',
  },
  {
    title: 'Prescriptions',
    description: 'View, refill, and track your medications with one click.',
    icon: FileText,
    href: '/prescriptions',
  },
  {
    title: 'Messaging',
    description: 'Chat instantly with your doctors and support staff in a safe space.',
    icon: MessageCircle,
    href: '/messaging',
  },
];

export function HomePage() {
  return (
    <div>
      <Hero />
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1d4ed8] font-['Roboto']" style={{fontWeight: 700}}>Everything You Need, In One Portal</h2>
          <p className="text-secondary-foreground text-center text-lg mt-4 mb-10 max-w-2xl mx-auto font-['Roboto']" style={{fontWeight: 400}}>
            MedShield Portal is the digital fortress for your health journey. Designed for busy, health-conscious individuals who want clarity, connectivity, and complete control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {features.map(({ title, description, icon: Icon, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card as="a" href={href} className="group cursor-pointer hover:shadow-xl transition-shadow h-full">
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <div className="bg-[#1d4ed8]/10 rounded-full p-4 mb-4">
                      <Icon className="text-[#1d4ed8] w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-['Roboto']" style={{fontWeight: 700}}>{title}</h3>
                    <p className="text-secondary-foreground text-center font-['Roboto']" style={{fontWeight: 400}}>{description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
