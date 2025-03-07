import { CircleUserRound, Folders, Wallet } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { SidebarNav } from "./_components/sidebar-nav";
import { Navbar } from "~/components/layouts/navbar";
import { Footer } from "~/components/layouts/footer";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/profile",
    icon: <CircleUserRound />,
  },
  {
    title: "Orders",
    href: "/profile/orders",
    icon: <Folders />,
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
      <main className="flex min-h-screen scrollbar min-w-0 flex-col items-center justify-between px-6 md:px-10 lg:px-20 py-10 gap-y-20 max-w-6xl lg:max-w-7xl mx-auto @container">
        <div className="w-full grid md:grid-cols-[minmax(320px,1fr)_3fr] gap-y-8 md:gap-x-8">
          <aside className="flex relative items-start justify-start flex-col max-h-fit">
            <div className="md:sticky top-20 w-full 2xl:max-w-xs space-y-4">
              <h2 className="text-3xl max-w-xs">Account Management</h2>
              <Separator />
              <SidebarNav items={sidebarNavItems} />
            </div>
          </aside>
          <div className="flex-1 space-y-6 ">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
