import { redirect } from "next/navigation";

import AdminAuthForm from "@/components/admin/admin-auth-form";
import { hasAdminUser } from "@/lib/admin-auth";
import { getAdminSession } from "@/lib/admin-session";

export const runtime = "nodejs";

export const metadata = {
  title: "Admin Login",
  description: "Admin sign in and setup page.",
};

export default async function AdminLoginPage() {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin");
  }

  const adminExists = hasAdminUser();

  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="vbs-card p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">
            Admin Access
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-slate-950">
            {adminExists ? "Sign in to admin" : "Create the first admin account"}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {adminExists
              ? "Use your admin email and password to access the dashboard."
              : "Set the first admin email and password. This account will be used to manage the admin panel."}
          </p>

          <div className="mt-8">
            <AdminAuthForm hasAdminUser={adminExists} />
          </div>
        </div>
      </div>
    </section>
  );
}
