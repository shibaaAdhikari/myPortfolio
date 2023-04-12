import React from "react";
import "./ExceptionalWorks.css";
import WorkI from "../../Assests/workI.png";
import WorkII from "../../Assests/workII.png";
import WorkIII from "../../Assests/workIII.png";
import workIV from "../../Assests/WorkIV.png";
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle"
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
// import { useSwiperSlide } from "swiper/react";
const ExceptionalWorks = () => {
  const swiperSlide = useSwiperSlide();

  return (
    <>
      <div className="excep">
        <div>
          <p className="excep_p">
            My <span className="excep_title">Exceptional</span> Works
          </p>

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          

          >
            <SwiperSlide>
              <img src={WorkI} alt="images" 
              
              />
            </SwiperSlide>
            <SwiperSlide >
              <img src={WorkII} alt="images" 
              className={swiperSlide?.isActive ? 'active' : 'not active'}
              />
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
