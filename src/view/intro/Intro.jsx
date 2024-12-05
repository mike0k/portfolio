import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import Btn from '../asset/Btn';
import Img from './Img';

const VIntro = () => {
    return (
        <Grid container sx={sx.container} spacing={3} id='hi'>
            <Grid size={6} sx={sx.textBox}>
                <Typography variant='h3'>Hello, I'm Michael</Typography>
                <Typography variant='subtitle1' component='h1' sx={sx.job}>
                    Software Developer & IT Manager
                </Typography>
                <Typography>
                    Driven by a passion for coding from an early age, I began with self-taught
                    skills and quickly progressed from entry-level roles to middle-management and
                    eventually to director-level positions, overseeing 40+ employees and managing
                    all aspects of business operations, including finance, HR, and marketing. With
                    extensive experience in the property industry, I'm now eager to bring my skills
                    to a new field, make a meaningful impact, and contribute to a company with fresh
                    ideas and drive.
                </Typography>
                <Box sx={sx.btnBox}>
                    <Btn variant='outlined' size='large'>
                        Get My Resume
                    </Btn>
                </Box>
            </Grid>
            <Grid size={6} sx={sx.imgBox}>
                <Img />
            </Grid>
        </Grid>
    );
};

const sx = {
    container: {
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
    },
    btnBox: {
        paddingTop: '1rem',
    },
    job: (theme) => ({
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
    }),
};

export default VIntro;
