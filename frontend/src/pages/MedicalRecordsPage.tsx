// MedicalRecordsPage.tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Search, Download, UploadCloud } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const mockRecords = [
  {
    id: 'rec-001',
    name: 'Annual Physical Exam',
    type: 'Visit Summary',
    date: '2024-02-15',
    doctor: 'Dr. Kayla Lin',
    fileUrl: '#',
  },
  {
    id: 'rec-002',
    name: 'Lipid Panel',
    type: 'Lab Result',
    date: '2024-01-12',
    doctor: 'Dr. Kayla Lin',
    fileUrl: '#',
  },
  {
    id: 'rec-003',
    name: 'COVID-19 Vaccine',
    type: 'Immunization',
    date: '2023-11-03',
    doctor: 'Nurse James',
    fileUrl: '#',
  },
]

export const MedicalRecordsPage = () => {
  const [search, setSearch] = useState('')
  const filteredRecords = mockRecords.filter(r => (
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.type.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <motion.div className="bg-blue-50 py-8 mb-8 border-b border-blue-100 shadow-sm"
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <FileText className="w-10 h-10 text-blue-800 mx-auto md:mx-0" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 font-['Roboto'] mb-1">Your Medical Records</h1>
            <p className="text-slate-700 font-['Roboto']">View, search, and download your clinical history. Only you and your care team can access these files—no exceptions.</p>
          </div>
          <Button id="upload-medical-record" variant="outline" className="gap-2 whitespace-nowrap" asChild>
            <a href="/uploads">
              <UploadCloud className="w-5 h-5" /> Upload Document
            </a>
          </Button>
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
          <div className="flex items-center w-full md:w-1/2 bg-white border rounded-lg shadow px-2">
            <Search className="w-5 h-5 text-blue-400" />
            <input
              id="records-search"
              type="text"
              className="flex-1 outline-none border-0 bg-transparent py-2 px-2 text-slate-700 font-['Roboto']"
              placeholder="Search by name or type..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {filteredRecords.length === 0 ? (
            <Card className="col-span-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">No Records Found</CardTitle>
                <CardDescription className="text-slate-700">No medical records match your search.</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            filteredRecords.map(record => (
              <motion.div key={record.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <Card className="border-blue-100 shadow hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg text-blue-900">{record.name}</CardTitle>
                      <CardDescription className="text-slate-700">{record.type} • {record.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 mt-2">
                    <span className="text-slate-600 text-sm">Provider: {record.doctor}</span>
                    <Button id={`download-record-${record.id}`} variant="outline" size="sm" className="gap-2 w-max" asChild>
                      <a href={record.fileUrl} download>
                        <Download className="w-4 h-4" /> Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
}
