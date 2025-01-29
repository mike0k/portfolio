'use client';

import React from 'react';
import { motion, TargetAndTransition, Target } from 'motion/react';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

import * as UTypes from '../../util/Types';

const AAnim = ({ children, anim = {}, init = {}, dur = 0.5, delay = 0, sx = [] }: Props) => {
    if (typeof anim === 'string') {
        init = { ...preset[anim].start };
        anim = { ...preset[anim].end, transition: { duration: dur, delay: delay } };
    }

    return (
        <Box
            component={motion.div}
            initial={init}
            whileInView={{
                transition: { duration: dur, delay: delay },
                ...anim,
            }}
            viewport={{ once: true }}
            sx={sx}>
            {children}
        </Box>
    );
};

const preset: UTypes.animPreset = {
    fadeIn: {
        start: {
            opacity: 0,
        },
        end: {
            opacity: 1,
        },
    },

    fadeInLeft: {
        start: {
            opacity: 0,
            left: '2rem',
            position: 'relative',
        },
        end: {
            opacity: 1,
            left: 0,
        },
    },
    fadeInRight: {
        start: {
            opacity: 0,
            left: '-2rem',
            position: 'relative',
        },
        end: {
            opacity: 1,
            left: 0,
        },
    },
    fadeInUp: {
        start: {
            opacity: 0,
            top: '2rem',
            position: 'relative',
        },
        end: {
            opacity: 1,
            top: 0,
        },
    },
};

type Props = {
    children?: React.ReactNode;
    anim?: string | TargetAndTransition;
    init?: Target;
    dur?: number;
    delay?: number;
    sx?: SxProps<Theme>;
};

export default AAnim;
