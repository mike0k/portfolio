'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Theme } from '@mui/material/styles';

import Anim from '../asset/Anim';
import Img from '../asset/Img';

import * as UMedia from '../../util/Media';
import * as UTool from '../../util/Tool';
import * as UUser from '../../util/User';

import MenuLg from './MenuLg';
import MenuXs from './MenuXs';

const VMenu = () => {
    const user = UTool.useAppSelector((state) => state.user);

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
        <Box sx={sx.container}>
            <Anim anim={sx.motion.anim1a} sx={sx.animContainer}>
                <Anim anim={sx.motion.anim1b} sx={sx.circle} />
            </Anim>
            <Anim anim={sx.motion.anim2a} sx={sx.animContainer}>
                <Anim anim={sx.motion.anim2b} sx={sx.line} />
            </Anim>
            <Anim anim={sx.motion.anim3a} sx={sx.animContainer}>
                <Anim anim={sx.motion.anim3b} sx={sx.line} />
            </Anim>
            <Anim anim={sx.motion.anim4} sx={sx.grid}>
                <Grid container>
                    <Grid size={7}>
                        <Img src='logo/logo-li-sm.webp' alt='logo' sx={sx.logo} />
                    </Grid>
                    <Grid size={5} container spacing={2} sx={sx.menuLg}>
                        <MenuLg user={user} onMute={onMute} onStyle={onStyle} />
                    </Grid>
                    <Grid size={5} container spacing={2} sx={sx.menuXs}>
                        <MenuXs user={user} onMute={onMute} onStyle={onStyle} />
                    </Grid>
                </Grid>
            </Anim>
        </Box>
    );
};

const sx = {
    container: {
        position: 'sticky',
        top: 0,
        backgroundColor: 'background.default',
        zIndex: 100,
    },
    logo: {
        maxHeight: '3rem',
        margin: '0.5rem 2rem',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
    },
    grid: {
        opacity: 0,
    },

    animContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'transLate(-50%, -50%)',
    },
    circle: {
        backgroundColor: 'primary.main',
        width: 0,
        height: 0,
        filter: 'blur(1px)',
        borderRadius: '50%',
        opacity: 0,
    },
    line: {
        backgroundColor: 'primary.main',
        height: '2px',
        filter: 'blur(1px)',
        width: 0,
    },
    menuXs: (theme: Theme) => ({
        display: 'none',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
        },
    }),
    menuLg: (theme: Theme) => ({
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    }),
    motion: {
        anim1a: {
            opacity: 0,
            transition: { duration: 0.5, delay: 1 },
        },
        anim1b: {
            opacity: 1,
            width: '1rem',
            height: '1rem',
            transition: { duration: 0.5 },
        },
        anim2a: {
            top: 0,
            opacity: 0,
            transition: { duration: 0.5, delay: 1 },
        },
        anim2b: {
            width: '100vw',
            transition: { duration: 0.5, delay: 0.5 },
        },
        anim3a: {
            top: '100%',
            opacity: 0,
            transition: { duration: 0.5, delay: 1 },
        },
        anim3b: {
            width: '100vw',
            transition: { duration: 0.5, delay: 0.5 },
        },
        anim4: {
            opacity: 1,
            transition: { duration: 0.3, delay: 1.2 },
        },
    },
};

export default VMenu;
