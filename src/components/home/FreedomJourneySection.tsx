import SectionHeading from "../ui/SectionHeading";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string; // Tailored badge background colors matching design
}

const FEATURES: FeatureItem[] = [
  {
    id: "car",
    title: "Choose the Car",
    description: "Pick what suits your comfort.",
    icon: "🚗",
    bgColor: "bg-blue-primary", // #0E52FF
  },
  {
    id: "driver",
    title: "Choose the Driver",
    description: "Based on ratings and reviews.",
    icon: "🛞",
    bgColor: "bg-btn-download", // #FDD300
  },
  {
    id: "fare",
    title: "Choose the Fare",
    description: "Select the bid that fits your budget.",
    icon: "💵",
    bgColor: "bg-emerald-500", // #10B981
  },
];

// // Preview of future GSAP integration: I will targe this .feature-card and use GSAP Animation future ✅✅✅
// useGSAP(() => {
//   gsap.from(".feature-card", {
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2, // Animates Car -> Driver -> Fare sequentially
//     scrollTrigger: {
//       trigger: ".feature-card",
//       start: "top 85%",
//     },
//   });
// });

export default function FreedomJourneySection() {
  return (
    <section className="w-full bg-black text-white py-[70px]">
      <div className="layout-container flex flex-col gap-10">
        
        {/* 1. Section Heading */}
        <SectionHeading
          title="Freedom in Every Journey"
          as="h2"
          className="!text-white"
        />

        {/* 2. Main Banner Image */}
        <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop"
            alt="Passengers enjoying a comfortable ride in a car"
            className="w-full h-[280px] sm:h-[400px] lg:h-[480px] object-cover object-center"
          />
        </div>

        {/* 3. Three Features (Prepared for GSAP Stagger Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="feature-card flex flex-col items-start gap-3"
            >
              {/* Circular Badge Icon */}
              <div
                className={`w-9 h-9 rounded-full ${feature.bgColor} flex items-center justify-center text-white text-base shadow-sm`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}