import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AmbientSoundToggle() {
  const [muted, setMuted] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggle = () => {
    setMuted(!muted);
    // Placeholder: In production, this would control an ambient audio track
    if (muted) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 whitespace-nowrap glass-panel rounded-md px-3 py-1.5"
            >
              <p className="text-[10px] text-[#8899aa]">Ambient audio coming soon</p>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={handleToggle}
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:border-[#00f0ff]/30 transition-all duration-300 group"
          aria-label={muted ? "Unmute ambient sound" : "Mute ambient sound"}
        >
          {muted ? (
            <VolumeX className="w-4 h-4 text-[#667788] group-hover:text-[#00f0ff] transition-colors" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#00f0ff]" />
          )}
        </button>
      </div>
    </div>
  );
}
