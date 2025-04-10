import { FaClipboardCheck } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import useTextDirection from "~/hooks/useDirection";
import type { Product } from "~/types";
import { BoxProductCart } from "./box-product";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";

interface CartProps {
  children: React.ReactNode;
}

export const CartSheet = ({ children }: CartProps) => {
  const dir = useTextDirection();
  const totalPrice = 0; // TODO: Replace with actual logic to calculate total price
  const products: Product[] = [];
  return (
    <Sheet>
      {children}
      <SheetContent
        side={dir === "rtl" ? "left" : "right"}
        className="w-100 p-0 md:w-auto"
      >
        <SheetHeader className="p-5">
          <SheetTitle className="border-b-2 border-gray-200 pb-2">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <div className="relative h-full p-5 pb-[230px] pe-0 pt-0">
          <div className="flex h-full max-h-[calc(100vh-230px)] flex-col gap-5 overflow-y-auto overflow-x-hidden pe-5">
            {products.length === 0 ? (
              <p className="w-[343.2px] text-center text-textColor h-full flex justify-center items-center">
                Nothing Products Currently
              </p>
            ) : (
              products.map((product) => (
                <BoxProductCart item={product} key={product.id} />
              ))
            )}
          </div>
          <div className="absolute bottom-0 left-0 flex h-[230px] w-full flex-col gap-5 border-t-2 border-gray-200 p-5">
            <div className="flex justify-between gap-3">
              <div className="flex flex-col items-start">
                <div className="font-semibold">Subtotal</div>
                <div className="text-xs text-gray-500">
                  Shipping and taxed calculated at checkout
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary-foreground">
                {totalPrice ? totalPrice : 0}$
              </div>
            </div>
            <Button asChild>
              <Link href="/cart">
                <FaClipboardCheck />
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
