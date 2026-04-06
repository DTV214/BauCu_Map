"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, ZoomIn, X } from "lucide-react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { usePollingContext } from "@/context/PollingContext";

export const VillageManagementSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { activeStationId } = usePollingContext();

  const isActive = !activeStationId;
  const imageUrl =
    "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/1_qortaj.png";

  // Ngăn chặn lỗi "document is not defined" trên server
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <AccordionItem
        value="village-management"
        className={`border rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
          isActive
            ? "bg-brand-red-dark border-brand-red-dark shadow-md"
            : "bg-white border-slate-200"
        }`}
      >
        <AccordionTrigger
          className={`flex items-center gap-3 p-3.5 text-left hover:no-underline transition-colors ${
            isActive ? "hover:bg-red-900/50" : "hover:bg-slate-50"
          }`}
        >
          <div
            className={`p-2.5 rounded-lg shadow-sm transition-colors ${
              isActive
                ? "bg-brand-gold text-brand-red-dark"
                : "bg-brand-red text-white"
            }`}
          >
            <Crown size={20} />
          </div>
          <div className="flex-1">
            <h3
              className={`font-bold text-base transition-colors ${
                isActive ? "text-brand-gold" : "text-brand-red-dark"
              }`}
            >
              Cơ quan Quản lý Cấp xã
            </h3>
            <p
              className={`text-xs mt-0.5 transition-colors ${
                isActive ? "text-white/80" : "text-slate-500"
              }`}
            >
              Thường trực HĐND, Khoá VII, 2026-2031
            </p>
          </div>
        </AccordionTrigger>

        <AccordionContent className="p-0">
          <div className="max-h-[40vh] md:max-h-125 overflow-y-auto p-4 pt-0 custom-scrollbar overscroll-contain">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 mt-2"
            >
              <div
                className="relative w-full h-48 md:h-52 bg-black/20 rounded-lg overflow-hidden group cursor-pointer border border-white/10"
                onClick={() => setIsZoomed(true)}
              >
                <Image
                  src={imageUrl}
                  alt="Thường trực HĐND xã Đắk Mar"
                  fill
                  className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full border border-white/20">
                    <ZoomIn size={16} /> Xem ảnh rõ nét
                  </span>
                </div>
              </div>

              {/* <div
                className={`p-3 rounded-lg border flex gap-3 ${
                  isActive
                    ? "bg-black/20 border-white/10 text-white/90"
                    : "bg-slate-50 border-slate-200 text-slate-600"
                }`}
              >
                <Info
                  size={18}
                  className={`shrink-0 mt-0.5 ${isActive ? "text-brand-gold" : "text-brand-red"}`}
                />
                <div className="text-xs leading-relaxed">
                  <p className="font-semibold mb-1 uppercase tracking-wider">
                    Vai trò quản lý:
                  </p>
                  Chịu trách nhiệm toàn diện trong công tác tổ chức, chỉ đạo và
                  giám sát các hoạt động bầu cử trên địa bàn xã Đắk Mar. Đảm bảo
                  tính minh bạch, công bằng và đúng pháp luật cho nhiệm kỳ 2026
                  - 2031.
                </div>
              </div> */}
            </motion.div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Portal chỉ render trên client sau khi component mounted */}
      {mounted &&
        isZoomed &&
        createPortal(
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
              onClick={() => setIsZoomed(false)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-100"
                onClick={() => setIsZoomed(false)}
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-5xl w-full h-[70vh] md:h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={imageUrl}
                  alt="Thường trực HĐND xã Đắk Mar Phóng To"
                  fill
                  className="object-contain"
                  priority // Ưu tiên load ảnh zoom
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};
