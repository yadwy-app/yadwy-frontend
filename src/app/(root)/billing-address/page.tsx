"use client";
import React, { useState } from "react";
import { SectionTitle } from "~/components/section";
import { SummaryOrder } from "../_sections/summary-order";
import { FaCreditCard, FaLocationDot, FaPlus } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { Steps } from "../_components/steps";
import { AddressOrder } from "../_components/address-order";
import { Button } from "~/components/ui/button";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const stepsData = [
    { id: 1, icon: <FaLocationDot />, label: "Step 1" },
    { id: 2, icon: <FaCreditCard />, label: "Step 2" },
    { id: 3, icon: <FaRegCheckCircle />, label: "Step 3" },
  ];

  const addresses = [
    {
      id: 1,
      name: "Iskandariya Address",
      street: "4 Th Industrial Area, Block 14, Plots: 4, New Borg El Iskandariya",
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

  const nextStep = () => {
    if (currentStep < stepsData.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex min-h-screen w-full flex-col gap-10 p-5">
      <SectionTitle>Checkout</SectionTitle>
      <div className="grid grid-cols-12 gap-5 md:gap-20">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <Steps steps={stepsData} currentStep={currentStep} />

          {currentStep === 1 && (
            <>
              <AddressOrder addresses={addresses} />
              <Button
                variant="outline"
                className="w-fit rounded-none border-primary text-secondary shadow-lg"
              >
                <FaPlus />
                Add New Address
              </Button>
            </>
          )}

          {currentStep === 2 && <h2 className="text-xl font-semibold">Payment Details</h2>}
          {currentStep === 3 && <h2 className="text-xl font-semibold">Order Confirmation</h2>}

          <hr className="border-gray-300" />

          <div className="flex justify-between">
            {currentStep > 1 && (
              <Button variant="outline" onClick={prevStep} className="text-primary">
                Back
              </Button>
            )}
            {currentStep < stepsData.length && (
              <Button onClick={nextStep} className="text-white w-fit ms-auto">
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
