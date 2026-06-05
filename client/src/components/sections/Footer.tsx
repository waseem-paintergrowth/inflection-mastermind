export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 border-t border-[#00f0ff]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/inflection1_0fe58a59.jpg"
              alt="The Inflection"
              className="w-10 h-10 object-contain rounded"
            />
            <div>
              <p className="font-heading text-sm tracking-wider text-[#00f0ff]">
                THE INFLECTION
              </p>
              <p className="text-[10px] text-[#667788] mt-0.5">by Painter Growth</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-6 text-xs text-[#667788]">
            <a href="#inflection" className="hover:text-[#00f0ff] transition-colors">
              The Event
            </a>
            <a href="#timeline" className="hover:text-[#00f0ff] transition-colors">
              Experience
            </a>
            <a href="#location" className="hover:text-[#00f0ff] transition-colors">
              Location
            </a>
            <a href="#faq" className="hover:text-[#00f0ff] transition-colors">
              FAQ
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-[10px] text-[#4a5568]">
              &copy; 2026 Painter Growth. All rights reserved.
            </p>
            <p className="text-[10px] text-[#4a5568] mt-1">
              Oct 7–10 &middot; Scottsdale, AZ
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
        <p className="mt-4 text-center text-[9px] text-[#3a4558] tracking-widest uppercase font-heading">
          AI-First or Left Behind
        </p>
      </div>
    </footer>
  );
}
