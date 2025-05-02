"use client";
import { ChevronDown, ChevronUp, Heart, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

type Props = {
  title: string;
  price: number;
  orgPrice: number;
  rate: number;
  reveiwCount: number;
  description: string;
};

export default function ProductDetails({
  title,
  price,
  orgPrice,
  rate,
  description,
  reveiwCount,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const [showReadMore, setShowReadMore] = useState(false);
  useEffect(() => {
    if (descriptionRef.current) {
      const fullHeight = descriptionRef.current.scrollHeight;
      setDescriptionHeight(fullHeight);
      setShowReadMore(fullHeight > 96); // 96px = 6rem (collapsed height)
    }
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Badge className="text-xs font-normal px-2 py-0.5">Bestseller</Badge>
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <h1 className="text-xl font-bold font-heading md:text-3xl">{title}</h1>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-text">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm">{rate}</span>
        </div>
        <span className="text-sm">({reveiwCount} reviews)</span>
      </div>
      <div className="mt-2">
        <span className="text-3xl font-semibold">${price}</span>
        <span className="text-muted-foreground ml-2 line-through">
          {orgPrice}
        </span>
      </div>
      <div className="mt-4 relative">
        <div
          className={`prose prose-sm max-w-none text-muted-foreground overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ maxHeight: expanded ? `${descriptionHeight}px` : "96px" }}
        >
          <div ref={descriptionRef}>{description}</div>
        </div>

        {/* Gradient overlay only when collapsed */}
        {!expanded && showReadMore && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}

        {/* Fixed position read more button */}
        {showReadMore && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-1 bg-background">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="text-primary font-medium text-sm flex items-center gap-1"
            >
              {expanded ? (
                <>
                  Show less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
