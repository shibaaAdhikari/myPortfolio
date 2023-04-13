import React from "react";
import "./ExceptionalWorks.css";
import WorkI from "../../Assests/expI.jpg";
import WorkII from "../../Assests/workII.png";
import WorkIII from "../../Assests/expII.jpg";
import workIV from "../../Assests/expIII.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
// import { useSwiperSlide } from "swiper/react";

const ExceptionalWorks = () => {
  return (
    <>
      <div className="excep">
        <div>
          <p className="excep_p">
            My <span className="excep_title">Exceptional</span> Works
          </p>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"2"}
            // spaceBetween={60}
            coverflowEffect={{
              rotate: 60,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={WorkI} alt="images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={WorkII} alt="images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={WorkIII} alt="images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={workIV} alt="images" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ExceptionalWorks;
