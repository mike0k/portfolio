'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Theme } from '@mui/material/styles';
import { MdOutlineHorizontalRule } from 'react-icons/md';

import Btn from '../asset/Btn';
import BtnIcon from '../asset/BtnIcon';
import * as ULayout from '../../util/Layout';
import * as UTool from '../../util/Tool';

const validationSchema = yup.object({
    name: yup
        .string()
        .max(250, 'Thats some name you have there, got anything a bit shorter?')
        .required("It's ok, you can tell me your name, I won't tell anyone."),
    email: yup
        .string()
        .max(
            250,
            "I'm not saying that you are messing with me, but i'm not sure that address is going to work"
        )
        .email("Looks like you've got a typo")
        .required(
            "Don't worry, theres no spam emails going on here, it's safe to enter your email."
        ),
    message: yup
        .string()
        .max(
            3000,
            'ok, ok, chill, maybe you could just sumarise your email in under 3000 characters and then we can get into the details later.'
        )
        .required('Silence is bliss, but not so much with emails, why are you getting in touch?'),
    recaptcha: yup.string().required(),
});

const VForm = () => {
    const status = UTool.useAppSelector((state) => state.layout.contactForm);
    const [processing, setProcessing] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            recaptcha: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (!processing) {
                setProcessing(true);
                await ULayout.contact({
                    name: values.name,
                    email: values.email,
                    message: values.message,
                });
                setProcessing(false);
            }
        },
    });

    const onClose = () => {
        ULayout.set({ contactForm: 0 });
    };

    return (
        <Drawer
            open={status === 1}
            onClose={onClose}
            anchor='bottom'
            PaperProps={{ sx: sx.drawer }}>
            <Box sx={sx.closeBox}>
                <BtnIcon onClick={onClose} sx={sx.close} color='light' label='Close Popup'>
                    <MdOutlineHorizontalRule />
                </BtnIcon>
            </Box>

            <Box sx={sx.container} component='form' noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3} sx={sx.stack}>
                    <TextField
                        id='name'
                        name='name'
                        label='Name'
                        variant='standard'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        id='email'
                        name='email'
                        label='Email'
                        variant='standard'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        id='message'
                        name='message'
                        label='Message'
                        variant='standard'
                        multiline
                        rows={4}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                </Stack>
                <Btn
                    variant='contained'
                    color='primary'
                    size='large'
                    type='submit'
                    sx={sx.btn}
                    disabled={processing}>
                    Send
                </Btn>
            </Box>
        </Drawer>
    );
};

const sx = {
    container: {
        minHeight: '80vh',
        padding: '2rem 4rem',
    },
    drawer: (theme: Theme) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#111821' : '#ffffff',
    }),
    form: {
        height: '100%',
    },
    stack: {
        paddingBottom: '2rem',
    },
    btn: {
        width: '100%',
    },
    close: {},
    closeBox: {
        textAlign: 'center',
    },
};

export default VForm;
