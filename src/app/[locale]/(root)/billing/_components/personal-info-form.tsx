"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const AddressFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    col: "col-span-4 md:col-span-2",
    type: "input",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter phone number",
    col: "col-span-4 md:col-span-2",
    type: "input",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter address",
    col: "col-span-4",
    type: "input",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Select country",
    col: "col-span-4 md:col-span-1",
    type: "select",
  },
  {
    name: "state",
    label: "State",
    placeholder: "Select state",
    col: "col-span-4 md:col-span-1",
    type: "select",
  },
] as const;

const countries = [{ value: "eg", label: "Egypt" }];

const states = {
  eg: [
    { value: "cai", label: "Cairo" },
    { value: "alx", label: "Alexandria" },
    { value: "giz", label: "Giza" },
    { value: "shg", label: "Sohag" },
    { value: "asw", label: "Aswan" },
    { value: "asy", label: "Asyut" },
    { value: "beh", label: "Beheira" },
    { value: "bnsw", label: "Beni Suef" },
    { value: "dam", label: "Damietta" },
    { value: "dak", label: "Dakahlia" },
    { value: "fay", label: "Faiyum" },
    { value: "gha", label: "Gharbia" },
    { value: "ism", label: "Ismailia" },
    { value: "ksh", label: "Kafr El Sheikh" },
    { value: "lux", label: "Luxor" },
    { value: "mat", label: "Matruh" },
    { value: "min", label: "Minya" },
    { value: "mnf", label: "Monufia" },
    { value: "nv", label: "New Valley" },
    { value: "nsh", label: "North Sinai" },
    { value: "ptd", label: "Port Said" },
    { value: "kba", label: "Qalyubia" },
    { value: "qna", label: "Qena" },
    { value: "red", label: "Red Sea" },
    { value: "shk", label: "Sharqia" },
    { value: "ssh", label: "South Sinai" },
    { value: "suz", label: "Suez" },
  ],
};

type Props = {
  form: any;
};

export default function PersonalInfoForm({ form }: Props) {
  const selectedCountry = form.watch("country") || "eg";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Shipping Information</h2>
        <p className="text-sm text-primary">Enter your shipping details</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {AddressFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: inputField }) => (
              <FormItem className={field.col}>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === "select" ? (
                    <Select
                      onValueChange={inputField.onChange}
                      value={inputField.value ?? ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={field.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.name === "country"
                          ? countries.map((country) => (
                            <SelectItem
                              key={country.value}
                              value={country.value}
                            >
                              {country.label}
                            </SelectItem>
                          ))
                          : states[selectedCountry]?.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      className="w-full"
                      placeholder={field.placeholder}
                      {...inputField}
                      value={inputField.value ?? ""}
                      onChange={inputField.onChange}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
