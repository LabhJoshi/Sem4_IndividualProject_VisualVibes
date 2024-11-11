import { React, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import './EditorsChoice.css';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function EdiorsChoice() {

    const username = localStorage.getItem('username');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImagesWithQuery = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/images/get-images-of-editors-choice/', { 'query': title });
                setImages(response.data);
                console.log(images);
            } catch (error) {
                console.log(error);
            }
        }
        console.log("HERE");
        fetchImagesWithQuery();
    }, [title]);

    return (
        <div className='carousel1-body'>
            <div className="container1">
                <h1 className="heading1">Editors Choice</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src="https://pixabay.com/get/g13955ed2e4d2f328c3a8796db24fc0ad271a4e308c47ecf453fc89c580f8cd17f4a3605e7f5909c547f43e7229dfa1158cf8794ca9919b7c20cde7a3adcf3bcc_640.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pixabay.com/get/g29a8be776e7fcd584466d6fca79e25eea3c773219768401870278bb6bbec81a9ab5bf4f05b8faf930ed5317da3079bd7447c83af00d0690695c30c7fcf3680ae_640.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pixabay.com/get/g54639cc7fd2318b0edfec82fffaa296db2737cc07ab0dc65fe3b0d117bf6aba388108eba592e2c0072250802e5ab0e7a1c79c3d8c5b9ee6f6c136ac323c23dab_640.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pixabay.com/get/g6ff931b8cc7c7ace7f48066ab25381ff9378e2a0a08c13465258da7fdfd92b80437f7ca6d66539c9a4a19745e29e73eee3ef91ef922f2de0fe7786e432f82634_640.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pixabay.com/get/g5258759c8a10f7ad73b515228e943d6b17c0b5f7c4030b2f5acbbc4f92366921350bfd89aa54d9c66c8d2b272d459debd4a96094a3e3ab0292925eab43b9070b_640.png" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pixabay.com/get/ga549989de7f19d9b6ce65b74019b18b03deb7840ad0318cfa122717177e822648e5e26983cbf6e47444c43e34aef5c3473a9531f411c404f1e2c86c843970a0c_640.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pixabay.com/get/g1c2e5f14401e24422c4959331b6d2581070b2d0b925546acc24a15d785f28c1be57879049b8931a4c34ec1b3d45f425d1d5d25315ddae16aafc7047c3bb80e04_640.jpg" alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>

    );
}

export default EdiorsChoice;