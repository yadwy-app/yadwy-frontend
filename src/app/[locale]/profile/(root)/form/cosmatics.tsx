"use client";

import Form from "../../_components/form";
import { forwardRef } from "react";
import Field from "../../_components/field";
import { CosmaticsSchema } from "~/schemas/profile";
import updateCosmatics from "~/app/action/profile/updateCosmatics";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

type Props = {
  userInfo: z.infer<typeof CosmaticsSchema>;
};

export default function CosmeticsForm({ userInfo }: Props) {
  return (
    <Form
      schema={CosmaticsSchema}
      defaultValues={userInfo}
      updateAction={updateCosmatics}
      inputs={[
        {
          name: "displayName",
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <Field className="placeholder:capitalize" {...props} ref={ref} />
            );
          }),
        },
        {
          name: "phone",
          Field: forwardRef(function PhoneField(props: any, ref) {
            return <Field type="tel" {...props} ref={ref} />;
          }),
        },
        {
          name: "email",
          Field: forwardRef(function EmailField(props: any, ref) {
            return <Field type="email" {...props} ref={ref} />;
          }),
        },
        {
          name: "gender",
          Field: forwardRef(function GenderField(props: any, ref) {
            return (
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m">Male</SelectItem>
                  <SelectItem value="f">Female</SelectItem>
                  <SelectItem value="o">Other</SelectItem>
                </SelectContent>
              </Select>
            );
          }),
        },
      ]}
    />
  );
}
