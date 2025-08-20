import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, ClipboardList, MessageCircle, Bell, Pill } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  appointments: <Calendar className="w-8 h-8 text-blue-600" />,
  records: <FileText className="w-8 h-8 text-blue-600" />,
  prescriptions: <Pill className="w-8 h-8 text-blue-600" />,
  messaging: <MessageCircle className="w-8 h-8 text-blue-600" />,
  notifications: <Bell className="w-8 h-8 text-blue-600" />,
  uploads: <ClipboardList className="w-8 h-8 text-blue-600" />,
};

interface DashboardCardProps {
  title: string;
  description: string;
  to: string;
  icon: keyof typeof icons;
}

export function DashboardCard({ title, description, to, icon }: DashboardCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Link to={to} className="block focus:outline-none">
        <Card className="transition-shadow shadow-md hover:shadow-xl border-blue-100 min-h-[180px]">
          <CardHeader className="flex flex-row items-center gap-4">
            {icons[icon]}
            <CardTitle className="font-['Roboto'] font-bold text-xl text-blue-900">{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 font-['Roboto']">{description}</CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
