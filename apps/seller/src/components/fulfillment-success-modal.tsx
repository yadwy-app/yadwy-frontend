"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FulfillmentSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function FulfillmentSuccessModal({
  open,
  onClose,
}: FulfillmentSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center">
            Order Fulfillment Initiated
          </DialogTitle>
          <DialogDescription className="text-center">
            Your fulfillment request has been submitted successfully. The admin
            team will review and confirm the pickup shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="rounded-lg border bg-muted/50 p-4">
            <h3 className="mb-2 font-medium">What happens next?</h3>
            <ol className="ml-5 list-decimal space-y-2 text-sm text-muted-foreground">
              <li>Admin reviews your fulfillment request</li>
              <li>Once approved, the shipping partner will be notified</li>
              <li>You'll receive a notification when pickup is scheduled</li>
              <li>Prepare your package for collection</li>
            </ol>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose} className="w-full">
            Return to Order
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
