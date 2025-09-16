import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./store/provider";

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
