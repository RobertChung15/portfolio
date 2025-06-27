import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robert Chung",
  description: "Robert Chung Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
