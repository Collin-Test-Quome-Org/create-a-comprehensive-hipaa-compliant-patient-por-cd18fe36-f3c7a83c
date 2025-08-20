import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Pill, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const mockPrescriptions = [
  {
    id: 'rx-1',
    medication: 'Atorvastatin 10mg',
    directions: 'Take one tablet daily',
    status: 'Active',
    refills: 2,
    lastFilled: '2024-06-05',
  },
  {
    id: 'rx-2',
    medication: 'Lisinopril 20mg',
    directions: 'Take one tablet every morning',
    status: 'Active',
    refills: 0,
    lastFilled: '2024-05-15',
  },
];

export function PrescriptionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-[#1d4ed8] font-['Roboto']" style={{fontWeight: 700}}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Prescriptions
      </motion.h2>
      <div className="grid gap-6">
        {mockPrescriptions.map((rx, i) => (
          <motion.div
            key={rx.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="flex flex-row items-center px-4 py-6">
              <div className="mr-5">
                <Pill className="w-10 h-10 text-[#1d4ed8]" />
              </div>
              <div className="flex-1">
                <CardHeader className="p-0 mb-2 flex flex-row items-center justify-between">
                  <span className="text-lg font-semibold font-['Roboto']" style={{fontWeight: 700}}>{rx.medication}</span>
                  <span className="text-sm text-secondary-foreground">Last filled: {rx.lastFilled}</span>
                </CardHeader>
                <CardContent className="p-0 font-['Roboto']" style={{fontWeight: 400}}>
                  <div>{rx.directions}</div>
                  <div className="text-xs text-secondary-foreground mt-1">Status: {rx.status} | Refills: {rx.refills}</div>
                </CardContent>
              </div>
              <Button id={`refill-${rx.id}`} variant="outline" size="icon" className="ml-4 group" disabled={rx.refills === 0}>
                <RefreshCcw className={rx.refills === 0 ? 'text-gray-400' : 'text-[#1d4ed8] group-hover:animate-spin'} />
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
