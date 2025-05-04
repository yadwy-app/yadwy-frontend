import {
  BarChart3,
  Home,
  Package,
  Settings,
  ShoppingBag,
  Wallet,
} from "lucide-react";

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: ShoppingBag,
    badge: 5,
  },
  {
    name: "Products",
    path: "/products",
    icon: Package,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: Wallet,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
