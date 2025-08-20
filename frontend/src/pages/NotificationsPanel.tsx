import { Bell } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const notifications = [
  {
    id: 1,
    icon: Bell,
    title: 'Appointment Confirmed',
    body: 'Your appointment with Dr. Taylor is scheduled for April 20 at 3:00 PM.',
    time: '2h ago',
  },
  {
    id: 2,
    icon: Bell,
    title: 'Lab Results Ready',
    body: 'Your CBC Panel results are now available in your Medical Records.',
    time: '6h ago',
  },
  {
    id: 3,
    icon: Bell,
    title: 'Prescription Refilled',
    body: 'Your refill request for Atorvastatin has been approved.',
    time: 'Yesterday',
  },
]

export function NotificationsPanel() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-xl mx-auto">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 border-b pb-2">
            <span className="rounded-full bg-blue-50 p-2 text-blue-700"><Bell className="w-6 h-6" /></span>
            <CardTitle className="text-blue-900 font-['Roboto']">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-slate-200">
              {notifications.map(n => (
                <li key={n.id} className="py-4 flex items-start gap-3">
                  <span className="rounded-full bg-blue-100 text-blue-700 p-2"><n.icon className="w-5 h-5" /></span>
                  <div>
                    <div className="font-semibold text-blue-900">{n.title}</div>
                    <div className="text-slate-700 text-sm font-['Roboto']">{n.body}</div>
                    <div className="text-xs text-slate-400 mt-1">{n.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
