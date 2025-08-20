// PrescriptionsPage.tsx
import { Pill, RefreshCw, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useState } from 'react'

const mockPrescriptions = [
  {
    id: 'rx-001',
    name: 'Atorvastatin',
    dose: '20mg',
    instructions: 'Take one tablet daily',
    status: 'Active',
    lastFilled: '2024-05-10',
    refillsLeft: 2,
  },
  {
    id: 'rx-002',
    name: 'Lisinopril',
    dose: '10mg',
    instructions: 'Take one tablet daily',
    status: 'Expired',
    lastFilled: '2023-11-01',
    refillsLeft: 0,
  }
]

export const PrescriptionsPage = () => {
  const [prescriptions] = useState(mockPrescriptions)
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <motion.div className="bg-blue-50 py-8 mb-8 border-b border-blue-100 shadow-sm"
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <Pill className="w-10 h-10 text-blue-800 mx-auto md:mx-0" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 font-['Roboto'] mb-1">Prescriptions</h1>
            <p className="text-slate-700 font-['Roboto']">See your active and past prescriptions, and request refills with a click.</p>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {prescriptions.length === 0 ? (
            <Card className="col-span-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">No Prescriptions Found</CardTitle>
                <CardDescription className="text-slate-700">You have no prescriptions on file.</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            prescriptions.map(rx => (
              <motion.div key={rx.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <Card className="border-blue-100 shadow hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <Pill className="w-6 h-6 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg text-blue-900">{rx.name}</CardTitle>
                      <CardDescription className="text-slate-700">{rx.dose} • {rx.instructions}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 mt-2">
                    <span className="text-slate-600 text-sm flex items-center gap-1"><Clock className="w-4 h-4" /> Last filled: {rx.lastFilled}</span>
                    <span className="text-slate-600 text-sm flex items-center gap-1">
                      {rx.status === 'Active' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Clock className="w-4 h-4 text-slate-400" />}
                      {rx.status}
                    </span>
                    {rx.status === 'Active' && rx.refillsLeft > 0 && (
                      <Button id={`refill-rx-${rx.id}`} variant="outline" size="sm" className="gap-2 w-max" asChild>
                        <a href={`/prescriptions/refill/${rx.id}`}>
                          <RefreshCw className="w-4 h-4" /> Request Refill ({rx.refillsLeft} left)
                        </a>
                      </Button>
                    )}
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