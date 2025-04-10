import { useTranslations } from "next-intl";
import { FaClipboardCheck } from "react-icons/fa6";
import { SectionTitle } from "~/components/section";
import { Link } from "~/i18n/routing";
import { OrderSummary } from "../billing/_components/order-summary";
import { ProductsHolderCart } from "./_components/box-product-cart";
import { Button } from "~/components/ui/button";

export default function Page() {
  const t = useTranslations("cartPage");
  return (
    <div className="flex min-h-screen w-full flex-col gap-10 p-5">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="grid grid-cols-12 gap-5 md:gap-20">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <ProductsHolderCart />
        </div>
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <OrderSummary />
          <div className="flex flex-col items-center gap-3">
            <Button asChild className="w-full text-white text-md" size="lg">
              <Link href="/billing">
                <FaClipboardCheck />
                Proceed to Checkout
              </Link>
            </Button>
            <span className="text-textColor">Or</span>
            <Link href={"/"} className="font-semibold text-md text-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      {/* <AlsoLike /> */}
    </div>
  );
}
