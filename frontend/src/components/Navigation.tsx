// Navigation.tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { LogIn, UserPlus, CalendarDays, FileText, Pill, MessageCircle, Bell, Upload, FileMedical } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const logoUrl = '/branding/assets/logo-0.png'

const navLinks = [
  { label: 'Records', icon: FileText, to: '/records' },
  { label: 'Appointments', icon: CalendarDays, to: '/appointments' },
  { label: 'Prescriptions', icon: Pill, to: '/prescriptions' },
  { label: 'Messaging', icon: MessageCircle, to: '/messages' },
  { label: 'Notifications', icon: Bell, to: '/notifications' },
  { label: 'Uploads', icon: Upload, to: '/uploads' },
]

const authLinks = [
  { label: 'Login', icon: LogIn, to: '/login', id: 'nav-login' },
  { label: 'Sign Up', icon: UserPlus, to: '/signup', id: 'nav-signup' },
]

export const Navigation = () => {
  const location = useLocation()
  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-2">
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex items-center gap-4 w-full">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle() + ' flex items-center gap-2'} aria-label="MedLock Home">
                <img src={logoUrl} className="w-8 h-8 mr-1" />
                <span className="text-lg font-bold text-blue-900 tracking-tight font-['Roboto']" style={{ fontWeight: 700 }}>MedLock</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.map(({ label, icon: Icon, to }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink
                  href={to}
                  className={navigationMenuTriggerStyle() + ` flex items-center gap-2 ${location.pathname === to ? 'bg-blue-100 text-blue-900' : ''}`}
                  aria-current={location.pathname === to ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <div className="flex-1" />
            {authLinks.map(({ label, icon: Icon, to, id }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink
                  href={to}
                  id={id}
                  className={navigationMenuTriggerStyle() + ' flex items-center gap-2'}
                  aria-current={location.pathname === to ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
