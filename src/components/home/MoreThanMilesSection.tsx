import SectionHeading from "../ui/SectionHeading";

interface ServiceCardItem {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const CARDS: ServiceCardItem[] = [
  {
    id: "airport",
    title: "Airport Rentals",
    imageSrc: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Airport car rental service",
  },
  {
    id: "family",
    title: "Family Trips",
    imageSrc: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Family trip inside car",
  },
  {
    id: "tours",
    title: "Long Tours",
    imageSrc: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Group travel on long road trip",
  },
];

export default function MoreThanMilesSection() {
  return (
    <section className="w-full bg-white py-[70px]">
      <div className="layout-container flex flex-col gap-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <SectionHeading
            title="More Than Miles —"
            as="h2"
            className="leading-tight"
          />
          <SectionHeading
            title="We Bring People Together"
            as="h2"
            className="leading-tight"
          />
        </div>

        {/* 3 Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-[380px] sm:h-[420px]"
            >
              {/* Background Image */}
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top-Left Card Title */}
              <h3 className="absolute top-6 left-6 text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}