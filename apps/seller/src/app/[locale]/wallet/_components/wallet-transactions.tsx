import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@yadwy/ui";
import type { Transaction } from "../page";

interface TransactionTableProps {
  transactions: Transaction[];
}

function TableStructure({ transactions }: TransactionTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="hidden md:table-cell">Order ID</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
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
  );
}

export function WalletTransactions({ transactions }: TransactionTableProps) {
  return (
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
            <TableStructure transactions={transactions} />
          </TabsContent>
          <TabsContent value="payments" className="space-y-4">
            <TableStructure
              transactions={transactions.filter(
                (transaction) => transaction.type === "Order Payment",
              )}
            />
          </TabsContent>
          <TabsContent value="withdrawals" className="space-y-4">
            <TableStructure
              transactions={transactions.filter(
                (transaction) => transaction.type === "Withdrawal",
              )}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Load More Transactions
        </Button>
      </CardFooter>
    </Card>
  );
}
