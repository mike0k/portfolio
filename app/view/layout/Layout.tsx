'use client';

import React from 'react';

import Box from '@mui/material/Box';

import Cursor from './Cursor';
import Keyframe from './Keyframe';
import Menu from '../menu/Menu';
import Sidebar from '../menu/Sidebar';
import Theme from './Theme';

import ATimer from '../asset/Timer';

import ReduxProvider from '../../store/Provider';

const VLayout = ({ children, menu = true }: Props) => {
    const [timer, setTimer] = React.useState(0);
    ATimer({
        onUpdate: (t: number) => {
            setTimer(t);
        },
    });

    return (
        <ReduxProvider>
            <Theme>
                <Keyframe />
                <Box sx={sx.content}>
                    {menu && <Menu />}
                    {menu && <Sidebar />}
                    <Box sx={sx.contentInner}>{timer > 1.5 && children}</Box>
                </Box>
                <Cursor />
            </Theme>
        </ReduxProvider>
    );
};

const sx = {
    background: {
        zIndex: 1,
    },
    content: {
        zIndex: 2,
        overflow: 'hidden',
    },
    contentInner: {
        padding: '0 2rem',
    },
};

interface Props {
    children: React.ReactNode;
    menu?: boolean;
}

export default VLayout;
