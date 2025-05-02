"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent } from "~/components/ui/card";

type Props = {
  sellerName: string;
  sellerSubtitle: string;
  sellerProductsCount: string;
  bio: string;
  memberSince: string;
  sellerRating?: number;
};

export function AboutSeller({
  sellerName,
  sellerSubtitle,
  sellerProductsCount,
  memberSince,
  bio,
  sellerRating,
}: Props) {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-medium text-lg">{sellerName}</h3>
            <p className="text-sm text-muted-foreground">{sellerSubtitle}</p>

            <div className="flex items-center gap-6 mt-2">
              <div>
                <p className="text-sm font-medium">Member Since</p>
                <p className="text-sm text-muted-foreground">{memberSince}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Products</p>
                <p className="text-sm text-muted-foreground">
                  {sellerProductsCount}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Rating</p>
                <div className="flex items-center">
                  {Array.from({ length: sellerRating ?? 0 }).map((_, index) => (
                    <Star
                      key={`star-rating-${index}-${sellerName}`}
                      className="h-2 w-2 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm md:text-base text-muted-foreground">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
