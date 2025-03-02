'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Anim from '../asset/Anim';
import Btn from '../asset/Btn';
import * as ULayout from '../../util/Layout';

import Config from '../../../config/Config';

const VContactBlurb = () => {
    const onContact = () => {
        ULayout.set({ contactForm: 1 });
    };

    return (
        <Box sx={sx.container}>
            <Stack direction='row' spacing={3} useFlexGap sx={sx.stack}>
                <Anim anim='fadeInUp' delay={1.3}>
                    <Btn variant='text' color='light' size='large' sx={sx.btn} onClick={onContact}>
                        Email
                    </Btn>
                </Anim>
                <Anim anim='fadeInUp' delay={1.5}>
                    <Btn
                        variant='text'
                        color='light'
                        size='large'
                        sx={sx.btn}
                        href='https://github.com/mike0k'>
                        GitHub
                    </Btn>
                </Anim>
                <Anim anim='fadeInUp' delay={1.7}>
                    <Btn
                        variant='text'
                        color='light'
                        size='large'
                        sx={sx.btn}
                        href='https://www.linkedin.com/in/michael-kirkbright/'>
                        LinkedIn
                    </Btn>
                </Anim>
                <Anim anim='fadeInUp' delay={1.9}>
                    <Btn variant='text' color='light' size='large' sx={sx.btn} href={Config.url.cv}>
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
    stack: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
};

export default VContactBlurb;
