import { createContext, useContext, useState } from 'react';

export type UserRole = 'patient' | 'staff' | null;

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface MockAuthContextProps {
  user: AuthUser | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const MockAuthContext = createContext<MockAuthContextProps | undefined>(undefined);

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const login = (role: UserRole) => setUser({
    id: 'test',
    name: role === 'staff' ? 'Dr. Alice Staff' : 'Jane Patient',
    email: role === 'staff' ? 'staff@medlock.com' : 'jane@patient.com',
    role,
  });
  const logout = () => setUser(null);
  return (
    <MockAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </MockAuthContext.Provider>
  );
}

export function useMockAuth() {
  const ctx = useContext(MockAuthContext);
  if (!ctx) throw new Error('useMockAuth must be used within MockAuthProvider');
  return ctx;
}
