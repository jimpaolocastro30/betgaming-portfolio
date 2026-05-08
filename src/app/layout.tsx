import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DONBBANG - Prize Match Gaming",
  description: "Intense Player vs Player Showdown - Prize Match Gaming Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-900 antialiased">
        {children}
      </body>
    </html>
  );
}
