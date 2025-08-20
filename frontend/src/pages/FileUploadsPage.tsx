// FileUploadsPage.tsx
import { useRef, useState } from 'react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const initialFiles = [
  { id: '1', name: 'LabResults_May2024.pdf', type: 'Lab Results', uploaded: '2024-06-03' },
  { id: '2', name: 'MRI_Spine_April.pdf', type: 'Imaging', uploaded: '2024-05-28' },
]

export const FileUploadsPage = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState(initialFiles)
  const [uploading, setUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleUpload = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return
    setUploading(true)
    setTimeout(() => {
      const newFiles = Array.from(fileList).map((f, i) => ({
        id: `${Date.now()}-${i}`,
        name: f.name,
        type: 'Other',
        uploaded: new Date().toISOString().slice(0, 10),
      }))
      setFiles(prev => [...newFiles, ...prev])
      setUploading(false)
    }, 850)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleUpload(e.dataTransfer.files)
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl min-h-screen">
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
        <Card className="shadow-lg border-blue-100 bg-white">
          <CardHeader className="flex flex-row items-center gap-3">
            <Upload className="w-7 h-7 text-blue-700"/>
            <div>
              <CardTitle className="font-bold text-2xl text-blue-900 font-['Roboto']">Upload Medical Documents</CardTitle>
              <CardDescription className="text-slate-700">Securely upload new records, images, and test results. Only you and your care team can access these files.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className={
                'rounded-lg border-2 border-dashed px-6 py-10 flex flex-col items-center justify-center mb-6 transition-colors ' +
                (dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-slate-50')
              }
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              tabIndex={0}
              aria-label="Drag and drop to upload medical files"
              data-testid="drag-drop-area"
            >
              <Upload className="w-10 h-10 text-blue-700 mb-2" />
              <div className="font-bold text-blue-900 mb-2">Drag & drop files here</div>
              <div className="text-slate-600 text-sm mb-3">or</div>
              <Button
                id="browse-files-btn"
                type="button"
                className="font-bold"
                onClick={() => fileInput.current?.click()}
                disabled={uploading}
              >
                Browse Files
              </Button>
              <input
                id="file-upload-input"
                ref={fileInput}
                type="file"
                className="hidden"
                multiple
                onChange={e => handleUpload(e.target.files)}
                disabled={uploading}
              />
            </div>
            <div className="mt-6">
              <div className="font-bold text-blue-900 mb-2">Your Uploaded Documents</div>
              <div className="divide-y">
                {files.length === 0 && (
                  <div className="text-slate-500 py-8 text-center">No uploaded documents yet.</div>
                )}
                {files.map((file, i) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    className="flex items-center gap-4 py-2"
                  >
                    <FileText className="w-6 h-6 text-blue-700" />
                    <div className="flex-1">
                      <div className="font-medium text-blue-900">{file.name}</div>
                      <div className="text-xs text-slate-500">{file.type} • Uploaded {file.uploaded}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
