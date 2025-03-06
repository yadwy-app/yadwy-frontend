"use client"

import { Check } from "lucide-react"

type StepProps = {
  steps: Array<{
    id: number;
    icon: React.ReactNode;
    label: string;
  }>;
  currentStep: number;
};

export default function StepsNavagation({ steps, currentStep }: StepProps) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex w-full items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                  i + 1 < currentStep
                    ? "border-primary bg-primary text-primary-foreground"
                    : i + 1 === currentStep
                      ? "border-primary text-primary"
                      : "border-muted-foreground/30 text-muted-foreground/50"
                }`}
              >
                {i + 1 < currentStep ? <Check className="h-6 w-6" /> : s.icon}
              </div>
              <span
                className={`mt-2 text-sm ${
                  i + 1 <= currentStep ? "font-medium text-foreground" : "text-muted-foreground/50"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative mx-auto mt-4">
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted"></div>
        <div
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}
