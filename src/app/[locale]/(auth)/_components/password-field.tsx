import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { forwardRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { useFormField } from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";
import { Link } from "~/i18n/routing";
import { cn } from "~/lib/utils";

const PasswordField = forwardRef<HTMLInputElement, Omit<InputProps, "type">>(
  ({ className, ...props }, ref) => {
    const t = useTranslations("Login");
    const [showPassword, setShowPassword] = useState(false);
    const { error } = useFormField();

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
        <div className="absolute right-0 top-0">
          <Button
            variant="link"
            asChild
            type="button"
            className="h-auto px-0 text-sm font-normal text-muted-foreground hover:text-primary"
          >
            <Link prefetch={false} href={"/forgot-password"}>
              {t("forgotPassword")}
            </Link>
          </Button>
        </div>
        <p className="text-sm text-red-600">{error?.message || <>&nbsp;</>}</p>
      </div>
    );
  },
);

PasswordField.displayName = "PasswordField";
export default PasswordField;
