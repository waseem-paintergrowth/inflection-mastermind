import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-10-07T09:00:00-07:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = EVENT_DATE - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Min" },
    { value: time.seconds, label: "Sec" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {blocks.map((block, i) => (
        <div key={block.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="glass-panel rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[56px] sm:min-w-[72px]">
              <span className="font-heading text-xl sm:text-3xl font-bold text-[#00f0ff] tabular-nums">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-[#667788] mt-1 uppercase tracking-wider">
              {block.label}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span className="text-[#00f0ff]/40 text-xl sm:text-2xl font-light mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
