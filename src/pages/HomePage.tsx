import BeyondDestinationsSection from "../components/home/BeyondDestinationsSection";
import BookingToArrivalSection from "../components/home/BookingToArrivalSection";
import BookingWidget from "../components/home/BookingWidget";
import FeaturedNewsSection from "../components/home/FeaturedNewsSection";
import FreedomJourneySection from "../components/home/FreedomJourneySection";
import HeroBanner from "../components/home/HeroBanner";
import JourneySection from "../components/home/JourneySection";
import MoreThanMilesSection from "../components/home/MoreThanMilesSection";
import PassengerTestimonialsSection from "../components/home/PassengerTestimonialsSection";
import ServicesSection from "../components/home/ServicesSection";
import SmartDriverSection from "../components/home/SmartDriverSection";
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
      {/* 5. Freedom in Every Journey Section (Black background) */}
      <FreedomJourneySection />
      {/* 6. More Than Miles — We Bring People Together Section */}
      <MoreThanMilesSection />
      {/* 7. From Booking to Arrival Section (Black) */}
      <BookingToArrivalSection />
      {/* 8. Be a Smart Driver Banner */}
      <SmartDriverSection />
      {/* 9. We Featured by Top News Platforms */}
      <FeaturedNewsSection />
      {/* 10. Our Passengers Speak For Us (Feedback Section) */}
      <PassengerTestimonialsSection />
      {/* 11. Beyond Destinations & Mobile App Download Banner */}
      <BeyondDestinationsSection />
    </main>
  );
}
