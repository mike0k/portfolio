import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import Blurb from './Blurb';
import Footer from './Footer';
import Links from './Links';

const VAbout = () => {
    return (
        <Box sx={sx.container} id='contact'>
            <Blurb />
            <Links />
            <Footer />
        </Box>
    );
};

const sx = {
    container: {
        minHeight: '100vh',
        padding: '10rem 1rem 0 2rem',
    },
};

export default VAbout;
