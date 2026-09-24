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

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroBanner />
      <BookingWidget />
      <JourneySection />
      <ServicesSection />
      <FreedomJourneySection />
      <MoreThanMilesSection />
      <BookingToArrivalSection />
      <SmartDriverSection />
      <FeaturedNewsSection />
      <PassengerTestimonialsSection />
      <BeyondDestinationsSection />
    </main>
  );
}
