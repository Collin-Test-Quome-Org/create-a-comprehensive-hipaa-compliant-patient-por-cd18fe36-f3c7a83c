import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Upload, FileText, XCircle } from 'lucide-react';

const mockFiles = [
  { id: 1, name: 'Lab_Results_May2024.pdf', uploaded: '2024-05-28T15:10:00Z' },
  { id: 2, name: 'MRI_Scan_2023.jpg', uploaded: '2023-12-16T09:30:00Z' },
];

export function FileUploadsPage() {
  const [files, setFiles] = useState(mockFiles);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }

  function handleUpload() {
    if (!selectedFile) return;
    setUploading(true);
    setTimeout(() => {
      setFiles((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: selectedFile.name,
          uploaded: new Date().toISOString(),
        },
      ]);
      setSelectedFile(null);
      setUploading(false);
    }, 1200);
  }

  function handleRemove(id: number) {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[calc(100vh-64px)] bg-slate-50">
      <div className="max-w-2xl mx-auto py-8">
        <Card className="bg-white shadow-lg">
          <CardHeader className="flex flex-row items-center gap-2 border-b pb-2">
            <Upload className="w-5 h-5 text-[#1d4ed8]" />
            <CardTitle className="text-[#1d4ed8] font-bold font-['Roboto']">Upload Medical Documents</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 mt-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input
                id="file-upload-input"
                type="file"
                onChange={handleFileChange}
                className="w-full md:w-2/3"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                disabled={uploading}
              />
              <Button
                id="upload-btn"
                className="bg-[#1d4ed8] text-white font-bold px-6"
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </Button>
            </div>
            {selectedFile && !uploading && (
              <div className="text-slate-700 text-sm">Selected: {selectedFile.name}</div>
            )}
            <div>
              <h3 className="font-bold text-lg mb-2 font-['Roboto']">Your Uploaded Files</h3>
              <div className="flex flex-col gap-3">
                {files.length === 0 && <div className="text-slate-400">No documents uploaded yet.</div>}
                {files.map((file) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 bg-slate-100 rounded-lg px-4 py-2 shadow-sm hover:bg-blue-50 transition group"
                  >
                    <FileText className="w-5 h-5 text-blue-700" />
                    <span className="font-bold text-blue-900 font-['Roboto']">{file.name}</span>
                    <span className="ml-auto text-slate-400 text-xs">{new Date(file.uploaded).toLocaleString()}</span>
                    <Button id={`remove-file-${file.id}`} variant="ghost" size="icon" type="button" className="opacity-60 hover:opacity-100" onClick={() => handleRemove(file.id)}>
                      <XCircle className="w-5 h-5 text-red-400" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-slate-400 flex items-center justify-end pt-3">
            All files are encrypted and stored securely in compliance with HIPAA.
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}
