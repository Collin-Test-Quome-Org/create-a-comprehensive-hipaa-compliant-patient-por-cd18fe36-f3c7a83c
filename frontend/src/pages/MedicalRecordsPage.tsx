import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const mockRecords = [
  {
    date: '2024-06-01',
    doctor: 'Dr. Alex Chen',
    type: 'Annual Physical',
    summary: 'Routine annual physical examination. No significant findings.',
    attachment: true,
  },
  {
    date: '2024-05-15',
    doctor: 'Dr. Jamie Carter',
    type: 'Blood Test',
    summary: 'Complete blood count and cholesterol screening.',
    attachment: true,
  },
  {
    date: '2024-03-22',
    doctor: 'Dr. Priya Patel',
    type: 'Specialist Referral',
    summary: 'Referred to dermatology for skin check. No urgent findings.',
    attachment: false,
  },
];

export function MedicalRecordsPage() {
  return (
    <div className="flex flex-col items-center pt-8 min-h-screen bg-slate-50">
      <div className="w-full max-w-4xl px-4">
        <Card className="mb-8 shadow-md border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary tracking-tight flex items-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <FileText className="text-primary" /> Medical Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-secondary-foreground text-lg">Browse and download your medical records. Your health, your control. Stay protected with Medivault's secure, patient-first portal.</p>

            <div className="grid gap-6">
              {mockRecords.map((record, idx) => (
                <Card key={idx} className="bg-white/80 border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-primary" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {record.type} <span className="text-base font-normal text-secondary ml-2">({record.date})</span>
                      </CardTitle>
                      <span className="block text-muted-foreground text-sm">Doctor: {record.doctor}</span>
                    </div>
                    {record.attachment && (
                      <Button id={`download-record-${idx}`} variant="outline" className="border-primary text-primary flex gap-2">
                        <Download size={18} /> Download PDF
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-secondary-foreground">{record.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
