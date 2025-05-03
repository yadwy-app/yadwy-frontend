"use client";
import { Button } from "@yadwy/ui";
import Link from "next/link";
import MetricCard from "./metric-card";
import OrderSummary from "./order-summary";
import StorePerformance from "./store-performance";

export function DashboardHome() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader />
      <MetricCard />
      <OrderSummary />
      <StorePerformance />
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/products/new">Add New Product</Link>
        </Button>
      </div>
    </div>
  );
}
