'use client';

import Grid from '@mui/material/Grid2';
import { Theme } from '@mui/material/styles';

import Blurb from './Blurb';
import Img from './Img';

const VIntro = () => {
    return (
        <Grid container sx={sx.container} spacing={3} id='hi'>
            <Grid size={{ xs: 12, lg: 7 }} sx={sx.textBox}>
                <Blurb />
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }} sx={sx.imgBox}>
                <Img />
            </Grid>
        </Grid>
    );
};

const sx = {
    container: {
        minHeight: '100vh',
        padding: '10rem 2rem 2rem 2rem',
        //display: 'flex',
        //alignItems: 'center',
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
    },
    imgBox: (theme: Theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    }),

    bgColor: {
        left: '60%',
    },
};

export default VIntro;
