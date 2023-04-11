import React from "react";
import "./ExceptionalWorks.css";

import imageI from "../../Assests/design.png";
import imageII from "../../Assests/developer.png";
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
                <img src={imageI} alt="images"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={imageII} alt="images"/>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ExceptionalWorks;
