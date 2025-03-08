import { SidebarNav } from "./_components/sidebar-nav";
import { Navbar } from "~/components/layouts/navbar";
import { Footer } from "~/components/layouts/footer";
import { CreditCard, Home, Package, Settings, User } from "lucide-react";

const links = [
  {
    title: "Account",
    href: "/profile",
    icon: <User />,
    exact: true,
  },
  {
    title: "Orders",
    href: "/profile/orders",
    icon: <Package />,
  },
  {
    title: "Addresses",
    href: "/profile/addresses",
    icon: <Home />,
  },
  {
    title: "Payment Methods",
    href: "/profile/payment",
    icon: <CreditCard />,
  },
  {
    title: "Settings",
    href: "/profile/settings",
    icon: <Settings />,
  },
];

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-8">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px]">
          <SidebarNav items={links} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
