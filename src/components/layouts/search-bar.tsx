"use client";

import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

export default function SearchBar() {
  const t = useTranslations("Header");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 max-w-xl flex-1 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 w-full",
        isSearchFocused ? "sm:max-w-2xl" : "",
      )}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3`}
      >
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t("searchPlaceholder")}
        className={"w-full rounded-md py-2 pe-4 ps-10"}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setIsSearchFocused(false)}
        aria-label={t("searchProducts")}
      />
      {searchQuery && (
        <Button
          size={"sm"}
          variant={"ghost"}
          className={`absolute end-0 top-1/2 flex -translate-y-1/2 items-center pe-3`}
          onClick={() => setSearchQuery("")}
          aria-label={t("clearSearch")}
        >
          <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </Button>
      )}
    </div>
  );
}
