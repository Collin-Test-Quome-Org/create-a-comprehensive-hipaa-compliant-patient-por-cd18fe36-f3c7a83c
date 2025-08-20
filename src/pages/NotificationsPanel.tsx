import { Bell, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const mockNotifications = [
  {
    id: 1,
    type: 'Appointment',
    message: 'Your appointment with Dr. Foster is confirmed for March 4 at 2:00 PM.',
    read: false,
    date: '2024-02-26 16:01',
  },
  {
    id: 2,
    type: 'Lab Results',
    message: 'New lab results are available for review.',
    read: false,
    date: '2024-02-25 10:24',
  },
  {
    id: 3,
    type: 'Refill',
    message: 'Your prescription refill has been approved.',
    read: true,
    date: '2024-02-19 08:10',
  },
]

export function NotificationsPanel() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="text-blue-700 w-6 h-6" />
        <h1 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Notifications</h1>
      </div>
      <div className="bg-white rounded-xl shadow divide-y divide-slate-100">
        <AnimatePresence>
          {mockNotifications.map(n => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className={`flex gap-3 items-center px-5 py-4 ${!n.read ? 'bg-blue-50/70' : ''}`}
            >
              <div className="flex-none">
                {n.read
                  ? <Check className="text-green-500 w-5 h-5" />
                  : <span className="w-3 h-3 bg-blue-400 rounded-full block" />}
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-800 font-medium">{n.message}</div>
                <div className="text-xs text-slate-400 mt-1">{n.date}</div>
              </div>
              <div className="text-xs text-blue-600 font-semibold uppercase">{n.type}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
