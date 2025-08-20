import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { FileText, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRecords = [
  {
    id: 'rec-1',
    date: '2024-06-01',
    type: 'Lab Results',
    summary: 'Blood test: All levels normal.',
    provider: 'Dr. N. Shield',
  },
  {
    id: 'rec-2',
    date: '2024-05-18',
    type: 'Imaging',
    summary: 'Chest X-ray: No abnormalities detected.',
    provider: 'Dr. V. Ray',
  },
  {
    id: 'rec-3',
    date: '2024-04-10',
    type: 'Visit Note',
    summary: 'Routine checkup: Blood pressure excellent.',
    provider: 'Dr. S. Care',
  },
];

export function MedicalRecordsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-[#1d4ed8] font-['Roboto']" style={{fontWeight: 700}}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Medical Records
      </motion.h2>
      <div className="grid gap-6">
        {mockRecords.map((rec, i) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="flex flex-row items-center px-4 py-6">
              <div className="mr-6">
                <FolderOpen className="w-10 h-10 text-[#1d4ed8]" />
              </div>
              <div className="flex-1">
                <CardHeader className="p-0 mb-2 flex flex-row items-center justify-between">
                  <span className="text-lg font-semibold font-['Roboto']" style={{fontWeight: 700}}>{rec.type}</span>
                  <span className="text-sm text-secondary-foreground">{rec.date}</span>
                </CardHeader>
                <CardContent className="p-0 font-['Roboto']" style={{fontWeight: 400}}>
                  <div>{rec.summary}</div>
                  <div className="text-xs text-secondary-foreground mt-1">Provider: {rec.provider}</div>
                </CardContent>
              </div>
              <FileText className="text-[#94a3b8] w-6 h-6 ml-4" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
