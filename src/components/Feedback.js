import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import data from './data';
import SwiperCore, { Autoplay } from 'swiper';
import { GoQuote } from 'react-icons/go';

SwiperCore.use([Autoplay]);


function Feedback() {

    return (
        <div>
        <Swiper
            className='hidden md:block'
            spaceBetween={15}
            autoplay={{delay: 4000, disableOnInteraction: false,}}
            speed={200}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            {data.map( user => (
                <SwiperSlide key={user.id}>
                    <div className='w-full h-full border border-gray-200 rounded-md mt-7 mb-16 shadow-md'>
                        <ul className='xl:h-full'
                            style={{height: 450 }}>
                            <li className=''>
                                <figure className='pl-7 font-sans pr-5'>
                                    <figcaption className='relative z-50 pt-5 pb-2.5 text-lg text-gray-800 font-bold'>{user?.name}</figcaption>
                                    <hr></hr>
                                    <div className='absolute right-16 w-12 h-4 mr-0.5 -mt-3 z-50  bg-white'></div>
                                    <GoQuote 
                                        className='absolute font-bold -mt-10 right-4 text-5xl text-gray-200 z-30 bg-white'
                                        style={{zIndex: -1}} />                                
                                    <blockquote className='pt-3 pb-3 xl:h-72 text-gray-600 leading-tight tracking-normal'>
                                        <p>{user?.testimonial}</p>
                                        <p className='mt-5'>{user?.testimonial2}</p>
                                    </blockquote>
                                </figure>
                            </li> 
                        </ul>
                        
                    </div>

                </SwiperSlide>
            ))}   
        </Swiper>
        <Swiper
            className='md:hidden'
            spaceBetween={10}
            autoplay={{delay: 4000, disableOnInteraction: false,}}
            speed={200}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            {data.map( user => (
                <SwiperSlide key={user?.id}>
                    <div className='w-full h-full border border-gray-200 rounded-md mt-7 mb-16 shadow-md'>
                        <ul className=''>
                            <li className=''>
                                <figure className='pl-5 font-sans pr-3'>
                                    <figcaption className='z-50 relative pt-5 pb-2.5 text-base xs:text-lg text-gray-800 font-bold'>{user?.name}</figcaption>
                                    <hr></hr>
                                    <div className='absolute right-16 w-12 h-4 mr-0.5 -mt-3  bg-white'></div>
                                    <GoQuote 
                                        className='absolute font-bold -mt-10 right-4 text-5xl text-gray-200 z-30 bg-white' />                                
                                    <blockquote className='pt-3 h-72 pb-3 text-gray-600 leading-tight tracking-normal'>
                                        <p>{user?.testimonial}</p>
                                        <p className='mt-5'>{user?.testimonial2}</p>
                                    </blockquote>
                                </figure>
                            </li> 
                        </ul>
                        
                    </div>

                </SwiperSlide>
            ))}   
        </Swiper>
        </div>                                      
    );
};

export default Feedback;
