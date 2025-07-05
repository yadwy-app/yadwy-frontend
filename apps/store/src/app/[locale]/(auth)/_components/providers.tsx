"use client";

import dynamic from "next/dynamic";
import { Button } from "~/components/ui/button";

// Dynamically import the icon to reduce initial bundle size
const FaGoogle = dynamic(
  () => import("react-icons/fa6").then((mod) => mod.FaGoogle),
  {
    loading: () => (
      <div className="h-4 w-4 bg-gray-300 animate-pulse rounded-full" />
    ),
    ssr: false, // No need to render this on the server
  },
);

export default function Providers({ text }: { text: string }) {
  return (
    <>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border my-6">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          {text}
        </span>
      </div>
      <div className="grid gap-4">
        <Button
          variant="outline"
          className="w-full flex  items-center gap-2 justify-center"
          type="button"
        >
          <FaGoogle className="h-4 w-4" />
          <span>Continue with Google</span>
        </Button>
        {/* <Button variant="outline" className="w-full">
          <Facebook />
          <span className="sr-only">Login with Meta</span>
        </Button> */}
      </div>
    </>
  );
}
