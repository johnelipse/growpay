import { DashboardNav } from "@/components/back/nav";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className="flex-1 ml-0 md:ml-72 px-4 py-4 md:px-8 md:py-8">
        {children}
      </main>
    </div>
  );
}
