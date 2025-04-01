import Link from "next/link";
import type React from "react";

interface LinkProp {
  children: React.ReactNode;
  href: string;
}
export const LinkIcon = ({ children, href, ...props }: LinkProp) => {
  return (
    <Link
      aria-disabled
      className="bg-accent p-2 w rounded-full flex justify-center items-center"
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
