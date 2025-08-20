// NotificationsPanel.tsx
import { Bell, CalendarDays, FileText, CheckCircle, Pill } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { motion } from 'framer-motion'

const mockNotifications = [
  {
    id: 'notif-001',
    icon: CalendarDays,
    title: 'Appointment Confirmed',
    message: 'Your annual physical with Dr. Lin is confirmed for June 12, 2024 at 10:00 AM.',
    date: '2024-05-22',
  },
  {
    id: 'notif-002',
    icon: FileText,
    title: 'Lab Results Available',
    message: 'Your Lipid Panel from May 2, 2024 is now available.',
    date: '2024-05-02',
  },
  {
    id: 'notif-003',
    icon: Pill,
    title: 'Prescription Ready',
    message: 'Your refill for Atorvastatin is ready for pickup at your pharmacy.',
    date: '2024-05-10',
  },
  {
    id: 'notif-004',
    icon: CheckCircle,
    title: 'Document Uploaded',
    message: 'Your insurance form was successfully uploaded.',
    date: '2024-04-28',
  },
]

export const NotificationsPanel = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <motion.div className="bg-blue-50 py-8 mb-8 border-b border-blue-100 shadow-sm"
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <Bell className="w-10 h-10 text-blue-800 mx-auto md:mx-0" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 font-['Roboto'] mb-1">Notifications</h1>
            <p className="text-slate-700 font-['Roboto']">Real-time updates about your health—delivered securely. We never spam.</p>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {mockNotifications.length === 0 ? (
            <Card className="col-span-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">No Notifications</CardTitle>
                <CardDescription className="text-slate-700">You are all caught up!</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            mockNotifications.map(n => (
              <motion.div key={n.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <Card className="border-blue-100 shadow hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <n.icon className="w-6 h-6 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg text-blue-900">{n.title}</CardTitle>
                      <CardDescription className="text-slate-700">{n.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 mt-2">
                    <span className="text-slate-700 text-base">{n.message}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}