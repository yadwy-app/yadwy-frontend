import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

type Props = {
  values: {
    value: string;
    label: string;
  }[];
  selectText: string;
  placeholder?: string;
  emptyValue: string;
  value?: string;
  onChange: (arg1: string) => void;
  disabled?: boolean;
};

export default function Combobox({
  values,
  selectText,
  emptyValue,
  placeholder,
  value,
  onChange,
  disabled,
}: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          // biome-ignore lint/a11y/useSemanticElements: we need a custom style for the select menu
          role="combobox"
          disabled={disabled}
          aria-expanded={open}
          className={cn("justify-between", !value && "text-muted-foreground")}
        >
          {value
            ? values.find((item) => item.value === value)?.label
            : selectText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            className="placeholder:capitalize"
            placeholder={placeholder}
          />
          <CommandEmpty className="capitalize">{emptyValue}</CommandEmpty>
          <CommandGroup>
            {values.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  onChange(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
