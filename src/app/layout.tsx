import { AuthProvider } from "@/components/context/AuthContext";
import "./globals.css";
import { Metadata } from "next";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Trade Global",
  description: "Trade Global Investment Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="antialiased">
        <Preloader />

        <PageTransition>
          <AuthProvider>
            {children}
          </AuthProvider>
        </PageTransition>

      </body>
    </html>
  );
}