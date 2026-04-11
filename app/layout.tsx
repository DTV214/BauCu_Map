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
  title: "Bản đồ số hóa - Điểm tiếp xúc cử tri Xã Đăk Mar",
  description:
    "Bản đồ số hóa các điểm tiếp xúc cử tri đại biểu Hội đồng nhân dân xã Đăk Mar khóa VII, nhiệm kỳ 2026-2031.",
  icons: [
    {
      rel: "icon",
      url: "https://res.cloudinary.com/dratbz8bh/image/upload/v1775755720/DEN_%C4%90%E1%BA%A0I_H%E1%BB%98I_dwqxbf.png",
    },
    {
      rel: "apple-touch-icon",
      url: "https://res.cloudinary.com/dratbz8bh/image/upload/v1775755720/DEN_%C4%90%E1%BA%A0I_H%E1%BB%98I_dwqxbf.png",
    },
  ],
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
      suppressHydrationWarning // Thêm dòng này để lờ đi cảnh báo Hydration do Extension gây ra ở tag html
    >
      <body
        className="h-full flex flex-col bg-brand-cream overflow-hidden"
        suppressHydrationWarning // Thêm dòng này để xử lý triệt để lỗi cz-shortcut-listen ở thẻ body
      >
        {children}
      </body>
    </html>
  );
}
