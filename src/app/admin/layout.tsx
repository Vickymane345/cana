import "@/app/globals.css";
import AdminAuth from "@/components/AdminAuth";

export const metadata = {
  title: "Admin Dashboard - Trades Global FX",
  description: "Admin dashboard for managing users and platform activity",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AdminAuth>{children}</AdminAuth>
      </body>
    </html>
  );
}
