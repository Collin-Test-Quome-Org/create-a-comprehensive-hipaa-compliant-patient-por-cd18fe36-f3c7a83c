import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useMockAuth } from '@/components/MockAuthContext';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useMockAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('patient');
      setLoading(false);
      navigate('/');
    }, 900);
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
        <h1 className="text-2xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Create Your MedLock Account</h1>
        <label htmlFor="signup-name" className="text-sm text-slate-700 font-medium">Full Name</label>
        <Input
          id="signup-name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your Name"
        />
        <label htmlFor="signup-email" className="text-sm text-slate-700 font-medium">Email</label>
        <Input
          id="signup-email"
          autoComplete="username"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@email.com"
        />
        <label htmlFor="signup-password" className="text-sm text-slate-700 font-medium">Password</label>
        <Input
          id="signup-password"
          type="password"
          autoComplete="new-password"
          required
          value={pw}
          onChange={e => setPw(e.target.value)}
          placeholder="••••••••"
        />
        <Button id="signup-btn" type="submit" disabled={loading} className="mt-3 flex gap-2 items-center">
          <UserPlus className="w-4 h-4" /> {loading ? 'Signing up...' : 'Sign Up'}
        </Button>
      </motion.form>
    </div>
  );
}
