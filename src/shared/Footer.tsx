import FooterNavColumns from "../components/footer/FooterNavColumns";
import FooterAppAndPartners from "../components/footer/FooterAppAndPartners";
import FooterBottomBar from "../components/footer/FooterBottomBar";
import FooterPaymentMethods from "../components/footer/FooterPaymentMethods";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16">
      {/* Main Container */}
      <div className="layout-container px-4 sm:px-6 lg:px-8">
        {/* Section 1: Navigation and Contacts */}
        <FooterNavColumns />

        {/* Section 2: Mobile App Banner & Partners */}
        <FooterAppAndPartners />

        {/* Section 3: Legal, Trade License & Copyright */}
        <FooterBottomBar />
      </div>

      {/* Section 4: Accepted Payment Methods Banner */}
      <FooterPaymentMethods />
    </footer>
  );
}
