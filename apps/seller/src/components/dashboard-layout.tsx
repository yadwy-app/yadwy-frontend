"use client";

import { Button } from "@yadwy/ui";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import type React from "react";
import { useState } from "react";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";
import Notifications from "./notifications";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const _pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-muted/20">
      {/* TODO: Please build function to render only needed element in the DOM */}
      <DesktopNavbar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <MobileNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col transition-all duration-300">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6">
          <ToggleButton setIsSidebarOpen={setIsSidebarOpen} />
          <Notifications />
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

function ToggleButton({
  setIsSidebarOpen,
}: { setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={() => setIsSidebarOpen(true)}
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  );
}
