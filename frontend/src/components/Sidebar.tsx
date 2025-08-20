import { Link, useLocation } from 'react-router-dom';
import { Calendar, FileText, MessageCircle, User, Bell, ClipboardList, FilePlus2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/appointments', label: 'Appointments', icon: Calendar },
  { to: '/medical-records', label: 'Medical Records', icon: FileText },
  { to: '/prescriptions', label: 'Prescriptions', icon: ClipboardList },
  { to: '/messaging', label: 'Messaging', icon: MessageCircle },
  { to: '/file-uploads', label: 'File Uploads', icon: FilePlus2 },
  { to: '/notifications', label: 'Notifications', icon: Bell },
];

export function Sidebar() {
  const location = useLocation();
  return (
    <aside className="hidden md:flex flex-col w-56 h-full bg-white border-r border-slate-200 shadow-sm py-8 px-2">
      <div className="flex flex-col gap-1">
        {navLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base transition hover:bg-blue-100 hover:text-blue-800',
              location.pathname.startsWith(item.to)
                ? 'bg-blue-100 text-blue-900' : 'text-slate-700')
            }
            id={`sidebar-link-${item.label.toLowerCase().replace(/\s/g, '-')}`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
