import { routes } from "@/lib/routes";
import { cn } from "@yadwy/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@yadwy/ui";
import { Badge } from "@yadwy/ui";
import { Button } from "@yadwy/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@yadwy/ui";
import { ChevronLeft, ChevronRight, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DesktopNavbarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function DesktopNavbar({
  isCollapsed,
  setIsCollapsed,
}: DesktopNavbarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        "sticky top-0 h-screen hidden flex-col bg-white border-r border-border md:flex transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      <div className="flex h-14 items-center border-b px-4 justify-between">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold text-primary">Yadwy</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("h-8 w-8", isCollapsed && "mx-auto")}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="grid gap-1 px-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-all",
                  pathname === route.path
                    ? "bg-muted text-primary"
                    : "text-muted-foreground",
                  isCollapsed && "justify-center px-2",
                )}
              >
                <route.icon
                  className={cn("h-4 w-4 shrink-0", isCollapsed && "h-5 w-5")}
                />
                {!isCollapsed && <span>{route.name}</span>}
                {!isCollapsed && route.badge && (
                  <Badge className="ml-auto h-5 w-5 justify-center rounded-full p-0">
                    {route.badge}
                  </Badge>
                )}
                {isCollapsed && route.badge && (
                  <div className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {route.badge}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-4">
        <div
          className={cn("flex items-center gap-3", isCollapsed && "flex-col")}
        >
          <Avatar className={cn(isCollapsed && "h-8 w-8")}>
            <AvatarImage src="/placeholder-user.png" alt="User" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate">
                Sarah's Crafts
              </span>
              <span className="text-xs text-muted-foreground truncate">
                sarah@example.com
              </span>
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("h-8 w-8", !isCollapsed && "ml-auto")}
              >
                <User className="h-4 w-4" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isCollapsed ? "center" : "end"}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  );
}
