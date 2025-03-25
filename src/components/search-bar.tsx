"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

export default function SearchBar() {
  const t = useTranslations("Header");
  const isRtl = t("searchPlaceholder") !== "Search for artwork, plants...";
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={cn(
        "flex-1 max-w-xl transition-all duration-200 relative",
        isSearchFocused ? "sm:max-w-2xl" : "",
      )}
    >
      <div className="relative">
        <div
          className={`absolute inset-y-0 ${isRtl ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none`}
        >
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className={
            isRtl
              ? "pr-10 pl-4 py-2 w-full rounded-md"
              : "pl-10 pr-4 py-2 w-full rounded-md"
          }
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          aria-label={t("searchProducts")}
        />
        {searchQuery && (
          <Button
            className={`absolute inset-y-0 ${isRtl ? "left-0 pl-3" : "right-0 pr-3"} flex items-center`}
            onClick={() => setSearchQuery("")}
            aria-label={t("clearSearch")}
          >
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </Button>
        )}
      </div>
    </div>
  );
}
