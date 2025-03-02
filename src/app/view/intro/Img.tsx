import Box from '@mui/material/Box';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';
import Img from '../asset/Img';

const VImg = () => {
    return (
        <Box sx={sx.container}>
            <BgColor />
            <Anim sx={sx.frame} anim='fadeIn' dur={0.75} delay={0.5}>
                <Box sx={sx.imgBg} />
                <Anim sx={sx.imgBox} anim={sx.motion.anim1}>
                    <Img src='profile/profile.webp' alt='Profile Photo' sx={sx.img} />
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
    imgBox: {
        border: 5,
        borderColor: 'primary.main',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    },
    imgBg: {
        backgroundColor: 'primary.main',
        height: '100%',
        width: '100%',
    },
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
