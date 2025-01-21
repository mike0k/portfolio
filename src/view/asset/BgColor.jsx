import React from 'react';

import Anim from './Anim';

const ABgColor = ({ sx, color = 'primary' }) => {
    return (
        <Anim
            anim='fadeIn'
            dur={1}
            sx={[
                sxDefault.default,
                color === 'primary' && sxDefault.primary,
                color === 'secondary' && sxDefault.secondary,
                sx,
            ]}
        />
    );
};

const sxDefault = {
    default: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        //width: '90%',
        height: '90%',
        filter: 'blur(10rem)',
        borderRadius: '50%',
        aspectRatio: '1/1',
        opacity: 0,
        //animation: 'fade-in 1s ease-in forwards',
    },
    primary: (theme) => ({
        backgroundColor: theme.palette.primary.dark,
    }),
    secondary: (theme) => ({
        backgroundColor: theme.palette.secondary.light,
    }),
};

export default ABgColor;
