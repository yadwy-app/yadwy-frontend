"use client";

import { transactionsData } from "@/data/json";
import { WalletHeader } from "./wallet-header";
import { WalletSummaryCards } from "./wallet-summary-cards";
import { WalletTransactions } from "./wallet-transactions";

export interface Transaction {
  id: string;
  date: string;
  type: "Order Payment" | "Withdrawal";
  amount: string;
  status: "Completed" | "Pending";
  orderId: string | null;
}

export default function WalletPage() {
  return (
    <div className="flex flex-col gap-5">
      <WalletHeader />
      <WalletSummaryCards />
      <WalletTransactions transactions={transactionsData} />
    </div>
  );
}
