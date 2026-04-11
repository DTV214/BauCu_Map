"use client";

import { useState } from "react";
import Image from "next/image";
import { pollingStations } from "@/data/mockData";
import { Navigation, ZoomIn, X, MapPin, Crown } from "lucide-react";
import { usePollingContext } from "@/context/PollingContext";
import { motion, AnimatePresence } from "framer-motion";

export default function StationList() {
  const { selectedGroupId, activeStationId, setActiveStationId } =
    usePollingContext();

  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const filteredStations =
    selectedGroupId === "all"
      ? pollingStations
      : pollingStations.filter(
          (station) => station.groupId.toString() === selectedGroupId,
        );

  const toggleStation = (id: string) => {
    if (activeStationId === id) {
      setActiveStationId(null);
    } else {
      setActiveStationId(id);
    }
  };

  // --- Dữ liệu riêng cho phần Cơ quan quản lý ---
  const MANAGEMENT_ID = "village-management";
  const isManagementActive = activeStationId === MANAGEMENT_ID;
  const managementImages = [
    // "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/1_qortaj.png",
    "https://res.cloudinary.com/dratbz8bh/image/upload/v1775899748/AnhCapCao_Tong_tlkrbs.jpg",
    "https://res.cloudinary.com/dratbz8bh/image/upload/v1775755719/2_tlbtkf.jpg",
  ];

  return (
    <>
      {/* Container cuộn chính cho toàn bộ Sidebar. Đã thêm touch-pan-y để cuộn trên điện thoại cực mượt */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#FCF8F2]/50 overflow-x-hidden absolute inset-0 custom-scrollbar touch-pan-y overscroll-auto">
        <div className="space-y-4 pb-10">
          <AnimatePresence mode="popLayout">
            {/* 1. THẺ CƠ QUAN QUẢN LÝ (Luôn nằm trên cùng) */}
            <motion.div
              key={MANAGEMENT_ID}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`group relative flex flex-col rounded-xl transition-all duration-300 overflow-hidden cursor-pointer border shrink-0 ${
                isManagementActive
                  ? "bg-brand-red-dark border-brand-red-dark shadow-md"
                  : "bg-white border-slate-200 hover:border-brand-red/30 hover:shadow-md"
              }`}
              onClick={() => toggleStation(MANAGEMENT_ID)}
            >
              <div className="flex p-3 gap-3 items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
                    isManagementActive
                      ? "bg-brand-gold text-brand-red-dark"
                      : "bg-brand-red/10 text-brand-red"
                  }`}
                >
                  <Crown size={20} />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <h3
                    className={`text-sm md:text-base font-bold transition-colors line-clamp-1 ${
                      isManagementActive ? "text-brand-gold" : "text-slate-800"
                    }`}
                  >
                    Cơ quan Quản lý Cấp xã
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isManagementActive ? "bg-white/80" : "bg-brand-red"
                      }`}
                    ></span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide ${
                        isManagementActive
                          ? "text-white/80"
                          : "text-brand-red-dark"
                      }`}
                    >
                      Thường trực HĐND, Khoá VII, 2026-2031
                    </span>
                  </div>
                </div>
              </div>

              {/* Chi tiết hình ảnh Cơ quan quản lý (Không có text, không có nút chỉ đường) */}
              <AnimatePresence>
                {isManagementActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 flex flex-col gap-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {managementImages.map((imgUrl, index) => (
                          <div
                            key={index}
                            className="relative w-full h-40 shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-inner group-hover/img:scale-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              setZoomedImage(imgUrl);
                            }}
                          >
                            <Image
                              src={imgUrl}
                              alt={`Cơ quan quản lý ${index + 1}`}
                              fill
                              className="object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all text-white">
                              <ZoomIn size={24} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 2. DANH SÁCH CÁC THÔN BẦU CỬ */}
            {filteredStations.length > 0 ? (
              filteredStations.map((station) => {
                const isActive = activeStationId === station.id;

                return (
                  <motion.div
                    key={station.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`group relative flex flex-col rounded-xl transition-all duration-300 overflow-hidden cursor-pointer border shrink-0 ${
                      isActive
                        ? "bg-brand-red-dark border-brand-red-dark shadow-md"
                        : "bg-white border-slate-200 hover:border-brand-red/30 hover:shadow-md"
                    }`}
                    onClick={() => toggleStation(station.id)}
                  >
                    {/* Tiêu đề Thôn */}
                    <div className="flex p-3 gap-3 items-center">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
                          isActive
                            ? "bg-brand-gold text-brand-red-dark"
                            : "bg-brand-red/10 text-brand-red"
                        }`}
                      >
                        <MapPin size={20} />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <h3
                          className={`text-sm md:text-base font-bold transition-colors line-clamp-1 ${
                            isActive ? "text-brand-gold" : "text-slate-800"
                          }`}
                        >
                          {station.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? "bg-white/80" : "bg-brand-red"
                            }`}
                          ></span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wide ${
                              isActive ? "text-white/80" : "text-brand-red-dark"
                            }`}
                          >
                            Tổ đại biểu số {station.groupId}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Nội dung Chi tiết Thôn */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 flex flex-col gap-3">
                            {/* Ảnh */}
                            <div className="relative w-full h-40 shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-inner">
                              <Image
                                src={station.imageUrl}
                                alt={station.name}
                                fill
                                className="object-cover"
                              />
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setZoomedImage(station.imageUrl);
                                }}
                                className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all text-white"
                              >
                                <ZoomIn size={24} />
                              </button>
                            </div>

                            {/* Mô tả */}
                            <p className="text-white/90 leading-relaxed text-sm">
                              {station.description}
                            </p>

                            {/* Nút chỉ đường */}
                            <a
                              href={station.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center justify-center gap-1.5 bg-brand-gold hover:bg-yellow-400 text-brand-red-dark text-xs font-bold py-2.5 px-3 rounded-lg transition-all shadow-sm mt-1"
                            >
                              <Navigation size={16} />
                              Chỉ đường đến điểm tiếp xúc cử tri
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <p className="text-center text-slate-400 py-10 italic text-sm">
                Không tìm thấy dữ liệu phù hợp.
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MODAL ZOOM ẢNH TOÀN MÀN HÌNH CHUNG CHO CẢ CƠ QUAN VÀ THÔN */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setZoomedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]"
              onClick={() => setZoomedImage(null)}
            >
              <X size={24} />
            </button>

            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={zoomedImage}
              alt="Phóng to"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
