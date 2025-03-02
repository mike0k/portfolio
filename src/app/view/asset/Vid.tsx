'use client';
import { CSSProperties } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

import Box from '@mui/material/Box';

import Config from '../../../config/Config';

const AVid = ({ src = '', play = false }: Props) => {
    const path = Config.path.vid + src + '?v=' + Config.version;

    const player: ReactPlayerProps = {
        url: path,
        playing: play,
        loop: true,
        muted: true,
        controls: false,
        height: '100%',
        width: '100%',
        style: sx.player,
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
