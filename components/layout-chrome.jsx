"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LayoutChrome({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <main className="min-h-screen bg-[#F5F7FA]">{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_22%,_#f5f7fa_100%)]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
