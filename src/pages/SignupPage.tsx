import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock: all signups succeed
      navigate('/portal');
    }, 1000);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#f8fafc]">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="shadow-2xl rounded-2xl">
          <CardHeader className="flex flex-col items-center gap-4 pb-2">
            <div className="bg-[#1d4ed8] rounded-full p-2 mb-2">
              <UserPlus className="text-white" size={32} />
            </div>
            <CardTitle className="font-roboto text-2xl text-[#1d4ed8] font-bold">Create Your PortalGuard Account</CardTitle>
            <p className="font-roboto text-gray-500 text-sm">Join a community that puts your privacy and health first.</p>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="signup-name" className="block mb-1 text-gray-700 font-medium">Full Name</label>
                <Input
                  id="signup-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className="font-roboto"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block mb-1 text-gray-700 font-medium">Email</label>
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  autoComplete="email"
                  className="font-roboto"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block mb-1 text-gray-700 font-medium">Password</label>
                <Input
                  id="signup-password"
                  name="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="font-roboto"
                />
              </div>
              {error && <div className="text-red-600 text-sm font-roboto">{error}</div>}
              <Button
                type="submit"
                id="signup-submit-btn"
                className="w-full mt-2 bg-[#1d4ed8] hover:bg-[#2563eb] font-roboto font-semibold text-base flex gap-2 items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <span>Creating account…</span>
                ) : (
                  <><UserPlus className="mr-1" size={18} /> Sign Up</>
                )}
              </Button>
              <div className="flex justify-between pt-2">
                <Link to="/login" className="text-[#1d4ed8] hover:underline text-sm font-roboto">Already have an account?</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
