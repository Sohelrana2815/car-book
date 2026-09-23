export default function JourneySection() {
  const stats = [
    { value: "300,000+", label: "Trip Requests" },
    { value: "850,000+", label: "Total Customers" },
    { value: "35,000+", label: "Active Drivers" },
    { value: "64", label: "District Covered" },
  ];

  return (
    <section className="w-full bg-blue-primary text-white pt-36 sm:pt-44 pb-16 relative overflow-hidden">
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

      {/* Decorative City Graphic at Bottom */}
      <div className="w-full mt-12 opacity-30 border-b border-white/40 flex items-end justify-between px-4">
        <span className="text-4xl">🚗</span>
        <div className="text-xs font-mono tracking-widest text-white/80">
          ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
        </div>
      </div>
    </section>
  );
}