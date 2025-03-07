"use client";

import Form from "../../_components/form";
import { forwardRef, useState } from "react";
import { cn } from "~/lib/utils";
import Field from "../../_components/field";
import { z } from "zod";
import { CosmaticsSchema } from "~/schemas/profile";
import updateCosmatics from "~/app/action/profile/updateCosmatics";

type Props = {
  userInfo: z.infer<typeof CosmaticsSchema>;
};

export default function CosmeticsForm({ userInfo }: Props) {
  const [progress, setProgress] = useState<number | undefined>(undefined);

  return (
    <Form
      schema={CosmaticsSchema}
      defaultValues={userInfo}
      updateAction={updateCosmatics}
      inputs={[
        {
          name: "displayName",
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <Field className="placeholder:capitalize" {...props} ref={ref} />
            );
          }),
        },
        {
          name: "profilePicture",
          Field: forwardRef(function InputField(props: any, ref) {
            return (
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  accept="image/*"
                  className={cn(
                    "file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90",
                    props.disabled && "cursor-not-allowed opacity-50",
                  )}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      // Simulate file upload progress
                      setProgress(0);
                      const interval = setInterval(() => {
                        setProgress((prev) => {
                          if (prev === undefined || prev >= 100) {
                            clearInterval(interval);
                            return 100;
                          }
                          return prev + 10;
                        });
                      }, 300);

                      // Simulate file upload completion
                      setTimeout(() => {
                        clearInterval(interval);
                        setProgress(100);
                        const fileUrl = URL.createObjectURL(file);
                        props.onChange(fileUrl); // Update the form value with the file URL
                      }, 3000);
                    } else {
                      props.onChange(null); // Clear the form value if no file is selected
                    }
                  }}
                  ref={ref}
                />
                {progress !== undefined && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            );
          }),
        },
      ]}
    />
  );
}
