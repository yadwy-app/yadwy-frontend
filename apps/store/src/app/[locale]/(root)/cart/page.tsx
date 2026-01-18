import { useTranslations } from "next-intl";
import { FaClipboardCheck } from "react-icons/fa6";
import {
  PageContainer,
  PageHeader,
  PageTitle,
} from "~/components/page-component";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";
import { ProductsHolderCart } from "./_components/box-product-cart";
import { CartSummary } from "./_components/cart-summary";

export default function Page() {
  const t = useTranslations("cartPage");
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("title")}</PageTitle>
      </PageHeader>
      <div className="grid grid-cols-12 gap-5 lg:gap-20">
        <div className="col-span-12 flex flex-col gap-5 lg:col-span-8">
          <ProductsHolderCart />
        </div>
        <div className="col-span-12 flex flex-col gap-5 lg:col-span-4">
          <CartSummary />
          <div className="flex flex-col items-center gap-3">
            <Button asChild className="w-full text-white text-md" size="lg">
              <Link href="/checkout">
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
    </PageContainer>
  );
}
