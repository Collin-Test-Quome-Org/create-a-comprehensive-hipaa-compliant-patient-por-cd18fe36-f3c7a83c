import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarDays, FileText, ClipboardList, MessageCircle, Bell, UploadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  appointments: <CalendarDays className="w-7 h-7 text-blue-600" />, // calendar
  records: <FileText className="w-7 h-7 text-blue-600" />, // file
  prescriptions: <ClipboardList className="w-7 h-7 text-blue-600" />, // clipboard
  messaging: <MessageCircle className="w-7 h-7 text-blue-600" />, // chat
  notifications: <Bell className="w-7 h-7 text-blue-600" />, // bell
  uploads: <UploadCloud className="w-7 h-7 text-blue-600" />, // upload
};

export function DashboardCard({ title, description, to, icon }: { title: string; description: string; to: string; icon: string }) {
  return (
    <div className="rounded-xl shadow-md bg-white border border-blue-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center px-8 py-10">
      <div className="mb-4">{iconMap[icon]}</div>
      <h3 className="text-xl font-bold text-blue-900 mb-2 font-['Roboto']">{title}</h3>
      <p className="text-gray-600 mb-6 text-base font-['Roboto']">{description}</p>
      <Link to={to} className="w-full">
        <Button id={`dashboard-${icon}-btn`} variant="outline" className="w-full border-blue-600 text-blue-900 hover:bg-blue-50">Go to {title}</Button>
      </Link>
    </div>
  );
}
