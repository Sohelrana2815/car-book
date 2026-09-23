import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function JourneySection() {
  const containerRef = useRef<HTMLElement>(null);
  const wheelsRef = useRef<HTMLImageElement[]>([]);
  const skylineRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "300,000+", label: "Trip Requests" },
    { value: "850,000+", label: "Total Customers" },
    { value: "35,000+", label: "Active Drivers" },
    { value: "64", label: "District Covered" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Endless wheel rotation around their exact center
      if (wheelsRef.current.length > 0) {
        gsap.to(wheelsRef.current, {
          rotation: 360,
          duration: 0.6, // Adjust spin speed (lower = faster)
          repeat: -1,
          ease: "none",
          transformOrigin: "center center", // Ensures zero wobble during rotation
        });
      }

      // 2. Hardware-accelerated infinite horizontal background loop
      if (skylineRef.current) {
        gsap.to(skylineRef.current, {
          xPercent: -50, // Moves 100% of the viewport width (half of the 200% container)
          duration: 10, // Adjust drive speed (higher = slower background)
          repeat: -1,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-blue-primary text-white pt-36 sm:pt-44 pb-28 relative overflow-hidden"
    >
      <div className="layout-container">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
          From Everyday Rides to Meaningful Journeys
        </h2>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-btn-download">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base text-white/90 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Treadmill Container */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden pointer-events-none">
        {/* 1. Seamless City Skyline Container (Double width container with 2 identical images) */}
        <div
          ref={skylineRef}
          className="flex w-[200%] h-full absolute bottom-0 left-0 pointer-events-none"
        >
          <img
            src="/assets/city-skyline.svg"
            alt="City Skyline"
            className="w-1/2 h-full object-cover object-bottom opacity-30 select-none"
          />
          <img
            src="/assets/city-skyline.svg"
            alt="City Skyline"
            className="w-1/2 h-full object-cover object-bottom opacity-30 select-none"
          />
        </div>

        {/* 2. Fixed Car Position in Bottom Left */}
        <div className="absolute left-6 sm:left-12 mt-7 md:mt-4 z-10 w-40 lg:w-48">
          <div className="relative w-full">
            {/* Car Body (Image without embedded wheels) */}
            <img
              src="/assets/car-body.png"
              alt="Car Body"
              className="w-full h-auto block select-none"
            />

            {/* Rear Wheel */}
            <img
              ref={(el) => {
                if (el) wheelsRef.current[0] = el;
              }}
              src="/assets/car-wheel.svg"
              alt="Rear Wheel"
              className="absolute left-[10%] bottom-[8%] w-[20%] h-auto select-none pointer-events-none"
            />

            {/* Front Wheel */}
            <img
              ref={(el) => {
                if (el) wheelsRef.current[1] = el;
              }}
              src="/assets/car-wheel.svg"
              alt="Front Wheel"
              className="absolute right-[10%] bottom-[8%] w-[20%] h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
