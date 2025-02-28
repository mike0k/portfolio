import React from 'react';
import { useSwiperSlide } from 'swiper/react';

import Grid from '@mui/material/Grid2';

import Vid from '../../asset/Vid';

const VProject = ({ children, video, playVideo, onPlayVideo }: Props) => {
    const swiperSlide = useSwiperSlide();

    return (
        <Grid container spacing={2} sx={sx.container}>
            <Grid size={{ xs: 12, lg: 6 }} sx={sx.vid} onClick={onPlayVideo}>
                <Vid src={video} play={playVideo && swiperSlide.isActive} />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }} sx={sx.text}>
                {children}
            </Grid>
        </Grid>
    );
};

const sx = {
    container: {
        minHeight: '80vh',
    },
    vid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '25rem',
        padding: '2rem 0',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
};

type Props = {
    children?: React.ReactNode;
    video: string;
    playVideo: boolean;
    onPlayVideo: () => void;
};

export default VProject;
