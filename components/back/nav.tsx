"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PiggyBank,
  Users,
  Calculator,
  Settings,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Savings",
    href: "/dashboard/savings",
    icon: PiggyBank,
  },
  {
    title: "Members",
    href: "/dashboard/members",
    icon: Users,
  },
  {
    title: "Calculator",
    href: "/dashboard/calculator",
    icon: Calculator,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 hidden md:flex h-screen w-64 flex-col border-r bg-gray-50/40 p-4 z-30">
      <div className="flex h-14 items-center border-b px-4 font-semibold">
        Sacco Dashboard
      </div>
      <div className="flex-1 space-y-1 py-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100",
                pathname === item.href ? "bg-gray-100" : "transparent"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </span>
          </Link>
        ))}
      </div>
      <Button
        variant="ghost"
        className="w-full justify-start text-red-500 hover:text-red-600"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </nav>
  );
}
