import * as React from "react";
import { cn } from "~/lib/utils";

const Steps = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  );
});
Steps.displayName = "Steps";

const Step = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { completed?: boolean }
>(({ className, completed, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-2 py-4",
        {
          "text-muted-foreground": !completed,
        },
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
          completed
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted-foreground",
        )}
      >
        {completed ? "✓" : " "}
      </div>
      <div className="flex min-h-[2rem] flex-col justify-center">
        {props.children}
      </div>
    </div>
  );
});
Step.displayName = "Step";

export { Steps, Step };
