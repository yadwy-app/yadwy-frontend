import { CreditCard, Home, Package, Settings, User } from "lucide-react";
import { Footer } from "~/components/layouts/footer";
import Header from "~/components/layouts/header";
import PhoneMenu from "~/components/layouts/phone-menu";
import { SidebarNav } from "./_components/sidebar-nav";

const links = [
  {
    title: "Account",
    href: "/profile",
    icon: <User className="h-4 w-4" />,
    exact: true,
  },
  {
    title: "Orders",
    href: "/profile/orders",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Addresses",
    href: "/profile/addresses",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Payment Methods",
    href: "/profile/payment",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/profile/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-8 min-h-[100vh]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px]">
          <SidebarNav items={links} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <PhoneMenu />
      <Footer />
    </>
  );
}
