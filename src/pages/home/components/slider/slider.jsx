import React from 'react'
import { sliderData } from '../../../../data/testimonial-data'
import { SliderBlock } from '../slider-block/slider-block'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { nanoid } from 'nanoid';

export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {sliderData.map((item) => (
                <SwiperSlide  key={nanoid()}>
                    <SliderBlock {...item} />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}
