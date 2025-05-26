import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "운세박사",
  description: "로켓 에이아이 과제전형 과제 프로젝트입니다.",
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
