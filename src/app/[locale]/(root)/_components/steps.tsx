"use client";
interface StepsProps {
  id: number;
  icon: React.ReactNode;
  label: string;
}

interface StepOrderProps {
  steps: StepsProps[];
  currentStep: number;
}

export const Steps = ({ steps, currentStep }: StepOrderProps) => {
  return (
    <div className="mb-10">
      <ol className="flex w-full items-center">
        {steps.map((step, index) => (
          <li
            key={step.id}
            className={`flex items-center ${index === steps.length - 1 ? "w-fit" : "w-full"} ${
              index !== steps.length - 1
                ? "w-fit after:inline-block after:h-1 after:w-full after:border-b"
                : ""
            } ${
              index < currentStep ? "after:bg-primary" : "after:bg-lightPrimary"
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12 ${
                index < currentStep
                  ? "bg-primary text-white"
                  : "bg-lightPrimary text-primary"
              }`}
            >
              {step.icon}
            </span>
          </li>
        ))}
      </ol>
      {/* <div className="mt-4 flex justify-between">
        <button onClick={prevStep} disabled={currentStep === 1} className="px-4 py-2 bg-gray-300 rounded">
          السابق
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length} className="px-4 py-2 bg-blue-500 text-white rounded">
          التالي
        </button>
      </div> */}
    </div>
  );
};
