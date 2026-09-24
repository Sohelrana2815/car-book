import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { TABS_DATA } from "../../constants/serviceData";

// Type definitions for card-based tab vs banner-based tab


export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("Rides");
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const currentTab = TABS_DATA[activeTab];

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="layout-container flex flex-col gap-8">
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col gap-6">
          <SectionHeading title="Our Services" as="h2" />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-3">
            {Object.keys(TABS_DATA).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    setHoveredCardId(null); // reset hover state when switching tabs
                  }}
                  className={`px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-blue-primary text-white shadow-sm"
                      : "bg-[#F3F4F6] hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- TAB CONTENT TYPE 1: CARDS (Rides) --- */}
        {currentTab.type === "cards" && (
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-hero-title">
              {currentTab.subtitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentTab.cards.map((card, index) => {
                // If hovering over any card, activate that card; otherwise default to card 0
                const isActive = hoveredCardId
                  ? hoveredCardId === card.id
                  : index === 0;

                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    className={`group rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-65 border ${
                      isActive
                        ? "bg-blue-primary text-white border-blue-primary shadow-lg"
                        : "bg-[#F9FAFB] border-gray-100 text-gray-900 shadow-xs"
                    }`}
                  >
                    {/* Image Icon Container */}
                    <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center p-2 bg-white/10">
                      <img
                        src={card.iconSrc}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h4
                        className={`text-xl font-bold mb-2 transition-colors ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {card.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          isActive ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --- TAB CONTENT TYPE 2: BANNER (Business / Club / VMS) --- */}
        {currentTab.type === "banner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-hero-title leading-tight">
                {currentTab.banner.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {currentTab.banner.description}
              </p>
              <a
                href={currentTab.banner.buttonUrl || "#"}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-blue-primary hover:bg-blue-700 text-white font-semibold transition-all shadow-md hover:shadow-lg mt-2 group"
              >
                <span>{currentTab.banner.buttonText}</span>
                <ArrowRight />
              </a>
            </div>

            {/* Right Image Banner Column */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <img
                src={currentTab.banner.imageSrc}
                alt={currentTab.banner.title}
                className="w-full h-auto object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
