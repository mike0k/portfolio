'use client';

import Box from '@mui/material/Box';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';

import Anim from '../asset/Anim';
import BtnIcon from '../asset/BtnIcon';
import * as ULayout from '../../util/Layout';

const VSidebar = () => {
    const onContact = () => {
        ULayout.set({ contactForm: 1 });
    };

    return (
        <Box sx={sx.container}>
            <Anim anim='fadeInUp' delay={2.2}>
                <BtnIcon color='light' sx={sx.btn} onClick={onContact} label='Contact Form'>
                    <FaRegEnvelope />
                </BtnIcon>
            </Anim>
            <Anim anim='fadeInUp' delay={2}>
                <BtnIcon
                    color='light'
                    sx={sx.btn}
                    label='LinkedIn'
                    href='https://www.linkedin.com/in/michael-kirkbright/'>
                    <FaLinkedinIn />
                </BtnIcon>
            </Anim>
            <Anim anim='fadeInUp' delay={1.8}>
                <BtnIcon color='light' sx={sx.btn} href='https://github.com/mike0k' label='Github'>
                    <FaGithub />
                </BtnIcon>
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
