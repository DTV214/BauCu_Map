"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import Image from "next/image";
import { pollingStations } from "@/data/mockData";
import { usePollingContext } from "@/context/PollingContext";

// Fix icon lỗi của Leaflet trong Next.js
const customIcon = L.icon({
  iconUrl:
    "https://res.cloudinary.com/dratbz8bh/image/upload/v1775755720/DEN_%C4%90%E1%BA%A0I_H%E1%BB%98I_dwqxbf.png",
  iconRetinaUrl:
    "https://res.cloudinary.com/dratbz8bh/image/upload/v1775755720/DEN_%C4%90%E1%BA%A0I_H%E1%BB%98I_dwqxbf.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [50, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component ẩn giúp điều khiển Camera bản đồ (Bay tới điểm được chọn)
function MapController({
  activeStationId,
}: {
  activeStationId: string | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (activeStationId) {
      const station = pollingStations.find((s) => s.id === activeStationId);
      if (station) {
        // Lệnh flyTo giúp bản đồ tự cuộn tới vị trí mới với mức zoom 15
        map.flyTo([station.lat, station.lng], 15, {
          animate: true,
          duration: 1.5, // Thời gian bay là 1.5 giây
        });
      }
    }
  }, [activeStationId, map]);

  return null;
}

export default function LeafletMap() {
  // Lấy dữ liệu từ Context
  const { selectedGroupId, activeStationId, setActiveStationId } =
    usePollingContext();

  // Lọc số lượng Marker trên bản đồ theo Tổ được chọn ở Sidebar
  const displayStations =
    selectedGroupId === "all"
      ? pollingStations
      : pollingStations.filter((s) => s.groupId.toString() === selectedGroupId);

  // Tọa độ trung tâm xã Đăk Mar
  const centerLat = 14.39;
  const centerLng = 108.04;

  // Link Logo bạn cung cấp
  const logoUrl =
    "https://res.cloudinary.com/dratbz8bh/image/upload/v1775755720/DEN_%C4%90%E1%BA%A0I_H%E1%BB%98I_dwqxbf.png";

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={12}
      className="h-full w-full z-0"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Gọi Component ẩn vào đây */}
      <MapController activeStationId={activeStationId} />

      {displayStations.map((station) => (
        <Marker
          key={station.id}
          position={[station.lat, station.lng]}
          icon={customIcon}
          eventHandlers={{
            // Khi bấm vào cục ghim đỏ trên Bản đồ, Sidebar cũng tự động bôi đỏ tên Thôn đó
            click: () => setActiveStationId(station.id),
          }}
        >
          <Popup>
            <div className="flex flex-col items-center gap-0 font-sans w-52 pb-1">
              {/* Ảnh bìa */}
              <div className="w-full h-24 relative rounded-t-md overflow-hidden border-b border-slate-200">
                <Image
                  src={station.imageUrl}
                  alt={`Ảnh tại ${station.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Vùng chứa text và Logo đè lên */}
              <div className="text-center w-full relative flex flex-col items-center -mt-6">
                {/* Logo bọc viền trắng để nổi bật */}
                <div className="w-12 h-12 relative rounded-full border-2 border-white shadow-md overflow-hidden bg-white z-10 mb-1">
                  <Image
                    src={logoUrl}
                    alt="Logo Đoàn Xã"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold text-brand-red text-base leading-tight px-2">
                  {station.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Thuộc Tổ đại biểu số {station.groupId}
                </p>
                <div className="px-3 w-full">
                  <a
                    href={station.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block w-full bg-brand-gold text-brand-red-dark text-xs font-bold px-3 py-2 rounded-md text-center no-underline hover:bg-yellow-500 transition-colors shadow-sm"
                  >
                    📍 Xem trên Google Maps
                  </a>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
