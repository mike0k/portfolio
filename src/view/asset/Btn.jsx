import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import * as UMedia from '../../util/Media.jsx';

const ABtn = ({ children, variant, size, color, sx, onClick, component, to, target }) => {
    if (typeof to !== 'undefined') {
        component = Link;
        target = '_blank';
    }

    const onClickAlt = () => {
        UMedia.play({ src: 'click.mp3' });
        if (typeof onClick !== 'undefined') {
            onClick();
        }
    };

    return (
        <Button
            variant={variant}
            size={size}
            color={color}
            component={component}
            to={to}
            target={target}
            onClick={onClickAlt}
            sx={[size === 'large' && sxDefault.large, sx]}>
            {children}
        </Button>
    );
};

const sxDefault = {
    large: {
        fontSize: '1.5rem',
    },
};

export default ABtn;
