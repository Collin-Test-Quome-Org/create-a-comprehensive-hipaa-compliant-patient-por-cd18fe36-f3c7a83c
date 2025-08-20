import { Bell, FileCheck2, CalendarCheck2, MessageCircle } from 'lucide-react'

const notifications = [
  { icon: <FileCheck2 className="text-blue-600 w-5 h-5" />, content: 'Lab results available: CBC_Lab_Results.pdf', date: '2024-05-22' },
  { icon: <CalendarCheck2 className="text-blue-600 w-5 h-5" />, content: 'Appointment confirmed: Dr. Foster on June 10, 3:00pm', date: '2024-05-20' },
  { icon: <MessageCircle className="text-blue-600 w-5 h-5" />, content: 'New message from Dr. Emily Foster', date: '2024-05-19' },
]

export function NotificationsPanel() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-7 h-7 text-blue-600" />
        <h1 className="text-xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>Notifications</h1>
      </div>
      <div className="bg-slate-50 rounded-xl shadow p-6 flex flex-col gap-4">
        {notifications.map((notif, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-50">
            {notif.icon}
            <span className="text-slate-800 flex-1">{notif.content}</span>
            <span className="text-xs text-slate-400 ml-4">{notif.date}</span>
          </div>
        ))}
        {notifications.length === 0 && (
          <div className="text-center text-slate-400 py-6">No notifications.</div>
        )}
      </div>
    </div>
  )
}
