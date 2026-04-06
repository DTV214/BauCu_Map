"use client";

import dynamic from "next/dynamic";

// Import động và tắt SSR ngay tại Client Component này
const MapComponent = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-brand-red font-medium animate-pulse">
      Đang tải bản đồ số hóa...
    </div>
  ),
});

export default function MapWrapper() {
  return <MapComponent />;
}
