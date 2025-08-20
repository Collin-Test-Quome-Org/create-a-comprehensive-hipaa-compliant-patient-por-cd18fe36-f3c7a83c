import { Bell, CheckCircle, CalendarDays, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const notifications = [
  { icon: CheckCircle, title: 'Lab results available', description: 'Your blood panel results are ready to view.', timestamp: 'Today, 11:10am' },
  { icon: CalendarDays, title: 'Appointment confirmed', description: 'Annual checkup with Dr. Tran scheduled for 3/24 at 10:30am.', timestamp: 'Yesterday, 8:51am' },
  { icon: FileText, title: 'Document uploaded', description: 'X-ray results added to your medical records.', timestamp: 'Yesterday, 2:20pm' },
]

export function NotificationsPanel() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-[#1d4ed8] font-['Roboto'] mb-6 flex items-center gap-2"
        style={{ fontWeight: 700 }}
      >
        <Bell className="w-8 h-8 text-[#1d4ed8]" /> Notifications
      </motion.h1>
      <div className="space-y-4">
        {notifications.map(({ icon: Icon, title, description, timestamp }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09 }}
            className="bg-white border rounded-lg p-4 flex gap-4 items-start shadow-sm"
          >
            <Icon className="w-7 h-7 text-blue-700" />
            <div>
              <div className="font-semibold text-blue-900 font-['Roboto']" style={{fontWeight: 700}}>{title}</div>
              <p className="text-secondary-foreground font-['Roboto'] text-sm mb-1" style={{fontWeight: 400}}>{description}</p>
              <span className="text-xs text-slate-400">{timestamp}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
