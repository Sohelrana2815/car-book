import SectionHeading from "../ui/SectionHeading";

interface SmartDriverSectionProps {
  bannerBgColor?: string;
  driverImage?: string;
}

export default function SmartDriverSection({
  bannerBgColor = "bg-[#FDD300]", // Garibook signature yellow
  driverImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
}: SmartDriverSectionProps) {
  return (
    <section className="smart-driver-section w-full bg-white py-[70px]">
      <div className="layout-container flex flex-col gap-8">
        
        {/* Section Heading */}
        <SectionHeading title="Be a Smart Driver" as="h2" />

        {/* Yellow Promo Banner */}
        <div
          className={`w-full ${bannerBgColor} rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative`}
        >
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 max-w-xl z-10">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-primary tracking-tight leading-tight">
              0% Commission <br />
              100% Freedom
            </h3>

            <a
              href="#"
              className="bg-blue-primary hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center gap-3 transition-all cursor-pointer shadow-md text-sm sm:text-base"
            >
              <span>Download Smart Driver App</span>
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

          {/* Right Driver Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
            <div className="relative w-full max-w-md h-[260px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md border-4 border-white/20">
              <img
                src={driverImage}
                alt="Smart Driver holding smartphone"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}