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
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNavbar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 h-screen hidden w-64 flex-col bg-white border-r border-border md:flex">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl font-bold text-primary">Yadwy</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="grid gap-1 px-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                  pathname === route.path
                    ? "bg-muted text-primary"
                    : "text-muted-foreground",
                )}
              >
                <route.icon className="h-4 w-4" />
                <span>{route.name}</span>
                {route.badge && (
                  <Badge className="ml-auto h-5 w-5 justify-center rounded-full p-0">
                    {route.badge}
                  </Badge>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder-user.png" alt="User" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Sarah's Crafts</span>
            <span className="text-xs text-muted-foreground">
              sarah@example.com
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                <User className="h-4 w-4" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
