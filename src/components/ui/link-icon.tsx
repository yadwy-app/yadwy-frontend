import Link from "next/link";
import React from "react";

interface LinkProp {
  children: React.ReactNode;
  href: string;
}
export const LinkIcon = ({ children, href }: LinkProp) => {
  return <Link className="bg-accent p-2 w rounded-full flex justify-center items-center" href={href}>{children}</Link>;
};
