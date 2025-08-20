import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, FileText } from 'lucide-react'
import { useRef, useState } from 'react'

const mockDocs = [
  { name: 'Bloodwork_Results.pdf', uploaded: '2024-03-01' },
  { name: 'Xray_Image_Chest.png', uploaded: '2024-02-18' },
]

export function FileUploadsPage() {
  const [docs, setDocs] = useState(mockDocs)
  const [file, setFile] = useState<File | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    setFile(f || null)
  }
  function handleUpload(e: React.FormEvent) {
    e.preventDefault()
    if (file) {
      setUploading(true)
      setTimeout(() => {
        setDocs([{ name: file.name, uploaded: new Date().toISOString().slice(0, 10) }, ...docs])
        setFile(null)
        setUploading(false)
        if (inputRef.current) inputRef.current.value = ''
      }, 900)
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-xl mx-auto">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 border-b pb-2">
            <span className="rounded-full bg-blue-50 p-2 text-blue-700"><Upload className="w-6 h-6" /></span>
            <CardTitle className="text-blue-900 font-['Roboto']">Upload Medical Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex gap-2 items-center mb-4" onSubmit={handleUpload}>
              <input
                id="file-upload-input"
                ref={inputRef}
                type="file"
                className="block border border-slate-200 rounded px-2 py-1 flex-1"
                onChange={handleFileChange}
                aria-label="Upload medical document"
                disabled={uploading}
              />
              <Button id="upload-file-btn" type="submit" disabled={!file || uploading}>{uploading ? 'Uploading...' : 'Upload'}</Button>
            </form>
            <div>
              <div className="font-semibold text-slate-700 mb-2">Recently Uploaded</div>
              <ul className="space-y-2">
                {docs.map((doc, i) => (
                  <li key={doc.name + i} className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="font-['Roboto'] text-slate-700">{doc.name}</span>
                    <span className="ml-auto text-xs text-slate-400">{doc.uploaded}</span>
                  </li>
                ))}
                {docs.length === 0 && <li className="text-slate-400">No documents uploaded yet.</li>}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
