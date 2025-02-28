import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore, SwiperOptions } from 'swiper/types';
import { useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Box from '@mui/material/Box';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import BtnIcon from '../asset/BtnIcon';

import VAI from './case/AI';
import VPasswordManager from './case/PasswordManager';
import VPlotLocator from './case/PlotLocator';

const VCarousel = () => {
    const swiper = useSwiper();
    const [swiperInst, setSwiperInst] = React.useState<SwiperCore | null>(null);
    const [playVideo, setPlayVideo] = React.useState<boolean>(true);

    const swiperProps: SwiperOptions = {
        autoplay: false,
        allowTouchMove: false,
        centeredSlides: true,
        loop: true,
        modules: [Pagination],
        pagination: {
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
    };

    const onPlayVideo = () => {
        setPlayVideo(!playVideo);
    };

    const onNav = (next: boolean) => {
        if (next) {
            swiperInst?.slideNext();
        } else {
            swiperInst?.slidePrev();
        }
    };

    return (
        <Box sx={sx.container}>
            <Box sx={sx.nav}>
                <BtnIcon size='large' onClick={() => onNav(true)}>
                    <MdChevronLeft />
                </BtnIcon>
                <BtnIcon size='large' onClick={() => onNav(false)}>
                    <MdChevronRight />
                </BtnIcon>
            </Box>
            <Swiper {...swiperProps} onSwiper={(inst: SwiperCore) => setSwiperInst(inst)}>
                <SwiperSlide>
                    <VAI playVideo={playVideo} onPlayVideo={onPlayVideo} />
                </SwiperSlide>
                <SwiperSlide>
                    <VPasswordManager playVideo={playVideo} onPlayVideo={onPlayVideo} />
                </SwiperSlide>
                <SwiperSlide>
                    <VPlotLocator playVideo={playVideo} onPlayVideo={onPlayVideo} />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

const sx = {
    container: {
        '.swiper-pagination .swiper-pagination-bullet-active': {
            backgroundColor: 'primary.main',
        },
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
    },
};

export default VCarousel;
