import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';
import Btn from '../asset/Btn';

import Config from '../../config/Config.jsx';

const VIntro = () => {
    return (
        <Box sx={sx.container}>
            <BgColor sx={sx.bgColor} color='secondary' />
            <Anim anim='fadeInRight' delay={0.5}>
                <Typography variant='h3'>Hello, I'm Michael</Typography>
            </Anim>
            <Anim anim='fadeInRight' delay={1}>
                <Typography variant='subtitle1' component='h1' sx={sx.job}>
                    Software Developer & IT Manager
                </Typography>
            </Anim>
            <Anim anim='fadeInRight' delay={1.5}>
                <Typography>
                    Driven by a passion for coding from an early age, I began with self-taught
                    skills and quickly progressed from entry-level roles to middle-management and
                    eventually to director-level positions, overseeing 40+ employees and managing
                    all aspects of business operations, including finance, HR, and marketing. With
                    extensive experience in the property industry, I'm now eager to bring my skills
                    to a new field, make a meaningful impact, and contribute to a company with fresh
                    ideas and drive.
                </Typography>
            </Anim>
            <Anim anim='fadeInRight' delay={1.75}>
                <Box sx={sx.btnBox}>
                    <Btn variant='outlined' size='large' to={Config.url.cv}>
                        Get My Resume
                    </Btn>
                </Box>
            </Anim>
        </Box>
    );
};

const sx = {
    container: {
        position: 'relative',
    },
    btnBox: {
        paddingTop: '1rem',
    },
    job: (theme) => ({
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
    }),

    bgColor: {
        top: '70%',
        left: '10%',
    },
};

export default VIntro;
