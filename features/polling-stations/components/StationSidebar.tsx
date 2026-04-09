"use client";

import StationFilter from "./StationFilter";
import StationList from "./StationList";

export default function StationSidebar() {
  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Khối filter (Bộ lọc) luôn nằm cố định trên cùng */}
      <StationFilter />

      {/* Khu vực Danh sách Thôn (Bao gồm cả Cơ quan quản lý ở trên cùng) */}
      <div className="flex-1 relative overflow-hidden">
        <StationList />
      </div>
    </div>
  );
}
