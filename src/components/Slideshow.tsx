'use client';
import { useState, useEffect, useRef } from "react";
import { brands, Brand } from "@/data/clients";

export default function BrandSlider() {
  const [currentModal, setCurrentModal] = useState<Brand | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  const duplicatedBrands = [...brands, ...brands];
  const shouldPause = isHovered || isArrowHovered || currentModal;

  const pause = () => setIsArrowHovered(true);
  const resume = () => setIsArrowHovered(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const el = sliderRef.current;
    const originalClass = el.className;

    // Temporarily remove the animation class
    el.classList.remove("animate-marquee");

    // Force reflow so the browser registers the change
    void el.offsetWidth;

    // Re-add the class to restart the animation
    el.className = originalClass;
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Row */}
      <div
        ref={sliderRef}
        className={`flex whitespace-nowrap animate-marquee`}
        style={{ animationPlayState: shouldPause ? "paused" : "running", animationDuration: `${30 / speedMultiplier}s` }}
      >
        {duplicatedBrands.map((brand, idx) => (
          <button
            key={brand.id + idx}
            onClick={() => setCurrentModal(brand)}
            className="shrink-0 p-4 transition-transform duration-300 hover:scale-105"
          >
            <img
              key={`${brand.id}-${idx}`}
              src={brand.logo}
              alt={brand.name}
              className="h-40 w-auto object-contain cursor-pointer"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {currentModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-6">
          <div className="bg-white rounded-xl p-6 w-full max-w-125 mx-5 text-black relative">
            <h3 className="text-xl font-semibold mb-4">{currentModal.header}</h3>
            {currentModal.paragraphs.map((text, idx) => (
              <p key={idx} className="mb-2">{text}</p>
            ))}
            <button
              onClick={() => setCurrentModal(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Left Arrow - decrease speed */}
      {isHovered && (
        <button
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow cursor-pointer"
        >
          ◀
        </button>
      )}

      {/* Right Arrow - increase speed */}
      {isHovered && (
        <button
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow cursor-pointer"
        >
          ▶
        </button>
      )}

      {/* Tailwind CSS animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-60%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}