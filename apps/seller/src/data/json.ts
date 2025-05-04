import type { Transaction } from "@/app/[locale]/wallet/wallet-page";

export const orderSummaryData = [
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
];

export const transactionsData: Transaction[] = [
  {
    id: "TRX-001",
    date: "Apr 14, 2023",
    type: "Order Payment",
    amount: "+$129.99",
    status: "Completed",
    orderId: "ORD-001",
  },
  {
    id: "TRX-002",
    date: "Apr 13, 2023",
    type: "Withdrawal",
    amount: "-$200.00",
    status: "Completed",
    orderId: null,
  },
  {
    id: "TRX-003",
    date: "Apr 12, 2023",
    type: "Order Payment",
    amount: "+$79.95",
    status: "Completed",
    orderId: "ORD-002",
  },
  {
    id: "TRX-004",
    date: "Apr 11, 2023",
    type: "Order Payment",
    amount: "+$249.00",
    status: "Completed",
    orderId: "ORD-003",
  },
  {
    id: "TRX-005",
    date: "Apr 10, 2023",
    type: "Withdrawal",
    amount: "-$300.00",
    status: "Pending",
    orderId: null,
  },
  {
    id: "TRX-006",
    date: "Apr 09, 2023",
    type: "Order Payment",
    amount: "+$59.99",
    status: "Completed",
    orderId: "ORD-004",
  },
];
