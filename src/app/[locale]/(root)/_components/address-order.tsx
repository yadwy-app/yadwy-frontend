import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
interface AddressProps {
  id: number;
  name: string;
  street: string;
  city: string;
  postalCode: string;
  phone: string;
}
interface AddressOrderProps {
  addresses: AddressProps[];
}

export const AddressOrder = ({ addresses }: AddressOrderProps) => {
  return (
    <div>
      <RadioGroup
        defaultValue={addresses[0]?.name}
        className="flex flex-col gap-5 mb-5"
      >
        {addresses.map((item) => (
          <div className="flex items-start justify-between" key={item.id}>
            <div className="flex items-start gap-4">
              <RadioGroupItem value={item.name} id={item.name} />
              <div>
                <Label
                  htmlFor={item.name}
                  className="mb-3 flex gap-5 text-xl font-semibold"
                >
                  {item.name}
                  <button className="text-base text-primary">
                    <FaPenToSquare />
                  </button>
                </Label>
                <p className="mb-1 w-full text-sm text-gray-500 md:w-[381.84px]">
                  {item.street},{item.city} {item.postalCode}
                </p>
                <span className="text-sm text-gray-500">{item.phone}</span>
              </div>
            </div>
            <button className="text-sm text-red-500 hover:text-red-700">
              Remove
            </button>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
