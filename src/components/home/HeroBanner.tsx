export default function HeroBanner() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-16 pb-12">
      <div className="layout-container">
        {/* Top Split: Heading (Left) vs Paragraph & CTA (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Side: Animated Heading Area */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-hero-title tracking-tight leading-tight">
              Luxury Trips with Comfort
              {/* Blue typing cursor simulation for future animation */}
              <span className="text-blue-primary inline-block font-normal ml-1 animate-pulse">
                |
              </span>
            </h1>
          </div>

          {/* Right Side: Description & Download Button */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 pt-1">
            <p className="text-gray-500 text-base sm:text-lg lg:text-2xl leading-relaxed">
              Choose your city, pick your car and enjoy the journey with
              Garibook’s best drivers.
            </p>

            <a
              href="#"
              className="bg-btn-download hover:opacity-95 text-hero-title font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-3 transition-all cursor-pointer shadow-xs"
            >
              <span className="text-base sm:text-lg">Download App</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
