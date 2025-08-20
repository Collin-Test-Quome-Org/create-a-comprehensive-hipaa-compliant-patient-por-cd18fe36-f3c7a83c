import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, FileText, Capsule, MessageCircle, Bell } from 'lucide-react'

const icons = {
  appointments: Calendar,
  records: FileText,
  prescriptions: Capsule,
  messaging: MessageCircle,
  notifications: Bell,
}

export function DashboardCard({
  title,
  description,
  to,
  icon,
  color,
}: {
  title: string
  description: string
  to: string
  icon: keyof typeof icons
  color?: string
}) {
  const Icon = icons[icon]
  return (
    <motion.div whileHover={{ y: -6, scale: 1.035 }}>
      <Link to={to} className="block h-full">
        <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className={`rounded-full p-2 bg-${color || 'blue'}-100 text-${color || 'blue'}-700`}>
              <Icon size={28} />
            </div>
            <CardTitle className="text-lg font-bold" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            {description}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
