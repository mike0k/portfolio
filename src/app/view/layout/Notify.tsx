import React from 'react';
import { closeSnackbar, SnackbarProvider, useSnackbar } from 'notistack';

import IconButton from '@mui/material/IconButton';
import { MdClose } from 'react-icons/md';

import * as ULayout from '../../util/Layout';
import * as UTool from '../../util/Tool';

export default function Notify({ children }: Props) {
    const { enqueueSnackbar } = useSnackbar();
    const flash = UTool.useAppSelector((state) => state.layout.flash);

    React.useEffect(() => {
        if (flash && flash.length > 0) {
            Object.keys(flash).map((key, msg) => {
                enqueueSnackbar(msg);
            });
            ULayout.clearFlash();
        }
    }, [flash, enqueueSnackbar]);

    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={5000}
            action={(snackbarId) => (
                <IconButton size='small' onClick={() => closeSnackbar(snackbarId)}>
                    <MdClose />
                </IconButton>
            )}>
            {children}
        </SnackbarProvider>
    );
}

type Props = {
    children: React.ReactNode;
};
