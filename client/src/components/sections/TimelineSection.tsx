import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Zap, Brain, Flame, Crown } from "lucide-react";

const days = [
  {
    day: "01",
    date: "October 7",
    title: "Welcome Reception & Commitments",
    copy: "You'll arrive at the beautiful Andaz Resort in Scottsdale and be greeted by our team — but this time with an assignment. We'll be asking you to make a set of commitments that will determine the next several phases of your life. You'll connect deeply with other owners, and disconnect entirely from your business.",
    accent: "cyan",
    icon: Zap,
    features: ["Commitment Ceremony", "Deep Networking Dinner", "Identity Reset Exercise"],
  },
  {
    day: "02",
    date: "October 8",
    title: "Mindset, AI & Your Future",
    copy: "You know we'll be working on your mindset — but what makes this event different is that you'll be actually implementing AI systems into your business. Our goal is to make you an AI-Native Painting Business — and that starts by learning how, and then implementing alongside us. You'll be with 7, 8 and even 9 figure business owners. This is the room you need to be in.",
    accent: "gold",
    icon: Brain,
    features: ["Live AI Agent Build", "7–9 Figure Operator Panels", "Business Blueprint Workshop"],
  },
  {
    day: "03",
    date: "October 9",
    title: "Transformation Day",
    copy: "You'll start the day with a completely new breathwork session that will help you unlock even more of your potential than ever before. We'll then get right into it — working ON your business — so by the time you're on your way home, your business is unrecognizable. After the sessions on day 3, we'll have a special VIP dinner with Mike, Jesse & the coaches at a 5 star steakhouse.",
    accent: "cyan",
    icon: Flame,
    features: ["Advanced Breathwork Ceremony", "Business Overhaul Sprint", "VIP Steakhouse Dinner"],
  },
  {
    day: "04",
    date: "October 10",
    title: "High Performance Day (VIP Only)",
    copy: 'Connect intimately with a small group of high performers, and be led through an unforgettable day of breathwork, exercise, mindset work, connection & fun. The High Performance Day in 2025 was described by multiple attendees as "The best day of their lives." This one will level that one up.',
    accent: "gold",
    icon: Crown,
    features: ["Private Breathwork Journey", "Elite Fitness Challenge", "Intimate Coaching Circle"],
  },
];

export function TimelineSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="timeline" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-heading text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-4">
            Section.03 // The Experience
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e8eaed]">
            The Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00b8c4]">
              Timeline
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/50 via-[#d4a853]/30 to-[#00f0ff]/50" />

          <div className="space-y-8 sm:space-y-12">
            {days.map((day, i) => {
              const Icon = day.icon;
              return (
                <motion.div
                  key={day.day}
                  initial={{ x: 40, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-2.5 sm:left-6.5 top-8 w-3 h-3 rounded-full border-2 ${
                      day.accent === "cyan"
                        ? "border-[#00f0ff] bg-[#00f0ff]/20 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                        : "border-[#d4a853] bg-[#d4a853]/20 shadow-[0_0_10px_rgba(212,168,83,0.5)]"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className="glass-panel rounded-xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.01]"
                    style={{
                      borderColor: day.accent === "cyan" ? "rgba(0,240,255,0.12)" : "rgba(212,168,83,0.15)",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 sm:gap-6 mb-4">
                      <div className="shrink-0">
                        <span
                          className={`font-heading text-3xl sm:text-4xl font-black ${
                            day.accent === "cyan" ? "text-[#00f0ff]" : "text-[#d4a853]"
                          }`}
                        >
                          {day.day}
                        </span>
                        <p className="text-[10px] text-[#667788] uppercase tracking-wider mt-1">Day</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <Icon
                            className={`w-4 h-4 ${
                              day.accent === "cyan" ? "text-[#00f0ff]" : "text-[#d4a853]"
                            }`}
                          />
                          <span className="text-xs font-heading tracking-wider text-[#667788] uppercase">
                            {day.date}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#e8eaed]">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    {/* Copy */}
                    <p className="text-sm sm:text-base text-[#8899aa] leading-relaxed mb-5 pl-0 sm:pl-[4.5rem]">
                      {day.copy}
                    </p>

                    {/* Unique Features */}
                    <div className="flex flex-wrap gap-2 pl-0 sm:pl-[4.5rem]">
                      {day.features.map((feature) => (
                        <span
                          key={feature}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-heading tracking-wide uppercase border ${
                            day.accent === "cyan"
                              ? "border-[#00f0ff]/20 text-[#00f0ff] bg-[#00f0ff]/5"
                              : "border-[#d4a853]/20 text-[#d4a853] bg-[#d4a853]/5"
                          }`}
                        >
                          <div
                            className={`w-1 h-1 rounded-full ${
                              day.accent === "cyan" ? "bg-[#00f0ff]" : "bg-[#d4a853]"
                            }`}
                          />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
