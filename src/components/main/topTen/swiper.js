import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Autoplay, Pagination, Navigation} from 'swiper/modules'; 

import TopTenData from './topTenData';



function TopTen(){

  function Cards(props){
    const {id,name,image,} = props
  
     return(   
       <SwiperSlide>
          <img src={image}/> 
      </SwiperSlide>
     )
  }
  
    return(
        <div>
        <h2>
            BRUNA'S TOP 10
        </h2>
            <Swiper
          effect={'fade'}
          grabCursor={true}
          loop={true}
          slidesPerView={'3'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}

          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{el: '.swiper-navigation', clickable: true}}
          modules={[Autoplay, EffectCoverflow, Pagination,Navigation]}
          className="swiper_container"
            >
            {TopTenData.map(Cards)}
            </Swiper>
        </div>
    )
}

export default TopTen