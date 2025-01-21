import React from 'react';
import { motion } from 'motion/react';

import Box from '@mui/material/Box';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';
import Img from '../asset/Img';

const VImg = () => {
    return (
        <Box sx={sx.container}>
            <BgColor sx={sx.bgColor} />
            <Anim sx={sx.frame} anim='fadeIn' dur={0.75} delay={0.5}>
                <Box sx={sx.imgBg} />
                <Anim sx={sx.imgBox} anim={sx.motion.anim1}>
                    <Img src='misc/profile.jpg' sx={sx.img} />
                </Anim>
            </Anim>
        </Box>
    );
};

const sx = {
    container: {
        position: 'relative',
    },
    frame: {
        display: 'inline-block',
        transform: 'rotate(-7deg)',
        width: '20rem',
        aspectRatio: '1/1',
        opacity: 0,
    },
    imgBox: (theme) => ({
        border: '5px solid ' + theme.palette.primary.main,
        //boxShadow: '20px 20px 1px 0px' + theme.palette.primary.main,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    }),
    imgBg: (theme) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100%',
        width: '100%',
    }),
    img: {
        transform: 'rotate(7deg) scale(1.1)',
        width: '100%',
    },

    motion: {
        anim1: {
            top: '-1rem',
            left: '-1rem',
            transition: { duration: 1, delay: 1.5 },
        },
    },
};

export default VImg;
