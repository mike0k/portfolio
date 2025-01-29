'use client';

import React from 'react';
import NextLink from 'next/link';

import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import * as UMedia from '../../util/Media';

const ABtnIcon: React.FC<Props> = ({
    children,
    size,
    color,
    disabled,
    sx = {},
    onClick,
    component,
    href,
    target,
    type,
    label = '',
}) => {
    if (typeof href !== 'undefined') {
        component = NextLink;
        target = '_blank';
    }

    const onClickAlt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        UMedia.play({ src: 'click.mp3' });
        if (typeof onClick !== 'undefined') {
            onClick(e);
        }
    };

    return (
        <ExtendedIconButton
            size={size}
            color={color}
            component={component}
            disabled={disabled}
            href={href}
            target={target}
            type={type}
            aria-label={label}
            onClick={onClickAlt}
            sx={[size === 'large' ? sxDefault.large : {}, sx]}>
            {children}
        </ExtendedIconButton>
    );
};

const ExtendedIconButton = styled(IconButton)<IconButtonProps & ExtendedProps>(() => ({}));

const sxDefault = {
    large: {
        fontSize: '1.5rem',
    },
};

type ExtendedProps = {
    href?: string;
    target?: string;
    label?: string;
    sx?: Record<string, string | number> | object;
};
type Props = ExtendedProps & IconButtonProps;

export default ABtnIcon;
