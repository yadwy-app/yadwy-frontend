import { Package } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Link } from "~/i18n/routing";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Orders</h1>
        <p className="text-muted-foreground">View and track all your orders</p>
      </div>
      <Separator />
      <div className="grid gap-6 w-full">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
      {/* <Tabs defaultValue="all" className="w-full"> */}
      {/*   <TabsList className="grid w-full grid-cols-4 bg-primary text-black"> */}
      {/*     <TabsTrigger value="all">All</TabsTrigger> */}
      {/*     <TabsTrigger value="processing">Processing</TabsTrigger> */}
      {/*     <TabsTrigger value="shipped">Shipped</TabsTrigger> */}
      {/*     <TabsTrigger value="delivered">Delivered</TabsTrigger> */}
      {/*   </TabsList> */}
      {/*   <TabsContent value="all" className="mt-6"> */}
      {/**/}
      {/*   </TabsContent> */}
      {/*   <TabsContent value="processing" className="mt-6"> */}
      {/*     <div className="grid gap-6"> */}
      {/*       {orders */}
      {/*         .filter((order) => order.status === "Processing") */}
      {/*         .map((order) => ( */}
      {/*           <OrderCard key={order.id} order={order} /> */}
      {/*         ))} */}
      {/*     </div> */}
      {/*   </TabsContent> */}
      {/*   <TabsContent value="shipped" className="mt-6"> */}
      {/*     <div className="grid gap-6"> */}
      {/*       {orders */}
      {/*         .filter((order) => order.status === "Shipped") */}
      {/*         .map((order) => ( */}
      {/*           <OrderCard key={order.id} order={order} /> */}
      {/*         ))} */}
      {/*     </div> */}
      {/*   </TabsContent> */}
      {/*   <TabsContent value="delivered" className="mt-6"> */}
      {/*     <div className="grid gap-6"> */}
      {/*       {orders */}
      {/*         .filter((order) => order.status === "Delivered") */}
      {/*         .map((order) => ( */}
      {/*           <OrderCard key={order.id} order={order} /> */}
      {/*         ))} */}
      {/*     </div> */}
      {/*   </TabsContent> */}
      {/* </Tabs> */}
    </div>
  );
}

interface Order {
  id: string;
  date: string;
  total: string;
  status: "Processing" | "Shipped" | "Delivered";
  items: {
    name: string;
    quantity: number;
    price: string;
  }[];
}

interface OrderCardProps {
  order: Order;
}

function OrderCard({ order }: OrderCardProps) {
  return (
    <Card className="border-primary">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base text-primary">
              Order #{order.id}
            </CardTitle>
            <CardDescription>{order.date}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-amber-100 text-amber-800"
                }`}
            >
              {order.status}
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/profile/orders/${order.id}`}>Details</Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded flex items-center justify-center bg-primary">
                  <Package className="h-6 w-6 text-background" />
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </div>
                </div>
              </div>
              <div className="font-medium text-primary-foreground">
                {item.price}
              </div>
            </div>
          ))}
          <Separator className="bg-primary" />
          <div className="flex justify-between text-primary-foreground">
            <div className="font-medium">Total</div>
            <div className="font-bold">{order.total}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample data
const orders: Order[] = [
  {
    id: "12345",
    date: "March 5, 2023",
    total: "$129.99",
    status: "Delivered",
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
  },
  {
    id: "12344",
    date: "February 28, 2023",
    total: "$79.50",
    status: "Shipped",
    items: [
      {
        name: "Smart Watch Band",
        quantity: 1,
        price: "$29.99",
      },
      {
        name: "Bluetooth Speaker",
        quantity: 1,
        price: "$49.50",
      },
    ],
  },
  {
    id: "12343",
    date: "February 15, 2023",
    total: "$214.30",
    status: "Delivered",
    items: [
      {
        name: "Tablet Stand",
        quantity: 1,
        price: "$24.99",
      },
      {
        name: "Wireless Earbuds",
        quantity: 1,
        price: "$129.99",
      },
      {
        name: "USB-C Cable Pack",
        quantity: 2,
        price: "$29.99",
      },
    ],
  },
  {
    id: "12342",
    date: "January 20, 2023",
    total: "$45.99",
    status: "Processing",
    items: [
      {
        name: "Phone Charger",
        quantity: 1,
        price: "$19.99",
      },
      {
        name: "Screen Protector",
        quantity: 2,
        price: "$25.99",
      },
    ],
  },
];
