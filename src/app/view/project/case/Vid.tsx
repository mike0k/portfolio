import React from 'react';
import { useSwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box';
import { MdPause, MdPlayArrow } from 'react-icons/md';

import BtnIcon from '../../asset/BtnIcon';
import Vid from '../../asset/Vid';

const VProject = ({ src, play, onPlay }: Props) => {
    const swiperSlide = useSwiperSlide();
    const isPlaying = play && swiperSlide.isActive;

    return (
        <Box sx={sx.container} onClick={onPlay}>
            <Vid src={src} play={isPlaying} />
            <Box sx={sx.overlay}>
                <BtnIcon sx={sx.btn}>{isPlaying ? <MdPause /> : <MdPlayArrow />}</BtnIcon>
            </Box>
        </Box>
    );
};

const sx = {
    container: {
        position: 'relative',
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
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&:hover button': {
            content: '""',
            opacity: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
        },
    },
    btn: {
        opacity: 0,
        fontSize: '8rem',
        transition: 'opacity 0.3s',
    },
};

type Props = {
    src: string;
    play: boolean;
    onPlay: () => void;
};

export default VProject;
