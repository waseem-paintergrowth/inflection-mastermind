import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const coaches = [
  {
    name: "Mike Gore-Hickman",
    role: "Founder & CEO",
    image: "/manus-storage/2026_PainterGrowthTeam_PointRoberts_MikePortrait-1_e8faca1b.webp",
  },
  {
    name: "Jesse Teron",
    role: "COO & Intuitive Coach",
    image: "/manus-storage/2025PhoenixMastermind_Portraits-17_758a514f.webp",
  },
  {
    name: "Gavin Simpson",
    role: "Head of Coaching",
    image: "/manus-storage/2025_Oct_MastermindScottdale_TeamCoachPortraits-146_7706c3a6.webp",
  },
];

export function CoachesSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="coaches" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="font-heading text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-4">
            Section.05 // Your Coaches
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e8eaed]">
            Led By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00b8c4]">
              Elite Operators
            </span>
          </h2>
          <p className="mt-4 text-base text-[#8899aa] max-w-xl mx-auto">
            Your coaches have collectively built and scaled painting businesses to 8+ figures. They've been where you are — and they'll show you what's next.
          </p>
        </motion.div>

        {/* Coach Cards */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-xl overflow-hidden group hover:border-[#00f0ff]/30 transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-semibold text-[#e8eaed]">
                  {coach.name}
                </h3>
                <p className="text-xs text-[#00f0ff] mt-1 tracking-wider uppercase">
                  {coach.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Photo */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-xl overflow-hidden"
        >
          <img
            src="/manus-storage/groupcaoches_cd227102.jpg"
            alt="The full Painter Growth coaching team"
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
          <div className="p-4 sm:p-6 flex items-center justify-between">
            <p className="text-xs sm:text-sm text-[#8899aa] font-heading tracking-wider uppercase">
              The Full Coaching Team
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              <span className="text-xs text-[#667788]">9 Elite Coaches</span>
            </div>
          </div>
        </motion.div>

        {/* Breathwork photo */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-xl overflow-hidden mt-6"
        >
          <img
            src="/manus-storage/2025PhoenixMastermind_Portraits-18_2fa123f9.webp"
            alt="Breathwork session at Painter Growth Mastermind"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-[#8899aa] font-heading tracking-wider uppercase">
              Breathwork & Mindset Sessions — Phoenix 2025
            </p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
