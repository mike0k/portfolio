'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Showreel from './Showreel';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';

const VProject = () => {
    return (
        <Box sx={sx.container} id='showreel'>
            <BgColor sx={sx.bgColor1} color='primary' />
            <BgColor sx={sx.bgColor2} color='secondary' />
            <Anim anim='fadeInUp' delay={0.5}>
                <Typography variant='h1' sx={sx.title1}>
                    Showreel
                </Typography>
            </Anim>
            <Anim anim='fadeInUp' delay={0.8}>
                <Typography variant='subtitle1' component='p' sx={sx.title2}>
                    A short rundown of some things i've made.
                </Typography>
            </Anim>

            <Anim anim='fadeIn' delay={1.1}>
                <Showreel />
            </Anim>
        </Box>
    );
};

const sx = {
    container: {
        padding: '10rem 2rem',
        position: 'relative',
    },
    title1: {
        textAlign: 'center',
    },
    title2: {
        textAlign: 'center',
        paddingBottom: '5rem',
    },

    bgColor1: {
        top: '50%',
        left: '80%',
        height: '20%',
    },
    bgColor2: {
        top: '90%',
        left: '10%',
        height: '30%',
    },
};

export default VProject;
