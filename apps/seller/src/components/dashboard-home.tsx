"use client";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircle2,
  Clock,
  DollarSign,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardHome() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/products/new">Add New Product</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                +20.1% <ArrowUpIcon className="h-4 w-4 ml-1" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                +8.2% <ArrowUpIcon className="h-4 w-4 ml-1" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-rose-500 flex items-center">
                -2 <ArrowDownIcon className="h-4 w-4 ml-1" />
              </span>{" "}
              out of stock
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Wallet Balance
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,945.32</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                +10.1% <ArrowUpIcon className="h-4 w-4 ml-1" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              You have 5 orders that need attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "ORD-001",
                  customer: "John Smith",
                  date: "Apr 14, 2023",
                  status: "Pending",
                  amount: "$129.99",
                },
                {
                  id: "ORD-002",
                  customer: "Sarah Johnson",
                  date: "Apr 13, 2023",
                  status: "Processing",
                  amount: "$79.95",
                },
                {
                  id: "ORD-003",
                  customer: "Michael Brown",
                  date: "Apr 12, 2023",
                  status: "Shipped",
                  amount: "$249.00",
                },
                {
                  id: "ORD-004",
                  customer: "Emily Davis",
                  date: "Apr 11, 2023",
                  status: "Delivered",
                  amount: "$59.99",
                },
                {
                  id: "ORD-005",
                  customer: "David Wilson",
                  date: "Apr 10, 2023",
                  status: "Pending",
                  amount: "$149.95",
                },
              ].map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-sm font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.customer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm">{order.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.date}
                      </p>
                    </div>
                    <Badge
                      className={
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          : order.status === "Processing"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : order.status === "Shipped"
                              ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                              : "bg-green-100 text-green-800 hover:bg-green-100"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/orders">
                View All Orders
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
            <CardDescription>Overview of your current orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span>Pending</span>
                  </div>
                  <span className="font-medium">5</span>
                </div>
                <Progress
                  value={25}
                  className="h-2 bg-yellow-100"
                  indicatorClassName="bg-yellow-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-blue-500" />
                    <span>Processing</span>
                  </div>
                  <span className="font-medium">3</span>
                </div>
                <Progress
                  value={15}
                  className="h-2 bg-blue-100"
                  indicatorClassName="bg-blue-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-purple-500" />
                    <span>Shipped</span>
                  </div>
                  <span className="font-medium">7</span>
                </div>
                <Progress
                  value={35}
                  className="h-2 bg-purple-100"
                  indicatorClassName="bg-purple-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Delivered</span>
                  </div>
                  <span className="font-medium">5</span>
                </div>
                <Progress
                  value={25}
                  className="h-2 bg-green-100"
                  indicatorClassName="bg-green-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Store Performance</CardTitle>
          <CardDescription>
            Your store's performance over the last 30 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sales">
            <TabsList className="mb-4">
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
            <TabsContent value="sales" className="space-y-4">
              <div className="h-[200px] w-full bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Sales chart will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="visitors" className="space-y-4">
              <div className="h-[200px] w-full bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Visitors chart will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="products" className="space-y-4">
              <div className="h-[200px] w-full bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Products chart will be displayed here
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
