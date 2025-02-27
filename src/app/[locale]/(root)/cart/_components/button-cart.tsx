import { Link } from "~/i18n/routing";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}
export const ButtonCart = ({ href, children }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary p-3 text-white transition-all hover:bg-secondary"
    >
      {children}
    </Link>
  );
};
