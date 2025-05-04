import { Button } from "@yadwy/ui";
import { Download, Plus } from "lucide-react";

export function WalletHeader() {
  return (
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
  );
}
