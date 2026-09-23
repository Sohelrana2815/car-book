import HeroBanner from "../components/home/HeroBanner";
// import BookingSearch from "../components/home/BookingSearch";
// import FeaturesSection from "../components/home/FeaturesSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* 1. Hero Text & CTA */}
      <HeroBanner />

      {/* 2. Upcoming Booking Widget will sit here or overlap between white and blue sections */}
      {/* <BookingSearchWidget /> */}

      {/* 3. Blue Background Section ("From everyday rides...") */}
      {/* <JourneySection /> */}
    </main>
  );
}
