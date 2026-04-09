// Định nghĩa kiểu dữ liệu cho Điểm bầu cử
export interface PollingStation {
  id: string;
  name: string;
  groupId: number; // Thuộc Tổ đại biểu nào
  lat: number; // Vĩ độ
  lng: number; // Kinh độ
  mapUrl: string; // Link Google Maps
  imageUrl: string; // Link ảnh Cloudinary
  description?: string; // Đoạn mô tả chi tiết khu vực
}

// Định nghĩa kiểu dữ liệu cho Tổ đại biểu
export interface DelegateGroup {
  id: number;
  name: string;
}

// 1. Danh sách 7 Tổ đại biểu (Dùng cho thanh Lọc)
export const delegateGroups: DelegateGroup[] = [
  { id: 1, name: "Tổ đại biểu số 1" },
  { id: 2, name: "Tổ đại biểu số 2" },
  { id: 3, name: "Tổ đại biểu số 3" },
  { id: 4, name: "Tổ đại biểu số 4" },
  { id: 5, name: "Tổ đại biểu số 5" },
  { id: 6, name: "Tổ đại biểu số 6" },
  { id: 7, name: "Tổ đại biểu số 7" },
];

// 2. Danh sách 15 Điểm tiếp xúc cử tri (Thôn)
export const pollingStations: PollingStation[] = [
  // Tổ 1
  {
    id: "thon-kon-gung",
    name: "Thôn Kon Gung",
    groupId: 1,
    lat: 14.35,
    lng: 108.0,
    mapUrl: "https://maps.app.goo.gl/th7WfAF9rtdbJPsYA",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/2_ad1pli.png",
    description:
      "Khu vực bỏ phiếu số 1 đặt tại Nhà văn hóa thôn Kon Gung. Nơi đây tập trung đông đảo bà con cử tri, cơ sở vật chất đã được chuẩn bị chu đáo, có bố trí ghế ngồi chờ và nước uống cho người cao tuổi.",
  },
  {
    id: "thon-dak-mut",
    name: "Thôn Đăk Mút",
    groupId: 1,
    lat: 14.352,
    lng: 108.005,
    mapUrl: "https://maps.app.goo.gl/th7WfAF9rtdbJPsYA",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/2_ad1pli.png",
    description:
      "Điểm bỏ phiếu tại nhà rông văn hóa thôn Đăk Mút. Giao thông thuận tiện, không gian rộng rãi đảm bảo an ninh trật tự, thuận lợi cho bà con đồng bào đến tham gia bầu cử.",
  },

  // Tổ 2
  {
    id: "thon-3",
    name: "Thôn 3",
    groupId: 2,
    lat: 14.36,
    lng: 108.01,
    mapUrl: "https://maps.app.goo.gl/r9MpGK1WgASNbC1D6",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/3_h7ash3.png",
    description:
      "Vị trí bỏ phiếu tại Hội trường thôn 3. Khu vực này chủ yếu là các hộ dân làm nông nghiệp, cán bộ thôn đã hỗ trợ phát thẻ cử tri đến tận tay từng hộ gia đình.",
  },
  {
    id: "thon-4",
    name: "Thôn 4",
    groupId: 2,
    lat: 14.365,
    lng: 108.015,
    mapUrl: "https://maps.app.goo.gl/gKFGtybELxjJfWtk8",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/3_h7ash3.png",
    description:
      "Khu vực bỏ phiếu thôn 4 được trang bị đầy đủ bảng niêm yết danh sách cử tri và tiểu sử tóm tắt của các ứng cử viên để người dân dễ dàng theo dõi.",
  },
  {
    id: "thon-5",
    name: "Thôn 5",
    groupId: 2,
    lat: 14.37,
    lng: 108.02,
    mapUrl: "https://maps.app.goo.gl/3b2PFAFG3ajCdwNFA",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/3_h7ash3.png",
    description:
      "Điểm bầu cử tại nhà văn hóa thôn 5. Tuyến đường vào khu vực đã được rà soát, dọn dẹp vệ sinh sạch sẽ, đảm bảo mỹ quan và an toàn trong ngày hội toàn dân.",
  },

  // Tổ 3
  {
    id: "thon-1",
    name: "Thôn 1",
    groupId: 3,
    lat: 14.38,
    lng: 108.03,
    mapUrl: "https://maps.app.goo.gl/ThEvFnXT5hU1hUJD7",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/4_qhyapi.png",
    description:
      "Khu vực bỏ phiếu thôn 1 nằm ở trung tâm xã Đăk Mar, dân cư đông đúc. Điểm bầu cử có bố trí sơ đồ hướng dẫn luồng di chuyển một chiều để tránh ùn tắc.",
  },
  {
    id: "thon-kon-ko-lok",
    name: "Thôn Kon Kơ Lốk",
    groupId: 3,
    lat: 14.385,
    lng: 108.035,
    mapUrl: "https://maps.app.goo.gl/ieKjKMQ3ezUd2kVJ9",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/4_qhyapi.png",
    description:
      "Điểm bỏ phiếu thôn Kon Kơ Lốk được đặt tại không gian sinh hoạt cộng đồng chung. Bà con cử tri nơi đây có truyền thống tham gia bầu cử rất sớm và đầy đủ.",
  },

  // Tổ 4
  {
    id: "thon-kon-hnong-yop",
    name: "Thôn Kon Hnong Yôp",
    groupId: 4,
    lat: 14.39,
    lng: 108.04,
    mapUrl: "https://maps.app.goo.gl/Nk7DR41yM6k3qErJ9",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496211/5_fb6dkv.png",
    description:
      "Điểm bầu cử tại thôn Kon Hnong Yôp. Khu vực này có tỷ lệ cử tri trẻ tuổi cao, công tác tuyên truyền trực quan bằng loa phát thanh được triển khai rất mạnh mẽ.",
  },
  {
    id: "thon-dak-kang-yop",
    name: "Thôn Đăk Kang Yôp",
    groupId: 4,
    lat: 14.395,
    lng: 108.045,
    mapUrl: "https://maps.app.goo.gl/fr8xAjK22AYu7M6q7",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496211/5_fb6dkv.png",
    description:
      "Khu vực bỏ phiếu đặt tại trường tiểu học của thôn Đăk Kang Yôp. Sân trường rộng rãi thuận tiện cho việc đỗ xe và tổ chức các hoạt động hướng dẫn cử tri.",
  },

  // Tổ 5
  {
    id: "thon-kon-hnong-peng",
    name: "Thôn Kon Hnong Pêng",
    groupId: 5,
    lat: 14.4,
    lng: 108.05,
    mapUrl: "https://maps.app.goo.gl/Qsumxd9jAtLfrtsFA",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496204/6_j0vakl.png",
    description:
      "Tổ bầu cử tại thôn Kon Hnong Pêng đã chuẩn bị sẵn sàng hòm phiếu phụ để hỗ trợ những cử tri già yếu, khuyết tật không thể trực tiếp đến điểm bỏ phiếu.",
  },
  {
    id: "thon-kon-proh-tu-ria",
    name: "Thôn Kon Proh Tu Ria",
    groupId: 5,
    lat: 14.405,
    lng: 108.055,
    mapUrl: "https://maps.app.goo.gl/nijmxS2JqM8FPX7o7",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496204/6_j0vakl.png",
    description:
      "Khu vực bỏ phiếu thôn Kon Proh Tu Ria. Lực lượng thanh niên tình nguyện luôn túc trực để hỗ trợ hướng dẫn quy trình bỏ phiếu cho bà con.",
  },
  {
    id: "thon-tu-ria-peng",
    name: "Thôn Tu Ria Pêng",
    groupId: 5,
    lat: 14.41,
    lng: 108.06,
    mapUrl: "https://maps.app.goo.gl/zHJxa9AiXKP5dAwF9",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496204/6_j0vakl.png",
    description:
      "Điểm bầu cử thôn Tu Ria Pêng nằm cạnh trục đường chính, dễ dàng tìm kiếm. Đã có phương án phân luồng giao thông để đảm bảo an toàn.",
  },

  // Tổ 6
  {
    id: "thon-tan-lap-a",
    name: "Thôn Tân Lập A",
    groupId: 6,
    lat: 14.42,
    lng: 108.07,
    mapUrl: "https://maps.app.goo.gl/uBNn3DQvkmh6guMD9",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/7_i8qmgt.png",
    description:
      "Khu vực bỏ phiếu Tân Lập A đại diện cho khu dân cư mới. Phòng bỏ phiếu được trang trí khánh tiết trang trọng, đúng quy định của Luật Bầu cử.",
  },
  {
    id: "thon-tan-lap-b",
    name: "Thôn Tân Lập B",
    groupId: 6,
    lat: 14.425,
    lng: 108.075,
    mapUrl: "https://maps.app.goo.gl/4riDs7MbWWSCQ3B96",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496203/7_i8qmgt.png",
    description:
      "Điểm bầu cử Tân Lập B được đặt tại nhà văn hóa. Công tác niêm yết danh sách cử tri được thực hiện từ rất sớm để bà con có thời gian kiểm tra, đối chiếu.",
  },

  // Tổ 7
  {
    id: "thon-kon-mong",
    name: "Thôn Kon Mong",
    groupId: 7,
    lat: 14.43,
    lng: 108.08,
    mapUrl: "https://maps.app.goo.gl/8abULd6b4X4kdQod9",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496204/8_gygaj5.png",
    description:
      "Khu vực bỏ phiếu thôn Kon Mong là một trong những điểm xa trung tâm nhất của xã Đăk Mar. Tuy nhiên, mọi cơ sở vật chất và hòm phiếu đều được chuẩn bị chu đáo.",
  },
  {
    id: "thon-dak-klong",
    name: "Thôn Đăk Klong",
    groupId: 7,
    lat: 14.435,
    lng: 108.085,
    mapUrl: "https://maps.app.goo.gl/6Sog8jSCSi451Uhv8",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496204/8_gygaj5.png",
    description:
      "Điểm bầu cử thôn Đăk Klong hoàn tất 100% công tác chuẩn bị. Bà con cử tri đã được phổ biến kỹ lưỡng về quyền và nghĩa vụ công dân.",
  },
];
