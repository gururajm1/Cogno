import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/lib/authContext";

export const metadata: Metadata = {
  title: "Cogno - Cognitive Learning Platform",
  description: "A platform for cognitive learning and development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-[#1a1a1a] text-white min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

