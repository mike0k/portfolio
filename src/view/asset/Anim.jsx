import React from 'react';
import { motion } from 'motion/react';

import Box from '@mui/material/Box';

const AAnim = ({ children, anim = {}, init = {}, dur = 0.5, delay = 0, sx }) => {
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

const preset = {
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

export default AAnim;
