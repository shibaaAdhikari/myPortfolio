import React from "react";
import "./ExceptionalWorks.css";
import WorkI from "../../Assests/workI.png";
import WorkII from "../../Assests/workII.png";
import WorkIII from "../../Assests/workIII.png";
import workIV from "../../Assests/WorkIV.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ExceptionalWorks = () => {
  return (
    <>
      <div className="excep">
        <div>
          <p className="excep_p">
            My <span className="excep_title">Exceptional</span> Works
          </p>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
            ........
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ExceptionalWorks;
