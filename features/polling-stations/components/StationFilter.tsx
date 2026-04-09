"use client";

import { delegateGroups, pollingStations } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePollingContext } from "@/context/PollingContext";

export default function StationFilter() {
  const { selectedGroupId, setSelectedGroupId } = usePollingContext();

  return (
    <div className="p-4 border-b border-slate-100 shrink-0 bg-white shadow-sm relative z-10">
      <h2 className="font-serif font-bold text-brand-red-dark text-lg">
        Danh sách điểm tiếp xúc cử tri
      </h2>
      <p className="text-xs text-slate-500 mt-1 mb-3">
        Chọn tổ đại biểu để xem danh sách chi tiết
      </p>

      <Select
        value={selectedGroupId}
        onValueChange={(value) => setSelectedGroupId(value ?? "all")}
      >
        <SelectTrigger className="w-full border-slate-200 focus:ring-brand-red">
          <SelectValue placeholder="Chọn tổ đại biểu" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className="font-medium">
            Tất cả ({pollingStations.length} điểm)
          </SelectItem>
          {delegateGroups.map((group) => (
            <SelectItem key={group.id} value={group.id.toString()}>
              {group.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
