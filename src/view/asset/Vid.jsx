import React from 'react';
import ReactPlayer from 'react-player';

import Box from '@mui/material/Box';

const AVid = ({ src = '' }) => {
    const path = src;

    const player = {
        url: path,
        playing: 0,
        loop: false,
        muted: false,
        controls: true,
        height: '100%',
        width: '100%',
        style: sx.player,
        vimeo: {
            airplay: false,
            chromecast: false,
            pip: false,
            play_button_position: 'bottom',
            title: false,
            vimeo_logo: false,
        },
    };

    return (
        <Box sx={sx.container}>
            <ReactPlayer {...player} />
        </Box>
    );
};

const sx = {
    container: {
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100%',
    },
    player: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
};

export default AVid;
