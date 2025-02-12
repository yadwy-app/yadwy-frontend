"use client";
import React, { useState } from "react";
import { SectionTitle } from "~/components/section";
import { SummaryOrder } from "../_sections/summary-order";
import { FaCcVisa, FaCreditCard, FaLocationDot, FaPlus } from "react-icons/fa6";
import {
  FaCcAmex,
  FaCcMastercard,
  FaPaypal,
  FaRegCheckCircle,
} from "react-icons/fa";
import { Steps } from "../_components/steps";
import { AddressOrder } from "../_components/address-order";
import { Button } from "~/components/ui/button";
import { IoMdArrowBack } from "react-icons/io";
import { Visa } from "./_components/visa";
import { TapsPay } from "./_components/taps";
import { CiCoins1 } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Page = () => {
  const addresses = [
    {
      id: 1,
      name: "Iskandariya Address",
      street:
        "4 Th Industrial Area, Block 14, Plots: 4, New Borg El Iskandariya",
      city: "Alexandria",
      postalCode: "21511",
      phone: "(+20) 115-559-3269",
    },
    {
      id: 2,
      name: "Cairo Office",
      street: "12 Tahrir Square, Downtown",
      city: "Cairo",
      postalCode: "11511",
      phone: "(+20) 102-334-5678",
    },
    {
      id: 3,
      name: "Giza Branch",
      street: "7 El Haram St, Giza",
      city: "Giza",
      postalCode: "12211",
      phone: "(+20) 101-556-7788",
    },
  ];
  const cardInfo = [
    {
      id: 1,
      cardType: "Visa",
      lastFourDigits: "6754",
      expiryDate: "06/2026",
      isSelected: false,
      icon: <FaCcVisa />,
    },
    {
      id: 2,
      cardType: "MasterCard",
      lastFourDigits: "1234",
      expiryDate: "08/2025",
      isSelected: false,
      icon: <FaCcMastercard />,
    },
    {
      id: 3,
      cardType: "American Express",
      lastFourDigits: "7890",
      expiryDate: "11/2027",
      isSelected: false,
      icon: <FaCcAmex />,
    },
    {
      id: 4,
      cardType: "PayPal",
      lastFourDigits: "****",
      expiryDate: "N/A",
      isSelected: false,
      icon: <FaPaypal />,
    },
  ];

  const PayInfo = [
    {
      id: 1,
      payType: "Credit / Debit Card",
      icon: <FaCreditCard />,
    },
    {
      id: 2,
      payType: "Vodafone",
      icon: <IoPhonePortraitOutline />,
    },
    {
      id: 3,
      payType: "Cash on Delivery",
      icon: <CiCoins1 />,
    },
  ];

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [currentPay, setCurrentPay] = useState(PayInfo[0]?.payType);
  const stepsData = [
    { id: 1, icon: <FaLocationDot />, label: "Step 1" },
    { id: 2, icon: <FaCreditCard />, label: "Step 2" },
    { id: 3, icon: <FaRegCheckCircle />, label: "Step 3" },
  ];

  const nextStep = () => {
    if (currentStep < stepsData.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const tapActiveHandle = (e: string) => {
    setCurrentPay(e);
  };
  return (
    <div className="flex min-h-screen w-full flex-col gap-10 p-5">
      <SectionTitle>Checkout</SectionTitle>
      <div className="grid grid-cols-12 gap-5 md:gap-20">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <Steps steps={stepsData} currentStep={currentStep} />
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <AddressOrder addresses={addresses} />
              <Button
                variant="outline"
                className="w-fit rounded-none border-primary text-secondary shadow-lg"
              >
                <FaPlus />
                Add New Address
              </Button>
            </motion.div>
          )}

          {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <TapsPay
                  PayInfo={PayInfo}
                  tapActive={tapActiveHandle}
                  currentTap={currentPay}
                />
                {currentPay === "Credit / Debit Card" && (
                  <>
                    <Visa cardInfo={cardInfo} />
                    <Button
                      variant="outline"
                      className="w-fit rounded-none border-primary text-secondary shadow-lg"
                    >
                      <FaPlus />
                      Add New Address
                    </Button>
                  </>
                )}
                {currentPay === "Cash on Delivery" && <>Cash on Delivery</>}
                {currentPay === "Vodafone" && <>Vodafone</>}
              </motion.div>
          )}
          {currentStep === 3 && (
            <h2 className="text-xl font-semibold">Order Confirmation</h2>
          )}

          <hr className="border-gray-300" />

          <div className="flex justify-between">
            {currentStep > 1 && (
              <Button
                onClick={prevStep}
                variant="outline"
                className="w-fit rounded-none border-primary text-secondary shadow-lg"
              >
                <IoMdArrowBack />
                Back
              </Button>
            )}
            {currentStep < stepsData.length && (
              <Button onClick={nextStep} className="ms-auto w-fit text-white">
                <FaCreditCard />
                {currentStep === 2 ? "Confirm Order" : "Continue to Payment"}
              </Button>
            )}
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <SummaryOrder />
        </div>
      </div>
    </div>
  );
};

export default Page;
