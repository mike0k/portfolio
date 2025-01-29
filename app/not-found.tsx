import type { Metadata } from 'next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from './view/layout/Layout';

import * as UList from './util/List';
import Btn from './view/asset/Btn';
import Img from './view/asset/Img';
import Config from './config/Config';

export const metadata: Metadata = UList.meta('home');

const NotFound = ({ statusCode }: Props) => {
    return (
        <Layout menu={false}>
            <Container sx={sx.container}>
                <Box sx={sx.content}>
                    <Box>
                        <a href={Config.url.domain} aria-label='Home Page'>
                            <Img src='logo/logo-li-sm.webp' alt='logo' />
                        </a>
                    </Box>
                    <Box>
                        <Img src='ui/error.gif' alt='error' />
                    </Box>
                    <Box>
                        <Typography variant='h1' sx={sx.title}>
                            {statusCode ? statusCode : ''} ERROR!
                        </Typography>
                        <Typography>
                            Something bad happened, was it you or me that messed up?
                        </Typography>
                        <Btn href={Config.url.domain}>Go Back Home</Btn>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

const sx = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        textAlign: 'center',
    },
    title: {
        padding: '5rem 0 2rem 0',
    },
};

type Props = {
    statusCode?: string;
};

export default NotFound;
