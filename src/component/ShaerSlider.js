import { useState,useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './ShaerSlider.css'
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from 'swiper';
const SHAER_API="https://ganjgah.ir/api/ganjoor/poets";
const IMAGE_API="https://ganjgah.ir/api/ganjoor/poet/image";
SwiperCore.use(Navigation);
const ShaerSlider=()=>{
    const [shaers,setShaer]=useState([]);
    useEffect(()=>{
        fetch(SHAER_API)
        .then((res)=>res.json())
        .then((data)=>{
            setShaer(data);
        });
    });
    return(
        <Swiper className='swiper'
            navigation={true}
            slidesPerView={5}
            spaceBetween={50}       
        >
         {shaers.map((shaer)=>(
                <SwiperSlide className='shaer-swiper'>
                    <img src={IMAGE_API+shaer.fullUrl+".gif"}></img>
                    <span>{shaer.name}</span>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ShaerSlider;