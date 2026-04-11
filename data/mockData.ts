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
      "Điểm tiếp xúc cử tri thôn Kon Gung được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri thôn Đăk Mút được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn 3 được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn 4 được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn 5 được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn 1 được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Kơ Lốk được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
  },

  // Tổ 4
  {
    id: "thon-kon-hnong-yop",
    name: "Thôn Hnong Yôp",
    groupId: 4,
    lat: 14.39,
    lng: 108.04,
    mapUrl: "https://maps.app.goo.gl/Nk7DR41yM6k3qErJ9",
    imageUrl:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1775496211/5_fb6dkv.png",
    description:
      "Điểm tiếp xúc cử tri Thôn Hnong Yôp được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Đăk Kang Yôp được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Kon Hnong Pêng được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Kon Proh Tu Ria được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Tu Ria Pêng được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Tân Lập A được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Tân Lập B được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Tân Lập Kon Mong được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
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
      "Điểm tiếp xúc cử tri Thôn Đăk Klong được trang bị mô hình 'Góp ý số' nhân dân.Đây là cầu nối trực tiếp, kịp thời giữa người dân với chính quyền. Thông qua mô hình này, người dân có thể chủ động gửi ý kiến, kiến nghị mọi lúc, mọi nơi một cách nhanh chóng, thuận tiện, không còn phụ thuộc vào các kỳ tiếp xúc cử tri định kỳ. Qua đó, góp phần phát huy quyền làm chủ của nhân dân, nâng cao tính minh bạch, trách nhiệm giải trình và hiệu quả trong công tác lắng nghe, giải quyết ý kiến từ cơ sở",
  },
];
