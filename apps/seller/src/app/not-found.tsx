import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-muted px-4">
          <div className="relative mb-6 flex h-32 w-32 items-center justify-center">
            <div className="absolute inset-0 animate-pulse rounded-full bg-muted opacity-50" />
            <div className="absolute inset-4 flex items-center justify-center rounded-full bg-background shadow-lg">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-destructive text-lg font-bold text-destructive-foreground shadow-lg">
              404
            </div>
          </div>

          <h1 className="mb-4 font-heading bg-gradient-to-r leading-[1.3] from-foreground to-muted-foreground bg-clip-text text-center text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl">
            Page Not Found
          </h1>

          <div className="mb-8 max-w-md text-center">
            <p className="text-muted-foreground">
              We couldn't find the product or page you were looking for. It
              might have been removed, renamed, or is temporarily unavailable.
            </p>
          </div>

          <Button size="lg" className="animate-bounce shadow-md" asChild>
            <Link href="/">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Return to Shop
            </Link>
          </Button>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;
