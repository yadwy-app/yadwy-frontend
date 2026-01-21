"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@yadwy/ui";
import { Button } from "@yadwy/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@yadwy/ui";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <div className="ml-auto flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>New order received</DropdownMenuItem>
          <DropdownMenuItem>Product out of stock</DropdownMenuItem>
          <DropdownMenuItem>Payment processed</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Avatar className="h-8 w-8 md:hidden">
        <AvatarImage src="/placeholder-user.png" alt="User" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
    </div>
  );
}
