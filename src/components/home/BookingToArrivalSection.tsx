import SectionHeading from "../ui/SectionHeading";

interface ShowcaseCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  colSpan?: string;
}

const FEATURE_CARDS: ShowcaseCard[] = [
  // Top Row (2 cols + 1 col)
  {
    id: "explore-services",
    imageSrc: "assets/services/explore.jpeg",
    imageAlt: "Explore Various Ride Services App Screen",
    colSpan: "lg:col-span-2",
  },
  {
    id: "freedoom-bidding",
    imageSrc: "assets/services/freedom.jpg",
    imageAlt: "Bidding and Fare Selection Screen",
    colSpan: "lg:col-span-1",
  },
  // Bottom Row (1 col + 1 col + 1 col)
  {
    id: "safe-travel",
    imageSrc: "assets/services/prefarred_car.jpg",
    imageAlt: "Safe Travel Map & Insurance",
    colSpan: "lg:col-span-1",
  },
  {
    id: "choose-car",
    imageSrc: "assets/services/smooth.jpg",
    imageAlt: "Preferred Car Selection List",
    colSpan: "lg:col-span-1",
  },
  {
    id: "smooth-experience",
    imageSrc:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Smooth Mobile Experience Handheld",
    colSpan: "lg:col-span-1",
  },
];

export default function BookingToArrivalSection() {
  return (
    <section className="w-full bg-black text-white py-[70px]">
      <div className="layout-container flex flex-col gap-10">
        {/* Header Row */}
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

        {/* Feature Cards Grid (3-column system) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`booking-showcase-card ${card.colSpan} rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 flex justify-center items-center ${
                card.colSpan === "lg:col-span-1" ? "aspect-square" : "aspect-[2/1] lg:aspect-auto"
              }`}
            >
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}