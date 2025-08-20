import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { CalendarCheck, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const mockAppointments = [
  {
    id: 'appt-1',
    date: '2024-06-15',
    time: '2:00 PM',
    provider: 'Dr. N. Shield',
    location: 'MedShield Clinic Room 2',
    status: 'Upcoming',
  },
  {
    id: 'appt-2',
    date: '2024-05-10',
    time: '11:00 AM',
    provider: 'Dr. V. Ray',
    location: 'MedShield Clinic Room 1',
    status: 'Completed',
  },
];

export function AppointmentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-[#1d4ed8] font-['Roboto']" style={{fontWeight: 700}}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Appointments
      </motion.h2>
      <div className="grid gap-6">
        {mockAppointments.map((appt, i) => (
          <motion.div
            key={appt.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="flex flex-row items-center px-4 py-6">
              <div className="mr-6">
                <CalendarCheck className="w-10 h-10 text-[#1d4ed8]" />
              </div>
              <div className="flex-1">
                <CardHeader className="p-0 mb-2 flex flex-row items-center justify-between">
                  <span className="text-lg font-semibold font-['Roboto']" style={{fontWeight: 700}}>{appt.date} — {appt.time}</span>
                  <span className={appt.status === 'Upcoming' ? 'text-green-600 text-sm' : 'text-secondary-foreground text-sm'}>{appt.status}</span>
                </CardHeader>
                <CardContent className="p-0 font-['Roboto']" style={{fontWeight: 400}}>
                  <div className="flex items-center gap-2"><User className="w-4 h-4 text-[#1d4ed8]" />{appt.provider}</div>
                  <div className="text-xs text-secondary-foreground mt-1">Location: {appt.location}</div>
                </CardContent>
              </div>
              {appt.status === 'Upcoming' && (
                <Button id={`cancel-appt-${appt.id}`} variant="outline" size="sm" className="ml-4">Cancel</Button>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
