import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const steps = [
  {
    title: "Trước khi tiêm",
    bgColor: "bg-blue-500",
    textColor: "text-white",
    bgLight: "bg-blue-100",
    content: [
      "Sàng lọc: Khám sàng lọc và tư vấn cho đối tượng tiêm chủng.",
      "Thông báo, giải đáp thắc mắc: Thông báo về loại vắc xin sẽ tiêm.",
    ],
  },
  {
    title: "Quá trình tiêm",
    bgColor: "bg-orange-500",
    textColor: "text-white",
    bgLight: "bg-orange-100",
    content: [
      "Nhân viên y tế: Kiểm tra vắc xin, bơm tiêm và dụng cụ trước khi sử dụng.",
      "Đối tượng tiêm chủng: Cho đối tượng tiêm hoặc cha mẹ, người giám hộ xem lọ vắc xin.",
      "Thực hiện tiêm: Tiêm đúng chỉ định, đúng liều, đúng đường dùng.",
    ],
  },
  {
    title: "Sau khi tiêm",
    bgColor: "bg-green-500",
    textColor: "text-white",
    bgLight: "bg-green-100",
    content: [
      "Theo dõi sau tiêm: Lưu trú, theo dõi các phản ứng sau tiêm.",
      "Bảo quản: Bảo quản vắc xin, vật tư tiêm chủng chưa sử dụng theo quy định.",
      "Xử lý chất thải: Xử lý các chất thải y tế sau tiêm chủng theo đúng quy định.",
    ],
  },
];

const VaccinationGuide = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Quy trình tiêm chủng tại Nhân Ái</h2>

      {/* Hiển thị số bước trên màn hình lớn */}
      <div className="hidden md:flex items-center justify-between relative mb-10">
        <div className="absolute w-full h-1 bg-gray-200 top-1/2 -z-10"></div>
        {steps.map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-12 h-12 ${steps[index].bgColor} text-white flex items-center justify-center rounded-full text-xl font-bold mr-[8.5rem] ml-[8.5rem]`}>
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Grid layout cho màn hình lớn */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className={`rounded-lg overflow-hidden ${step.bgLight}`}>
            <h3 className={`text-lg font-semibold ${step.textColor} ${step.bgColor} w-full flex items-center gap-2 p-3 rounded-t-lg`}>
              <FaAnglesRight /> {step.title}
            </h3>
            <ul className="mt-3 mb-3 text-sm text-gray-700 px-4">
              {step.content.map((text, idx) => (
                <li key={idx}>
                  <strong>{text.split(":")[0]}:</strong> {text.split(":")[1]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Swiper cho màn hình nhỏ */}
      <div className="md:hidden">
        <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className={`rounded-lg overflow-hidden ${step.bgLight} p-8 relative`}>
                {/* Hiển thị số bước ở trên mỗi box */}
                <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 ${step.bgColor} text-white flex items-center justify-center rounded-full text-lg font-bold shadow-md`}>
                  {index + 1}
                </div>
                <h3 className={`text-lg font-semibold ${step.textColor} ${step.bgColor} w-full flex items-center gap-2 p-3 rounded-t-lg mt-6`}>
                  <FaAnglesRight /> {step.title}
                </h3>
                <ul className="mt-3 mb-3 text-sm text-gray-700">
                  {step.content.map((text, idx) => (
                    <li key={idx}>
                      <strong>{text.split(":")[0]}:</strong> {text.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VaccinationGuide;
