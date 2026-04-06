import Header from "@/components/layout/Header";
import MapWrapper from "@/features/map/MapWrapper";
import StationSidebar from "@/features/polling-stations/components/StationSidebar";
import { PollingProvider } from "@/context/PollingContext";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#FCF8F2]">
      {" "}
      {/* Đổi màu nền trang web sang màu kem nhạt */}
      <Header />
      <PollingProvider>
        {/* Thêm padding (p-4) và khoảng cách (gap-4) để tạo khung bo góc */}
        <main className="flex flex-1 flex-col lg:flex-row overflow-hidden p-2 lg:p-6 gap-4 lg:gap-6 w-full max-w-7xl mx-auto">
          {/* Cột trái: BẢN ĐỒ (Làm bo góc, bóng đổ) */}
          <section className="relative w-full h-[45vh] lg:h-auto lg:flex-1 bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-md border border-slate-200 order-1">
            <MapWrapper />
          </section>

          {/* Cột phải: DANH SÁCH (Mở rộng chiều ngang một chút, bo góc) */}
          <aside className="w-full lg:w-105 h-[50vh] lg:h-auto shrink-0 bg-white rounded-2xl lg:rounded-3xl border border-slate-200 flex flex-col order-2 shadow-md overflow-hidden">
            <StationSidebar />
          </aside>
        </main>
      </PollingProvider>
    </div>
  );
}
