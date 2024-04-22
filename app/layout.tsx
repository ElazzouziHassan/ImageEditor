import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans(
  { 
    subsets: ["latin"],
    weight:['400', '500', '600', '700'],
    variable:'--font-ibm-plex'
  }
);

export const metadata: Metadata = {
  title: "IMG Editor",
  description: "AI based image editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
