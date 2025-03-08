"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Field from "../_components/field";
import PasswordField from "../_components/password-field";
import Providers from "../_components/providers";
import { Link } from "~/i18n/routing";
import Image from "next/image";
import { SignUpSchema } from "~/schemas/auth";
import signUpAction from "~/app/action/auth/sign-up";

type Props = {
  name: string;
  placeholder?: string;
};

export default function FormSignUp() {
  const t = useTranslations("SignUp");

  const methods = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    try {
      // console.log("Form Data:", data);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      await signUpAction(data, formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card className="overflow-hidden border-none shadow-xl">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl ltr:font-bold">{t("title")}</h2>
              <p className="text-muted ltr:text-balance">{t("description")}</p>
            </div>

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <div>
                  <Field
                    placeholder={t("Fields.fullNamePlaceholder")}
                    {...methods.register("fullName")}
                  />
                  {methods.formState.errors.fullName && (
                    <p className="text-sm text-red-500">
                      {methods.formState.errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Field
                    placeholder={t("Fields.emailPlaceholder")}
                    {...methods.register("email")}
                  />
                  {methods.formState.errors.email && (
                    <p className="text-sm text-red-500">
                      {methods.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <PasswordField
                    placeholder={t("Fields.passwordPlaceholder")}
                    {...methods.register("password")}
                  />
                  {methods.formState.errors.password && (
                    <p className="text-sm text-red-500">
                      {methods.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <PasswordField
                    placeholder={t("Fields.confirmPasswordPlaceholder")}
                    {...methods.register("confirmPassword")}
                  />
                  {methods.formState.errors.confirmPassword && (
                    <p className="text-sm text-red-500">
                      {methods.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  {t("primaryButtonText")}
                </Button>
              </form>
            </FormProvider>

            <Providers text={t("or")} />
            <div className="text-center text-sm">
              {t("signup.title")}{" "}
              <Link href="/sign-up" className="underline underline-offset-4">
                {t("signup.button")}
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
