import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setForm({ name: '', email: '', message: '' }), 500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#f8fafc] py-16 px-4">
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg w-full mx-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <div className="bg-[#1d4ed8] rounded-full p-2 mb-4">
          <Mail className="text-white" size={32} />
        </div>
        <h1 className="font-roboto text-3xl font-bold text-[#1d4ed8] mb-3">Contact PortalGuard</h1>
        <p className="font-roboto text-gray-700 text-lg mb-2 text-center">
          Need help? Have feedback? Our friendly, privacy-obsessed team is here for you.
        </p>
        <form className="w-full mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="contact-name" className="block mb-1 text-gray-700 font-medium">Name</label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="font-roboto"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block mb-1 text-gray-700 font-medium">Email</label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="font-roboto"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block mb-1 text-gray-700 font-medium">Message</label>
            <Textarea
              id="contact-message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
              className="font-roboto"
            />
          </div>
          <Button type="submit" id="contact-submit-btn" className="w-full mt-2 bg-[#1d4ed8] hover:bg-[#2563eb] font-roboto font-semibold text-base">
            Send Message
          </Button>
        </form>
        {submitted && (
          <div className="text-green-600 font-roboto mt-4 text-center">Thank you! We’ll be in touch soon.</div>
        )}
      </motion.div>
    </div>
  );
}
