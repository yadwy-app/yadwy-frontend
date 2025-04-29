"use client";

import { forwardRef } from "react";
import { useFormField } from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";
import { cn } from "~/lib/utils";

const Field = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { error } = useFormField();

    return (
      <div className="w-full space-y-2">
        <Input
          className={cn("focus-visible:ring-primary", className)}
          {...props}
          ref={ref}
        />
        <p className="text-sm text-red-600">{error?.message || <>&nbsp;</>}</p>
      </div>
    );
  },
);

Field.displayName = "Field";
export default Field;
