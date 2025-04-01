import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import useTextDirection from "~/hooks/useDirection";
import { Control } from "./control";
import { ProductsHolder } from "./products-holder";

interface CartProps {
  children: React.ReactNode;
}

export const CartSheet = ({ children }: CartProps) => {
  const dir = useTextDirection();
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
            <ProductsHolder />
          </div>
          <Control />
        </div>
      </SheetContent>
    </Sheet>
  );
};
