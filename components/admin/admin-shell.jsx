"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import AdminLogoutButton from "@/components/admin/admin-logout-button";

const navItems = [
  {
    href: "/admin",
    label: "Dashboard",
    description: "Overview and enquiries",
  },
  {
    href: "/admin/blogs",
    label: "Blogs",
    description: "Create and manage posts",
  },
];

function isActivePath(pathname, href) {
  if (href === "/admin") {
    return pathname === "/admin";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminShell({ children, session }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,_#eef4ff_0%,_#f8fbff_35%,_#f5f7fa_100%)]">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#eef4ff_0%,_#f8fbff_35%,_#f5f7fa_100%)]">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-6 lg:py-6">
        <aside className="rounded-[2rem] border border-slate-200 bg-[#0b1a42] p-6 text-white shadow-[0_30px_80px_rgba(11,26,66,0.18)]">
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#67e8f9]">
              Admin Workspace
            </p>
            <h1 className="mt-3 font-heading text-2xl leading-tight">
              Virginia Business Solutions
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Publish content, review enquiries, and manage your admin workspace.
            </p>
          </div>

          <nav className="mt-6 grid gap-3">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-[1.4rem] border px-4 py-4 transition ${
                    active
                      ? "border-[#60a5fa]/30 bg-white/12 text-white shadow-[0_14px_30px_rgba(96,165,250,0.12)]"
                      : "border-white/8 bg-white/[0.03] text-white/72 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <div className="text-sm font-bold tracking-[0.04em]">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-inherit opacity-80">
                    {item.description}
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
              Signed In As
            </p>
            <p className="mt-3 break-all text-sm font-semibold text-white">
              {session?.email || "Admin user"}
            </p>
            <div className="mt-4">
              <AdminLogoutButton />
            </div>
          </div>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
