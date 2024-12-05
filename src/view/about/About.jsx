import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import Blurb from './Blurb';
import Skills from './Skills';
import Timeline from './Timeline';

const VAbout = () => {
    return (
        <Box sx={sx.container} id='about'>
            <Blurb />
            <Timeline />
            <Skills />
        </Box>
    );
};

const sx = {
    container: {
        minHeight: '100vh',
        padding: '0 2rem',
    },
};

export default VAbout;
