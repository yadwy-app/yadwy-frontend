"use client";

import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  PageContainer,
  PageHeader,
  PageTitle,
} from "~/components/page-component";
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

  return (
    <PageContainer className="space-y-6">
      <PageHeader>
        <PageTitle className="text-2xl font-bold tracking-tight">
          {t("title")}
        </PageTitle>
        <p className="text-muted-foreground">{t("description")}</p>
      </PageHeader>
      <Separator />
      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>{t("personalInfo.title")}</CardTitle>
              <CardDescription>{t("personalInfo.description")}</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile/edit">
                <Pencil className={"me-2 h-4 w-4"} />
                {t("personalInfo.edit")}
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {t("personalInfo.fullName")}
                </div>
                <div>John Doe</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {t("personalInfo.email")}
                </div>
                <div>john.doe@example.com</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {t("personalInfo.phone")}
                </div>
                <div>+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  {t("personalInfo.dob")}
                </div>
                <div>January 1, 1990</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>{t("recentOrders.title")}</CardTitle>
              <CardDescription>{t("recentOrders.description")}</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile/orders">{t("recentOrders.viewAll")}</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div
                className={`flex items-center justify-between border-b pb-4`}
              >
                <div>
                  <div className="font-medium">Order #12345</div>
                  <div className="text-sm text-muted-foreground">
                    March 5, 2023
                  </div>
                </div>
                <div className={"text-end"}>
                  <div className="font-medium">$129.99</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block">
                    {t("recentOrders.delivered")}
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center justify-between border-b pb-4`}
              >
                <div>
                  <div className="font-medium">Order #12344</div>
                  <div className="text-sm text-muted-foreground">
                    February 28, 2023
                  </div>
                </div>
                <div className={"text-end"}>
                  <div className="font-medium">$79.50</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 inline-block">
                    {t("recentOrders.shipped")}
                  </div>
                </div>
              </div>
              <div className={`flex items-center justify-between`}>
                <div>
                  <div className="font-medium">Order #12343</div>
                  <div className="text-sm text-muted-foreground">
                    February 15, 2023
                  </div>
                </div>
                <div className={"text-end"}>
                  <div className="font-medium">$214.30</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block">
                    {t("recentOrders.delivered")}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
