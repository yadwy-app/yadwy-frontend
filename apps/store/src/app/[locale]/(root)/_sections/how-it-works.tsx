"use client";

import { Package, Paintbrush, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

const steps = [
  {
    icon: Search,
    key: "discover" as const,
    number: "01",
  },
  {
    icon: Paintbrush,
    key: "customize" as const,
    number: "02",
  },
  {
    icon: Package,
    key: "receive" as const,
    number: "03",
  },
];

export function HowItWorks() {
  const t = useTranslations("HomePage.HowItWorks");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          steps.forEach((_, index) => {
            setTimeout(() => {
              setActiveStep(index);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-accent/30 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={cn(
            "mb-12 md:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex flex-col gap-3">
            <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {t("subtitle")}
            </span>
          </div>
        </div>

        {/* Desktop Steps - Horizontal Layout */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.key}
                className={cn(
                  "relative flex flex-col items-center text-center transition-all duration-500",
                  activeStep >= index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector line to NEXT step */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute top-16 z-0"
                    style={{
                      insetInlineStart: "calc(50% + 70px)",
                      width: "calc(100% - 140px)",
                      height: "2px",
                    }}
                  >
                    <div className="absolute inset-0 bg-border rounded-full" />
                    <div
                      className={cn(
                        "absolute inset-y-0 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700 ease-out",
                        activeStep > index ? "w-full" : "w-0",
                      )}
                      style={{
                        transitionDelay: `${(index + 1) * 300}ms`,
                        insetInlineStart: 0,
                      }}
                    />
                    <div
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full transition-all duration-700 ease-out",
                        activeStep > index ? "opacity-100" : "opacity-0",
                      )}
                      style={{
                        boxShadow:
                          activeStep > index
                            ? "0 0 12px hsl(var(--primary))"
                            : "none",
                        transitionDelay: `${(index + 1) * 300}ms`,
                        insetInlineEnd: activeStep > index ? 0 : "auto",
                        insetInlineStart: activeStep > index ? "auto" : 0,
                      }}
                    />
                  </div>
                )}

                {/* Icon Container */}
                <div className="relative mb-6 z-10">
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full transition-all duration-500",
                      activeStep >= index
                        ? "animate-ping-slow bg-primary/20"
                        : "bg-transparent",
                    )}
                    style={{ animationDelay: `${index * 200}ms` }}
                  />
                  <div
                    className={cn(
                      "relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500",
                      activeStep >= index
                        ? "bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl shadow-primary/10"
                        : "bg-muted/50",
                    )}
                  >
                    <div
                      className={cn(
                        "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500",
                        activeStep >= index
                          ? "bg-gradient-to-br from-primary/30 to-primary/10"
                          : "bg-muted",
                      )}
                    >
                      <step.icon
                        className={cn(
                          "w-10 h-10 transition-all duration-500",
                          activeStep >= index
                            ? "text-primary scale-100"
                            : "text-muted-foreground scale-90",
                        )}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "absolute -top-1 -end-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500",
                      activeStep >= index
                        ? "bg-primary text-primary-foreground scale-100 shadow-lg shadow-primary/30"
                        : "bg-muted text-muted-foreground scale-90",
                    )}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 max-w-xs z-10">
                  <h3
                    className={cn(
                      "text-xl font-semibold transition-colors duration-500",
                      activeStep >= index
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {t(`${step.key}.title`)}
                  </h3>
                  <p
                    className={cn(
                      "text-base transition-colors duration-500",
                      activeStep >= index
                        ? "text-muted-foreground"
                        : "text-muted-foreground/50",
                    )}
                  >
                    {t(`${step.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Steps - Vertical Layout */}
        <div className="md:hidden">
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div
                key={step.key}
                className={cn(
                  "relative transition-all duration-500",
                  activeStep >= index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step content */}
                <div className="flex items-start gap-5">
                  {/* Icon Container */}
                  <div className="relative shrink-0 z-10">
                    <div
                      className={cn(
                        "absolute inset-0 rounded-full transition-all duration-500",
                        activeStep >= index
                          ? "animate-ping-slow bg-primary/20"
                          : "bg-transparent",
                      )}
                      style={{ animationDelay: `${index * 200}ms` }}
                    />
                    <div
                      className={cn(
                        "relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500",
                        activeStep >= index
                          ? "bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl shadow-primary/10"
                          : "bg-muted/50",
                      )}
                    >
                      <div
                        className={cn(
                          "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
                          activeStep >= index
                            ? "bg-gradient-to-br from-primary/30 to-primary/10"
                            : "bg-muted",
                        )}
                      >
                        <step.icon
                          className={cn(
                            "w-7 h-7 transition-all duration-500",
                            activeStep >= index
                              ? "text-primary scale-100"
                              : "text-muted-foreground scale-90",
                          )}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div
                      className={cn(
                        "absolute -top-1 -end-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500",
                        activeStep >= index
                          ? "bg-primary text-primary-foreground scale-100 shadow-lg shadow-primary/30"
                          : "bg-muted text-muted-foreground scale-90",
                      )}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-4">
                    <h3
                      className={cn(
                        "text-lg font-semibold transition-colors duration-500 mb-1",
                        activeStep >= index
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {t(`${step.key}.title`)}
                    </h3>
                    <p
                      className={cn(
                        "text-sm transition-colors duration-500",
                        activeStep >= index
                          ? "text-muted-foreground"
                          : "text-muted-foreground/50",
                      )}
                    >
                      {t(`${step.key}.description`)}
                    </p>
                  </div>
                </div>

                {/* Connector line BELOW this step (between steps) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-start ps-[46px] py-2">
                    <div className="relative w-0.5 h-8">
                      <div className="absolute inset-0 bg-border rounded-full" />
                      <div
                        className={cn(
                          "absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-primary/50 rounded-full transition-all duration-500",
                          activeStep > index ? "h-full" : "h-0",
                        )}
                        style={{ transitionDelay: `${(index + 1) * 300}ms` }}
                      />
                      {/* Rounded dot at the end */}
                      <div
                        className={cn(
                          "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full transition-all duration-500",
                          activeStep > index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0",
                        )}
                        style={{
                          boxShadow:
                            activeStep > index
                              ? "0 0 8px hsl(var(--primary))"
                              : "none",
                          transitionDelay: `${(index + 1) * 300 + 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
