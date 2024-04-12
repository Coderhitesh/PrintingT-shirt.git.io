import React, { useEffect, useRef, useState } from 'react'
import './OurClient.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import s1 from './1.png'
import s2 from './2.png'
import s3 from './3.png'
import s4 from './4.png'
import s5 from './5.png'
import s6 from './6.png'
import s7 from './7.png'
import s8 from './8.png'
import s9 from './9.png'
import s10 from './10.png'
import s11 from './11.png'
import s12 from './12.png'


function OurClient() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      }, []);
    return (
        <section className='client-section'>
            <div className="container">
                <div className="heading">
                    <span>OUR CLIENTS</span>
                </div>
                <div className="client-box">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper-clients"
                    >
                        <SwiperSlide className='img'>
                            <img src={s1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s10} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s11} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='img'>
                            <img src={s12} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OurClient
