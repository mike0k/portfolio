import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Anim from '../asset/Anim';
import Btn from '../asset/Btn';
import * as ULayout from '../../util/Layout.jsx';

const VContactBlurb = () => {
    const onContact = () => {
        ULayout.set({ contactForm: 1 });
    };

    return (
        <Box sx={sx.container}>
            <Stack direction='row' spacing={3}>
                <Anim anim='fadeInUp' delay={1.8}>
                    <Btn variant='text' color='light' size='large' sx={sx.btn} onClick={onContact}>
                        Email
                    </Btn>
                </Anim>
                <Anim anim='fadeInUp' delay={1.9}>
                    <Btn
                        variant='text'
                        color='light'
                        size='large'
                        sx={sx.btn}
                        to='https://github.com/mike0k'>
                        GitHub
                    </Btn>
                </Anim>
                <Anim anim='fadeInUp' delay={2}>
                    <Btn
                        variant='text'
                        color='light'
                        size='large'
                        sx={sx.btn}
                        to='https://www.linkedin.com/in/michael-kirkbright/'>
                        LinkedIn
                    </Btn>
                </Anim>
                <Anim anim='fadeInUp' delay={2.1}>
                    <Btn variant='text' color='light' size='large' sx={sx.btn}>
                        Resume
                    </Btn>
                </Anim>
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
