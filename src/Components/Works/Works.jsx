import React from 'react';
import './Works.css';
import WorkBG from '../../assets/Images/WorkBG.svg';
import Work1 from '../../assets/Images/Work-1.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Works = () => {
    return (
        <div>
            <div className="work">
                <div className="container work-container">
                    <img className='work-bg' src={WorkBG} alt="circle illustration" />
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        pagination={true}
                        initialSlide={1}
                        breakpoints={{
                            400: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                            },
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                          autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="work-card">
                                <div className="img-container">
                                    <img className='work-image-1' src={Work1} alt="" />
                                </div>
                                <div className="text-container">
                                    <p className='work-p'>UI Designs</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="work-card">
                                <div className="img-container">
                                    <img className='work-image-1' src={Work1} alt="" />
                                </div>
                                <div className="text-container">
                                    <p className='work-p'>UI Designs</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="work-card">
                                <div className="img-container">
                                    <img className='work-image-1' src={Work1} alt="" />
                                </div>
                                <div className="text-container">
                                    <p className='work-p'>UI Designs</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Works;