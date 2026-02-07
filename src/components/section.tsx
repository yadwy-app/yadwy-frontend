import * as React from "react";
import { cn } from "~/lib/utils";

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn(className)} {...props} />
));
Section.displayName = "Section";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-xl md:text-2xl font-semibold text-foreground",
      className,
    )}
    {...props}
  />
));
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground max-w-xl", className)}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-start gap-1 mb-6", className)}
    {...props}
  />
));
SectionHeader.displayName = "SectionHeader";

const SectionFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center pt-0 mt-4", className)}
    {...props}
  />
));
SectionFooter.displayName = "SectionFooter";

export {
  Section,
  SectionTitle,
  SectionDescription,
  SectionHeader,
  SectionFooter,
};
