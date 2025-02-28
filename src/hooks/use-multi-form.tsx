"use client";

import { useState } from "react";

export function useMultiStepForm(steps: React.ReactNode[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  function next() {
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  }

  function back() {
    if (!isFirstStep) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep,
    isLastStep,
    goTo,
    next,
    back,
  };
}
