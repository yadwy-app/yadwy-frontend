import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { forwardRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input, type InputProps } from "~/components/ui/input";
import { cn } from "~/lib/utils";

const PasswordField = forwardRef<HTMLInputElement, Omit<InputProps, "type">>(
  ({ className, ...props }, ref) => {
    const _t = useTranslations("Login");
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col gap-x-2 justify-center">
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
            className="absolute right-0 hover:bg-transparent text-gray-600"
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
            aria-label={showPassword ? "Hide password" : "Show Password"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </Button>
        </div>
      </div>
    );
  },
);

PasswordField.displayName = "PasswordField";
export default PasswordField;
