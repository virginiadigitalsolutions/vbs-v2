import AdminShell from "@/components/admin/admin-shell";
import { getAdminSession } from "@/lib/admin-session";

export default async function AdminLayout({ children }) {
  const session = await getAdminSession();

  return (
    <AdminShell session={session}>{children}</AdminShell>
  );
}
