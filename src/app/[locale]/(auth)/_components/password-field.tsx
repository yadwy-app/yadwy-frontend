import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { useFormField } from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import FieldTooltip from "./field-tooltip";
import { Input, type InputProps } from "~/components/ui/input";

interface Props extends Omit<InputProps, "type" | "placeholder"> { }

const PasswordField = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const { error } = useFormField();

    return (
      <div className="flex gap-x-2 items-center justify-center">
        <div className="relative flex items-center justify-center w-full">
          <Input
            type={showPassword ? "text" : "password"}
            {...props}
            ref={ref}
            className={cn(className, "pr-12")}
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-0"
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
            aria-label={showPassword ? "Hide password" : "Show Password"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </Button>
        </div>
        <FieldTooltip error={error?.message} />
      </div>
    );
  },
);

PasswordField.displayName = "PasswordField";
export default PasswordField;
