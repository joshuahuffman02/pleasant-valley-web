import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pleasant Valley Church",
  description: "Welcome to Pleasant Valley Church - A community of faith in Winona, MN",
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
