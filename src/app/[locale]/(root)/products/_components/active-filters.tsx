"use client";

import { X } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function ActiveFilters() {
  // In a real app, these would come from your filter state
  const activeFilters = [
    { type: "Category", value: "Armani" },
    { type: "Price", value: "$15 - $250" },
    { type: "Material", value: "Plants" },
  ];

  if (activeFilters.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">Active Filters:</span>
        {activeFilters.map((filter, index) => (
          <Badge
            key={`${filter.type}-${filter.value}`}
            variant="secondary"
            className="flex items-center gap-1 rounded-full px-3 py-1"
          >
            <span className="text-xs text-muted-foreground">
              {filter.type}:
            </span>
            <span className="text-xs">{filter.value}</span>
            <button
              type="button"
              className="ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {filter.type} filter</span>
            </button>
          </Badge>
        ))}
        <Button className="text-sm font-medium text-primary hover:text-primary/80">
          Clear All
        </Button>
      </div>
    </div>
  );
}
