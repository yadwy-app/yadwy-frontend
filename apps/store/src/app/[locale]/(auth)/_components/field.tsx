import { forwardRef } from "react";
import { useFormField } from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";

const Field = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    const { error } = useFormField();
    return (
      <div className="flex flex-col gap-x-2 justify-center">
        <Input type={type ?? "text"} {...props} ref={ref} />
        <p className="text-sm text-red-600">{error?.message || <>&nbsp;</>}</p>
      </div>
    );
  },
);

Field.displayName = "Field";
export default Field;
