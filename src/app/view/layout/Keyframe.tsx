import Box from '@mui/material/Box';

const VKeyframe = () => {
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
