// HomePage.tsx
import { Hero } from '@/components/Hero'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ShieldCheck, CalendarDays, FileText, Pill, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldCheck,
    title: 'Military-Grade Security',
    description: 'Your data is locked down tighter than a submarine hatch. Only you and your care team have the keys.'
  },
  {
    icon: CalendarDays,
    title: 'Effortless Appointments',
    description: 'Book, track, and manage visits in a snap—no more phone tag, just tap and go.'
  },
  {
    icon: FileText,
    title: 'All Your Records, One Place',
    description: 'Access your complete history, test results, and physician notes, securely organized for you.'
  },
  {
    icon: Pill,
    title: 'Prescription Power',
    description: 'See, refill, and manage your prescriptions. We keep your meds on track—so you don’t have to.'
  },
  {
    icon: MessageCircle,
    title: 'Direct Messaging',
    description: 'Connect instantly with your care team. No faxes, no waiting—just answers.'
  }
]

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-['Roboto'] mb-4" style={{ fontWeight: 700 }}>
            Why MedLock?
          </h2>
          <p className="text-lg text-slate-700 font-['Roboto']">
            Designed for health-conscious go-getters who demand privacy, clarity, and convenience. Experience a new era of medical management—built for you, by guardians of digital trust.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <Card className="shadow-lg hover:shadow-2xl transition-shadow border-blue-100 bg-white h-full">
                <CardHeader className="flex flex-col items-center">
                  <f.icon className="w-10 h-10 text-blue-700 mb-2"/>
                  <CardTitle className="text-xl text-blue-900" style={{ fontWeight: 700 }}>{f.title}</CardTitle>
                  <CardDescription className="text-slate-700 text-center text-base">
                    {f.description}
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
