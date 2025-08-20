import { Button } from '@/components/ui/button';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockFiles = [
  {
    id: 1,
    name: 'Lab_Report_Jan2024.pdf',
    uploadedAt: '2024-01-23',
    size: '1.2 MB',
  },
  {
    id: 2,
    name: 'Xray_Chest_Result.png',
    uploadedAt: '2023-12-10',
    size: '800 KB',
  },
];

export function FileUploadsPage() {
  const [files, setFiles] = useState(mockFiles);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setUploading(true);
      setTimeout(() => {
        setFiles([
          ...files,
          {
            id: Math.random(),
            name: e.target.files![0].name,
            uploadedAt: new Date().toISOString().slice(0, 10),
            size: `${(e.target.files![0].size / 1024).toFixed(1)} KB`,
          },
        ]);
        setUploading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1700);
      }, 1200);
    }
  }

  function handleUploadClick() {
    fileInputRef.current?.click();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
        Secure Medical Document Uploads
      </h1>
      <p className="text-slate-700 mb-6">Upload, manage, and download your important health documents—all encrypted and HIPAA-compliant.</p>
      <div className="flex items-center gap-3 mb-4">
        <Button id="upload-btn" onClick={handleUploadClick} disabled={uploading} className="flex items-center gap-2">
          <Upload className="w-5 h-5" /> Upload Document
        </Button>
        {uploading && (
          <span className="text-blue-600 animate-pulse ml-2">Uploading...</span>
        )}
        <AnimatePresence>
          {success && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="ml-2 flex items-center gap-1 text-green-600"
            >
              <CheckCircle className="w-4 h-4" /> Uploaded!
            </motion.span>
          )}
        </AnimatePresence>
        <input
          ref={fileInputRef}
          type="file"
          id="file-upload-input"
          className="hidden"
          aria-label="Upload Medical Document"
          onChange={handleFileChange}
        />
      </div>
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-blue-800 mb-3">Your Documents</h2>
        {files.length === 0 ? (
          <div className="text-slate-500 text-center py-10">No files uploaded yet.</div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {files.map((file) => (
              <li key={file.id} className="flex items-center gap-3 py-3 px-1">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="flex-1 text-slate-800">{file.name}</span>
                <span className="text-xs text-slate-500">{file.uploadedAt}</span>
                <span className="text-xs text-slate-400 ml-2">{file.size}</span>
                <Button variant="outline" size="sm" className="ml-3" id={`download-${file.id}`}>Download</Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
