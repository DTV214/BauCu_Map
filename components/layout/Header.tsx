import React from "react";

export default function Header() {
  return (
    <header className="bg-linear-to-r from-brand-red-dark via-brand-red to-brand-red-dark py-4 px-6 shadow-md shrink-0 flex flex-col items-center justify-center text-center">
      <h1 className="font-serif text-brand-gold text-lg md:text-2xl font-bold uppercase tracking-wide">
        Công trình dân vận khéo xã Đăk Mar
      </h1>
      <p className="text-brand-gold text-xs md:text-sm mt-1 opacity-95 max-w-4xl leading-relaxed">
        Đơn vị thực hiện: Ủy ban MTTQ Việt Nam xã - Đoàn thanh niên - Hội LHPN
        xã
      </p>
      <p className="text-white text-xs md:text-sm mt-1 opacity-95 max-w-4xl leading-relaxed">
        Bản đồ số hóa các điểm tiếp xúc cử tri đại biểu Hội đồng nhân dân xã Đăk
        Mar khóa VII, nhiệm kỳ 2026-2031
      </p>
    </header>
  );
}
