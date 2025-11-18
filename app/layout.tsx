import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usman Fast Food - Digital Menu",
  description: "Browse our delicious menu and order your favorite food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
