'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';
import * as ULayout from '../../util/Layout';

const VContactBlurb = () => {
    return (
        <Box sx={sx.container}>
            <BgColor sx={sx.bgColor} color='secondary' />
            <Anim anim='fadeInUp' delay={2}>
                <IconButton sx={sx.btn} onClick={() => ULayout.scroll('hi')}>
                    <MdKeyboardDoubleArrowUp />
                </IconButton>
            </Anim>
            <Anim anim='fadeInUp' delay={2.2}>
                <Typography sx={sx.copyright}>
                    &copy; 2024-present Michael Kirkbright. All Rights Reserved.
                </Typography>
            </Anim>
        </Box>
    );
};

const sx = {
    container: {
        padding: '5rem 2rem 2rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
    },
    btn: {
        fontSize: '3rem',
    },
    copyright: {
        paddingTop: '1rem',
        fontSize: '1rem',
    },
    bgColor: {
        top: '100%',
        left: '0%',
    },
};

export default VContactBlurb;
