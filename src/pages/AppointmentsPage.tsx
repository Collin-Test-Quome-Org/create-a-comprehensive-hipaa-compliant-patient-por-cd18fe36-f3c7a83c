import { CalendarDays, CalendarPlus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';

const mockAppointments = [
  {
    id: 'a1',
    provider: 'Dr. Foster',
    date: '2024-03-04',
    time: '14:00',
    type: 'Checkup',
    status: 'upcoming',
  },
  {
    id: 'a2',
    provider: 'Dr. Lee',
    date: '2024-01-12',
    time: '09:30',
    type: 'Lab',
    status: 'past',
  },
];

export function AppointmentsPage() {
  const [showForm, setShowForm] = useState(false);

  function handleSchedule(e: React.FormEvent) {
    e.preventDefault();
    setShowForm(false);
    // Would submit here
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays className="text-blue-700 w-6 h-6" />
        <h1 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Appointments</h1>
      </div>
      <div className="flex gap-2 mb-4">
        <Button id="new-appt-btn" onClick={() => setShowForm(v => !v)} variant="outline" className="flex items-center gap-2">
          <CalendarPlus className="w-4 h-4" /> Schedule New
        </Button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={showForm ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden"
      >
        {showForm && (
          <form className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5" onSubmit={handleSchedule}>
            <div className="flex gap-3 mb-3">
              <input id="appt-date" type="date" required className="border rounded px-2 py-1 flex-1" />
              <input id="appt-time" type="time" required className="border rounded px-2 py-1 flex-1" />
              <select id="appt-type" className="border rounded px-2 py-1 flex-1">
                <option>Checkup</option>
                <option>Lab</option>
                <option>Consult</option>
              </select>
            </div>
            <Button id="appt-submit" type="submit" className="flex gap-2 items-center">
              <CalendarPlus className="w-4 h-4" /> Schedule
            </Button>
          </form>
        )}
      </motion.div>
      <div className="bg-white rounded-xl shadow p-4">
        <div className="font-semibold text-blue-800 mb-2">Upcoming</div>
        <ul className="divide-y divide-slate-100">
          {mockAppointments.filter(a => a.status === 'upcoming').length === 0 &&
            <li className="text-slate-400 py-4">No upcoming appointments.</li>}
          {mockAppointments.filter(a => a.status === 'upcoming').map(appt => (
            <motion.li
              key={appt.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 py-3 px-1"
            >
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-slate-800">{appt.date} at {appt.time}</span>
              <span className="text-xs text-slate-500">{appt.provider}</span>
              <span className="text-xs text-slate-400 ml-2">{appt.type}</span>
              <Button id={`appt-details-${appt.id}`} variant="outline" size="sm" className="ml-3">Details</Button>
            </motion.li>
          ))}
        </ul>
        <div className="font-semibold text-blue-800 mt-7 mb-2">Past</div>
        <ul className="divide-y divide-slate-100">
          {mockAppointments.filter(a => a.status === 'past').length === 0 &&
            <li className="text-slate-400 py-4">No past appointments.</li>}
          {mockAppointments.filter(a => a.status === 'past').map(appt => (
            <motion.li
              key={appt.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 py-3 px-1"
            >
              <Clock className="w-5 h-5 text-slate-400" />
              <span className="flex-1 text-slate-800">{appt.date} at {appt.time}</span>
              <span className="text-xs text-slate-500">{appt.provider}</span>
              <span className="text-xs text-slate-400 ml-2">{appt.type}</span>
              <Button id={`appt-details-${appt.id}`} variant="outline" size="sm" className="ml-3">Details</Button>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
