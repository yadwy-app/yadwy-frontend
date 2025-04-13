import * as React from "react";
import { cn } from "~/lib/utils";

const PageContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props}>
    {children}
  </div>
));
PageContainer.displayName = "PageContainer";

const PageTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-2xl font-black rtl:leading-tight font-heading text-primary-foreground",
      className,
    )}
    {...props}
  />
));
PageTitle.displayName = "PageTitle";

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col mb-8", className)} {...props} />
));
PageHeader.displayName = "PageHeader";

export { PageContainer, PageTitle, PageHeader };
