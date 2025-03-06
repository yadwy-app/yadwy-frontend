import { SectionTitle } from "~/components/section";
import Checkout from "./_components/checkout";
import OrderSummary from "./_components/order-summary";
import { Card, CardContent } from "~/components/ui/card";
import { Package } from "lucide-react";
export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-10 p-5">
      <SectionTitle>Checkout</SectionTitle>
      <div className="flex flex-col gap-4 md:flex-row">
        <Checkout />
        <div className="md:w-1/2 w-full">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <Package className="h-5 w-5 text-muted-foreground" />
              </div>
              <OrderSummary />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
