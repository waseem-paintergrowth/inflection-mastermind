import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const amenities = [
  "Luxury Spa & Recovery",
  "Private Resort Casitas",
  "Elite Networking Environment",
  "Scottsdale Desert Energy",
  "5-Star Dining Experiences",
  "High-End Wellness Atmosphere",
];

export function LocationSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="location" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" ref={ref}>
      {/* Background Image - Andaz exterior at night */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/x8f12vRE7cj4_f136996d.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e14] via-[#0a0e14]/90 to-[#0a0e14]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-[#0a0e14]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <p className="font-heading text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-4">
            Section.04 // The Location
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e8eaed] leading-tight">
            The Environment Shapes The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#b8860b]">
              Transformation
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#8899aa]">
            Welcome to the Andaz Scottsdale Resort & Spa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="text-base text-[#c8ccd0] leading-relaxed">
              This year, INFLECTION takes place at one of the most luxurious resorts in Arizona. Nestled in the heart of Scottsdale, the Andaz is designed for deep thinking, recovery, connection, and transformation.
            </p>
            <div className="text-sm text-[#8899aa] space-y-2 leading-relaxed">
              <p>Minimalist architecture. World-class spa experiences. Mountain views. Private luxury casitas. High-end dining.</p>
              <p>An atmosphere intentionally built to help you disconnect from the noise — and reconnect with your future.</p>
            </div>
            <p className="text-base text-[#c8ccd0] leading-relaxed">
              This isn't another hotel conference room. It's a complete environmental reset.
            </p>
            <p className="text-sm text-[#8899aa] leading-relaxed">
              You'll spend four days surrounded by ambitious business owners, powerful conversations, elite coaching, cutting-edge AI implementation, and an atmosphere that elevates every part of your thinking.
            </p>

            {/* Pull Quote */}
            <div className="glass-panel-gold rounded-lg p-5 mt-6">
              <p className="text-[#d4a853] italic text-base font-light">
                "Environment is one of the fastest ways to change identity."
              </p>
            </div>
          </motion.div>

          {/* Right Column - Andaz Images + Amenities */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Andaz Pool Image */}
            <div className="glass-panel rounded-xl overflow-hidden">
              <img
                src="/manus-storage/YtGpEQCUaj0d_443faf30.jpg"
                alt="Andaz Scottsdale Resort pool and grounds"
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>

            {/* Andaz Desert Sunset */}
            <div className="glass-panel rounded-xl overflow-hidden">
              <img
                src="/manus-storage/iPqf7KFIINgZ_b342dac0.jpg"
                alt="Andaz Scottsdale desert landscape at sunset"
                className="w-full h-40 sm:h-48 object-cover"
              />
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="glass-panel rounded-lg p-4 text-center hover:border-[#d4a853]/30 transition-all duration-500"
                >
                  <p className="text-xs sm:text-sm text-[#c8ccd0] font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
