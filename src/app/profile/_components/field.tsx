import { forwardRef } from "react";
import { Input, type InputProps } from "~/components/ui/input";
// import { useFormField } from "@/components/ui/form";
// import FieldTooltip from "@/app/(auth)/_components/field-tooltip";

interface Props extends InputProps { }

const Field = forwardRef<HTMLInputElement, Props>(
  ({ type, form, ...props }, ref) => {
    // const { error } = useFormField();
    return (
      <div className="flex gap-x-2 items-center justify-center w-full">
        <Input type={type || "text"} {...props} ref={ref} />
        {/* <FieldTooltip error={error?.message} /> */}
      </div>
    );
  },
);

Field.displayName = "Field";
export default Field;
