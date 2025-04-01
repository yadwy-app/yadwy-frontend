export const Summary = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="my-5 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <span className="text-textColor text-sm">SubTotal</span>
          <span className="font-bold text-secondary">$315</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-textColor text-sm">Discount</span>
          <span className="font-bold text-secondary">$315</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-textColor text-sm">Shipping</span>
          <span className="font-bold text-primary">Free</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-textColor text-sm">Taxes</span>
          <span className="font-bold text-secondary">$0.0</span>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="flex items-center justify-between rounded-sm bg-lightPrimary p-5">
        <span className="text-textColor text-sm font-bold">Taxes</span>
        <span className="font-bold text-secondary">$300</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-textColor text-sm">Estimated Delivery</span>
        <span className="font-bold text-secondary">02 May, 2024</span>
      </div>
    </div>
  );
};
