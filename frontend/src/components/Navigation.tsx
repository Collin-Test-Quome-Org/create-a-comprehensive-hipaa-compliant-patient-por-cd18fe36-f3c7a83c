import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    label: 'Portal',
    to: '/portal',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
  {
    label: 'Login',
    to: '/login',
    isButton: true,
  },
  {
    label: 'Sign Up',
    to: '/signup',
    isButton: true,
    primary: true,
  },
];

export function Navigation() {
  const location = useLocation();
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={require('/branding/assets/logo-0.png')}
            className="w-9 h-9 rounded-full shadow-lg border border-blue-600 group-hover:scale-105 transition-transform"
            draggable={false}
          />
          <span className="font-roboto font-bold text-2xl text-[#1d4ed8] tracking-tight">PortalGuard</span>
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-4">
          {navLinks.filter(l => !l.isButton).map(({ label, to }) => (
            <NavigationMenuItem key={to}>
              <NavigationMenuLink asChild>
                <Link
                  to={to}
                  className={`px-3 py-2 rounded-md font-medium text-[1.08rem] transition-colors ${location.pathname === to ? 'bg-[#1d4ed8] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          {navLinks.filter(l => l.isButton).map(({ label, to, primary }) => (
            <NavigationMenuItem key={to}>
              <NavigationMenuLink asChild>
                <Link to={to}>
                  <Button
                    id={`nav-${label.toLowerCase().replace(' ', '-')}-btn`}
                    variant={primary ? 'default' : 'outline'}
                    className={`ml-2 font-semibold ${primary ? 'bg-[#1d4ed8] text-white hover:bg-[#2563eb]' : 'text-[#1d4ed8] border-[#1d4ed8] hover:bg-blue-50'}`}
                  >
                    {label}
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
