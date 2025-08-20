import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock } from 'lucide-react';
import { motion } from 'framer-motion';

export function MockAppointmentCard({ appointment }: { appointment: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full"
    >
      <Card className="border-blue-100 shadow-md w-full">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <CalendarClock className="text-blue-700" size={24} />
          <CardTitle className="text-lg font-semibold">{appointment.provider}</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-600 text-sm">
          <div className="mb-2">{appointment.date} at {appointment.time}</div>
          <div className="mb-1">Location: {appointment.location}</div>
          <div>Type: {appointment.type}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
