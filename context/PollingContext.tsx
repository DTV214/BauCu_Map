"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Khai báo các loại dữ liệu mà "Trạm" này sẽ giữ
interface PollingContextType {
  selectedGroupId: string; // ID của Tổ đại biểu đang được chọn ở bộ lọc
  setSelectedGroupId: (id: string) => void;

  activeStationId: string | null; // ID của Thôn đang được bấm vào để xem
  setActiveStationId: (id: string | null) => void;
}

// 2. Khởi tạo Context
const PollingContext = createContext<PollingContextType | undefined>(undefined);

// 3. Tạo Provider (Bộ phát sóng) để bọc bên ngoài các component
export function PollingProvider({ children }: { children: ReactNode }) {
  const [selectedGroupId, setSelectedGroupId] = useState<string>("all");
  const [activeStationId, setActiveStationId] = useState<string | null>(null);

  return (
    <PollingContext.Provider
      value={{
        selectedGroupId,
        setSelectedGroupId,
        activeStationId,
        setActiveStationId,
      }}
    >
      {children}
    </PollingContext.Provider>
  );
}

// 4. Hàm tiện ích để các component con lấy dữ liệu ra xài
export function usePollingContext() {
  const context = useContext(PollingContext);
  if (!context) {
    throw new Error("usePollingContext phải được bọc trong PollingProvider");
  }
  return context;
}
