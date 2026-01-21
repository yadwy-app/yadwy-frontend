"use client";

import { transactionsData } from "@/data/json";
import { WalletHeader } from "./_components/wallet-header";
import { WalletSummaryCards } from "./_components/wallet-summary-cards";
import { WalletTransactions } from "./_components/wallet-transactions";

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
