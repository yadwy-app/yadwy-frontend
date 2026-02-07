"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useActionState, useOptimistic, useRef } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form as _Form,
} from "~/components/ui/form";
import { toast } from "~/hooks/use-toast";
import type { FormProps, FormState } from "~/lib/forms";
import { cn } from "~/lib/utils";

type Props<T extends z.ZodType> = FormProps<T> & {
  primaryButtonText: string;
  className?: string;
};

export default function Form<T extends z.ZodType>({
  schema,
  defaultValues,
  action,
  inputs,
  className,
  primaryButtonText,
}: Props<T>) {
  const [state, formAction, isPending] = useActionState<
    FormState<z.ZodType<T>>,
    FormData
  >(action, { error: undefined, fields: undefined });

  // Use optimistic UI update for better perceived performance
  const [optimisticIsPending, addOptimisticIsPending] = useOptimistic(
    isPending,
    (_state, newPending: boolean) => newPending,
  );

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
    if (ref.current) {
      // Show optimistic loading state
      addOptimisticIsPending(true);

      // Submit the form
      formAction(new FormData(ref.current));
    }
  });

  return (
    <_Form {...form}>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        action={formAction}
        className={"space-y-4"}
      >
        <div className={cn("space-y-2", className)}>
          {inputs.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="relative">
                  {item.label ? (
                    <FormLabel className="text-base capitalize">
                      {item.label}
                    </FormLabel>
                  ) : (
                    <FormLabel className="text-base capitalize">
                      {field.name.replace(/([A-Z][a-z])/g, " $1")}
                    </FormLabel>
                  )}
                  <FormControl>
                    <item.Field {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button
          type="submit"
          disabled={optimisticIsPending}
          className="w-full text-base transition-all duration-200"
        >
          {optimisticIsPending ? (
            <Loader2 className="animate-spin mr-2" />
          ) : null}
          {optimisticIsPending ? "Processing..." : primaryButtonText}
        </Button>
      </form>
    </_Form>
  );
}
