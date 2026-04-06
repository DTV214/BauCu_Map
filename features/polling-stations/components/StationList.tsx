"use client";

import { useState } from "react";
import Image from "next/image";
import { pollingStations } from "@/data/mockData";
import { Navigation, ZoomIn, X } from "lucide-react";
import { usePollingContext } from "@/context/PollingContext";
import { motion, AnimatePresence } from "framer-motion";

export default function StationList() {
  const { selectedGroupId, activeStationId, setActiveStationId } =
    usePollingContext();

  // State quản lý việc Zoom ảnh (Lưu URL của ảnh đang được zoom)
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

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 bg-[#FCF8F2]/50 overflow-x-hidden absolute inset-0 custom-scrollbar">
        <div className="space-y-3 pb-10">
          <AnimatePresence mode="popLayout">
            {filteredStations.length > 0 ? (
              filteredStations.map((station) => {
                const isActive = activeStationId === station.id;

                return (
                  <motion.div
                    key={station.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`overflow-hidden border rounded-xl transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-brand-red-dark text-white border-brand-red-dark"
                        : "bg-white border-slate-200 hover:border-brand-red/50 hover:shadow-md cursor-pointer"
                    }`}
                  >
                    {/* Tiêu đề */}
                    <div
                      onClick={() => toggleStation(station.id)}
                      className="p-4 flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <h3
                          className={`font-bold text-base ${isActive ? "text-brand-gold" : "text-slate-800"}`}
                        >
                          {station.name}
                        </h3>
                        <p
                          className={`text-xs mt-1 ${isActive ? "text-white/80" : "text-slate-500"}`}
                        >
                          {isActive
                            ? "Đang xem chi tiết"
                            : `Tổ đại biểu số ${station.groupId}`}
                        </p>
                      </div>

                      {!isActive && (
                        <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                          MỞ RỘNG
                        </div>
                      )}
                    </div>

                    {/* Chi tiết thả xuống */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-4"
                        >
                          <div className="border-t border-white/20 pt-4 mt-2">
                            {/* KHUNG HÌNH ẢNH (Có nút Zoom) */}
                            <div
                              className="relative w-full h-56 bg-black/20 rounded-lg mb-4 overflow-hidden group cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation(); // Tránh bị đóng Accordion
                                setZoomedImage(station.imageUrl);
                              }}
                            >
                              <Image
                                src={station.imageUrl}
                                alt={station.name}
                                fill
                                className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                              />
                              {/* Lớp phủ hướng dẫn bấm để zoom */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="flex items-center gap-2 text-white font-medium bg-black/60 px-4 py-2 rounded-full">
                                  <ZoomIn size={18} /> Phóng to ảnh
                                </span>
                              </div>
                            </div>

                            {/* KHUNG MÔ TẢ (Nếu có) */}
                            {station.description && (
                              <div className="mb-5 text-sm text-white/90 leading-relaxed bg-black/10 p-3 rounded-lg border border-white/10">
                                <p className="italic">{station.description}</p>
                              </div>
                            )}

                            {/* Nút tìm đường */}
                            <a
                              href={`https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-red-dark py-2.5 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-md"
                            >
                              <Navigation size={18} />
                              Chỉ đường đến điểm bầu cử
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <p className="text-center text-sm text-slate-400 mt-10">
                Không tìm thấy dữ liệu.
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MODAL ZOOM ẢNH TOÀN MÀN HÌNH */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Phủ đen toàn màn hình, z-50 để nằm trên tất cả
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setZoomedImage(null)} // Bấm ra ngoài để đóng
          >
            {/* Nút đóng */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setZoomedImage(null)}
            >
              <X size={24} />
            </button>

            {/* Hình ảnh phóng to (Dùng object-contain để giữ nguyên tỷ lệ gốc, không méo) */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={zoomedImage}
              alt="Zoomed"
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Bấm vào ảnh không bị đóng
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
