"use client";

import { Check, ChevronRight, Store, Upload } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      setProgress((step + 1) * 25);
    } else {
      router.push("/");
    }
  };

  const handleSkip = () => {
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Let's set up your store! 🎉
          </CardTitle>
          <CardDescription>
            Step {step} of 4:{" "}
            {step === 1
              ? "Store Information"
              : step === 2
                ? "Product Category"
                : step === 3
                  ? "Shipping Address"
                  : "All Done!"}
          </CardDescription>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" placeholder="Enter your store name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-logo">Store Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <Store className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-description">Store Description</Label>
                <Textarea
                  id="store-description"
                  placeholder="Tell customers about your store and products"
                  rows={3}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-category">
                  Primary Product Category
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="home-decor">Home Decor</SelectItem>
                    <SelectItem value="clothing">
                      Clothing & Accessories
                    </SelectItem>
                    <SelectItem value="art">Art & Collectibles</SelectItem>
                    <SelectItem value="craft-supplies">
                      Craft Supplies
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Do you currently sell on other platforms?</Label>
                <RadioGroup defaultValue="no">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-volume">
                  Expected Monthly Order Volume
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select volume" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 orders</SelectItem>
                    <SelectItem value="11-50">11-50 orders</SelectItem>
                    <SelectItem value="51-100">51-100 orders</SelectItem>
                    <SelectItem value="100+">100+ orders</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address-name">Address Name</Label>
                <Input
                  id="address-name"
                  placeholder="e.g. Main Store, Workshop"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="street">Street Address</Label>
                <Input id="street" placeholder="Street address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="State/Province" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP/Postal Code</Label>
                  <Input id="zip" placeholder="ZIP/Postal Code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">You're all set!</h3>
              <p className="mb-6 text-muted-foreground">
                Your store is now ready. You can start adding products and
                customizing your store.
              </p>
              <Image
                // TODO: add the image of the seller
                src="/placeholder.svg?height=120&width=240"
                alt="Success illustration"
                width={240}
                height={120}
                className="mb-6"
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" onClick={handleNext}>
            {step < 4 ? (
              <>
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Go to Dashboard"
            )}
          </Button>
          {step < 4 && (
            <Button variant="ghost" size="sm" onClick={handleSkip}>
              Skip for now
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
