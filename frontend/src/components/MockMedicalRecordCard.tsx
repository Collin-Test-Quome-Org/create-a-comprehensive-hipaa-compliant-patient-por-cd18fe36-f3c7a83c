import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function MockMedicalRecordCard({ record }: { record: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full"
    >
      <Card className="shadow-md w-full border-blue-100">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <FileText className="text-blue-700" size={24} />
          <CardTitle className="text-lg font-semibold">{record.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-600 text-sm">
          <div className="mb-2">Date: <span className="text-slate-900 font-medium">{record.date}</span></div>
          <div className="mb-1">Type: {record.type}</div>
          <div>{record.summary}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
