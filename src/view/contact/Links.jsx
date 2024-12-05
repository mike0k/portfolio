import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Btn from '../asset/Btn';

const VContactBlurb = () => {
    return (
        <Box sx={sx.container}>
            <Stack direction='row' spacing={3}>
                <Btn variant='text' color='light' size='large' sx={sx.btn}>
                    Email
                </Btn>
                <Btn
                    variant='text'
                    color='light'
                    size='large'
                    sx={sx.btn}
                    to='https://github.com/mike0k'>
                    GitHub
                </Btn>
                <Btn
                    variant='text'
                    color='light'
                    size='large'
                    sx={sx.btn}
                    to='https://www.linkedin.com/in/michael-kirkbright/'>
                    LinkedIn
                </Btn>
                <Btn variant='text' color='light' size='large' sx={sx.btn}>
                    Resume
                </Btn>
            </Stack>
        </Box>
    );
};

const sx = {
    container: {
        paddingTop: '10rem',
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        fontSize: '2.5rem',
    },
};

export default VContactBlurb;
