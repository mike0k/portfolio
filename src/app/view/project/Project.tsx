'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';

import CaseStudies from './CaseStudies';

const VProject = () => {
    return (
        <Box sx={sx.container} id='projects'>
            <BgColor sx={sx.bgColor1} color='primary' />
            <BgColor sx={sx.bgColor2} color='secondary' />
            <Anim anim='fadeInUp' delay={0.5}>
                <Typography variant='h1' sx={sx.title1}>
                    Projects
                </Typography>
            </Anim>
            <Anim anim='fadeInUp' delay={0.8}>
                <Typography variant='subtitle1' component='p' sx={sx.title2}>
                    Some interesting features from projects i've worked on recently
                </Typography>
            </Anim>

            <Anim anim='fadeIn' delay={1.1}>
                <CaseStudies />
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
