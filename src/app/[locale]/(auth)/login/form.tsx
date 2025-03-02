"use client";

import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import Providers from "../_components/providers";
import Field from "../_components/field";
import PasswordField from "../_components/password-field";

import { default as BaseForm } from "../_components/form";
import { forwardRef } from "react";
import { LoginSchema } from "~/schemas/auth";
import login from "~/app/action/auth/login";
import { Link } from "~/i18n/routing";

const schema = LoginSchema;
const defaultValues = {
  email: "",
  password: "",
};
const action = login;
export function LoginForm() {
  return (
    <Card className="overflow-hidden border-none shadow-xl">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold">Welcome back</h2>
              <p className="text-balance text-muted">
                Login to your Acme Inc account
              </p>
            </div>
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
            <Providers />
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="relative hidden bg-primary md:block">
          <Image
            src="/login/login.svg"
            alt="Image"
            fill
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
    </Card>
  );
}
