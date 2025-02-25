"use client";
import React, { useState } from "react";
import { SectionTitle } from "~/components/section";
import { SummaryOrder } from "../_sections/summary-order";
import {
  FaCcVisa,
  FaCreditCard,
  FaLocationDot,
  FaPlus,
  FaTruckFast,
} from "react-icons/fa6";
import {
  FaCcAmex,
  FaCcMastercard,
  FaPaypal,
  FaRegCheckCircle,
} from "react-icons/fa";
import { Steps } from "../_components/steps";
import { AddressOrder } from "../_components/address-order";
import { Button } from "~/components/ui/button";
import { IoMdAdd, IoMdArrowBack } from "react-icons/io";
import { Visa } from "./_components/visa";
import { TapsPay } from "./_components/taps";
import { CiCoins1 } from "react-icons/ci";
import { IoBagHandleOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MdContentCopy,
  MdOutlineContentCopy,
  MdOutlineShoppingBag,
} from "react-icons/md";
import Link from "next/link";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    // {
    //   id: 1,
    //   payType: "Credit / Debit Card",
    //   icon: <FaCreditCard />,
    // },
    // {
    //   id: 2,
    //   payType: "Vodafone",
    //   icon: <IoPhonePortraitOutline />,
    // },
    {
      id: 3,
      payType: "Cash on Delivery",
      icon: <CiCoins1 />,
    },
  ];
  const stepsData = [
    { id: 1, icon: <FaLocationDot />, label: "Step 1" },
    { id: 2, icon: <FaCreditCard />, label: "Step 2" },
    { id: 3, icon: <FaRegCheckCircle />, label: "Step 3" },
  ];
  const CardFields = [
    {
      name: "name",
      label: "Card holder Name",
      placeholder: "Enter Card holder Name",
    },
    { name: "number", label: "Card Number", placeholder: "Enter Card Number" },
    {
      name: "expiredate",
      label: "Expiration date (MM/YY)",
      placeholder: "MM/YY",
      col: "col-span-4 md:col-span-3",
    },
    {
      name: "cvc",
      label: "CVC",
      placeholder: "Enter CVC",
      col: "col-span-4 md:col-span-1",
    },
  ] as const;

  const AddressFields = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter First Name",
      col: "col-span-4 md:col-span-2",
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter Last Name",
      col: "col-span-4 md:col-span-2",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter Email",
      col: "col-span-4 md:col-span-2",
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Enter Phone",
      col: "col-span-4 md:col-span-2",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Enter Address",
      col: "col-span-4",
    },
    {
      name: "country",
      label: "Country",
      placeholder: "Enter Country",
      col: "col-span-4 md:col-span-1",
    },
    {
      name: "state",
      label: "State",
      placeholder: "Enter State",
      col: "col-span-4 md:col-span-1",
    },
    {
      name: "zipCode",
      label: "Zip Code",
      placeholder: "Enter Zip Code",
      col: "col-span-4 md:col-span-1",
    },
  ] as const;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [currentPay, setCurrentPay] = useState(PayInfo[0]?.payType);
  const [addressContent, setAddressContent] = useState("main");

  const nextStep = () => {
    if (currentStep < stepsData.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const tapActiveHandle = (e: string) => {
    setCurrentPay(e);
  };
  const addressAddActive = (e: string) => {
    setAddressContent(e);
  };
  const schemaCard = yup.object().shape({
    name: yup.string().required("Card holder name is required"),
    number: yup.string().required("Card number is required"),
    expiredate: yup.string().required("Expiration date is required"),
    cvc: yup.string().required("CVC is required"),
  });
  const schemaAddress = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    zipCode: yup.string().required("Zip code is required"),
  });

  const formCards = useForm({
    resolver: yupResolver(schemaCard),
    defaultValues: {
      name: "",
      number: "",
      expiredate: "",
      cvc: "",
    },
  });
  const formAddress = useForm({
    resolver: yupResolver(schemaAddress),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      zipCode: "",
    },
  });
  const handleCardSubmit = (data: object) => {
    console.log(data);
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
              {addressContent === "main" && (
                <>
                  <AddressOrder addresses={addresses} />
                  <Button
                    onClick={() => addressAddActive("add")}
                    variant="outline"
                    className="w-fit rounded-none border-primary text-secondary shadow-lg"
                  >
                    <FaPlus />
                    Add New Address
                  </Button>
                </>
              )}
              {addressContent === "add" && (
                <FormProvider {...formAddress}>
                  <form onSubmit={formAddress.handleSubmit(handleCardSubmit)}>
                    <div className="mb-5 grid grid-cols-4 gap-5">
                      {AddressFields.map((field) => (
                        <FormField
                          key={field.name}
                          control={formAddress.control}
                          name={field.name}
                          render={({ field: inputField }) => (
                            <FormItem className={`${field.col}`}>
                              <FormLabel>{field.label}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={field.placeholder}
                                  {...inputField}
                                  value={inputField.value ?? ""}
                                  onChange={inputField.onChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                      <Button
                        onClick={() => addressAddActive("main")}
                        variant="outline"
                        className="w-fit rounded-none border-primary text-secondary shadow-lg"
                      >
                        <IoMdArrowBack />
                        Saved Addresses
                      </Button>
                      <Button
                        type="submit"
                        className="ms-auto w-fit border-primary text-sm text-white shadow-lg"
                      >
                        <IoMdAdd />
                        Add Payment Method
                      </Button>
                    </div>
                  </form>
                </FormProvider>
              )}
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
                    onClick={() => tapActiveHandle("Credit Add")}
                    variant="outline"
                    className="w-fit rounded-none border-primary text-secondary shadow-lg"
                  >
                    <FaPlus />
                    Add New Address
                  </Button>
                </>
              )}
              {currentPay === "Credit Add" && (
                <FormProvider {...formCards}>
                  <form onSubmit={formCards.handleSubmit(handleCardSubmit)}>
                    <div className="mb-5 grid grid-cols-4 gap-5">
                      {CardFields.map((field) => (
                        <FormField
                          key={field.name}
                          control={formCards.control}
                          name={field.name}
                          render={({ field: inputField }) => (
                            <FormItem className={field.col || "col-span-4"}>
                              <FormLabel>{field.label}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={field.placeholder}
                                  {...inputField}
                                  value={inputField.value ?? ""}
                                  onChange={inputField.onChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                      <Button
                        onClick={() => tapActiveHandle("Credit / Debit Card")}
                        variant="outline"
                        className="w-fit rounded-none border-primary text-secondary shadow-lg"
                      >
                        <IoMdArrowBack />
                        Saved Payment Methods
                      </Button>
                      <Button
                        type="submit"
                        className="ms-auto w-fit border-primary text-sm text-white shadow-lg"
                      >
                        <IoMdAdd />
                        Add Payment Method
                      </Button>
                    </div>
                  </form>
                </FormProvider>
              )}
              {currentPay === "Cash on Delivery" && <>Cash on Delivery</>}
              {currentPay === "Vodafone" && <>Vodafone</>}
            </motion.div>
          )}
          {currentStep === stepsData.length && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <Image
                  src={`/billing-address/finish.svg`}
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <h6 className="m-0 text-center text-xl font-bold">
                    Thank you !{" "}
                  </h6>
                  <h6 className="m-0 text-center text-xl font-bold">
                    Your Order is Completed !
                  </h6>
                </div>
                <p className="text-center text-sm text-textColor md:text-base">
                  You will receive an order confirmation email with details of
                  your order.
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
            </motion.div>
          )}

          <hr className="border-gray-300" />

          <div className="flex justify-between">
            {currentStep > 1 && currentStep !== stepsData.length && (
              <Button
                onClick={prevStep}
                variant="outline"
                className="w-fit rounded-none border-primary text-sm text-secondary shadow-lg md:text-base"
              >
                <IoMdArrowBack />
                Back
              </Button>
            )}
            {currentStep < stepsData.length && (
              <Button
                onClick={nextStep}
                className="ms-auto w-fit text-sm text-white md:text-base"
              >
                <FaCreditCard />
                Confirm Order
              </Button>
            )}
          </div>
          {currentStep === stepsData.length && (
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <Link
                href={``}
                className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-200 px-4 py-2 text-sm text-textColor md:w-fit md:text-base"
              >
                <FaTruckFast />
                Track your order
              </Link>
              <span className="text-textColor">Or</span>
              <Link
                href={`/`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-white md:w-fit md:text-base"
              >
                <MdOutlineShoppingBag className="text-2xl" />
                Continue shopping
              </Link>
            </div>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <SummaryOrder />
        </div>
      </div>
    </div>
  );
};

export default Page;
