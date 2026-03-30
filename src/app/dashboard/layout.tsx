import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import DashboardShell from "@/app/dashboard/shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/sign-in");

  return (
    <DashboardShell user={session.user}>
      {children}
    </DashboardShell>
  );
}