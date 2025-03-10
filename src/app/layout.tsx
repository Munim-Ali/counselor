import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar";
import Navbar from "@/components/shared/navbar";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/font/ClashDisplay-Bold.woff2",
      weight: "800",
      style: "bold",
    },
    {
      path: "../../public/font/ClashDisplay-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/font/ClashDisplay-Medium.woff2",
      weight: "400",
      style: "medium",
    },
    {
      path: "../../public/font/ClashDisplay-Regular.woff2",
      weight: "500",
      style: "regular",
    },
    {
      path: "../../public/font/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Admit Path",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.className} bg-[#F8F8F8] text-black flex items-start justify-between antialiased`}
      >
        <Sidebar />
        <main className="w-full p-6">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
