import * as React from "react";
import { cn } from "~/lib/utils";

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      className,
    )}
    {...props}
  />
));
Section.displayName = "Section";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl font-black leading-normal text-primary-foreground text-center",
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
    className={cn(
      "text-md text-muted-foreground max-w-xl mx-auto text-center mt-2 mb-8",
      className,
    )}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

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

export { Section, SectionTitle, SectionDescription, SectionFooter };
