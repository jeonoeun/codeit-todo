import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const nanumSquare = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareB.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareB.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "코드잇 스프린트 프론트엔드 단기심화 트랙 8기 사전 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={nanumSquare.className}>{children}</body>
    </html>
  );
}
