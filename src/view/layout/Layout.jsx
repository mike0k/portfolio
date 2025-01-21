import React from 'react';

import Box from '@mui/material/Box';

//import Background from './Background.jsx';
import Cursor from './Cursor.jsx';
import Keyframe from './Keyframe.jsx';
import Menu from '../menu/Menu.jsx';
import Redirect from './Redirect.jsx';
import Sidebar from './Sidebar.jsx';
import Theme from './Theme.jsx';

import ATimer from '../asset/Timer.jsx';

const VLayout = ({ children }) => {
    const [timer, setTimer] = React.useState(0);
    ATimer({
        onUpdate: (t) => {
            setTimer(t);
        },
    });

    return (
        <Theme>
            <Redirect />
            <Keyframe />
            {/* <Box sx={sx.background}>
                <Background />
            </Box> */}
            <Box sx={sx.content}>
                <Menu />
                <Sidebar />
                <Box sx={sx.contentInner}>{timer > 1.5 && children}</Box>
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
        overflow: 'hidden',
    },
    contentInner: {
        padding: '0 2rem',
    },
};

export default VLayout;
