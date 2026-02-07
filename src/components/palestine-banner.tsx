"use client";

import { Heart } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";

export function PalestineBanner() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="bg-primary/50 py-8 md:py-10">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <Heart className="h-6 w-6 text-red-500 fill-red-500 animate-pulse" />
          <Image
            src="/footer/flag-of-palestine.webp"
            alt="Palestine Flag"
            width={48}
            height={32}
            className="rounded shadow-md"
          />
          <Heart className="h-6 w-6 text-red-500 fill-red-500 animate-pulse" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-primary-900">
          {isArabic ? "يدوي تدعم فلسطين" : "Yadwy Stands with Palestine"}
        </h3>
        <p className="text-base md:text-lg text-primary-700 max-w-2xl">
          {isArabic
            ? "نحن ملتزمون بدعم إخواننا وأخواتنا في فلسطين. جزء من أرباح كل طلب يذهب مباشرة لدعم الجهود الإنسانية."
            : "We are committed to supporting our brothers and sisters in Palestine. A portion of every order's profit goes directly to humanitarian relief efforts."}
        </p>
      </div>
    </div>
  );
}
