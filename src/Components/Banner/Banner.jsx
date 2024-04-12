import React, { useRef, useState } from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import b1 from './banner1.jpg'
import b2 from './banner2.jpg'

function Banner() {
  return (
    <>
      <section className='hero-section'>
        <div className="container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='hero-slide hero-slide-5'>
              <img src={b1} alt="" />
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-1'>
              <img src={b2} alt="" />
            </SwiperSlide>
            {/* <SwiperSlide className='hero-slide hero-slide-3'>
              <img src={b12} alt="" />
            </SwiperSlide>             */}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Banner
