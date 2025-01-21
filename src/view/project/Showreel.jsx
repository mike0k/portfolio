import React from 'react';

import Box from '@mui/material/Box';

import Vid from '../asset/Vid';
import Config from '../../config/Config.jsx';

const VShowreel = () => {
    return (
        <Box sx={sx.container} id='project'>
            <Box sx={sx.vidBox}>
                <Vid src={Config.url.showreel} sx={[sx.vidAnim, sx.vid]} />
            </Box>
        </Box>
    );
};

const sx = {
    container: {
        //padding: '10rem 2rem 0 2rem',
    },
    vidBox: {
        position: 'relative',
        overflow: 'hidden',
        height: '75vh',
    },
    vid: {
        width: '100%',
        animation: 'img-pan 3s ease-in forwards',
        position: 'absolute',
    },
};

export default VShowreel;
