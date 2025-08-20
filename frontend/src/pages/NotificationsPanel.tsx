import { Card, CardContent } from '@/components/ui/card';
import { Bell, CalendarCheck, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const mockNotifications = [
  {
    id: 'notif-1',
    type: 'Appointment',
    icon: CalendarCheck,
    message: 'Upcoming appointment with Dr. N. Shield on June 15, 2024 at 2:00 PM.',
    date: '2024-06-10',
  },
  {
    id: 'notif-2',
    type: 'Record',
    icon: FileText,
    message: 'New lab result available: Blood test (2024-06-01).',
    date: '2024-06-08',
  },
];

export function NotificationsPanel() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-[#1d4ed8] font-['Roboto']" style={{fontWeight: 700}}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Notifications
      </motion.h2>
      <div className="grid gap-6">
        {mockNotifications.map(({ id, type, icon: Icon, message, date }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="flex flex-row items-center px-4 py-6">
              <div className="mr-5">
                <Icon className="w-9 h-9 text-[#1d4ed8]" />
              </div>
              <CardContent className="p-0 flex-1 font-['Roboto']" style={{fontWeight: 400}}>
                <div className="text-base mb-1">{message}</div>
                <div className="text-xs text-secondary-foreground">{date}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
