import React from 'react';
import { useSelector } from 'react-redux';
import { useInterval } from 'usehooks-ts';

import Box from '@mui/material/Box';

import * as ULayout from '../../util/Layout';

const VKeyframe = () => {
    // const timer = useSelector((state) => state.layout.timer);

    // React.useEffect(() => {
    //     ULayout.set({ timer: 0 });
    // }, []);

    // useInterval(
    //     () => {
    //         ULayout.set({ timer: timer + 500 });
    //     },
    //     timer < 5000 ? 500 : null
    // );

    return <Box sx={sx.keyframes} />;
};

const sx = {
    keyframes: {
        '@keyframes fade-in': {
            '100%': {
                opacity: 1,
            },
        },
        '@keyframes fade-out': {
            '100%': {
                opacity: 0,
            },
        },
        '@keyframes pos-reset': {
            '100%': {
                top: 0,
                left: 0,
            },
        },

        '@keyframes menu-circle': {
            '100%': {
                opacity: 1,
                width: '1rem',
                height: '1rem',
            },
        },
        '@keyframes menu-line': {
            '100%': {
                width: '100vw',
            },
        },
        '@keyframes menu-line-a': {
            '100%': {
                top: 0,
                opacity: 0,
            },
        },
        '@keyframes menu-line-b': {
            '100%': {
                top: '100%',
                opacity: 0,
            },
        },

        '@keyframes intro-img': {
            '100%': {
                top: '-1rem',
                left: '-1rem',
            },
        },
    },
};

export default VKeyframe;
