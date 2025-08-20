import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Pill, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockPrescriptions = [
  {
    name: 'Atorvastatin',
    doctor: 'Dr. Alex Chen',
    dosage: '20mg',
    frequency: 'Once daily',
    refill: 2,
    expires: '2024-08-01',
    attachment: true,
  },
  {
    name: 'Loratadine',
    doctor: 'Dr. Jamie Carter',
    dosage: '10mg',
    frequency: 'As needed for allergies',
    refill: 0,
    expires: '2024-05-10',
    attachment: false,
  },
];

export function PrescriptionsPage() {
  return (
    <div className="flex flex-col items-center pt-8 min-h-screen bg-slate-50">
      <div className="w-full max-w-3xl px-4">
        <Card className="mb-8 shadow-md border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary tracking-tight flex items-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <Pill className="text-primary" /> Prescriptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-secondary-foreground text-lg">Your current prescriptions are listed below. Download e-prescriptions or request refills with a click!</p>
            <div className="grid gap-6">
              {mockPrescriptions.map((rx, idx) => (
                <Card key={idx} className="bg-white/80 border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-primary" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {rx.name} <span className="text-base font-normal text-secondary ml-2">({rx.dosage})</span>
                      </CardTitle>
                      <span className="block text-muted-foreground text-sm">Prescribed by: {rx.doctor}</span>
                      <span className="block text-muted-foreground text-sm">Frequency: {rx.frequency}</span>
                      <span className="block text-muted-foreground text-sm">Refills left: {rx.refill}</span>
                      <span className="block text-muted-foreground text-sm">Expires: {rx.expires}</span>
                    </div>
                    {rx.attachment && (
                      <Button id={`download-prescription-${idx}`} variant="outline" className="border-primary text-primary flex gap-2">
                        <Download size={18} /> Download
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent />
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
