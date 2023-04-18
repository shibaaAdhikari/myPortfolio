import React from "react";
import "./Projects.css";
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

const ExceptionalWorks = ({projectRef}) => {
  return (
    <>
      <div className="excep" id="Projects" ref={projectRef}>
        <div>
          <p className="excep_p">
            My <span className="excep_title">Exceptional</span> Works
          </p>

          {/* <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"3"}
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
            breakpoints={{
              600: {
             
               slidesPerView: 2,

              }
            }}
          > */}
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {/* <Swiper
        slidesPerView={3}
        spaceBetween={60}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      > */}
            <SwiperSlide>
              <img src={WorkI} alt="images" className="swiper_Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={WorkII} alt="images"  className="swiper_Image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={WorkIII} alt="images"  className="swiper_Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={workIV} alt="images"  className="swiper_Image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ExceptionalWorks;
