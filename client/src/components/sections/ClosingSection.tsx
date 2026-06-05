import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function ClosingSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="tickets" className="relative py-24 sm:py-32 lg:py-48 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459151511/XJYxBh8N9JT8ehAvZXBMoA/closing-bg-gBYNFxHF2uxsvomZz4yuho.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0e14]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-[#0a0e14]/80" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00f0ff]/10 blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#d4a853]/10 blur-[60px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo glow */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <img
            src="/manus-storage/inflection1_0fe58a59.jpg"
            alt=""
            className="w-24 h-24 mx-auto object-contain rounded-lg shadow-[0_0_80px_rgba(0,240,255,0.3)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#e8eaed] leading-tight"
        >
          This is the 2026
          <br />
          Painter Growth{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00b8c4]">
            Mastermind.
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-[#8899aa] max-w-2xl mx-auto"
        >
          It's the inflection point in your business, your life — where AI meets humanity.
        </motion.p>

        {/* Body */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <p className="text-base text-[#c8ccd0]">
            And it's your opportunity to get ahead — or risk falling behind.
          </p>
          <p className="mt-4 text-xl sm:text-2xl font-heading font-semibold text-[#d4a853] glow-gold">
            Will you be there?
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <a
            href="#"
            className="btn-primary inline-block px-12 py-5 rounded text-base sm:text-lg"
          >
            Get My Ticket Now
          </a>
          <p className="mt-4 text-xs text-[#667788]">
            Limited seats available. Secure yours before they're gone.
          </p>
        </motion.div>

        {/* Event details reminder */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#667788]"
        >
          <span className="font-heading tracking-wider">OCT 7–10, 2026</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#00f0ff]/50" />
          <span className="font-heading tracking-wider">SCOTTSDALE, AZ</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#00f0ff]/50" />
          <span className="font-heading tracking-wider">ANDAZ RESORT</span>
        </motion.div>
      </div>
    </section>
  );
}
