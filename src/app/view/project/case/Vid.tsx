import React from 'react';
import { useSwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box';

import Vid from '../../asset/Vid';

const VProject = ({ src, play, onPlay }: Props) => {
    const swiperSlide = useSwiperSlide();

    return (
        <Box sx={sx.container} onClick={onPlay}>
            <Vid src={src} play={play && swiperSlide.isActive} />
        </Box>
    );
};

const sx = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '25rem',
        minHeight: '25rem',
        padding: '2rem 0',
    },
    vid: {
        minHeight: '25rem',
    },
};

type Props = {
    src: string;
    play: boolean;
    onPlay: () => void;
};

export default VProject;
