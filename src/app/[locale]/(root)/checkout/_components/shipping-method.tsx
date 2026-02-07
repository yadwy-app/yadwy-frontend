"use client";

interface ShippingMethodProps {
  shipping: number;
}

export function ShippingMethod({ shipping }: ShippingMethodProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Shipping method</h2>
      <div className="rounded-lg border border-primary bg-primary/5 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Standard</p>
            <p className="text-sm text-muted-foreground">
              Tracking number provided
            </p>
          </div>
          <p className="font-medium">E£{shipping.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
