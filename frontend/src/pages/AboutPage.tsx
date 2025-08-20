import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="min-h-[80vh] bg-white flex flex-col py-16 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-roboto font-bold text-3xl md:text-4xl text-[#1d4ed8] mb-4">Who We Are</h1>
        <p className="font-roboto text-gray-700 text-lg mb-6">
          PortalGuard is your digital front door to healthcare — built for patients who demand privacy, clarity, and convenience. Our team is a quirky blend of cybersecurity fanatics, healthcare nerds, and digital experience designers, all united by a single mission: <span className="font-semibold">Guarding your health information, empowering your care</span>.
        </p>
        <h2 className="font-roboto font-semibold text-xl text-gray-900 mb-2">Our Promise</h2>
        <ul className="list-disc pl-6 text-gray-700 font-roboto text-base mb-8">
          <li>Security that leads the industry, but never gets in your way</li>
          <li>An interface so friendly, even your grandma can use it</li>
          <li>Lightning-fast access to appointments, records, and more</li>
          <li>Support that’s actually supportive — humans, not bots</li>
        </ul>
        <div className="flex gap-4">
          <a href="/contact">
            <button
              id="about-contact-btn"
              className="bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-roboto font-semibold hover:bg-[#2563eb]"
            >
              Contact Us
            </button>
          </a>
          <a href="/portal">
            <button
              id="about-portal-btn"
              className="bg-white border border-[#1d4ed8] text-[#1d4ed8] px-6 py-3 rounded-lg font-roboto font-semibold hover:bg-blue-50"
            >
              Patient Portal
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
