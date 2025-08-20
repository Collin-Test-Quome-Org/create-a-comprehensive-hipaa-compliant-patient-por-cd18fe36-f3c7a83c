import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill } from 'lucide-react';
import { motion } from 'framer-motion';

export function MockPrescriptionCard({ prescription }: { prescription: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full"
    >
      <Card className="border-blue-100 shadow-md w-full">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <Pill className="text-blue-700" size={24} />
          <CardTitle className="text-lg font-semibold">{prescription.medication}</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-600 text-sm">
          <div className="mb-1">Prescribed by: {prescription.provider}</div>
          <div className="mb-1">Dosage: {prescription.dosage}</div>
          <div className="mb-1">Frequency: {prescription.frequency}</div>
          <div>Refills: {prescription.refills}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
