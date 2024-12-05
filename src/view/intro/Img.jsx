import React from 'react';

import Box from '@mui/material/Box';

import Img from '../asset/Img';

const VImg = () => {
    return (
        <Box sx={sx.container}>
            <Img src='misc/profile.jpg' sx={sx.img} />
        </Box>
    );
};

const sx = {
    container: (theme) => ({
        border: '5px solid ' + theme.palette.primary.main,
        boxShadow: '20px 20px 1px 0px' + theme.palette.primary.main,
        display: 'inline-block',
        transform: 'rotate(-7deg)',
        overflow: 'hidden',
        width: '20rem',
        aspectRatio: '1/1',
    }),

    img: {
        transform: 'rotate(7deg) scale(1.1)',
        width: '100%',
    },
};

export default VImg;
