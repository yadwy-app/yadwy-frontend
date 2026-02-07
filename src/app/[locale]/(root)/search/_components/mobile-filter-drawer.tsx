"use client";

import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import FilterSidebar from "./filter-sidebar";

export default function MobileFilterDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-left">Filters</SheetTitle>
        </SheetHeader>
        <div className="py-4 overflow-y-auto h-[calc(100vh-10rem)]">
          <FilterSidebar />
        </div>
        <SheetFooter className="flex flex-row gap-3 sm:justify-between">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button className="flex-1" onClick={() => setOpen(false)}>
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
