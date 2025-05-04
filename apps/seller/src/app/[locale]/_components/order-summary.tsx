import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
} from "@yadwy/ui";
import {
  ArrowRightIcon,
  CheckCircle2,
  Clock,
  Package,
  Truck,
} from "lucide-react";
import Link from "next/link";

import { orderSummaryData } from "@/data/json";

export default function OrderSummary() {
  return (
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
            {orderSummaryData.map((order) => (
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
  );
}
