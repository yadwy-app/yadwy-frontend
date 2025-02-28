"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const AddressFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    col: "col-span-4 md:col-span-2",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter phone number",
    col: "col-span-4 md:col-span-2",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter address",
    col: "col-span-4",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Enter country",
    col: "col-span-4 md:col-span-1",
  },
  {
    name: "state",
    label: "State",
    placeholder: "Enter state",
    col: "col-span-4 md:col-span-1",
  },
] as const;

type Props = {
  form: any;
};

export default function PersonalInfoForm({ form }: Props) {
  return (
    <div className="grid grid-cols-4 gap-5 w-full">
      {AddressFields.map((field) => (
        <FormField
          key={field.name}
          control={form.control}
          name={field.name}
          render={({ field: inputField }) => (
            <FormItem className={field.col}>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Input
                  className="w-full"
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
  );
}
