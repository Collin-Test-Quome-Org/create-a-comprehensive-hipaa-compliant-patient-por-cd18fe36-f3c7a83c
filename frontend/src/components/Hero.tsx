import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <motion.div
      className="relative w-full h-[28rem] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <h1
            className="text-white text-5xl font-bold mb-5"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
          >
            Welcome to SecureMed Portal
          </h1>
          <p className="text-slate-200 text-lg mb-8" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            Empowering you to access, manage, and protect your health information. <br />
            Simple. Secure. Seamless.
          </p>
          <Button asChild size="lg" className="mr-4" id="cta-get-started">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-blue-700/70" id="cta-learn-more">
            <Link to="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
