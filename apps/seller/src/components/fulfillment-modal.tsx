"use client";

import { Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface FulfillmentModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export function FulfillmentModal({
  open,
  onClose,
  onSubmit,
}: FulfillmentModalProps) {
  const [notes, setNotes] = useState("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Fulfill Order</DialogTitle>
          <DialogDescription>
            Confirm the fulfillment details for this order. Once submitted, our
            admin team will review and arrange pickup.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Fulfillment Process</h3>
            <ol className="ml-5 list-decimal space-y-2 text-sm text-muted-foreground">
              <li>You confirm the order is ready for pickup</li>
              <li>Admin reviews and confirms the pickup request</li>
              <li>Shipping partner is notified to collect the package</li>
              <li>You'll receive a notification when pickup is scheduled</li>
            </ol>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any special instructions or notes for the pickup"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>
            <Package className="mr-2 h-4 w-4" />
            Confirm Fulfillment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
