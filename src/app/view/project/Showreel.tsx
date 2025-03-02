'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { MdOutlinePlayCircle } from 'react-icons/md';

import BtnIcon from '../asset/BtnIcon';
import Img from '../asset/Img';
import Vid from '../asset/Vid';
import Config from '../../../config/Config';

const VShowreel = () => {
    const [active, setActive] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const onClick = () => {
        setActive(true);
        setOpen(true);
    };

    return (
        <Box sx={sx.container} id='project'>
            <Box sx={sx.vidBox}>
                <Img src='ui/showreel.webp' sx={sx.img} type='bg'>
                    <BtnIcon
                        sx={sx.play}
                        color='primary'
                        size='large'
                        onClick={onClick}
                        label='Play Showreel'>
                        <MdOutlinePlayCircle />
                    </BtnIcon>
                </Img>
            </Box>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Container sx={sx.modal}>
                    <Box sx={sx.vidBox}>
                        {active && Config.url.showreel && (
                            <Vid src={Config.url.showreel} play={true} />
                        )}
                    </Box>
                </Container>
            </Modal>
        </Box>
    );
};

const sx = {
    container: {
        //padding: '10rem 2rem 0 2rem',
    },
    vidBox: {
        position: 'relative',
        overflow: 'hidden',
        height: '75vh',
        //width: '100vw',
    },
    vid: {
        width: '100%',
        animation: 'img-pan 3s ease-in forwards',
        position: 'absolute',
    },

    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    play: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
        fontSize: '10rem',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
    },
};

export default VShowreel;
