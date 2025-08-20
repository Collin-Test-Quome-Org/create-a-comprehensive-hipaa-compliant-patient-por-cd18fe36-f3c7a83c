import { MockAuthProvider } from '@/components/MockAuthContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <MockAuthProvider>{children}</MockAuthProvider>;
}
