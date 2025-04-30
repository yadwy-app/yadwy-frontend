"use client";

import {
  ArrowLeft,
  Box,
  Calendar,
  Clock,
  CreditCard,
  MapPin,
  Package,
  Truck,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AddressModal } from "@/components/address-modal";
import { FulfillmentModal } from "@/components/fulfillment-modal";
import { FulfillmentSuccessModal } from "@/components/fulfillment-success-modal";
import { Badge } from "@yadwy/ui";
import { Button } from "@yadwy/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@yadwy/ui";
import { Separator } from "@yadwy/ui";

interface OrderDetailsProps {
  orderId: string;
}

export function OrderDetails({ orderId }: OrderDetailsProps) {
  const [orderStatus, setOrderStatus] = useState("New");
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showFulfillmentModal, setShowFulfillmentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [hasPickupAddress, setHasPickupAddress] = useState(false);

  // Mock order data - in a real app, this would be fetched from an API
  const order = {
    id: orderId,
    customer: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
    },
    shippingAddress: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zip: "90210",
      country: "United States",
    },
    items: [
      {
        id: "PROD-001",
        name: "Handmade Ceramic Mug",
        image: "/placeholder.svg?height=80&width=80",
        price: 24.99,
        quantity: 2,
        total: 49.98,
      },
      {
        id: "PROD-005",
        name: "Scented Candle Set",
        image: "/placeholder.svg?height=80&width=80",
        price: 39.99,
        quantity: 1,
        total: 39.99,
      },
    ],
    shipping: {
      method: "Yadwy Shipping",
      cost: 8.99,
    },
    payment: {
      method: "Credit Card",
      subtotal: 89.97,
      tax: 7.2,
      total: 106.16,
    },
    dates: {
      ordered: "Apr 13, 2023",
      updated: "Apr 13, 2023",
    },
  };

  const handleFulfillOrder = () => {
    if (!hasPickupAddress) {
      setShowAddressModal(true);
    } else {
      setShowFulfillmentModal(true);
    }
  };

  const handleAddressSubmit = () => {
    setHasPickupAddress(true);
    setShowAddressModal(false);
    setShowFulfillmentModal(true);
  };

  const handleFulfillmentSubmit = () => {
    setOrderStatus("Pending Pickup Confirmation");
    setShowFulfillmentModal(false);
    setShowSuccessModal(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            New
          </Badge>
        );
      case "Pending Pickup Confirmation":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending Pickup Confirmation
          </Badge>
        );
      case "Awaiting Pickup":
        return (
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
            Awaiting Pickup
          </Badge>
        );
      case "Shipped":
        return (
          <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
            Shipped
          </Badge>
        );
      case "Delivered":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Delivered
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/orders">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to orders</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">
            Order {order.id}
          </h1>
          <div className="ml-auto flex items-center gap-2">
            {getStatusBadge(orderStatus)}
            {orderStatus === "New" && (
              <Button onClick={handleFulfillOrder}>Fulfill Order</Button>
            )}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
                <CardDescription>Items included in this order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 rounded-lg border p-4"
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Product ID: {item.id}
                        </p>
                        <div className="mt-1 flex items-center justify-between">
                          <p className="text-sm">
                            ${item.price.toFixed(2)} × {item.quantity}
                          </p>
                          <p className="font-medium">
                            ${item.total.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-5">
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
                <CardDescription>
                  Track the progress of this order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Order Placed</h3>
                        <p className="text-sm text-muted-foreground">
                          {order.dates.ordered}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Order was placed by {order.customer.name}
                      </p>
                    </div>
                  </div>

                  {orderStatus !== "New" && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                        <Package className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Fulfillment Started</h3>
                          <p className="text-sm text-muted-foreground">Today</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Order is pending pickup confirmation from admin
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-5">
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">{order.customer.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {order.customer.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {order.customer.phone}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Shipping Address</h3>
                      <p className="text-sm text-muted-foreground">
                        {order.shippingAddress.street}
                        <br />
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.state}{" "}
                        {order.shippingAddress.zip}
                        <br />
                        {order.shippingAddress.country}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Truck className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Shipping Method</h3>
                      <p className="text-sm text-muted-foreground">
                        {order.shipping.method}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ${order.shipping.cost.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Payment Method</h3>
                      <p className="text-sm text-muted-foreground">
                        {order.payment.method}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm">Subtotal</p>
                      <p className="text-sm font-medium">
                        ${order.payment.subtotal.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Shipping</p>
                      <p className="text-sm font-medium">
                        ${order.shipping.cost.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Tax</p>
                      <p className="text-sm font-medium">
                        ${order.payment.tax.toFixed(2)}
                      </p>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <p className="font-medium">Total</p>
                      <p className="font-medium">
                        ${order.payment.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Box className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Order ID</h3>
                      <p className="text-sm text-muted-foreground">
                        {order.id}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Order Date</h3>
                      <p className="text-sm text-muted-foreground">
                        {order.dates.ordered}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AddressModal
        open={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onSubmit={handleAddressSubmit}
      />

      <FulfillmentModal
        open={showFulfillmentModal}
        onClose={() => setShowFulfillmentModal(false)}
        onSubmit={handleFulfillmentSubmit}
      />

      <FulfillmentSuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}
