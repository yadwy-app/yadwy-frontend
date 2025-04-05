"use client";

import { LocateIcon } from "lucide-react";
import { useTranslations } from "next-intl"; // Import useTranslations hook
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import LocaleSwitcherLang from "./locale-switcher";

export const Footer = () => {
  const t = useTranslations("HomePage.Footer"); // Use the "Footer" namespace for translations

  return (
    <div className="bg-primary">
      <div className="container py-8">
        <div className="md:md-0 mb-3 grid grid-cols-12 gap-4">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <Image
              src="/logo.svg"
              width={100}
              height={90}
              style={{ height: "auto", width: "100%", maxWidth: "109px" }}
              alt="logo"
              className="mb-5 object-contain"
            />
            <p className="max-w-[259px] text-sm font-extralight">
              {t("description")} {/* Translated description */}
            </p>
            <ul className="my-10">
              <li className="mb-4 flex items-center gap-3">
                <IoIosCall className="text-xl" />
                <span className="text-xs md:text-base">{t("phone")}</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <HiOutlineMailOpen className="text-xl" />
                <span className="text-xs md:text-base">{t("email")}</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <LocateIcon className="text-xl" />
                <span className="text-xs md:text-base">{t("location")}</span>
              </li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="col-span-6 md:col-span-2">
            <h6 className="mb-4 text-lg font-bold">{t("pages.title")}</h6>
            <div className="flex flex-col gap-4">
              <Link href={``} className="text-sm">
                {t("pages.home")}
              </Link>
              <Link href={``} className="text-sm">
                {t("pages.shop")}
              </Link>
              <Link href={``} className="text-sm">
                {t("pages.categories")}
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-span-6 md:col-span-2">
            <h6 className="mb-4 text-lg font-bold">{t("company.title")}</h6>
            <div className="flex flex-col gap-4">
              <Link href={``} className="text-sm">
                {t("company.aboutUs")}
              </Link>
              <Link href={``} className="text-sm">
                {t("company.careers")}
              </Link>
              <Link href={``} className="text-sm">
                {t("company.community")}
              </Link>
              <Link href={``} className="text-sm">
                {t("company.customers")}
              </Link>
              <Link href={``} className="text-sm">
                {t("company.contactUs")}
              </Link>
            </div>
          </div>

          {/* Resources Section */}
          <div className="col-span-6 md:col-span-2">
            <h6 className="mb-4 text-lg font-bold">{t("resources.title")}</h6>
            <div className="flex flex-col gap-4">
              <Link href={``} className="text-sm">
                {t("resources.support")}
              </Link>
              <Link href={``} className="text-sm">
                {t("resources.helpCenter")}
              </Link>
              <Link href={``} className="text-sm">
                {t("resources.preferences")}
              </Link>
              <Link href={``} className="text-sm">
                {t("resources.privacyPolicy")}
              </Link>
              <Link href={``} className="text-sm">
                {t("resources.termsOfUse")}
              </Link>
            </div>
          </div>

          {/* App Store Links */}
          <div className="col-span-6 md:col-span-2">
            <div className="flex flex-col items-end gap-6">
              <Link href={``} className="relative h-10 aspect-[680/200]">
                <Image fill src={"/footer/google.svg"} alt="google play" />
              </Link>
              <Link href={``} className="relative h-10 aspect-[680/200]">
                <Image fill src={"/footer/apple.svg"} alt="apple store" />
              </Link>
            </div>
          </div>
        </div>

        <hr />

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
          <h6 className="text-sm text-green-900">
            {t("rightsReserved", { year: new Date().getFullYear() })}
          </h6>
          <div className="flex gap-4">
            <Link className="text-xs md:text-sm" href={``}>
              {t("termsConditions")}
            </Link>
            <Link className="text-xs md:text-sm" href={``}>
              {t("privacyPolicy")}
            </Link>
            <Link className="text-xs md:text-sm" href={``}>
              {t("cookies")}
            </Link>
          </div>

          {/* Social Media Links and Language Switcher */}
          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              <Link href={``}>
                <FaXTwitter className="text-lg" />
              </Link>
              <Link href={``}>
                <FaInstagram className="text-lg" />
              </Link>
              <Link href={``}>
                <TiSocialFacebook className="text-lg" />
              </Link>
              <Link href={``}>
                <FaLinkedin className="text-lg" />
              </Link>
            </div>
            <LocaleSwitcherLang />
          </div>
        </div>
      </div>
    </div>
  );
};
