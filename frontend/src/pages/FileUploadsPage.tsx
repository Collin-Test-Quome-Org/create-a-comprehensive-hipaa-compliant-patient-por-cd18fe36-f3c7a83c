// FileUploadsPage.tsx
import { UploadCloud, FileText } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const mockUploads = [
  {
    id: 'upload-001',
    name: 'Insurance Card.pdf',
    date: '2024-04-28',
    status: 'Uploaded',
    fileUrl: '#',
  },
  {
    id: 'upload-002',
    name: 'Specialist Referral.docx',
    date: '2024-03-14',
    status: 'Uploaded',
    fileUrl: '#',
  }
]

export const FileUploadsPage = () => {
  const [uploads, setUploads] = useState(mockUploads)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement | null>(null)

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setUploading(true)
      setTimeout(() => {
        setUploads([
          {
            id: `upload-${uploads.length + 1}`,
            name: e.target.files[0].name,
            date: new Date().toISOString().slice(0, 10),
            status: 'Uploaded',
            fileUrl: '#',
          },
          ...uploads
        ])
        setUploading(false)
      }, 1200)
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <motion.div className="bg-blue-50 py-8 mb-8 border-b border-blue-100 shadow-sm"
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <UploadCloud className="w-10 h-10 text-blue-800 mx-auto md:mx-0" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 font-['Roboto'] mb-1">Upload Documents</h1>
            <p className="text-slate-700 font-['Roboto']">Upload insurance cards, referrals, or other medical documents—safely encrypted for your care team only.</p>
          </div>
          <Button
            id="upload-file-btn"
            variant="outline"
            className="gap-2 whitespace-nowrap"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
          >
            <UploadCloud className="w-5 h-5" /> {uploading ? 'Uploading...' : 'Upload File'}
          </Button>
          <input
            id="upload-file-input"
            type="file"
            ref={fileRef}
            className="hidden"
            onChange={handleFileUpload}
            aria-label="Choose file to upload"
          />
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {uploads.length === 0 ? (
            <Card className="col-span-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">No Documents Uploaded</CardTitle>
                <CardDescription className="text-slate-700">You haven’t uploaded any files yet.</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            uploads.map(upload => (
              <motion.div key={upload.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <Card className="border-blue-100 shadow hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg text-blue-900">{upload.name}</CardTitle>
                      <CardDescription className="text-slate-700">{upload.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 mt-2">
                    <span className="text-slate-600 text-sm">Status: {upload.status}</span>
                    <Button id={`download-upload-${upload.id}`} variant="outline" size="sm" className="gap-2 w-max" asChild>
                      <a href={upload.fileUrl} download>
                        Download
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
  )
}
