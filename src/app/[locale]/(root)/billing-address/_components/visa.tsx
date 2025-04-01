import type React from "react";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

interface CardProps {
  id: number;
  cardType: string;
  lastFourDigits: string;
  expiryDate: string;
  isSelected: boolean;
  icon: React.ReactNode;
}
interface CardOrderProps {
  cardInfo: CardProps[];
}
export const Visa = ({ cardInfo }: CardOrderProps) => {
  return (
    <RadioGroup
      defaultValue={cardInfo[0]?.cardType}
      className="flex flex-col gap-5 mb-5"
    >
      {cardInfo.map((item) => (
        <div className="flex items-center justify-between" key={item.id}>
          <div className="flex items-center gap-4">
            <RadioGroupItem value={item.cardType} id={item.cardType} />
            <Label
              htmlFor={item.cardType}
              className="flex gap-3 items-center text-xl font-semibold"
            >
              <span className="text-primary">{item.icon}</span>
              ...{item.lastFourDigits}
            </Label>
            <p className="m-0  text-sm text-gray-400 ">
              Expires {item.expiryDate}
            </p>
          </div>
          <button
            type="button"
            className="text-sm text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
    </RadioGroup>
  );
};
