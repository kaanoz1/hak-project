import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";

export const metadata: Metadata = {
  title: "Kartal Temizlik",
  description: "Lüleburgaz/Kırklareli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
