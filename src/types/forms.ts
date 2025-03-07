import type { ControllerRenderProps, Path } from "react-hook-form";
import type { z } from "zod";

type Inputs<T extends z.ZodType, V extends Path<z.infer<T>>> = {
  className?: string;
  name: V;
  label?: string;
  Field: React.ForwardRefExoticComponent<
    Omit<ControllerRenderProps<z.infer<T>, V>, "ref"> &
    React.RefAttributes<HTMLInputElement>
  >;
};

export type FormState<T> = { error?: { message: string }; fields?: T };

export type ActionType<T> = (
  formState: FormState<T>,
  formData: FormData,
) => Promise<FormState<T>>;

export type FormProps<T extends z.ZodType> = {
  schema: T;
  defaultValues: z.infer<T>;
  action: ActionType<z.infer<T>>;
  inputs: Inputs<T, Path<z.infer<T>>>[];
};
