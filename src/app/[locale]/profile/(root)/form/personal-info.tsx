"use client";

import { PopoverArrow } from "@radix-ui/react-popover";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { forwardRef } from "react";
import { z } from "zod";
import updatePersonalInfo from "~/app/action/profile/updatePersonalInfo";
import { Button } from "~/components/ui/button";
import Combobox from "~/components/ui/combobox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { UserInfoSchema } from "~/schemas/profile";
import Form from "../../_components/form";
import Field from "../../_components/field";

type Props = {
  userInfo: z.infer<typeof UserInfoSchema> & {
    emailVerified: Date;
  };
};

export default function PersonalForm({ userInfo }: Props) {
  return (
    <Form
      schema={UserInfoSchema}
      defaultValues={userInfo}
      updateAction={updatePersonalInfo}
      inputs={[
        {
          name: "email",
          Field: forwardRef(function InputField(props: any, ref) {
            // const { mutate, isPending } = useMutation({
            //   mutationFn: async () => {
            //     const res = await fetch("/api/auth/verify-email", {
            //       method: "POST",
            //       cache: "no-store",
            //     });
            //     return await res.json();
            //   },
            //   onSuccess: (data) => {
            //     if (data.error) {
            //       toast({
            //         title: "Uh oh!",
            //         description: data.error.message,
            //         variant: "destructive",
            //       });
            //     }
            //     if (data.data) {
            //       toast({
            //         title: "Check your email!",
            //         description: data.data.message,
            //       });
            //     }
            //   },
            // });
            const isPending = false;
            return (
              <>
                <div className="flex items-center gap-x-3 justify-between w-full">
                  <Field
                    className="placeholder:capitalize"
                    {...props}
                    ref={ref}
                  />
                  <Popover>
                    <PopoverTrigger className="duration-500">
                      {userInfo.emailVerified ? (
                        <CheckCircle2 className="fill-green-400" />
                      ) : (
                        <XCircle className="fill-destructive" />
                      )}
                    </PopoverTrigger>
                    <PopoverContent className="w-fit text-sm p-1">
                      {userInfo.emailVerified ? (
                        <p className="p-3 cursor-not-allowed">Email Verified</p>
                      ) : (
                        <Button className="w-24" variant="ghost">
                          {isPending ? (
                            <Loader2 className="animate-spin" />
                          ) : (
                            "Verify Email"
                          )}
                        </Button>
                      )}
                      <PopoverArrow />
                    </PopoverContent>
                  </Popover>
                </div>
              </>
            );
          }),
        },
        {
          name: "gender",
          Field: forwardRef(function ComboboxField(props: any, _) {
            return (
              <Combobox
                values={[
                  { label: "Male", value: "m" },
                  { label: "Female", value: "f" },
                  { label: "Prefer Not To Say", value: "o" },
                ]}
                selectText="Choose You Gender"
                emptyValue="O"
                {...props}
              />
            );
          }),
        },
      ]}
    />
  );
}
