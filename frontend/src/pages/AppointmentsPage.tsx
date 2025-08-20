// AppointmentsPage.tsx
import { CalendarDays, Plus, User, CheckCircle, Clock3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useState } from 'react'

const mockAppointments = [
  {
    id: 'apt-001',
    date: '2024-06-12',
    time: '10:00 AM',
    provider: 'Dr. Kayla Lin',
    status: 'Confirmed',
    type: 'Annual Physical',
  },
  {
    id: 'apt-002',
    date: '2024-05-02',
    time: '2:30 PM',
    provider: 'Dr. Kayla Lin',
    status: 'Completed',
    type: 'Lab Results Review',
  },
  {
    id: 'apt-003',
    date: '2024-04-15',
    time: '9:00 AM',
    provider: 'Nurse James',
    status: 'Completed',
    type: 'Vaccine',
  }
]

export const AppointmentsPage = () => {
  const [appointments] = useState(mockAppointments)
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <motion.div className="bg-blue-50 py-8 mb-8 border-b border-blue-100 shadow-sm"
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <CalendarDays className="w-10 h-10 text-blue-800 mx-auto md:mx-0" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 font-['Roboto'] mb-1">Appointments</h1>
            <p className="text-slate-700 font-['Roboto']">Manage your visits, confirm upcoming appointments, and schedule new ones—all in one place.</p>
          </div>
          <Button id="new-appointment" variant="outline" className="gap-2 whitespace-nowrap" asChild>
            <a href="/appointments/new">
              <Plus className="w-5 h-5" /> New Appointment
            </a>
          </Button>
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {appointments.length === 0 ? (
            <Card className="col-span-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">No Appointments Found</CardTitle>
                <CardDescription className="text-slate-700">You have no upcoming or past appointments.</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            appointments.map(apt => (
              <motion.div key={apt.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <Card className="border-blue-100 shadow hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <Clock3 className="w-6 h-6 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg text-blue-900">{apt.type}</CardTitle>
                      <CardDescription className="text-slate-700">{apt.date} at {apt.time}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 mt-2">
                    <span className="text-slate-600 text-sm flex items-center gap-1"><User className="w-4 h-4" /> {apt.provider}</span>
                    <span className="text-slate-600 text-sm flex items-center gap-1">
                      <CheckCircle className={`w-4 h-4 ${apt.status === 'Confirmed' ? 'text-green-600' : 'text-slate-400'}`} />
                      {apt.status}
                    </span>
                    <Button id={`view-appointment-${apt.id}`} variant="outline" size="sm" className="gap-2 w-max" asChild>
                      <a href={`/appointments/${apt.id}`}>Details</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}