import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno Turpeau - Développeur web",
  description: "Bruno Turpeau - Développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full bg-slate-900 text-slate-50 text-base sm:text-lg`}>
        {children}
      </body>
    </html>
  );
}
