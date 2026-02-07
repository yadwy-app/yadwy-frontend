import { Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "~/components/ui/button";
import { Separator } from "../ui/separator";
import { CartButton } from "./cart-button";
import LocaleSwitcherLangBtn from "./locale-switcher-btn";
import NavManager from "./nav-manger";

export default async function CartActions({
  className,
}: {
  className?: string;
}) {
  const t = await getTranslations("Header");

  return (
    <div className={`flex items-center gap-1 sm:gap-2 ${className}`}>
      <LocaleSwitcherLangBtn className="rounded-full w-[40px] h-[40px] font-bold" />
      <Separator orientation="vertical" className="h-[35px]" />
      <CartButton ariaLabel={t("shoppingCart")} />
      <Button variant="ghost" size="icon" aria-label={t("wishlist")}>
        <Heart className="h-5 w-5" />
      </Button>
      {/* TODO: pass the true value of isLoggedIn */}
      <NavManager isLoggedIn={false} />
    </div>
  );
}
