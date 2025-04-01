import React from "react";
import { FaApple, FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Button } from "~/components/ui/button";

const BtnsHolder = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button className="justify-start bg-[#1877f2] text-white transition-all hover:bg-blue-400">
        <FaFacebook />
        Sign Up with Facebook
      </Button>
      <Button className="justify-start border border-gray-200 bg-white shadow-lg transition-all hover:bg-gray-100">
        <FcGoogle />
        Sign Up with Facebook
      </Button>
      <Button className="justify-start bg-black text-white transition-all hover:bg-gray-700">
        <FaApple />
        Sign Up with Apple
      </Button>
    </div>
  );
};

export default BtnsHolder;
