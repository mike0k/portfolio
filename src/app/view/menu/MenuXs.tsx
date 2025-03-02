'use client';

import React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { MdDarkMode, MdLightMode, MdVolumeMute, MdVolumeUp, MdMenu } from 'react-icons/md';

import Btn from '../asset/Btn';
import BtnIcon from '../asset/BtnIcon';
import * as ULayout from '../../util/Layout';
import * as UserReducer from '../../store/reducer/UserReducer';

import Config from '../../../config/Config';

const VMenuXs = ({ user, onStyle, onMute }: Props) => {
    const [open, setOpen] = React.useState(false);

    const onOpen = () => {
        setOpen(!open);
    };

    const onNav = (anchor: string) => {
        setOpen(false);
        ULayout.scroll(anchor);
    };

    return (
        <React.Fragment>
            <Grid>
                <BtnIcon size='large' onClick={onOpen} label='Open Navigation'>
                    <MdMenu />
                </BtnIcon>
            </Grid>
            <Drawer open={open} onClose={onOpen} anchor='right'>
                <Stack spacing={2} sx={sx.stack}>
                    <Stack direction='row' spacing={2} sx={sx.stack2}>
                        <IconButton onClick={onStyle} aria-label='Dark/Light Mode'>
                            {user.style === 'dark' ? <MdDarkMode /> : <MdLightMode />}
                        </IconButton>
                        <IconButton onClick={onMute} aria-label='Mute Audio'>
                            {user.mute ? <MdVolumeMute /> : <MdVolumeUp />}
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Btn
                        sx={sx.btn}
                        size='large'
                        variant='text'
                        color='light'
                        onClick={() => onNav('about')}>
                        About
                    </Btn>
                    <Btn
                        sx={sx.btn}
                        size='large'
                        variant='text'
                        color='light'
                        onClick={() => onNav('skills')}>
                        Skills
                    </Btn>
                    <Btn
                        sx={sx.btn}
                        size='large'
                        variant='text'
                        color='light'
                        onClick={() => onNav('projects')}>
                        Projects
                    </Btn>
                    <Btn
                        sx={sx.btn}
                        size='large'
                        variant='text'
                        color='light'
                        onClick={() => onNav('contact')}>
                        Contact
                    </Btn>
                    <Btn sx={sx.btn} size='large' variant='text' color='light' href={Config.url.cv}>
                        Resume
                    </Btn>
                </Stack>
            </Drawer>
        </React.Fragment>
    );
};

const sx = {
    stack: {
        minWidth: '10rem',
        textAlign: 'left',
    },
    stack2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        justifyContent: 'flex-end',
    },
};

type Props = {
    user: UserReducer.StateType;
    onMute: () => void;
    onStyle: () => void;
};

export default VMenuXs;
