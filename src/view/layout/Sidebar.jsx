import React from 'react';

import Box from '@mui/material/Box';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';

import Anim from '../asset/Anim';
import Btn from '../asset/Btn';
import * as ULayout from '../../util/Layout.jsx';

const VSidebar = () => {
    const onContact = () => {
        ULayout.set({ contactForm: 1 });
    };

    return (
        <Box sx={sx.container}>
            <Anim anim='fadeInUp' delay={2.2}>
                <Btn icon={true} color='light' sx={sx.btn} onClick={onContact}>
                    <FaRegEnvelope />
                </Btn>
            </Anim>
            <Anim anim='fadeInUp' delay={2}>
                <Btn
                    icon={true}
                    color='light'
                    sx={sx.btn}
                    to='https://www.linkedin.com/in/michael-kirkbright/'>
                    <FaLinkedinIn />
                </Btn>
            </Anim>
            <Anim anim='fadeInUp' delay={1.8}>
                <Btn icon={true} color='light' sx={sx.btn} to='https://github.com/mike0k'>
                    <FaGithub />
                </Btn>
            </Anim>
            <Anim anim={sx.motion.anim} sx={sx.bar} />
        </Box>
    );
};

const sx = {
    container: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginTop: '0.5rem',
    },
    bar: {
        backgroundColor: '#ffffff',
        width: '0.2rem',
        height: 0,
        marginTop: '1rem',
    },
    motion: {
        anim: {
            height: '8rem',
            transition: { duration: 1, delay: 1 },
        },
    },
};

export default VSidebar;
