import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Showreel from './Showreel.jsx';
import * as UTool from '../../util/Tool.jsx';

const VProject = () => {
    return (
        <Box sx={sx.container} id='showreel'>
            <Typography variant='h1' sx={sx.title1}>
                Showreel
            </Typography>
            <Typography variant='subtitle1' sx={sx.title2}>
                A short rundown of some things i've made.
            </Typography>

            <Showreel />
        </Box>
    );
};

const sx = {
    container: {
        padding: '10rem 2rem 0 2rem',
    },
    title1: {
        textAlign: 'center',
    },
    title2: (theme) => ({
        textAlign: 'center',
        //paddingBottom: '2rem',
        //color: theme.palette.primary.main,
    }),
    subtitle: {
        paddingBottom: '1rem',
    },
    skills: {
        display: 'flex',
    },
    skill: (theme) => ({
        display: 'inline-block',
        padding: '0.15rem 0.5rem',
        margin: '0 0.25rem',
        backgroundColor: UTool.rgba(theme.palette.grey[700], 0.2),
    }),
    imgBox: {
        position: 'relative',
        overflow: 'hidden',
        height: '75vh',
    },
    img: {
        width: '100%',
        animation: 'img-pan 3s ease-in forwards',
        position: 'absolute',
    },
};

export default VProject;
