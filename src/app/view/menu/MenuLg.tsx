'use client';

import React from 'react';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import { MdDarkMode, MdLightMode, MdVolumeMute, MdVolumeUp } from 'react-icons/md';

import Btn from '../asset/Btn';

import * as ULayout from '../../util/Layout';
import * as UserReducer from '../../store/reducer/UserReducer';

import Config from '../../../config/Config';

const VMenuLg = ({ user, onStyle, onMute }: Props) => {
    return (
        <React.Fragment>
            <Grid size='grow'>
                <Btn variant='text' color='light' onClick={() => ULayout.scroll('about')}>
                    About
                </Btn>
            </Grid>
            <Grid size='grow'>
                <Btn variant='text' color='light' onClick={() => ULayout.scroll('skills')}>
                    Skills
                </Btn>
            </Grid>
            <Grid size='grow'>
                <Btn variant='text' color='light' onClick={() => ULayout.scroll('projects')}>
                    Projects
                </Btn>
            </Grid>
            <Grid size='grow'>
                <Btn variant='text' color='light' onClick={() => ULayout.scroll('contact')}>
                    Contact
                </Btn>
            </Grid>
            <Grid size='grow'>
                <Btn variant='text' color='light' href={Config.url.cv}>
                    Resume
                </Btn>
            </Grid>
            <Grid size='grow'>
                <IconButton onClick={onStyle} aria-label='Dark/Light Mode'>
                    {user.style === 'dark' ? <MdDarkMode /> : <MdLightMode />}
                </IconButton>
                <IconButton onClick={onMute} aria-label='Mute Audio'>
                    {user.mute ? <MdVolumeMute /> : <MdVolumeUp />}
                </IconButton>
            </Grid>
        </React.Fragment>
    );
};

type Props = {
    user: UserReducer.StateType;
    onMute: () => void;
    onStyle: () => void;
};

export default VMenuLg;
