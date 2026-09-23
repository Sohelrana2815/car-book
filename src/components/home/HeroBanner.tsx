import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const HEADLINES = [
  "Assurance of Effortless Travel",
  "Luxury Trips with Comfort",
  "Your Journey Starts Here",
];

export default function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineTextRef = useRef<HTMLSpanElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ================= 1. Right Side Entrance Animation =================
      // Animates the right-side wrapper container directly so paragraph & button move together in 100% sync
      if (rightContentRef.current) {
        gsap.fromTo(
          rightContentRef.current,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.6,
          },
        );
      }

      // ================= 2. Left Side Typewriter Loop =================
      if (headlineTextRef.current) {
        const typewriterTl = gsap.timeline({
          repeat: -1, // Endless loop
          repeatDelay: 0.3,
        });

        HEADLINES.forEach((text) => {
          typewriterTl
            // Type the text character by character
            .to(headlineTextRef.current, {
              duration: text.length * 0.07,
              text: text,
              ease: "none",
            })
            // Pause while fully typed out
            .to({}, { duration: 1.8 })
            // Delete text character by character
            .to(headlineTextRef.current, {
              duration: 0,
              text: "",
              ease: "none",
            });
        });
      }
    }, containerRef);

    // Clean up animations when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white pt-10 sm:pt-16 pb-12 overflow-hidden"
    >
      <div className="layout-container">
        {/* Top Split: Heading (Left) vs Paragraph & CTA (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Side: Typewriter Heading Area */}
          <div className="lg:col-span-7 min-h-[110px] sm:min-h-[130px] flex items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-hero-title tracking-tight leading-tight">
              {/* Target element for GSAP TextPlugin */}
              <span ref={headlineTextRef}></span>

              {/* Blinking Cursor */}
              <span className="text-blue-primary inline-block font-normal ml-1 animate-pulse">
                |
              </span>
            </h1>
          </div>

          {/* Right Side: Description & Download Button Container */}
          <div
            ref={rightContentRef}
            className="lg:col-span-5 flex flex-col items-start gap-6 pt-1"
          >
            <p className="text-gray-500 text-base sm:text-lg lg:text-2xl leading-relaxed">
              Choose your city, pick your car and enjoy the journey with
              Garibook’s best drivers.
            </p>

            <Link
              to="#"
              /* Note: Removed transition-all to eliminate CSS vs GSAP conflict */
              className="bg-btn-download hover:opacity-95 text-hero-title font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-3 cursor-pointer shadow-xs"
            >
              <span className="text-base sm:text-lg">Download App</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
