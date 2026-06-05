import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is this event for?",
    a: "The event is for Painter Growth members who are committed to building an AI-first painting business, deepening their mindset, and connecting with other high-level operators. Whether you're doing $500K or $5M+, if you're ready to evolve — this is your room.",
  },
  {
    q: "What's included in my ticket?",
    a: "Your General Admission ticket includes 3 full days of mastermind sessions (Oct 7–9), AI implementation workshops, breathwork sessions, networking events, and all meals during event hours. VIP tickets include everything in GA plus the High Performance Day (Oct 10), a private dinner with Mike, Jesse & the Coaches at a 5-star steakhouse, bonus swag, a bonus session, and some secret bonuses we'll be giving away along the way.",
  },
  {
    q: "What does VIP get me?",
    a: "VIP gets you closer to the action. You'll attend a private dinner with Mike, Jesse & the Coaches. You get the full High Performance Day on Oct 10 — breathwork, exercise, intimate coaching, and connection. Plus bonus swag, a bonus session, and some secret bonuses we'll be revealing along the way.",
  },
  {
    q: "Can I bring my business partner or spouse?",
    a: "Absolutely. Business partner and spouse tickets are 50% off. Having your key people aligned on the AI-first vision makes implementation 10x faster when you get home.",
  },
  {
    q: "Can I bring my team?",
    a: "Yes! Team tickets are 50% off. Bringing your key team members means everyone leaves aligned and ready to implement together.",
  },
  {
    q: "Do I need AI experience?",
    a: "No. We'll meet you where you are. Whether you've never used AI or you're already experimenting, our team will help you implement AI agents specifically designed for painting businesses.",
  },
  {
    q: "Where is the event held?",
    a: "The Andaz Scottsdale Resort & Spa in Scottsdale, Arizona. One of the most luxurious resorts in the state, designed for deep thinking and transformation.",
  },
  {
    q: "What makes this different from other events?",
    a: "This isn't a conference. It's a transformation. You'll leave with actual AI systems running in your business, a completely renewed mindset, and connections with 7–9 figure operators. No fluff, no theory — just implementation.",
  },
  {
    q: "What's the refund policy?",
    a: "Tickets are non-refundable but transferable. If something comes up, you can transfer your ticket to another painting business owner.",
  },
];

export function FaqSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <p className="font-heading text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-4">
            Section.06 // FAQ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e8eaed]">
            Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00b8c4]">
              Answered
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-panel rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-sm sm:text-base font-medium text-[#e8eaed] pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#00f0ff] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-[#8899aa] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
