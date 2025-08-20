// HomePage.tsx
import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, FolderOpen, MessageSquare, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-blue-700" />,
    title: 'Effortless Appointments',
    desc: 'Book, track, and manage appointments with a tap. Stay in sync—no more missed visits.',
    to: '/appointments',
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-blue-700" />,
    title: 'Medical Records',
    desc: 'Access your health history anywhere. Secure, searchable, and always at your fingertips.',
    to: '/medical-records',
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-700" />,
    title: 'Prescriptions Portal',
    desc: 'Manage scripts, request refills, and receive timely reminders with total confidence.',
    to: '/prescriptions',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-700" />,
    title: 'Care Team Messaging',
    desc: 'Direct chat with your healthcare team. Your questions answered, your privacy protected.',
    to: '/messaging',
  },
  {
    icon: <FolderOpen className="h-8 w-8 text-blue-700" />,
    title: 'File Vault',
    desc: 'Upload and store important documents. Everything in one place—secure and organized.',
    to: '/file-uploads',
  },
];

export function HomePage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-12">
      <Hero />
      <section className="container mx-auto px-4 py-10">
        <motion.h2
          className="text-3xl font-bold text-blue-900 mb-8 text-center font-['Roboto']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Medivault: Healthcare in Your Hands
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Link to={f.to} className="block h-full">
                <Card className="hover:shadow-xl transition-shadow duration-200 h-full">
                  <CardHeader className="flex flex-row gap-4 items-center border-b-0">
                    {f.icon}
                    <CardTitle className="text-lg font-bold text-blue-800 font-['Roboto']" style={{ fontWeight: 700 }}>{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700 text-sm font-['Roboto']" style={{ fontWeight: 400 }}>
                    {f.desc}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
