import { createContext, useContext, useState } from 'react';

const mockUser = {
  name: 'Jane Doe',
  email: 'jane@blueshield.com',
  role: 'patient',
};

const MockAuthContext = createContext({
  user: null,
  login: (email: string, password: string) => {},
  logout: () => {},
});

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(mockUser);
  const login = (email: string, password: string) => {
    // Permissive mock: always logs in
    setUser({ ...mockUser, email });
  };
  const logout = () => setUser(null);

  return (
    <MockAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </MockAuthContext.Provider>
  );
}

export function useMockAuth() {
  return useContext(MockAuthContext);
}
