import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bell, CheckCircle2, CalendarDays, FileText, Pill, MessageCircle } from 'lucide-react';

const mockNotifications = [
  {
    id: 1,
    type: 'appointment',
    icon: CalendarDays,
    title: 'Appointment Confirmed',
    desc: 'Your appointment with Dr. Smith is confirmed for June 5, 2:00 PM.',
    time: '2024-06-01T10:00:00Z',
  },
  {
    id: 2,
    type: 'record',
    icon: FileText,
    title: 'Lab Results Ready',
    desc: 'New lab results are available in your medical records.',
    time: '2024-05-31T13:20:00Z',
  },
  {
    id: 3,
    type: 'prescription',
    icon: Pill,
    title: 'Prescription Refill Approved',
    desc: 'Your refill for Atorvastatin has been approved.',
    time: '2024-05-29T17:30:00Z',
  },
  {
    id: 4,
    type: 'message',
    icon: MessageCircle,
    title: 'New Message from Dr. Lee',
    desc: 'You have a new secure message from Dr. Lee.',
    time: '2024-05-29T18:25:00Z',
  },
  {
    id: 5,
    type: 'general',
    icon: CheckCircle2,
    title: 'Profile Updated',
    desc: 'Your account settings were updated successfully.',
    time: '2024-05-28T09:10:00Z',
  },
];

export function NotificationsPanel() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[calc(100vh-64px)] bg-slate-50">
      <div className="max-w-2xl mx-auto py-8">
        <Card className="bg-white shadow-lg">
          <CardHeader className="flex flex-row items-center gap-2 border-b pb-2">
            <Bell className="w-5 h-5 text-[#1d4ed8]" />
            <CardTitle className="text-[#1d4ed8] font-bold font-['Roboto']">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 mt-4">
            {mockNotifications.map((notif, idx) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg border border-slate-200 p-4 flex items-center gap-4 bg-slate-50 hover:bg-blue-50 transition"
              >
                <notif.icon className="w-8 h-8 text-[#1d4ed8]" />
                <div>
                  <div className="font-bold text-base text-blue-900 font-['Roboto']">{notif.title}</div>
                  <div className="text-gray-700 font-['Roboto']">{notif.desc}</div>
                  <div className="text-sm text-slate-400 mt-1">{new Date(notif.time).toLocaleString()}</div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
