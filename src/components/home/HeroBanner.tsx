export default function HeroBanner() {
  return (
    // Outer section: full screen width + background color
    <section className="w-full bg-blue-primary text-white">
      {/* Inner section: max width 7xl + centered content */}
      <div className="layout-container py-12">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Assurance of Effortless Travel
        </h1>
        <p className="mt-4 text-hero-paragraph">
          From everyday rides to meaningful journeys
        </p>
      </div>
    </section>
  );
}