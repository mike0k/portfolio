import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import { MdDarkMode, MdLightMode, MdVolumeMute, MdVolumeUp } from 'react-icons/md';

import Btn from '../asset/Btn';
import Img from '../asset/Img';

import * as ULayout from '../../util/Layout.jsx';
import * as UMedia from '../../util/Media.jsx';
import * as UUser from '../../util/User.jsx';

const VMenu = () => {
    const user = useSelector((state) => state.user);

    const onMute = () => {
        if (user.mute) {
            UMedia.play({ src: 'sound-on.mp3', force: true });
        } else {
            UMedia.play({ src: 'sound-off.mp3' });
        }
        UUser.toggleMute();
    };

    const onStyle = () => {
        UMedia.play({ src: 'light-switch.mp3' });
        UUser.toggleStyle();
    };

    return (
        <Grid container sx={sx.container}>
            <Grid size={7}>
                <Img src='logo/logo-li-sm.webp' sx={sx.logo} />
            </Grid>
            <Grid size={5} container spacing={2} sx={sx.links}>
                <Grid size='grow'>
                    <Btn variant='text' color='light' onClick={() => ULayout.scroll('about')}>
                        About
                    </Btn>
                </Grid>
                <Grid size='grow'>
                    <Btn variant='text' color='light' onClick={() => ULayout.scroll('skills')}>
                        Skills
                    </Btn>
                </Grid>
                <Grid size='grow'>
                    <Btn variant='text' color='light' onClick={() => ULayout.scroll('project')}>
                        Projects
                    </Btn>
                </Grid>
                <Grid size='grow'>
                    <Btn variant='text' color='light' onClick={() => ULayout.scroll('contact')}>
                        Contact
                    </Btn>
                </Grid>
                <Grid size='grow'>
                    <Btn variant='text' color='light'>
                        Resume
                    </Btn>
                </Grid>
                <Grid size='grow'>
                    <IconButton onClick={onStyle}>
                        {user.style === 'dark' ? <MdDarkMode /> : <MdLightMode />}
                    </IconButton>
                    <IconButton onClick={onMute}>
                        {user.mute ? <MdVolumeMute /> : <MdVolumeUp />}
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

const sx = {
    container: (theme) => ({
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.default,
        zIndex: 100,
    }),
    logo: {
        maxHeight: '3rem',
        margin: '0.5rem 2rem',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
    },
};

export default VMenu;
