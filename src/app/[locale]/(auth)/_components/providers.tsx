import { Facebook } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import { Button } from "~/components/ui/button";

export default function Providers({
  text,
}: {
  text: string;
}) {
  return (
    <>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          {text}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full">
          <FaGoogle />
          <span className="sr-only">Login with Google</span>
        </Button>
        <Button variant="outline" className="w-full">
          <Facebook />
          <span className="sr-only">Login with Meta</span>
        </Button>
      </div>
    </>
  );
}
