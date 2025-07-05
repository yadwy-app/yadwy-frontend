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
import { LoginSchema } from "~/schemas/auth";
import PasswordField from "../_components/password-field";
import Providers from "../_components/providers";

type LoginFormData = z.infer<typeof LoginSchema>;

export function LoginForm() {
  const t = useTranslations("Login");
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (_data: LoginFormData) => {
    startTransition(() => {
      toast({
        title: "Submitting...",
        description: "Please wait while we process your request.",
      });
    });
  };

  return (
    <Card className="border-none">
      <CardContent className="flex flex-col">
        <div className="p-6 md:p-8">
          <div className="flex flex-col">
            <div className="flex flex-col items-center text-center gap-2">
              <h2 className="text-2xl ltr:font-bold">{t("title")}</h2>
              <p className="ltr:text-balance text-muted-foreground">
                {t("description")}
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("Fields.email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Fields.emailPlaceholder")}
                          type="email"
                          autoComplete="email"
                          className="placeholder:capitalize"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("Fields.password")}</FormLabel>
                      <FormControl>
                        <PasswordField
                          placeholder={t("Fields.passwordPlaceholder")}
                          autoComplete="current-password"
                          className="placeholder:capitalize"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <div className="rtl:text-left ltr:text-right">
                        <Button
                          variant="link"
                          asChild
                          type="button"
                          className="h-auto px-0 text-sm font-normal text-muted-foreground hover:text-primary"
                        >
                          <Link prefetch={false} href={"/forgot-password"}>
                            {t("forgotPassword")}
                          </Link>
                        </Button>
                      </div>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  variant="default"
                  disabled={isPending}
                >
                  {isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    t("primaryButtonText")
                  )}
                </Button>
              </form>
            </Form>

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
      </CardContent>
    </Card>
  );
}
