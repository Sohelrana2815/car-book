import SectionHeading from "../ui/SectionHeading";

interface ShowcaseCard {
  id: string;
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
  colSpan?: string; // Tailwind grid span for initial layout vs full layout
}

const FEATURE_CARDS: ShowcaseCard[] = [
  // Initial Row (Screenshot 1)
  {
    id: "explore-services",
    title: "Explore Various Ride Services",
    subtitle: "Choose your fare, vehicle and driver",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Explore Various Ride Services App Screen",
    bgColor: "bg-gradient-to-r from-blue-600 to-blue-500",
    colSpan: "lg:col-span-7",
  },
  {
    id: "freedoom-bidding",
    title: "Freedom",
    subtitle: "Choose your fare, vehicle and driver",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0a67f5720775?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Bidding and Fare Selection Screen",
    bgColor: "bg-[#F0F4FF]",
    colSpan: "lg:col-span-5",
  },
  // Revealed Row (Screenshot 2)
  {
    id: "safe-travel",
    title: "Safe travel",
    subtitle: "Choose your fare, vehicle and driver",
    imageSrc: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Safe Travel Map & Insurance",
    bgColor: "bg-[#F0F4FF]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "choose-car",
    title: "Choose Your Preferred Car",
    imageSrc: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Preferred Car Selection List",
    bgColor: "bg-[#F0F4FF]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "smooth-experience",
    title: "Smooth Experience",
    imageSrc: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Smooth Mobile Experience Handheld",
    bgColor: "bg-[#FDD300]", // Matching yellow card theme
    colSpan: "lg:col-span-4",
  },
];

export default function BookingToArrivalSection() {
  return (
    <section className="w-full bg-black text-white py-[70px]">
      <div className="layout-container flex flex-col gap-10">
        
        {/* Header Row: Title on Left, Download Button on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <SectionHeading
            title="From Booking to Arrival It’s All in Your Hands"
            as="h2"
            className="!text-white max-w-xl leading-tight"
          />

          <a
            href="#"
            className="bg-blue-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-3 transition-all cursor-pointer shadow-md self-start sm:self-auto"
          >
            <span>Download App</span>
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

        {/* Feature Cards Grid (Targetable for GSAP ScrollTrigger) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`booking-showcase-card ${card.colSpan} ${card.bgColor} rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg min-h-[320px] transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* Card Image Container */}
              <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-white/10">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Card Text Footer */}
              {card.title && (
                <div className="text-center">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      card.bgColor?.includes("bg-gradient")
                        ? "text-white"
                        : "text-hero-title"
                    }`}
                  >
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p
                      className={`text-xs sm:text-sm mt-1 ${
                        card.bgColor?.includes("bg-gradient")
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {card.subtitle}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}