"use client";

import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Link } from "~/i18n/routing";

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");
  const tPersonal = useTranslations("ProfilePage.personalInfo");
  const tAccount = useTranslations("ProfilePage.accountSummary");
  const tOrders = useTranslations("ProfilePage.recentOrders");

  // Determine direction based on language
  const isRtl = t("title") !== "Profile"; // Simple check for Arabic

  return (
    <div className="space-y-6" dir={isRtl ? "rtl" : "ltr"}>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>
      <Separator />
      <div className="grid gap-6">
        <Card className="text-muted border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>{tPersonal("title")}</CardTitle>
              <CardDescription>{tPersonal("description")}</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile/edit">
                <Pencil className={isRtl ? "ml-2 h-4 w-4" : "mr-2 h-4 w-4"} />
                {tPersonal("edit")}
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {tPersonal("fullName")}
                </div>
                <div>John Doe</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {tPersonal("email")}
                </div>
                <div>john.doe@example.com</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {tPersonal("phone")}
                </div>
                <div>+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {tPersonal("dob")}
                </div>
                <div>January 1, 1990</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-muted border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>{tAccount("title")}</CardTitle>
              <CardDescription>{tAccount("description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
                isRtl ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">
                  {tAccount("ordersPlaced")}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <div className="text-3xl font-bold">2</div>
                <div className="text-sm text-muted-foreground">
                  {tAccount("wishlistItems")}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">
                  {tAccount("reviews")}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary text-muted">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>{tOrders("title")}</CardTitle>
              <CardDescription>{tOrders("description")}</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile/orders">{tOrders("viewAll")}</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div
                className={`flex items-center ${
                  isRtl ? "justify-between flex-row-reverse" : "justify-between"
                } border-b pb-4`}
              >
                <div>
                  <div className="font-medium">Order #12345</div>
                  <div className="text-sm text-muted-foreground">
                    March 5, 2023
                  </div>
                </div>
                <div className={isRtl ? "text-left" : "text-right"}>
                  <div className="font-medium">$129.99</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block">
                    {tOrders("delivered")}
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center ${
                  isRtl ? "justify-between flex-row-reverse" : "justify-between"
                } border-b pb-4`}
              >
                <div>
                  <div className="font-medium">Order #12344</div>
                  <div className="text-sm text-muted-foreground">
                    February 28, 2023
                  </div>
                </div>
                <div className={isRtl ? "text-left" : "text-right"}>
                  <div className="font-medium">$79.50</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 inline-block">
                    {tOrders("shipped")}
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center ${
                  isRtl ? "justify-between flex-row-reverse" : "justify-between"
                }`}
              >
                <div>
                  <div className="font-medium">Order #12343</div>
                  <div className="text-sm text-muted-foreground">
                    February 15, 2023
                  </div>
                </div>
                <div className={isRtl ? "text-left" : "text-right"}>
                  <div className="font-medium">$214.30</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block">
                    {tOrders("delivered")}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
