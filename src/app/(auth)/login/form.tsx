"use client";

import Field from "../_components/field";
import PasswordField from "../_components/password-field";

import { default as BaseForm } from "../_components/form";
import { forwardRef } from "react";
import { LoginSchema } from "~/schemas/auth";
import login from "~/app/action/auth/login";

const schema = LoginSchema;
const defaultValues = {
  email: "",
  password: "",
};
const action = login;

export default function Form() {
  return (
    <BaseForm
      defaultValues={defaultValues}
      schema={schema}
      action={action}
      inputs={[
        {
          name: "email",
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <Field
                placeholder="email"
                className="placeholder:capitalize"
                autoComplete="email"
                {...props}
                ref={ref}
              />
            );
          }),
        },
        {
          name: "password",
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <PasswordField
                autoComplete="current-password"
                className="placeholder:capitalize"
                {...props}
                ref={ref}
              />
            );
          }),
        },
      ]}
      primaryButtonText="Login"
      secondaryButtonLink={{
        href: "/forgot-password",
        text: "Forgot Password?",
      }}
    />
  );
}
