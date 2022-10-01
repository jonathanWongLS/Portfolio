import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/coming_soon.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: '. . .',
    review: 'Please be patient, gaining experience . . .'
  },
  {
    avatar: AVATAR1,
    name: '...',
    review: 'Please be patient, gaining experience . . .'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      
        {
          data.map(({avatar, name, review}) => 
          {
            return(
            <SwiperSlide key={avatar} className="testimonial">
              <div className="client__avatar">
                <img src={AVATAR1} alt="Coming Soon" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials