import Header from "@/components/layout/Header";
import MapWrapper from "@/features/map/MapWrapper";
import StationSidebar from "@/features/polling-stations/components/StationSidebar";
import { PollingProvider } from "@/context/PollingContext";

export default function Home() {
  return (
    // Thay h-screen thành h-[100dvh] để trị dứt điểm lỗi bị che khuất bởi thanh công cụ của trình duyệt trên điện thoại
    <div className="flex flex-col h-[100dvh] w-full bg-[#FCF8F2] overflow-hidden">
      <Header />
      <PollingProvider>
        {/* Thêm min-h-0 để đảm bảo flexbox không bị tràn nội dung */}
        <main className="flex flex-1 min-h-0 flex-col lg:flex-row overflow-hidden p-2 pb-4 lg:p-6 gap-4 lg:gap-6 w-full max-w-7xl mx-auto">
          {/* Cột trái: BẢN ĐỒ */}
          <section className="relative w-full h-[30vh] lg:h-auto lg:flex-1 bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-md border border-slate-200 order-1 shrink-0">
            <MapWrapper />
          </section>

          {/* Cột phải: DANH SÁCH (Sidebar) */}
          {/* Thêm min-h-0 cực kỳ quan trọng ở đây để Sidebar biết giới hạn chiều cao của nó, giúp thanh scroll hoạt động chuẩn xác */}
          <aside className="relative w-full lg:w-[420px] xl:w-[460px] flex-1 min-h-0 lg:h-auto shrink-0 bg-white rounded-2xl lg:rounded-3xl border border-slate-200 flex flex-col order-2 shadow-md overflow-hidden">
            <StationSidebar />
          </aside>
        </main>
      </PollingProvider>
    </div>
  );
}
