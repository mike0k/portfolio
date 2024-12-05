import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

import * as ULayout from '../../util/Layout.jsx';

const VContactBlurb = () => {
    return (
        <Box sx={sx.container}>
            <IconButton sx={sx.btn} onClick={() => ULayout.scroll('hi')}>
                <MdKeyboardDoubleArrowUp />
            </IconButton>
            <Typography sx={sx.copyright}>
                &copy; 2024-present Michael Kirkbright. All Rights Reserved.
            </Typography>
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
    },
    btn: {
        fontSize: '3rem',
    },
    copyright: {
        paddingTop: '1rem',
        fontSize: '1.5rem',
    },
};

export default VContactBlurb;
