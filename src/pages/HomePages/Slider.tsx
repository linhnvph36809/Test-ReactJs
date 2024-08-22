import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySlider"
      >
        <SwiperSlide className="flex justify-center items-center">
          <div className="flex xl:gap-x-[43px] sm:gap-8 items-start w-[931px] min-h-[330px] bg-white xl:py-[60px] xl:px-[100px] sm:py-8 sm:px-10 rounded-[20px]">
            <div className="">
              <img
                src="https://s3-alpha-sig.figma.com/img/515d/ff9e/da4d74b6ffcfa490d831317ff20eb608?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDorllztfRuIfJzF2HT~XowQl8ESNYGiqtlTebIoWIi-J3Zetvfy8OgDk~u~FphuhLpS~IfyicR~cG~PABtLPuUOpcWOk1oTWVVgmqehSqNQroadc3yeQ0uqLtGt5mvHU2SiLinSbz9qac23qm9wz5JUj4e-8DK6UFtiiRRYUkH5FiogYz-KvZ4j0mveipjws1QHcfbKia1mG8Qbe0-oWvRHCh4XKrlsKqwRJtJRM5bQBfisAXyO6uTaO0GtqUcI2j-gH2nt2NQfuLl8O0gA9rXg4TpAvwaxtGqEEdGsDThMqwsbQB3-uI5qF9oSNkYDzEQEonWrILIdI5jqAuv9UQ__"
                alt=""
                className="xl:w-[130px] xl:h-[90px] object-cover rounded-[100%]"
              />
            </div>
            <div>
              <h3 className="title-color text-lg">John Fang </h3>
              <p className="text-sm font-medium text-[#9c69e2] mb-4">
                wordfaang.com
              </p>
              <p className="max-w-[382px] color-primary text-lg">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="flex xl:gap-x-[43px] sm:gap-8 items-start w-[931px] min-h-[330px] bg-white xl:py-[60px] xl:px-[100px] sm:py-8 sm:px-10 rounded-[20px]">
            <div className="">
              <img
                src="https://s3-alpha-sig.figma.com/img/515d/ff9e/da4d74b6ffcfa490d831317ff20eb608?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDorllztfRuIfJzF2HT~XowQl8ESNYGiqtlTebIoWIi-J3Zetvfy8OgDk~u~FphuhLpS~IfyicR~cG~PABtLPuUOpcWOk1oTWVVgmqehSqNQroadc3yeQ0uqLtGt5mvHU2SiLinSbz9qac23qm9wz5JUj4e-8DK6UFtiiRRYUkH5FiogYz-KvZ4j0mveipjws1QHcfbKia1mG8Qbe0-oWvRHCh4XKrlsKqwRJtJRM5bQBfisAXyO6uTaO0GtqUcI2j-gH2nt2NQfuLl8O0gA9rXg4TpAvwaxtGqEEdGsDThMqwsbQB3-uI5qF9oSNkYDzEQEonWrILIdI5jqAuv9UQ__"
                alt=""
                className="xl:w-[130px] xl:h-[90px] object-cover rounded-[100%]"
              />
            </div>
            <div>
              <h3 className="title-color text-lg">John Fang </h3>
              <p className="text-sm font-medium text-[#9c69e2] mb-4">
                wordfaang.com
              </p>
              <p className="max-w-[382px] color-primary text-lg">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div
          className="swiper-button-prev absolute hover:cursor-pointer z-[100]
          left-10 xl:top-1/2 xl:clear-end sm:bottom-0"
        >
          <svg
            width={43}
            height={17}
            viewBox="0 0 43 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.06298 1.70128L1.05225 8.7138L7.06298 15.7263"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.05247 8.71374L41.124 8.71375"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className="swiper-button-next absolute hover:cursor-pointer z-[100] 
          right-10 xl:top-1/2 xl:clear-end sm:bottom-0"
        >
          <svg
            width={43}
            height={17}
            viewBox="0 0 43 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.9263 1.12874L41.937 8.14127L35.9263 15.1538"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41.9374 8.14124L1.86572 8.14124"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Swiper>
    </>
  );
}
