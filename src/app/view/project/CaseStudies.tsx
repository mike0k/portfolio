import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore, SwiperOptions } from 'swiper/types';
import { EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import BtnIcon from '../asset/BtnIcon';

import VAI from './case/AI';
import VPasswordManager from './case/PasswordManager';
import VPlotLocator from './case/PlotLocator';
import Vid from './case/Vid';

const VCarousel = () => {
    const [swiperTxt, setSwiperTxt] = React.useState<SwiperCore | null>(null);
    const [swiperVid, setSwiperVid] = React.useState<SwiperCore | null>(null);
    const [slideKey, setSlideKey] = React.useState<number>(0);
    const [playVideo, setPlayVideo] = React.useState<boolean>(true);

    const swiperProps: SwiperOptions = {
        autoplay: false,
        allowTouchMove: false,
        loop: false,
        slidesPerView: 1,
    };
    const swiperPropsVid: SwiperOptions = {
        ...swiperProps,

        modules: [EffectCreative],
        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: [0, 0, -800],
                rotate: [0, -180, 0],
                opacity: 0,
            },
            next: {
                translate: [0, 0, -800],
                rotate: [0, 180, 0],
                opacity: 0,
            },
        },
    };
    const swiperPropsTxt: SwiperOptions = {
        ...swiperProps,

        modules: [EffectCreative],
        effect: 'creative',
        creativeEffect: {
            prev: {
                scale: 0,
            },
            next: {
                scale: 0,
            },
        },
    };

    const onPlayVideo = () => {
        setPlayVideo(!playVideo);
    };

    const onNav = (next: boolean) => {
        if (next) {
            swiperTxt?.slideNext();
            swiperVid?.slideNext();
            setSlideKey(slideKey + 1);
        } else {
            swiperTxt?.slidePrev();
            swiperVid?.slidePrev();
            setSlideKey(slideKey - 1);
        }
    };

    return (
        <Box sx={sx.container}>
            <Box sx={sx.nav}>
                <BtnIcon
                    size='large'
                    onClick={() => onNav(false)}
                    disabled={slideKey <= 0}
                    sx={sx.navBtn}>
                    <MdChevronLeft />
                </BtnIcon>
                <BtnIcon
                    size='large'
                    onClick={() => onNav(true)}
                    disabled={slideKey >= 2}
                    sx={sx.navBtn}>
                    <MdChevronRight />
                </BtnIcon>
            </Box>
            <Grid container spacing={2} sx={sx.grid}>
                <Grid size={{ xs: 12, lg: 6 }} onClick={onPlayVideo}>
                    <Swiper
                        {...swiperPropsVid}
                        onSwiper={(swiper: SwiperCore) => setSwiperVid(swiper)}>
                        <SwiperSlide>
                            <Vid src='ai-tools.webm' play={playVideo} onPlay={onPlayVideo} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Vid src='plot-locator.webm' play={playVideo} onPlay={onPlayVideo} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Vid
                                src='password-manager.webm'
                                play={playVideo}
                                onPlay={onPlayVideo}
                            />
                        </SwiperSlide>
                    </Swiper>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Swiper
                        {...swiperPropsTxt}
                        onSwiper={(swiper: SwiperCore) => setSwiperTxt(swiper)}>
                        <SwiperSlide>
                            <VAI />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VPlotLocator />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VPasswordManager />
                        </SwiperSlide>
                    </Swiper>
                </Grid>
            </Grid>
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
        paddingBottom: '1rem',
    },
    navBtn: {
        fontSize: '2rem',
    },
    grid: {
        minHeight: '80vh',
    },
};

export default VCarousel;
