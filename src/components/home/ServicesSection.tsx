import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  isPrimaryDefault?: boolean;
}

const TABS_DATA: Record<string, { subtitle: string; cards: ServiceCard[] }> = {
  Rides: {
    subtitle: "Every Ride One Platform",
    cards: [
      {
        id: "intercity",
        title: "Intercity Car Rental",
        description: "Travel between cities with comfort and confidence.",
        icon: "🚙",
        isPrimaryDefault: true,
      },
      {
        id: "rideshare",
        title: "Ride share",
        description: "Go anywhere in the city, quickly and easily.",
        icon: "🚕",
      },
      {
        id: "airport",
        title: "Airport Rental",
        description:
          "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
        icon: "🛫",
      },
      {
        id: "hourly",
        title: "Hourly Rental",
        description: "Rent a car by the hour, tailored to your needs.",
        icon: "⏱️",
      },
    ],
  },
  "Garibook Business": {
    subtitle: "Corporate Mobility Solutions",
    cards: [
      {
        id: "corp-fleet",
        title: "Corporate Fleet",
        description: "Dedicated executive transportation for company teams.",
        icon: "💼",
        isPrimaryDefault: true,
      },
      {
        id: "employee-ride",
        title: "Employee Commute",
        description: "Automated daily shuttles for your workforce.",
        icon: "🚌",
      },
    ],
  },
  "Garibook Club": {
    subtitle: "Exclusive VIP Privileges",
    cards: [
      {
        id: "premium-club",
        title: "VIP Membership",
        description: "Priority bookings and exclusive premium perks.",
        icon: "👑",
        isPrimaryDefault: true,
      },
    ],
  },
  VMS: {
    subtitle: "Vehicle Management System",
    cards: [
      {
        id: "fleet-track",
        title: "Real-time Tracking",
        description: "Monitor vehicle telemetry and driver status live.",
        icon: "🛰️",
        isPrimaryDefault: true,
      },
    ],
  },
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Rides");
  const currentContent = TABS_DATA[activeTab];

  return (
    <section className="w-full bg-white py-17.5">
      <div className="layout-container flex flex-col gap-8">
        {/* Section Title & Tab Category Controls */}
        <div className="flex flex-col gap-6">
          <SectionHeading title="Our Services" as="h2" />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3.5 pt-2">
            {Object.keys(TABS_DATA).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-blue-primary text-white shadow-sm"
                    : "bg-[#EAEAEA] hover:bg-gray-300 text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Subheading for Active Tab */}
        <div className="pt-2">
          <SectionHeading
            title={currentContent.subtitle}
            as="h3"
            className="text-3xl sm:text-4xl"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentContent.cards.map((card) => {
            const isPrimary = card.isPrimaryDefault;

            return (
              <div
                key={card.id}
                className={`group rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[260px] ${
                  isPrimary
                    ? "bg-blue-primary text-white shadow-md"
                    : "bg-card-bg hover:bg-blue-primary text-hero-title hover:text-white shadow-xs hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Illustration / Icon Box */}
                <div className="mb-6 text-4xl bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                  {card.icon}
                </div>

                {/* Content Area */}
                <div>
                  <h4
                    className={`text-lg font-bold mb-2 transition-colors ${
                      isPrimary
                        ? "text-white"
                        : "text-hero-title group-hover:text-white"
                    }`}
                  >
                    {card.title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      isPrimary
                        ? "text-white/90"
                        : "text-gray-500 group-hover:text-white/90"
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
    </section>
  );
}
