import React from 'react';

import Box from '@mui/material/Box';

import Config from '../../config/Config.jsx';

const AImg = ({ children, src, sx, alt, type = 'img' }) => {
    const path = Config.path.img + src;

    if (type === 'bg') {
        return (
            <Box sx={[sxDefault.bgImg, { backgroundImage: 'url(' + path + ')' }, sx]} title={alt}>
                {children}
            </Box>
        );
    } else {
        return <Box sx={sx} component='img' src={path} alt={alt} />;
    }
};

const sxDefault = {
    bgImg: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
    },
};

export default AImg;
