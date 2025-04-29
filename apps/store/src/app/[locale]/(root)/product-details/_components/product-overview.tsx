"use client";

import { Check } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

interface Props {
  features: string[];
}

export function ProductOverview({ features }: Props) {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
