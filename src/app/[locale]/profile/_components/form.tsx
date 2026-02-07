"use client";
import { zodResolver } from "@hookform/resolvers/zod"; // Updated resolver
import { Loader2 } from "lucide-react";
import { useActionState, useRef, useState } from "react";
import {
  type ControllerRenderProps,
  type Path,
  useForm,
} from "react-hook-form";
import type { z } from "zod"; // Import Zod
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form as _Form,
} from "~/components/ui/form";
import { toast } from "~/hooks/use-toast";
import type { ActionType, FormState } from "~/lib/forms";
import { cn } from "~/lib/utils";

// Updated type definitions for Zod
type Inputs<T extends z.ZodTypeAny, V extends Path<z.infer<T>>> = {
  className?: string;
  name: V;
  Field: React.ForwardRefExoticComponent<
    Omit<ControllerRenderProps<z.infer<T>, V>, "ref"> &
      React.RefAttributes<HTMLInputElement>
  >;
};

type Props<T extends z.ZodTypeAny> = {
  schema: T;
  defaultValues: z.infer<T>;
  updateAction: ActionType<z.infer<T>>;
  inputs: Inputs<T, Path<z.infer<T>>>[];
};

function transformInToFormObject(data: Record<string, unknown>) {
  const formData = new FormData();
  for (const key in data) {
    if (Array.isArray(data[key])) {
      (data[key] as Record<string, unknown>[]).forEach((obj, index) => {
        Object.keys(obj).forEach((keyItem) => {
          const keyName = [key, ".", index, ".", keyItem].join("");
          formData.append(keyName, obj[keyItem] as string | Blob);
        });
      });
    } else if (typeof data[key] === "object" && data[key] !== null) {
      const nestedObject = data[key] as Record<string, unknown>;
      for (const innerKey in nestedObject) {
        formData.append(
          `${key}.${innerKey}`,
          nestedObject[innerKey] as string | Blob,
        );
      }
    } else {
      formData.append(key, data[key] as string | Blob);
    }
  }
  return formData;
}

export default function Form<T extends z.ZodTypeAny>({
  schema,
  defaultValues,
  updateAction,
  inputs,
}: Props<T>) {
  const [isEditable, setIsEditable] = useState(false);

  const [state, formAction, isPending] = useActionState<
    FormState<z.infer<T>>,
    FormData
  >(updateAction, { error: undefined, fields: undefined });

  const ref = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema), // Updated resolver
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  if (state?.error) {
    toast({
      title: "Uh oh!",
      description: state.error.message,
      variant: "destructive",
    });
  }

  const handleSubmit = form.handleSubmit(() => {
    formAction(transformInToFormObject(form.getValues()));
    ref.current?.reset();
    setIsEditable(false);
    toast({
      title: "Updated!",
    });
  });

  return (
    <_Form {...form}>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        action={formAction}
        className="space-y-8 w-full"
      >
        <div className="space-y-4">
          {inputs.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              disabled={!isEditable}
              render={({ field }) => (
                <FormItem
                  className={cn("relative flex flex-col", item.className)}
                >
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
        <div className="flex justify-between gap-x-3">
          {isEditable && (
            <Button className="w-full" disabled={isPending}>
              {isPending ? <Loader2 className="animate-spin" /> : "Save"}
            </Button>
          )}
          <Button
            className="w-full"
            disabled={isPending}
            onClick={() => {
              setIsEditable(!isEditable);
              if (isEditable) {
                form.reset(defaultValues);
              }
            }}
            type="button"
          >
            {isEditable ? "Cancel" : "Edit"}
          </Button>
        </div>
      </form>
    </_Form>
  );
}
