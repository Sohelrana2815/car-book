export default function FooterPaymentMethods() {
  return (
    <div className="w-full bg-white py-4 px-4 border-t border-gray-200 flex justify-center min-w-0">
      <div className="layout-container w-full max-w-full min-w-0 flex justify-start lg:justify-center overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <img
          src="/assets/footer/ssl.png"
          alt="Supported Payment Gateways - Visa, Mastercard, bKash, Nagad, SSLCommerz"
          className="h-10 sm:h-12 lg:h-14 w-auto max-w-none object-contain shrink-0"
        />
      </div>
    </div>
  );
}