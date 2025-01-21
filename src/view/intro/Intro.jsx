import React from 'react';

import Grid from '@mui/material/Grid2';

import Blurb from './Blurb';
import Img from './Img';

const VIntro = () => {
    return (
        <Grid container sx={sx.container} spacing={3} id='hi'>
            <Grid size={7} sx={sx.textBox}>
                <Blurb />
            </Grid>
            <Grid size={5} sx={sx.imgBox}>
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
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
    },

    bgColor: {
        left: '60%',
    },
};

export default VIntro;
