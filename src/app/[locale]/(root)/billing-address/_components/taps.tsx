import type React from "react";
import { FaCreditCard } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
interface PayInfoProps {
  id: number;
  payType: string;
  icon: React.ReactNode;
}
interface PayInfoOrderProps {
  PayInfo: PayInfoProps[];
  tapActive: (id: string) => void;
  currentTap: string | undefined;
}
export const TapsPay = ({
  PayInfo,
  tapActive,
  currentTap,
}: PayInfoOrderProps) => {
  function TapActiveHandler(e: string) {
    tapActive(e);
  }
  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-3 mb-5">
      {PayInfo.map((item) => (
        <Button
          key={item.id}
          variant="outline"
          className={`col-span-1 flex text-sm ${currentTap === item.payType ? "border-primary text-primary" : "border-gray-300 text-gray-500"}  hover:text-primary px-3`}
          onClick={() => TapActiveHandler(item.payType)}
        >
          {item.icon}
          {item.payType}
        </Button>
      ))}
    </div>
  );
};
