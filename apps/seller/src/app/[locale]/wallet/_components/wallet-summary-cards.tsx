import { Card, CardContent, CardHeader, CardTitle } from "@yadwy/ui";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CreditCard,
  DollarSign,
  Wallet,
} from "lucide-react";
interface WalletSummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  subtitle?: React.ReactNode;
}

function WalletSummaryCard({
  title,
  value,
  icon,
  subtitle,
}: WalletSummaryCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}

// Summary cards section with all metrics
export function WalletSummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <WalletSummaryCard
        title="Available Balance"
        value="$1,945.32"
        icon={<Wallet className="h-4 w-4 text-muted-foreground" />}
        subtitle={
          <>
            <span className="text-emerald-500 flex items-center">
              +$518.94 <ArrowUpIcon className="h-4 w-4 ml-1" />
            </span>{" "}
            this month
          </>
        }
      />
      <WalletSummaryCard
        title="Pending Balance"
        value="$300.00"
        icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
        subtitle="Processing withdrawals"
      />
      <WalletSummaryCard
        title="Total Earnings"
        value="$4,231.89"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        subtitle={
          <>
            <span className="text-emerald-500 flex items-center">
              +20.1% <ArrowUpIcon className="h-4 w-4 ml-1" />
            </span>{" "}
            from last month
          </>
        }
      />
      <WalletSummaryCard
        title="Total Withdrawals"
        value="$2,286.57"
        icon={<ArrowDownIcon className="h-4 w-4 text-muted-foreground" />}
        subtitle="Across 12 withdrawals"
      />
    </div>
  );
}
