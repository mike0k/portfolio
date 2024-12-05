import React from 'react';

import Box from '@mui/material/Box';

import Background from './Background.jsx';
import Cursor from './Cursor.jsx';
import Menu from '../menu/Menu.jsx';
import Redirect from './Redirect.jsx';
import Theme from './Theme.jsx';

const VLayout = ({ children }) => {
    return (
        <Theme>
            <Redirect />
            <Box sx={sx.background}>
                <Background />
            </Box>
            <Box sx={sx.content}>
                <Menu />
                {children}
            </Box>
            <Cursor />
        </Theme>
    );
};

const sx = {
    background: {
        zIndex: 1,
    },
    content: {
        zIndex: 2,
    },
};

export default VLayout;
