import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export default function FieldTooltip({ error }: { error: string | undefined }) {
  return (
    <TooltipProvider>
      {error && (
        <Tooltip defaultOpen={true}>
          <TooltipTrigger className="duration-500">
            <Info className="stroke-destructive" />
          </TooltipTrigger>
          <TooltipContent>{error}</TooltipContent>
        </Tooltip>
      )}
    </TooltipProvider>
  );
}
