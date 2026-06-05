import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "I doubled my sales in 90 days, built an 18-person team, and scaled to seven figures. Now I'm pursuing a $10M goal.",
    name: "Josh Smith",
    company: "Florida Painting Contractor",
    metric: "$300K in 90 days",
  },
  {
    quote:
      "Painter Growth helped me escape burnout, build systems, hire strong teams, and grow from one job booked to $100K months — pushing toward $1M.",
    name: "Isaac Mama",
    company: "White Oak Painting",
    metric: "$100K/month booked",
  },
  {
    quote:
      "I scaled my painting business from burnout to a streamlined company generating over $1.7M annually by building systems, getting off the tools, and leading a strong team.",
    name: "Chris Davis",
    company: "Painting Business Owner",
    metric: "Scaled to $1.7M",
  },
  {
    quote:
      "I went from $74K a month to $168K a month in less than 90 days by following a couple of their simple frameworks.",
    name: "Edgar",
    company: "Painting Company Owner",
    metric: "+$94K/month in 90 days",
  },
  {
    quote:
      "I used to cry on my office floor. Painter Growth helped me overcome business struggles, boost profit margins, and reach over $80K in monthly revenue.",
    name: "Rachel Smith",
    company: "X Painting, Cleveland",
    metric: "$80K+/month revenue",
  },
  {
    quote:
      "I 10x'd my business in 5 months — from $9K to $90K monthly revenue using Painter Growth strategies and systems.",
    name: "Joe Martinta",
    company: "Fresh Coat Painters NW Houston",
    metric: "10x in 5 months",
  },
];

export function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 sm:py-32" ref={ref}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="font-heading text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-4">
            Real Results from Real Contractors
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e8eaed]">
            Transformations{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00b8c4]">
              Speak
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="glass-panel rounded-xl p-8 sm:p-12 min-h-[280px] flex flex-col justify-between">
            {/* Quote */}
            <div className="relative">
              <span className="absolute -top-4 -left-2 text-5xl text-[#00f0ff]/20 font-serif">
                &ldquo;
              </span>
              <p className="text-base sm:text-lg text-[#c8ccd0] leading-relaxed italic pl-6">
                {testimonials[activeIndex].quote}
              </p>
            </div>

            {/* Attribution */}
            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-heading text-sm font-semibold text-[#e8eaed]">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-xs text-[#667788] mt-0.5">
                  {testimonials[activeIndex].company}
                </p>
              </div>
              <div className="glass-panel-gold rounded-full px-4 py-1.5">
                <p className="text-xs font-heading text-[#d4a853] tracking-wide">
                  {testimonials[activeIndex].metric}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-[#00f0ff] w-6"
                    : "bg-[#00f0ff]/20 hover:bg-[#00f0ff]/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
