import React from "react";

export default function Header() {
  return (
    <header className="bg-linear-to-r from-brand-red-dark via-brand-red to-brand-red-dark py-4 px-6 shadow-md shrink-0 flex flex-col items-center justify-center text-center">
      <h1 className="font-serif text-brand-gold text-lg md:text-2xl font-bold uppercase tracking-wide">
        Công trình thanh niên Đoàn Xã Vạn Tường
      </h1>
      <p className="text-white text-xs md:text-sm mt-1 opacity-95 max-w-4xl leading-relaxed">
        Bản đồ số hóa địa điểm khu vực bỏ phiếu bầu cử đại biểu quốc hội khóa
        XVI và đại biểu HĐND các cấp, nhiệm kỳ 2026 - 2031 tại xã Vạn Tường
      </p>
    </header>
  );
}
