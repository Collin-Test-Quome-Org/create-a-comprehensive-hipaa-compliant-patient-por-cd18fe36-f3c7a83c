// FileUploadsPage.tsx
import { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileText, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const initialFiles = [
  {
    name: 'LabReport-June2024.pdf',
    uploaded: '2024-06-15',
    url: '#',
  },
  {
    name: 'InsuranceCard.jpg',
    uploaded: '2024-05-03',
    url: '#',
  },
];

export function FileUploadsPage() {
  const [files, setFiles] = useState(initialFiles);
  const [selected, setSelected] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setSelected(e.target.files[0]);
    }
  }

  function handleUpload() {
    if (!selected) return;
    setUploading(true);
    setTimeout(() => {
      setFiles([
        ...files,
        { name: selected.name, uploaded: new Date().toISOString().slice(0, 10), url: '#' },
      ]);
      setSelected(null);
      setUploading(false);
    }, 1000);
  }

  function handleRemove(name: string) {
    setFiles(files.filter(f => f.name !== name));
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 min-h-screen">
      <motion.h1
        className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3 font-['Roboto']"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontWeight: 700 }}
      >
        <UploadCloud className="w-8 h-8 text-blue-700" /> File Vault
      </motion.h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-800 text-lg font-semibold font-['Roboto']">Upload Medical Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 items-end mb-6">
            <input
              type="file"
              id="file-input"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              aria-label="File uploader"
            />
            <Button
              id="choose-file-btn"
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex gap-2 items-center"
              onClick={() => fileInputRef.current?.click()}
            >
              <FileText className="w-5 h-5" />
              {selected ? selected.name : 'Choose File'}
            </Button>
            <Button
              id="upload-btn"
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg ml-2 flex gap-2 items-center"
              onClick={handleUpload}
              disabled={!selected || uploading}
            >
              <UploadCloud className="w-5 h-5" /> Upload
            </Button>
            {uploading && <span className="ml-3 text-blue-700 animate-pulse">Uploading...</span>}
          </div>
          <div>
            <h2 className="text-blue-800 font-semibold mb-2 font-['Roboto']">Your Documents</h2>
            {files.length === 0 ? (
              <div className="text-slate-400 py-8 text-center">No uploads yet.</div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {files.map((f, i) => (
                  <motion.li
                    key={f.name}
                    className="flex items-center gap-4 py-4"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                  >
                    <FileText className="w-6 h-6 text-blue-700" />
                    <span className="flex-1 text-blue-900 font-['Roboto']">{f.name}</span>
                    <span className="text-xs text-slate-400">Uploaded: {f.uploaded}</span>
                    <a href={f.url} className="text-blue-700 underline text-sm mr-4" download>
                      Download
                    </a>
                    <Button
                      id={`remove-file-btn-${i}`}
                      type="button"
                      className="bg-red-100 text-red-700 hover:bg-red-200 rounded-lg px-2 py-1"
                      onClick={() => handleRemove(f.name)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
