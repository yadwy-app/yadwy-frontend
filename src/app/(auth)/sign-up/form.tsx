"use client";

import { default as BaseForm } from "../_components/form";
import { forwardRef } from "react";
import { SignUpSchema } from "~/schemas/auth";
import login from "~/app/action/auth/login";
import Field from "../_components/field";
import PasswordField from "../_components/password-field";
import { z } from "zod";

const schema = SignUpSchema;
const defaultValues: z.infer<typeof SignUpSchema> = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const action = login;

export default function Form() {
  return (
    <BaseForm
      defaultValues={defaultValues}
      schema={schema}
      action={action}
      className="grid grid-cols-1 gap-4 md:grid-cols-2" // تحديد الشبكة
      inputs={[
        {
          name: "firstName",
          Field: forwardRef(function InputField(props: any, ref) {
            return <Field placeholder="First Name" className="" {...props} ref={ref} />;
          }),
        },
        
        {
          name: "lastName",
          className: "col-span-1",
          Field: forwardRef(function InputField(props: any, ref) {
            return <Field placeholder="Last Name" {...props} ref={ref} />;
          }),
        },
        {
          name: "address",
          className: "col-span-2", // جعل الحقل بعرض كامل
          Field: forwardRef(function InputField(props: any, ref) {
            return <Field placeholder="Address" {...props} ref={ref} />;
          }),
        },
        {
          name: "email",
          className: "col-span-2", // جعل الحقل بعرض كامل
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <Field
                placeholder="Email"
                autoComplete="email"
                {...props}
                ref={ref}
              />
            );
          }),
        },
        {
          name: "password",
          className: "col-span-2", // جعل الحقل بعرض كامل
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <PasswordField
                autoComplete="new-password"
                placeholder="Password"
                {...props}
                ref={ref}
              />
            );
          }),
        },
        {
          name: "confirmPassword",
          className: "col-span-2", // جعل الحقل بعرض كامل
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <PasswordField
                autoComplete="new-password"
                placeholder="Confirm Password"
                {...props}
                ref={ref}
              />
            );
          }),
        },
      ]}
      primaryButtonText="Sign Up"
      secondaryButtonLink={{
        href: "/login",
        text: "Already have an account? Log in",
      }}
    />
  );
}
