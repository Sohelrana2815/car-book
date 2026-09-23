import BookingWidget from "../components/home/BookingWidget";
import HeroBanner from "../components/home/HeroBanner";
import JourneySection from "../components/home/JourneySection";
import ServicesSection from "../components/home/ServicesSection";
// import BookingSearch from "../components/home/BookingSearch";
// import FeaturesSection from "../components/home/FeaturesSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* 1. Hero Text & CTA */}
      <HeroBanner />
      {/* 2. Floating Search Form (Straddles Hero and Journey sections) */}
      <BookingWidget />

      {/* 3. Blue Background Stat Section */}
      <JourneySection />
      {/* 4. Services Section (~70px Vertical Padding Built-In) */}
      <ServicesSection />
    </main>
  );
}
