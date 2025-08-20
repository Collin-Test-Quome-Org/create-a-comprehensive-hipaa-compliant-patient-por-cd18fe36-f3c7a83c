// Hero.tsx - Big marketing hero slider
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative w-full bg-cover bg-center min-h-[28rem] flex flex-col justify-center" style={{ backgroundImage: `url('/branding/assets/hero-0.png')` }}>
      <div className="absolute inset-0 bg-black/60 z-0"/>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Roboto']" style={{ fontWeight: 700 }}>
          Welcome to MedLock Portal
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 font-['Roboto'] mb-8 max-w-2xl">
          Secure. Simple. Seamless. <br/>Effortlessly manage your medical records, appointments, prescriptions, and connect with your care team—all in one protected hub.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild id="cta-signup" className="text-lg px-8 py-5 font-semibold bg-blue-700 hover:bg-blue-800">
            <a href="/signup">Join Now</a>
          </Button>
          <Button asChild variant="outline" id="cta-login" className="text-lg px-8 py-5 font-semibold border-white text-white hover:bg-white/10">
            <a href="/login">Sign In</a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
