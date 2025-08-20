import { FileMedical, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const mockRecords = [
  {
    id: 'rec1',
    name: 'Annual Physical 2023.pdf',
    date: '2023-09-14',
    type: 'Visit Summary',
    size: '0.9 MB',
  },
  {
    id: 'rec2',
    name: 'Bloodwork Results.pdf',
    date: '2023-11-02',
    type: 'Lab Results',
    size: '0.4 MB',
  },
  {
    id: 'rec3',
    name: 'MRI_Report_Head.pdf',
    date: '2023-07-08',
    type: 'Imaging',
    size: '2.2 MB',
  },
];

export function MedicalRecordsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <FileMedical className="text-blue-700 w-6 h-6" />
        <h1 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Medical Records</h1>
      </div>
      <div className="bg-white rounded-xl shadow p-4">
        {mockRecords.length === 0 ? (
          <div className="text-slate-500 text-center py-10 flex flex-col items-center gap-2">
            <FolderOpen className="w-10 h-10 text-slate-300 mb-2" />
            No medical records found.
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {mockRecords.map(record => (
              <motion.li
                key={record.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 py-3 px-1"
              >
                <FileMedical className="w-6 h-6 text-blue-600" />
                <span className="flex-1 text-slate-800">{record.name}</span>
                <span className="text-xs text-slate-500">{record.date}</span>
                <span className="text-xs text-slate-400 ml-2">{record.type}</span>
                <span className="text-xs text-slate-400 ml-2">{record.size}</span>
                <Button id={`download-${record.id}`} variant="outline" size="sm" className="ml-3">Download</Button>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
