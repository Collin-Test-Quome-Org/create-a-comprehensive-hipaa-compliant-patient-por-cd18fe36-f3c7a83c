import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ContactPage() {
  return (
    <div className="min-h-[80vh] py-16 bg-gray-50 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full"
      >
        <h1 className="font-roboto font-bold text-3xl text-[#1d4ed8] mb-2">Contact PortalGuard</h1>
        <p className="font-roboto text-gray-600 mb-6">
          Have a question? Need support? Our human team is here — just reach out!
        </p>
        <form className="flex flex-col gap-4">
          <label htmlFor="contact-name" className="font-roboto text-gray-700 text-base">Name</label>
          <input id="contact-name" type="text" className="border rounded px-3 py-2 focus:outline-none focus:border-[#1d4ed8]" required />

          <label htmlFor="contact-email" className="font-roboto text-gray-700 text-base">Email</label>
          <input id="contact-email" type="email" className="border rounded px-3 py-2 focus:outline-none focus:border-[#1d4ed8]" required />

          <label htmlFor="contact-message" className="font-roboto text-gray-700 text-base">Message</label>
          <textarea id="contact-message" rows={4} className="border rounded px-3 py-2 focus:outline-none focus:border-[#1d4ed8]" required />

          <Button
            id="contact-send-btn"
            className="mt-4 bg-[#1d4ed8] text-white font-semibold hover:bg-[#2563eb]"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
