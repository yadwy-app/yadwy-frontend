import { Pencil } from "lucide-react";

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
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      <div className="grid gap-6">
        <Card className="text-muted border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Your personal details and contact information
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile/edit">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Full Name
                </div>
                <div>John Doe</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Email
                </div>
                <div>john.doe@example.com</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Phone
                </div>
                <div>+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Date of Birth
                </div>
                <div>January 1, 1990</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="text-muted border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>Account Summary</CardTitle>
              <CardDescription>
                Overview of your account activity
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">
                  Orders Placed
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <div className="text-3xl font-bold">2</div>
                <div className="text-sm text-muted-foreground">
                  Wishlist Items
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary text-muted">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Your most recent purchases</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile/orders">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="font-medium">Order #12345</div>
                  <div className="text-sm text-muted-foreground">
                    March 5, 2023
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$129.99</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block">
                    Delivered
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="font-medium">Order #12344</div>
                  <div className="text-sm text-muted-foreground">
                    February 28, 2023
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$79.50</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 inline-block">
                    Shipped
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Order #12343</div>
                  <div className="text-sm text-muted-foreground">
                    February 15, 2023
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$214.30</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block">
                    Delivered
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
