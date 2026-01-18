"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";
import { type CheckoutFormData, checkoutSchema } from "~/schemas/checkout";
import { placeOrder } from "~/services/mock/order-service";
import { useCartStore } from "~/stores/cart-store";
import { DeliveryForm } from "./delivery-form";
import { PaymentForm } from "./payment-form";
import { ShippingMethod } from "./shipping-method";

interface CheckoutFormProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export function CheckoutForm({ subtotal, shipping, total }: CheckoutFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      contact: { email: "customer@yadwy.com", phone: "" },
      delivery: {
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        governorate: "",
        postalCode: "",
      },
      payment: { method: "card" },
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);

    try {
      const result = await placeOrder({
        ...data,
        items,
        subtotal,
        shipping,
        total,
      });

      if (result.status === "success") {
        clearCart();
        router.push(`/checkout/thank-you?orderId=${result.orderId}`);
      } else {
        toast({
          title: "Order failed",
          description: result.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Order failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <DeliveryForm form={form} />
      <ShippingMethod shipping={shipping} />
      <PaymentForm form={form} />

      <Button
        type="submit"
        size="lg"
        className="w-full bg-black hover:bg-black/90 text-white py-6 text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="me-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Pay now"
        )}
      </Button>
    </form>
  );
}
