import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function InflectionPointSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="inflection" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459151511/XJYxBh8N9JT8ehAvZXBMoA/ai-abstract-BBGeF2da4GmC2JLNf5nvjx.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14] via-[#0a0e14]/95 to-[#0a0e14]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-heading text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-4">
            Section.02 // The Event
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#e8eaed] leading-tight">
            The Inflection{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00b8c4]">
              Point
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Copy */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-lg text-[#c8ccd0] leading-relaxed">
              The Painter Growth Mastermind: <strong className="text-[#00f0ff]">INFLECTION</strong>, is happening Oct 7–10 in Scottsdale, Arizona.
            </p>
            <p className="text-base text-[#8899aa] leading-relaxed">
              In typical PG fashion, this will be absolutely transformational — except we are taking it to a level we haven't before.
            </p>
            <p className="text-base text-[#8899aa] leading-relaxed">
              We'll be going deeper on your business. On AI. And on your mindsets & beliefs than we ever have.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "You'll leave with AI agents working FOR you in your business.",
                "You'll leave with a renewed sense of purpose.",
                "You'll leave ahead of every other person in your territory.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mt-2 shrink-0" />
                  <p className="text-[#c8ccd0]">{text}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-[#667788] italic pt-4 border-l-2 border-[#d4a853]/30 pl-4">
              No one else in your city is learning what you'll be learning with us.
            </p>
          </motion.div>

          {/* Large Attendees Photo */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-panel rounded-xl overflow-hidden">
              <img
                src="/manus-storage/2025PhoenixMastermind_1e79a85f.webp"
                alt="Painter Growth Mastermind attendees — 100+ painting business owners"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="p-5 sm:p-6">
                <p className="text-sm text-[#8899aa] font-heading tracking-wider uppercase">
                  2025 Phoenix Mastermind — 100+ Attendees
                </p>
                <p className="text-xs text-[#667788] mt-1">
                  The room you need to be in.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
