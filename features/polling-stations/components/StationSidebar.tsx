"use client";

import { useState } from "react";
import StationFilter from "./StationFilter";
import StationList from "./StationList";
import { VillageManagementSection } from "@/features/management/components/VillageManagementSection";
import { Accordion } from "@/components/ui/accordion";
import { usePollingContext } from "@/context/PollingContext";

export default function StationSidebar() {
  const { setActiveStationId } = usePollingContext();

  // State quản lý việc đóng/mở của phần Cơ quan quản lý
  const [accordionValue, setAccordionValue] =
    useState<string>("village-management");

  // Khi người dùng bấm MỞ phần Quản lý, tự động ĐÓNG các thôn đang mở
  const handleAccordionChange = (val: string) => {
    setAccordionValue(val);
    if (val === "village-management") {
      setActiveStationId(null);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Khối filter (Bộ lọc) luôn nằm cố định trên cùng */}
      <StationFilter />

      <div className="flex flex-col flex-1 overflow-hidden relative">
        {/* Khối Cơ quan quản lý (Đã được đồng bộ code đóng/mở) */}
        <div className="px-4 pt-4 shrink-0 relative">
          <Accordion
            {...({
              type: "single",
              collapsible: true,
              value: accordionValue,
              onValueChange: handleAccordionChange,
            } as Record<string, unknown>)}
          >
            <VillageManagementSection />
          </Accordion>
        </div>

        {/* Khu vực Danh sách Thôn */}
        <div className="flex-1 relative overflow-hidden">
          <StationList />
        </div>
      </div>
    </div>
  );
}
