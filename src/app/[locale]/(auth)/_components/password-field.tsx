import { EyeIcon, EyeOffIcon } from "lucide-react";
import { forwardRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { useFormField } from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import FieldTooltip from "./field-tooltip";

const PasswordField = forwardRef<HTMLInputElement, Omit<InputProps, "type">>(
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
            className="absolute right-0 hover:bg-transparent"
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
