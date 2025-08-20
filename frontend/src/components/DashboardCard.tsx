import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, FileText, Pill, MessageCircle, Bell } from 'lucide-react'

const icons: Record<string, React.ElementType> = {
  appointments: Calendar,
  records: FileText,
  prescriptions: Pill,
  messaging: MessageCircle,
  notifications: Bell,
}

export function DashboardCard({ title, description, to, icon, color }: {
  title: string
  description: string
  to: string
  icon: string
  color: string
}) {
  const Icon = icons[icon] || Calendar
  return (
    <Link to={to} tabIndex={0} aria-label={title} className="focus:outline-blue-600">
      <Card className={`h-full transition-transform duration-200 hover:scale-[1.025] hover:shadow-lg focus:ring-2 focus:ring-blue-500/60 border-blue-100 focus:outline-none group`}>        
        <CardHeader className="flex flex-row items-center gap-3 pb-1">
          <div className={`rounded-full p-3 bg-gradient-to-br ${color === 'blue' ? 'from-blue-50 to-blue-100 text-blue-700' : 'from-slate-100 to-slate-200 text-slate-600'} shadow-sm group-hover:bg-blue-200 group-hover:text-blue-900 transition-colors`}>
            <Icon className="w-7 h-7" />
          </div>
          <CardTitle className={`text-lg font-bold font-['Roboto'] ${color === 'blue' ? 'text-blue-900' : 'text-slate-700'}`}>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 text-sm leading-relaxed font-['Roboto']">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
