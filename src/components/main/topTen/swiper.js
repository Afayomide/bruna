import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swiper.css"
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperNavButtons } from './swipernav';
import {EffectFade, Autoplay, Pagination, Navigation} from 'swiper/modules'; 
import CatalogData from './catalogdata';

import TopTenData from './topTenData';
import Banner1 from "../../../assets/banners1.webp"
import Banner2 from  "../../../assets/banners2.webp"
import Banner3 from "../../../assets/banners3.webp"

export function  Banner () {
  return(
    <div className='banner-container'>
       <Swiper
        effect={'fade'}
          grabCursor={true}
          loop={true}
          centeredSlides={true}

          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}      
          modules={[Autoplay, EffectFade, Pagination,Navigation]}
           >    

        <SwiperSlide className='banner'>
          <img src={Banner1} loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide className='banner' loading="lazy">
          <img src={Banner2}/>
        </SwiperSlide>
        <SwiperSlide className='banner' loading="lazy">
          <img src={Banner3}/>
        </SwiperSlide>
       </Swiper>
    </div>
  )
} 

function TopTen(){

  function Cards(props){
    const {id,name,image,} = props
  
     return(   
       <SwiperSlide className='swiper-slide-top-ten'>
          <img src={image} loading='lazy'/> 
          <p>{name}</p>
      </SwiperSlide>
     )
  }
  
    return(
      <div className='top-ten-container'>
        <div className='top-ten'>
        <h2>
            <span className='brown-text'>BRUNA</span>'S TOP 10
        </h2>
            <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1000:{
              slidesPerView: 5,
            }
          }}
       
       

          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[Autoplay, EffectFade, Pagination,Navigation]}
          className="swiper-container"
            >            <SwiperNavButtons/>


            {TopTenData.map(Cards)}       
            </Swiper>
        </div>
        </div>
    )
}

export function CatalogSwiper(){

  function Cards(props){
    const {id,name,image,href} = props
  
     return( 
       <SwiperSlide className='swiper-slide-top-ten'>
       <a href={href}> 

          <img src={image} loading='lazy'/> 
          <p>{name}</p>
          </a>
      </SwiperSlide>
     )
  }
  
    return(
      <div className='top-ten-container'>
        <div className='top-ten'>
        <h2 className='bruna-catalog'>
        <a href='https://www.brunasemijoias.com.br/catalogo/'>
            <span className='brown-text'>BRUNA</span>'S CATALOG
            </a>
        </h2>
            <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1000:{
              slidesPerView: 5,

            }
          }}
       
       

          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[Autoplay, EffectFade, Pagination,Navigation]}
          className="swiper-container"
            >            <SwiperNavButtons/>


            {CatalogData.map(Cards)}       
            </Swiper>
        </div>
        </div>
    )
}
export default TopTen

