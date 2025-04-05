import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const Search = () => {
  return (
    <div className="items-center gap-1 flex">
      <div className="flex w-full items-center">
        <Input
          className="rounded-sm  border border-gray-200"
          placeholder="Enter Coupon code"
        />
      </div>
      <Button className="text-white">Apply</Button>
    </div>
  );
};
