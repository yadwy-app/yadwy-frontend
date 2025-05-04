"use client";

import { Check } from "lucide-react";
import Image from "next/image";

export function CompletionStep() {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Check className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">You're all set!</h3>
      <p className="mb-6 text-muted-foreground">
        Your store is now ready. You can start adding products and customizing
        your store.
      </p>
      <Image
        // TODO: add the image of the seller
        src="/placeholder.svg?height=120&width=240"
        alt="Success illustration"
        width={240}
        height={120}
        className="mb-6"
      />
    </div>
  );
}
