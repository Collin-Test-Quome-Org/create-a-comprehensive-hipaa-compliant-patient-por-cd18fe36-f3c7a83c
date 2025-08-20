import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { UploadCloud, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

interface FileItem {
  name: string
  size: number
  uploaded: boolean
}

export function FileUploadsPage() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [uploading, setUploading] = useState(false)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    const selected = Array.from(e.target.files).map(f => ({ name: f.name, size: f.size, uploaded: false }))
    setFiles(f => [...f, ...selected])
  }

  function handleUpload() {
    setUploading(true)
    // Fake upload
    setTimeout(() => {
      setFiles(fs => fs.map(f => ({ ...f, uploaded: true })))
      setUploading(false)
    }, 1200)
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-[#1d4ed8] font-['Roboto'] mb-6"
        style={{ fontWeight: 700 }}
      >
        Secure Document Uploads
      </motion.h1>
      <p className="mb-6 text-secondary-foreground font-['Roboto']" style={{fontWeight: 400}}>
        Upload new lab results, referrals, or any other important medical files. Your documents are encrypted in transit and at rest.
      </p>
      <div className="border rounded-lg p-6 bg-white">
        <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer gap-4 border-2 border-dashed border-[#1d4ed8] py-8 px-6 rounded-lg hover:border-blue-300 transition">
          <UploadCloud className="w-10 h-10 text-[#1d4ed8]" />
          <span className="text-blue-900 font-semibold">Drag and drop files here or click to select</span>
          <input
            className="hidden"
            type="file"
            id="file-upload"
            multiple
            onChange={handleFileChange}
            aria-label="Upload files"
          />
        </label>
        {files.length > 0 && (
          <div className="mt-6">
            <ul className="space-y-2">
              {files.map((file, i) => (
                <li key={file.name + i} className="flex items-center gap-3 text-slate-700">
                  <FileText className="w-5 h-5 text-blue-700" />
                  <span className="truncate flex-1">{file.name}</span>
                  <span className="text-xs text-slate-400">{(file.size / 1024).toFixed(1)} KB</span>
                  {file.uploaded ? (
                    <span className="ml-2 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Uploaded</span>
                  ) : null}
                </li>
              ))}
            </ul>
            <Button
              id="upload-files-btn"
              className="mt-5"
              disabled={uploading || files.every(f => f.uploaded)}
              onClick={handleUpload}
            >
              {uploading ? 'Uploading...' : 'Upload Files'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
