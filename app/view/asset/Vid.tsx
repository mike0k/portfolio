'use client';
import { CSSProperties } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

import Box from '@mui/material/Box';

const AVid = ({ src = '', play = false }: Props) => {
    const path = src;

    const player: ReactPlayerProps = {
        url: path,
        playing: play,
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

const sx: Record<string, CSSProperties> = {
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

type Props = {
    src: string;
    play: boolean;
};

export default AVid;
