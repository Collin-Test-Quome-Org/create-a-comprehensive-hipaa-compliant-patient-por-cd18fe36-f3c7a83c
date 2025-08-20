import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useMockAuth } from '@/components/MockAuthContext';
import { motion } from 'framer-motion';
import { Lock, LogIn, User } from 'lucide-react';

export function LoginPage() {
  const [role, setRole] = useState<'patient' | 'staff'>('patient');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useMockAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(role);
      setLoading(false);
      navigate('/');
    }, 700);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Login to MedLock</h1>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <div className="flex gap-3 mb-2">
          <Button
            id="login-role-patient"
            type="button"
            variant={role === 'patient' ? 'default' : 'outline'}
            onClick={() => setRole('patient')}
            className="flex-1 flex gap-1 items-center"
          >
            <User className="w-4 h-4 mr-1" /> Patient
          </Button>
          <Button
            id="login-role-staff"
            type="button"
            variant={role === 'staff' ? 'default' : 'outline'}
            onClick={() => setRole('staff')}
            className="flex-1 flex gap-1 items-center"
          >
            <Lock className="w-4 h-4 mr-1" /> Staff
          </Button>
        </div>
        <label htmlFor="login-email" className="text-sm text-slate-700 font-medium">Email</label>
        <Input
          id="login-email"
          autoComplete="username"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@email.com"
        />
        <label htmlFor="login-password" className="text-sm text-slate-700 font-medium">Password</label>
        <Input
          id="login-password"
          type="password"
          autoComplete="current-password"
          required
          value={pw}
          onChange={e => setPw(e.target.value)}
          placeholder="••••••••"
        />
        <Button id="login-btn" type="submit" disabled={loading} className="mt-3 flex gap-2 items-center">
          <LogIn className="w-4 h-4" /> {loading ? 'Logging in...' : 'Login'}
        </Button>
      </motion.form>
    </div>
  );
}
