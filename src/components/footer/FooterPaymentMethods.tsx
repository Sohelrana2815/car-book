export default function FooterPaymentMethods() {
  return (
    <div className="w-full bg-white py-2 px-4 border-t border-gray-200 flex items-center justify-center overflow-hidden">
      <div className="layout-container flex items-center justify-center gap-4 overflow-x-auto no-scrollbar">
        <span className="text-xs font-bold text-blue-900 shrink-0 border-r border-gray-300 pr-3">
          Pay With
        </span>
        <img
          src="https://garibook.com/assets/images/payment-methods.png"
          alt="Supported Payment Gateways - Visa, Mastercard, bKash, Nagad"
          className="h-7 min-w-[600px] object-contain"
        />
      </div>
    </div>
  );
}