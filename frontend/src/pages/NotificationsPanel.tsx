// NotificationsPanel.tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Bell, CalendarDays, FileText, MessageCircle, Pill } from 'lucide-react'
import { motion } from 'framer-motion'

const notifications = [
  {
    id: '1',
    type: 'lab',
    icon: FileText,
    title: 'Lab Results Ready',
    description: 'Your blood test results are available in your records.',
    date: '2024-06-05T09:00Z',
    unread: true
  },
  {
    id: '2',
    type: 'appointment',
    icon: CalendarDays,
    title: 'Appointment Confirmed',
    description: 'Your appointment with Dr. Miles is confirmed for June 12, 10:00 AM.',
    date: '2024-06-04T11:30Z',
    unread: false
  },
  {
    id: '3',
    type: 'message',
    icon: MessageCircle,
    title: 'New Message Received',
    description: 'Dr. Miles replied to your question about cholesterol.',
    date: '2024-06-04T12:45Z',
    unread: true
  },
  {
    id: '4',
    type: 'prescription',
    icon: Pill,
    title: 'Refill Approved',
    description: 'Your refill for Lisinopril was approved and sent to your pharmacy.',
    date: '2024-06-03T15:15Z',
    unread: false
  },
]

export const NotificationsPanel = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl min-h-screen">
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
        <Card className="shadow-lg border-blue-100 bg-white">
          <CardHeader className="flex flex-row items-center gap-3">
            <Bell className="w-7 h-7 text-blue-700"/>
            <div>
              <CardTitle className="font-bold text-2xl text-blue-900 font-['Roboto']">Notifications</CardTitle>
              <CardDescription className="text-slate-700">Stay up to date with real-time alerts for appointments, lab results, and messages.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {notifications.length === 0 && (
                <div className="text-center text-slate-500 py-12">No notifications yet. You're all caught up!</div>
              )}
              {notifications.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.09 }}
                  className={`flex items-start gap-4 py-4 ${n.unread ? 'bg-blue-50' : ''}`}
                >
                  <div className="mt-1">
                    <n.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-900 text-base">{n.title}</div>
                    <div className="text-slate-700 text-sm mb-1">{n.description}</div>
                    <div className="text-xs text-slate-500">{new Date(n.date).toLocaleString()}</div>
                  </div>
                  {n.unread && <span className="ml-auto mt-2 rounded-full bg-blue-500 w-2 h-2" aria-label="unread notification" />}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
