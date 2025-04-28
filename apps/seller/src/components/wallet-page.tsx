"use client";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CreditCard,
  DollarSign,
  Download,
  Plus,
  Wallet,
} from "lucide-react";

import { Badge } from "@yadwy/ui";
import { Button } from "@yadwy/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@yadwy/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@yadwy/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@yadwy/ui";

export function WalletPage() {
  const transactions = [
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

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Wallet</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Withdraw Funds
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available Balance
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,945.32</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                +$518.94 <ArrowUpIcon className="h-4 w-4 ml-1" />
              </span>{" "}
              this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Balance
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$300.00</div>
            <p className="text-xs text-muted-foreground">
              Processing withdrawals
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Earnings
            </CardTitle>
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
            <CardTitle className="text-sm font-medium">
              Total Withdrawals
            </CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,286.57</div>
            <p className="text-xs text-muted-foreground">
              Across 12 withdrawals
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Wallet Activity</CardTitle>
          <CardDescription>
            View your transaction history and manage your funds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Order ID
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">
                          {transaction.id}
                        </TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {transaction.orderId || "-"}
                        </TableCell>
                        <TableCell
                          className={`text-right ${transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.amount}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            className={
                              transaction.status === "Completed"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                          >
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="payments" className="space-y-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Order ID
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions
                      .filter(
                        (transaction) => transaction.type === "Order Payment",
                      )
                      .map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">
                            {transaction.id}
                          </TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            {transaction.orderId || "-"}
                          </TableCell>
                          <TableCell className="text-right text-green-600">
                            {transaction.amount}
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge
                              className={
                                transaction.status === "Completed"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="withdrawals" className="space-y-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Order ID
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions
                      .filter(
                        (transaction) => transaction.type === "Withdrawal",
                      )
                      .map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">
                            {transaction.id}
                          </TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            {transaction.orderId || "-"}
                          </TableCell>
                          <TableCell className="text-right text-red-600">
                            {transaction.amount}
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge
                              className={
                                transaction.status === "Completed"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Load More Transactions
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
