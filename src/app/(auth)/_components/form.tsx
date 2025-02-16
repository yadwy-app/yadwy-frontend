"use client";
import { useActionState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { FormProps, FormState } from "~/types/forms";
import {
  Form as _Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "~/hooks/use-toast";

type Props<T extends z.ZodType> = FormProps<T> & {
  primaryButtonText: string;
  secondaryButtonLink: {
    href: string;
    text: string;
  };
};

export default function Form<T extends z.ZodType>({
  schema,
  defaultValues,
  action,
  inputs,
  primaryButtonText,
  secondaryButtonLink,
}: Props<T>) {
  const [state, formAction, isPending] = useActionState<
    FormState<z.ZodType<T>>,
    FormData
  >(action, { error: undefined, fields: undefined });

  if (state?.error) {
    toast({
      title: "Uh oh!",
      description: state.error.message,
      variant: "destructive",
    });
  }
  const ref = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  const handleSubmit = form.handleSubmit(() => {
    formAction(new FormData(ref.current!));
  });

  return (
    <_Form {...form}>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        action={formAction}
        className="space-y-8"
      >
        <div className="space-y-4">
          {inputs.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="capitalize text-base">
                    {field.name.replace(/([A-Z][a-z])/g, " $1")}
                  </FormLabel>
                  <FormControl>
                    <item.Field {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="flex justify-between md:gap-x-8 gap-x-2">
          <Button
            type="submit"
            disabled={isPending}
            className="capitalize w-full text-base"
          >
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              primaryButtonText
            )}
          </Button>
          <Button asChild variant="ghost" type="button" className="capitalize">
            <Link prefetch={false} href={secondaryButtonLink.href}>
              {secondaryButtonLink.text}
            </Link>
          </Button>
        </div>
      </form>
    </_Form>
  );
}
