import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import * as UMedia from '../../util/Media.jsx';

const ABtn = ({
    children,
    variant,
    size,
    color,
    disabled,
    sx,
    onClick,
    component,
    to,
    target,
    type,
    icon = false,
}) => {
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

    if (icon) {
        return (
            <IconButton
                size={size}
                color={color}
                component={component}
                disabled={disabled}
                to={to}
                target={target}
                type={type}
                onClick={onClickAlt}
                sx={[size === 'large' && sxDefault.large, sx]}>
                {children}
            </IconButton>
        );
    }

    return (
        <Button
            variant={variant}
            size={size}
            color={color}
            component={component}
            disabled={disabled}
            to={to}
            target={target}
            type={type}
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
