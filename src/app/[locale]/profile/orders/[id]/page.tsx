import Link from "next/link";
import { ArrowLeft, Package, Truck } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Steps, Step } from "~/components/ui/steps";

interface OrderDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  return Promise.resolve(params).then(({ id }) => {
    // In a real app, you would fetch the order details based on the ID
    const order = {
      id,
      date: "March 5, 2023",
      total: "$129.99",
      status: "Delivered",
      trackingNumber: "TRK123456789",
      estimatedDelivery: "March 8, 2023",
      shippingAddress: {
        name: "John Doe",
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        country: "United States",
      },
      paymentMethod: "Credit Card (ending in 4242)",
      items: [
        {
          name: "Wireless Headphones",
          quantity: 1,
          price: "$89.99",
        },
        {
          name: "Phone Case",
          quantity: 2,
          price: "$39.99",
        },
      ],
      timeline: [
        {
          status: "Order Placed",
          date: "March 5, 2023",
          time: "9:30 AM",
          completed: true,
        },
        {
          status: "Processing",
          date: "March 5, 2023",
          time: "11:45 AM",
          completed: true,
        },
        {
          status: "Shipped",
          date: "March 6, 2023",
          time: "2:15 PM",
          completed: true,
        },
        {
          status: "Out for Delivery",
          date: "March 8, 2023",
          time: "8:20 AM",
          completed: true,
        },
        {
          status: "Delivered",
          date: "March 8, 2023",
          time: "2:30 PM",
          completed: true,
        },
      ],
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/profile/orders">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to orders</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Order #{id}</h1>
            <p className="text-muted-foreground">Placed on {order.date}</p>
          </div>
        </div>
        <Separator />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
                <CardDescription>
                  Current status:{" "}
                  <span className="font-medium text-green-600">
                    {order.status}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Steps className="w-full">
                  {order.timeline.map((step, index) => (
                    <Step key={index} completed={step.completed}>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{step.status}</p>
                        <p className="text-xs text-muted-foreground">
                          {step.date}, {step.time}
                        </p>
                      </div>
                    </Step>
                  ))}
                </Steps>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-16 rounded bg-muted flex items-center justify-center">
                          <Package className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Qty: {item.quantity}
                          </div>
                        </div>
                      </div>
                      <div className="font-medium">{item.price}</div>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between">
                    <div className="font-medium">Subtotal</div>
                    <div className="font-medium">$119.99</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-medium">Shipping</div>
                    <div className="font-medium">$9.99</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-medium">Tax</div>
                    <div className="font-medium">$0.00</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold">Total</div>
                    <div className="font-bold">{order.total}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Truck className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Shipping Address</div>
                      <div className="text-sm text-muted-foreground">
                        {order.shippingAddress.name}
                        <br />
                        {order.shippingAddress.street}
                        <br />
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.state} {order.shippingAddress.zip}
                        <br />
                        {order.shippingAddress.country}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="font-medium">Tracking Number</div>
                  <div className="text-sm">{order.trackingNumber}</div>
                </div>

                <div>
                  <div className="font-medium">Estimated Delivery</div>
                  <div className="text-sm">{order.estimatedDelivery}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <div className="font-medium">Payment Method</div>
                    <div className="text-sm text-muted-foreground">
                      {order.paymentMethod}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <div className="font-medium">Billing Address</div>
                    <div className="text-sm text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-2">
              <Button>Download Invoice</Button>
              <Button variant="outline">Request Return</Button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
