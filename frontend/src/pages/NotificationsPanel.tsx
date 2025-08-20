// NotificationsPanel.tsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bell, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const notificationsMock = [
  {
    id: 1,
    type: 'appointment',
    icon: <CheckCircle className="text-green-600 w-6 h-6 mr-2" />,
    title: 'Appointment Confirmed',
    body: 'Your upcoming appointment with Dr. Morgan is confirmed for June 25 at 2:30 PM.',
    time: '2024-06-20T15:10:00',
    read: false,
  },
  {
    id: 2,
    type: 'lab',
    icon: <CheckCircle className="text-blue-700 w-6 h-6 mr-2" />,
    title: 'Lab Results Ready',
    body: 'New lab results are available in your Medical Records.',
    time: '2024-06-18T08:34:00',
    read: false,
  },
  {
    id: 3,
    type: 'refill',
    icon: <XCircle className="text-slate-400 w-6 h-6 mr-2" />,
    title: 'Prescription Expired',
    body: 'Your prescription for Atorvastatin has expired. Please contact your provider.',
    time: '2024-06-15T16:01:00',
    read: true,
  },
];

export function NotificationsPanel() {
  const [notifications, setNotifications] = useState(notificationsMock);

  function markAllRead() {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4 min-h-screen">
      <motion.h1
        className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3 font-['Roboto']"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontWeight: 700 }}
      >
        <Bell className="w-8 h-8 text-blue-700" /> Notifications
      </motion.h1>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-blue-800 font-['Roboto'] text-lg" style={{ fontWeight: 700 }}>Latest Updates</CardTitle>
          <button
            id="mark-all-read-btn"
            className="text-blue-700 text-sm hover:underline font-semibold"
            onClick={markAllRead}
          >
            Mark all as read
          </button>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-slate-200">
            {notifications.length === 0 && (
              <li className="py-10 text-center text-slate-400 text-lg">No notifications yet.</li>
            )}
            {notifications.map((n, i) => (
              <motion.li
                key={n.id}
                className={`flex items-start gap-3 py-5 ${n.read ? 'bg-slate-50' : 'bg-blue-50 font-bold'} rounded-lg px-2 mb-2`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                aria-live={n.read ? 'polite' : 'assertive'}
                id={`notification-${n.id}`}
              >
                <span>{n.icon}</span>
                <div className="flex-1">
                  <div className="text-blue-900 text-base font-semibold font-['Roboto']">{n.title}</div>
                  <div className="text-slate-700 text-sm">{n.body}</div>
                  <div className="text-xs text-slate-400 mt-1">{new Date(n.time).toLocaleString()}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
