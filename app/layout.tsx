import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Font sans-serif hiện đại cho văn bản thường
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

// Font có chân (serif) trang trọng cho các Tiêu đề
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Bản đồ số hóa - Bầu cử Xã Vạn Tường",
  description:
    "Bản đồ số hóa địa điểm khu vực bỏ phiếu bầu cử đại biểu quốc hội khóa XVI và đại biểu HĐND các cấp, nhiệm kỳ 2026 - 2031 tại xã Vạn Tường.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      {/* Khóa scroll toàn trang, quản lý scroll ở từng component nhỏ */}
      <body className="h-full flex flex-col bg-brand-cream overflow-hidden">
        {children}
      </body>
    </html>
  );
}
