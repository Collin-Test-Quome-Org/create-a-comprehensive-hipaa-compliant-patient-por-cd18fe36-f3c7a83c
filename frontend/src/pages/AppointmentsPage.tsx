import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CalendarDays, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const mockAppointments = [
  {
    date: '2024-06-10',
    time: '09:30',
    doctor: 'Dr. Jamie Carter',
    department: 'Family Medicine',
    status: 'Upcoming',
  },
  {
    date: '2024-05-20',
    time: '14:00',
    doctor: 'Dr. Priya Patel',
    department: 'Dermatology',
    status: 'Completed',
  },
];

export function AppointmentsPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-8 min-h-screen bg-slate-50">
      <div className="w-full max-w-3xl px-4">
        <Card className="mb-8 shadow-md border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary tracking-tight flex items-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <CalendarDays className="text-primary" /> Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-secondary-foreground text-lg">Review your upcoming and previous appointments. Need to schedule a new one? You're in the right place!</p>
            <Button id="book-appointment" className="mb-6" onClick={() => navigate('/calendar')}>Book New Appointment</Button>

            <div className="grid gap-6">
              {mockAppointments.map((appt, idx) => (
                <Card key={idx} className="bg-white/80 border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-primary" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {appt.department} <span className="text-base font-normal text-secondary ml-2">with {appt.doctor}</span>
                      </CardTitle>
                      <div className="flex items-center gap-3 text-muted-foreground text-sm mt-1">
                        <CalendarDays size={16} className="mr-1" /> {appt.date}
                        <Clock size={16} className="mr-1" /> {appt.time}
                        <span className={`ml-2 px-2 py-0.5 rounded text-xs ${appt.status === 'Upcoming' ? 'bg-primary text-white' : 'bg-slate-200 text-slate-700'}`}>{appt.status}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent />
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
