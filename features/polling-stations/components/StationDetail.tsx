"use client";

import Image from "next/image";
import { pollingStations } from "@/data/mockData";
import { usePollingContext } from "@/context/PollingContext";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";

export default function StationDetail() {
  const { activeStationId, setActiveStationId } = usePollingContext();

  const station = pollingStations.find((s) => s.id === activeStationId);

  if (!station) return null;

  return (
    <div className="flex-1 overflow-y-auto bg-white absolute inset-0 z-10 flex flex-col">
      {/* Nút quay lại */}
      <button
        onClick={() => setActiveStationId(null)}
        className="flex items-center gap-2 p-4 text-brand-red font-semibold hover:bg-red-50 transition-colors border-b border-slate-100"
      >
        <ArrowLeft size={18} />
        Quay lại danh sách
      </button>

      {/* Ảnh Cloudinary */}
      <div className="w-full h-48 bg-slate-100 shrink-0 relative">
        <Image
          src={station.imageUrl}
          alt={station.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Thông tin chi tiết */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-brand-red mb-2">
          <MapPin size={20} />
          <span className="text-sm font-bold tracking-wider uppercase">
            Tổ đại biểu số {station.groupId}
          </span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">
          {station.name}
        </h2>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Đây là điểm tiếp xúc cử tri được chỉ định cho bà con sinh sống tại{" "}
          <span className="font-semibold">{station.name}</span>. Vui lòng sắp
          xếp thời gian tham gia đầy đủ để đóng góp ý kiến.
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100">
          <a
            href={station.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand-red text-white py-3 rounded-lg font-bold hover:bg-brand-red-dark transition-colors shadow-md"
          >
            <ExternalLink size={18} />
            Chỉ đường đến điểm tiếp xúc cử tri
          </a>
        </div>
      </div>
    </div>
  );
}
