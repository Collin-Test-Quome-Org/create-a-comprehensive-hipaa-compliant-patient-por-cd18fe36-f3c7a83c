import { Pill, RefreshCw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockScripts = [
  {
    id: 'rx1',
    name: 'Lisinopril 10mg',
    status: 'active',
    nextRefill: '2024-03-10',
    refillsLeft: 2,
  },
  {
    id: 'rx2',
    name: 'Atorvastatin 20mg',
    status: 'active',
    nextRefill: '2024-04-01',
    refillsLeft: 1,
  },
  {
    id: 'rx3',
    name: 'Ibuprofen 200mg',
    status: 'expired',
    nextRefill: null,
    refillsLeft: 0,
  },
];

export function PrescriptionsPage() {
  const [requested, setRequested] = useState<Record<string, boolean>>({});

  function handleRefill(id: string) {
    setRequested((r) => ({ ...r, [id]: true }));
    setTimeout(() => {
      setRequested((r) => ({ ...r, [id]: false }));
    }, 1800);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <Pill className="text-blue-700 w-6 h-6" />
        <h1 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>My Prescriptions</h1>
      </div>
      <div className="bg-white rounded-xl shadow p-4">
        <ul className="divide-y divide-slate-100">
          {mockScripts.map(rx => (
            <motion.li
              key={rx.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 py-3 px-1"
            >
              <Pill className="w-6 h-6 text-blue-600" />
              <span className="flex-1 text-slate-800 font-medium">{rx.name}</span>
              <span className="text-xs text-slate-500">{rx.status === 'active' ? 'Active' : 'Expired'}</span>
              {rx.status === 'active' && (
                <span className="text-xs text-blue-700 ml-2">Next refill: {rx.nextRefill}</span>
              )}
              <span className="text-xs text-slate-400 ml-2">Refills left: {rx.refillsLeft}</span>
              {rx.status === 'active' && rx.refillsLeft > 0 && (
                <Button
                  id={`refill-${rx.id}`}
                  size="sm"
                  variant="outline"
                  disabled={requested[rx.id]}
                  onClick={() => handleRefill(rx.id)}
                  className="ml-3 flex items-center gap-1"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Request Refill</span>
                </Button>
              )}
              <AnimatePresence>
                {requested[rx.id] && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    className="ml-2 flex items-center gap-1 text-green-600"
                  >
                    <CheckCircle className="w-4 h-4" /> Requested!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
