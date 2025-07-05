"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { toast } from "~/hooks/use-toast";
import { Link } from "~/i18n/routing";
import { SignUpSchema } from "~/schemas/auth";
import PasswordField from "../_components/password-field";
import Providers from "../_components/providers";

type SignUpFormValues = z.infer<typeof SignUpSchema>;

export default function FormSignUp() {
  const t = useTranslations("SignUp");
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (_data: SignUpFormValues) => {
    startTransition(async () => {
      toast({
        title: t("toast.submitting"),
        description: t("toast.description"),
      });
    });
  };

  return (
    <Card className="border-none">
      <CardContent className="flex flex-col">
        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl ltr:font-bold">{t("title")}</h2>
              <p className="text-muted-foreground ltr:text-balance">
                {t("description")}
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-6"
              >
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          {t("Fields.fullName")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Fields.fullNamePlaceholder")}
                            className="h-11 bg-background border-2 focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          {t("Fields.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("Fields.emailPlaceholder")}
                            type="email"
                            autoComplete="email"
                            className="h-11 bg-background border-2 focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            {t("Fields.password")}
                          </FormLabel>
                          <FormControl>
                            <PasswordField
                              placeholder={t("Fields.passwordPlaceholder")}
                              autoComplete="new-password"
                              className="h-11 bg-background border-2 focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            {t("Fields.confirmPassword")}
                          </FormLabel>
                          <FormControl>
                            <PasswordField
                              placeholder={t(
                                "Fields.confirmPasswordPlaceholder",
                              )}
                              autoComplete="new-password"
                              className="h-11 bg-background border-2 focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 text-base font-medium"
                  disabled={isPending}
                >
                  {isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isPending ? "Creating Account..." : t("primaryButtonText")}
                </Button>
              </form>
            </Form>

            <div className="space-y-4">
              <Providers text={t("or")} />
              <div className="text-center text-sm text-muted-foreground">
                {t("signup.title")}{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
                >
                  {t("signup.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
