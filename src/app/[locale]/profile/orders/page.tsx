"use client";

import { Package } from "lucide-react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("OrdersPage");
  const isRtl = t("title") !== "My Orders";

  return (
    <Card className="border-primary">
      <CardHeader className="pb-3">
        <div
          className={`flex items-center ${isRtl ? "flex-row-reverse justify-between" : "justify-between"}`}
        >
          <div>
            <CardTitle className="text-base text-primary-900">
              {t("order")} #{order.id}
            </CardTitle>
            <CardDescription>{order.date}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-amber-100 text-amber-800"
              }`}
            >
              {t(`status.${order.status.toLowerCase()}`)}
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/profile/orders/${order.id}`}>{t("details")}</Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.name}
              className={`flex ${isRtl ? "flex-row-reverse justify-between" : "justify-between"} items-center`}
            >
              <div
                className={`flex items-center ${isRtl ? "flex-row-reverse gap-3" : "gap-3"}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-primary">
                  <Package className="h-6 w-6 text-background" />
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t("quantity")}: {item.quantity}
                  </div>
                </div>
              </div>
              <div className="font-medium">{item.price}</div>
            </div>
          ))}
          <Separator />
          <div
            className={`flex ${isRtl ? "flex-row-reverse justify-between" : "justify-between"}`}
          >
            <div className="font-medium">{t("total")}</div>
            <div className="font-bold">{order.total}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

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
export default function OrdersPage() {
  const t = useTranslations("OrdersPage");
  const isRtl = t("title") !== "My Orders";

  return (
    <div className="space-y-6" dir={isRtl ? "rtl" : "ltr"}>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>
      <Separator />
      <Tabs defaultValue="all" className="w-full">
        <TabsList
          className={`grid w-full grid-cols-4 bg-primary text-black ${isRtl ? "grid-flow-dense" : ""}`}
        >
          <TabsTrigger value="all">{t("tabs.all")}</TabsTrigger>
          <TabsTrigger value="processing">{t("tabs.processing")}</TabsTrigger>
          <TabsTrigger value="shipped">{t("tabs.shipped")}</TabsTrigger>
          <TabsTrigger value="delivered">{t("tabs.delivered")}</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid w-full gap-6">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="processing" className="mt-6">
          <div className="grid gap-6">
            {orders
              .filter((order) => order.status === "Processing")
              .map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="shipped" className="mt-6">
          <div className="grid gap-6">
            {orders
              .filter((order) => order.status === "Shipped")
              .map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="delivered" className="mt-6">
          <div className="grid gap-6">
            {orders
              .filter((order) => order.status === "Delivered")
              .map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
