import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ParticleField } from "@/components/ParticleField";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459151511/XJYxBh8N9JT8ehAvZXBMoA/hero-bg-SzL5rtDNhdCNAMD9VtwCBW.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14]/60 via-[#0a0e14]/30 to-[#0a0e14]" />
      </div>

      {/* Particle Effect */}
      <ParticleField />

      {/* Giant INFLECTION watermark text behind content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h1
          className="font-heading font-black text-[12vw] sm:text-[10vw] lg:text-[9vw] tracking-[-0.02em] leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(0, 240, 255, 0.15)",
            textShadow: "0 0 80px rgba(0, 240, 255, 0.05)",
          }}
        >
          INFLECTION
        </h1>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        {/* Transparent Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <img
            src="/manus-storage/Untitleddesign(95)_b2f31d2f.png"
            alt="The Inflection Lion Logo"
            className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 mx-auto object-contain drop-shadow-[0_0_40px_rgba(0,240,255,0.3)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-heading text-xs sm:text-sm tracking-[0.3em] text-[#d4a853] uppercase mb-4">
            Painter Growth Presents
          </p>
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
            <span className="text-[#e8eaed]">THE</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00e0f0] to-[#00b8c4] glow-cyan">
              INFLECTION
            </span>
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#8899aa] font-light max-w-2xl mx-auto"
        >
          This is the moment everything changes.
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-[#667788] max-w-xl mx-auto"
        >
          Your business. AI. Your mindset. Your future.
          <br />
          Will you keep up, or get left in the dust?
        </motion.p>

        {/* Event Details */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="font-heading text-sm tracking-wider text-[#e8eaed]">
              October 7–10, 2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d4a853] animate-pulse" />
            <span className="font-heading text-sm tracking-wider text-[#e8eaed]">
              Scottsdale, Arizona
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a
            href="#tickets"
            className="btn-primary inline-block px-10 py-4 rounded text-sm sm:text-base"
          >
            Get My Ticket Now
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e14] to-transparent" />
    </section>
  );
}
