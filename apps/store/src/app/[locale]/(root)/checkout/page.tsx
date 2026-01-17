import { CheckoutContent } from "./_components/checkout-content";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>
        <CheckoutContent />
      </div>
    </div>
  );
}
