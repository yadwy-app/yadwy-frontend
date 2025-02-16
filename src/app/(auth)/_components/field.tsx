import { forwardRef } from "react";
import FieldTooltip from "./field-tooltip";
import { Input, type InputProps } from "~/components/ui/input";
import { useFormField } from "~/components/ui/form";

interface Props extends InputProps { }

const Field = forwardRef<HTMLInputElement, Props>(({ type, ...props }, ref) => {
  const { error } = useFormField();
  return (
    <div className="flex gap-x-2 items-center justify-center">
      <Input type={type || "text"} {...props} ref={ref} />
      <FieldTooltip error={error?.message} />
    </div>
  );
});

Field.displayName = "Field";
export default Field;
