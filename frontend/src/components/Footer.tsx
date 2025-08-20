// Footer.tsx
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 py-6 border-t border-slate-200 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <div className="flex items-center gap-2">
          <img src="/branding/assets/logo-0.png" className="h-8 w-8" />
          <span className="font-bold text-lg text-blue-800 tracking-tight">Medivault</span>
        </div>
        <nav className="flex gap-6 text-slate-600">
          <Link to="/appointments" className="hover:text-blue-800 transition">Appointments</Link>
          <Link to="/medical-records" className="hover:text-blue-800 transition">Records</Link>
          <Link to="/prescriptions" className="hover:text-blue-800 transition">Prescriptions</Link>
          <Link to="/messaging" className="hover:text-blue-800 transition">Messaging</Link>
          <Link to="/file-uploads" className="hover:text-blue-800 transition">Files</Link>
        </nav>
        <div className="text-xs text-slate-500 mt-2 md:mt-0">© {new Date().getFullYear()} Medivault. All rights reserved.</div>
      </div>
    </footer>
  );
}
