import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";

export default function ThankYou() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Image
          src={`/billing-address/finish.svg`}
          width={84}
          height={84}
          alt=""
        />
        <div>
          <h6 className="m-0 text-center text-xl font-bold">Thank you ! </h6>
          <h6 className="m-0 text-center text-xl font-bold">
            Your Order is Completed !
          </h6>
        </div>
        <p className="text-center text-sm text-textColor md:text-base">
          You will receive an order confirmation email with details of your
          order.
        </p>
        <div className="flex gap-1">
          <span className="text-sm text-textColor md:text-base">
            Your order tracking number:
          </span>
          <button className="flex items-center text-sm font-bold text-primary md:text-base">
            EX249478661SG
            <MdOutlineContentCopy />
          </button>
        </div>
      </div>
    </div>
  );
}
