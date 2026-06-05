import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-[#0a0e14]/95 backdrop-blur-xl border-t border-[#00f0ff]/10"
        >
          <a
            href="#tickets"
            className="btn-primary block w-full text-center py-4 rounded text-sm font-bold"
          >
            Get My Ticket Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
