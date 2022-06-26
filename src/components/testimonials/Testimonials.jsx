import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/coming_soon.jpg'
import AVATAR2 from '../../assets/coming_soon.jpg'
import AVATAR3 from '../../assets/coming_soon.jpg'
import AVATAR4 from '../../assets/coming_soon.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: '...',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti ipsum necessitatibus iste explicabo mollitia eos assumenda tempore nesciunt, labore veniam rem, aut fugiat ratione obcaecati fuga, praesentium doloribus accusantium.'
  },
  {
    avatar: AVATAR2,
    name: '...',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti ipsum necessitatibus iste explicabo mollitia eos assumenda tempore nesciunt, labore veniam rem, aut fugiat ratione obcaecati fuga, praesentium doloribus accusantium.'
  },
  {
    avatar: AVATAR3,
    name: '...',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti ipsum necessitatibus iste explicabo mollitia eos assumenda tempore nesciunt, labore veniam rem, aut fugiat ratione obcaecati fuga, praesentium doloribus accusantium.'
  },
  {
    avatar: AVATAR4,
    name: '...',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti ipsum necessitatibus iste explicabo mollitia eos assumenda tempore nesciunt, labore veniam rem, aut fugiat ratione obcaecati fuga, praesentium doloribus accusantium.'
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