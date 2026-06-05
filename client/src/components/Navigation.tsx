import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "The Event", href: "#inflection" },
  { label: "Experience", href: "#timeline" },
  { label: "Location", href: "#location" },
  { label: "Coaches", href: "#coaches" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0e14]/90 backdrop-blur-xl border-b border-[#00f0ff]/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/manus-storage/Untitleddesign(95)_b2f31d2f.png"
              alt="The Inflection"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]"
            />
            <span className="font-heading text-sm tracking-wider text-[#00f0ff] hidden sm:block">
              THE INFLECTION
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-[11px] tracking-[0.15em] text-[#8899aa] hover:text-[#00f0ff] transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#tickets"
            className="hidden lg:inline-block btn-primary px-6 py-2.5 rounded text-[11px] tracking-wider"
          >
            Get My Ticket
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[#00f0ff]" />
            ) : (
              <Menu className="w-5 h-5 text-[#e8eaed]" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0e14]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="font-heading text-xl tracking-wider text-[#e8eaed] hover:text-[#00f0ff] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#tickets"
              onClick={() => setMobileOpen(false)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="btn-primary px-10 py-4 rounded text-sm mt-4"
            >
              Get My Ticket Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
