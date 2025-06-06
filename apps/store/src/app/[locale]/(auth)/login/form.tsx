"use client";

import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import Field from "../_components/field";
import PasswordField from "../_components/password-field";
import Providers from "../_components/providers";

import { useTranslations } from "next-intl";
import { forwardRef } from "react";
import login from "~/app/action/auth/login";
import { Link } from "~/i18n/routing";
import { LoginSchema } from "~/schemas/auth";
import { default as BaseForm } from "../_components/form";

const schemas = LoginSchema;
const defaultValues = {
  email: "",
  password: "",
};
const action = login;

export function LoginForm() {
  const t = useTranslations("Login");
  const emailplaceholder = t("Fields.emailPlaceholder");
  const passwordplaceholder = t("Fields.passwordPlaceholder");

  return (
    <Card className="overflow-hidden border-none shadow-xl">
      <CardContent className="grid p-0 md:grid-cols-2 xl:grid-cols-[1fr_1.5fr] md:h-[600px]">
        <div className="p-6 md:p-8">
          <div className="flex flex-col">
            <div className="flex flex-col items-center text-center gap-2">
              <h2 className="text-2xl ltr:font-bold">{t("title")}</h2>
              <p className="ltr:text-balance text-muted-foreground">
                {t("description")}
              </p>
            </div>
            <BaseForm
              defaultValues={defaultValues}
              schema={schemas}
              action={action}
              inputs={[
                {
                  name: "email",
                  label: t("Fields.email"),
                  Field: forwardRef(function InputField(props, ref) {
                    return (
                      <Field
                        placeholder={emailplaceholder}
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
                  label: t("Fields.password"),
                  Field: forwardRef(function InputField(props, ref) {
                    return (
                      <PasswordField
                        placeholder={passwordplaceholder}
                        autoComplete="current-password"
                        className="placeholder:capitalize"
                        {...props}
                        ref={ref}
                      />
                    );
                  }),
                },
              ]}
              primaryButtonText={t("primaryButtonText")}
            />
            <Providers text={t("or")} />
            <div className="text-center text-sm mt-4">
              {t("signup.title")}{" "}
              <Link
                href="/sign-up"
                className="underline underline-offset-4 text-sm"
              >
                <strong>{t("signup.button")}</strong>
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
