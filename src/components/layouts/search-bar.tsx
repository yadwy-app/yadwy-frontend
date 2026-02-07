"use client";

import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { useRouter } from "~/i18n/routing";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const t = useTranslations("Header");
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div
      className={cn(
        "relative transition-all duration-200",
        isFocused && "ring-2 ring-primary/20 rounded-md",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t("searchPlaceholder")}
        className={cn(
          "w-full h-10 rounded-md py-2 pe-10 ps-10",
          "border-input bg-background",
          "focus-visible:ring-0 focus-visible:ring-offset-0",
          "transition-all duration-200",
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        aria-label={t("searchProducts")}
      />
      {searchQuery && (
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="absolute end-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
          onClick={() => setSearchQuery("")}
          aria-label={t("clearSearch")}
        >
          <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </Button>
      )}
    </div>
  );
}
