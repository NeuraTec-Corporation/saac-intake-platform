import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAAC Intake Platform",
  description: "NeuraTec modular vehicle intake and service workflow platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
