import { Button } from '@/components/ui/button'
import { UploadCloud, FileText } from 'lucide-react'
import { useState } from 'react'

export function FileUploadsPage() {
  const [files, setFiles] = useState([
    { name: 'CBC_Lab_Results.pdf', uploaded: '2024-05-14', size: '185 KB' },
    { name: 'MRI_Scan_2023.dcm', uploaded: '2024-01-23', size: '2.1 MB' },
  ])
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  function handleUpload() {
    if (!selectedFile) return
    setUploading(true)
    setTimeout(() => {
      setFiles([
        { name: selectedFile.name, uploaded: '2024-06-01', size: `${(selectedFile.size / 1024).toFixed(0)} KB` },
        ...files,
      ])
      setSelectedFile(null)
      setUploading(false)
    }, 1200)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>Secure Document Uploads</h1>
      <div className="bg-slate-50 rounded-xl p-6 mb-8 shadow flex flex-col md:flex-row gap-6 items-center">
        <label className="flex items-center gap-3 cursor-pointer text-blue-700 hover:text-blue-900 transition">
          <UploadCloud className="w-8 h-8" />
          <span className="font-bold">Choose File</span>
          <input id="file-upload-input" type="file" className="hidden" onChange={handleFileChange} />
        </label>
        <span className="text-slate-700 text-sm flex-1">
          {selectedFile ? selectedFile.name : 'No file selected'}
        </span>
        <Button id="upload-btn" onClick={handleUpload} disabled={!selectedFile || uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      </div>
      <h2 className="font-semibold text-blue-700 mb-4 text-lg">Your Uploaded Documents</h2>
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full min-w-[350px] text-left">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-2 px-4 font-semibold">File</th>
              <th className="py-2 px-4 font-semibold">Uploaded</th>
              <th className="py-2 px-4 font-semibold">Size</th>
              <th className="py-2 px-4 font-semibold">Download</th>
            </tr>
          </thead>
          <tbody>
            {files.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 px-4 text-center text-slate-400">No documents uploaded yet.</td>
              </tr>
            ) : (
              files.map((file, idx) => (
                <tr key={file.name + idx} className="border-t hover:bg-blue-50/50">
                  <td className="py-2 px-4 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-600" />{file.name}</td>
                  <td className="py-2 px-4">{file.uploaded}</td>
                  <td className="py-2 px-4">{file.size}</td>
                  <td className="py-2 px-4"><Button id={`download-btn-${idx}`} variant="outline" size="sm" disabled>Download</Button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
