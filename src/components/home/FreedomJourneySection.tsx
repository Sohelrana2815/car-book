import { FEATURES } from "../../constants/freedomJourneyData";
import SectionHeading from "../ui/SectionHeading";

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
            src="/assets/services/garibook_freedom.webp"
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
              {/* Circular Badge Icon with Image */}
              <div
                className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center p-2 shadow-sm`}
              >
                <img
                  src={feature.iconSrc}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
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
