import Box from '@mui/material/Box';

import Blurb from './Blurb';
import Footer from './Footer';
import Form from './Form';
import Links from './Links';

const VAbout = () => {
    return (
        <Box sx={sx.container} id='contact'>
            <Blurb />
            <Links />
            <Footer />
            <Form />
        </Box>
    );
};

const sx = {
    container: {
        minHeight: '100vh',
        padding: '10rem 1rem 0 2rem',
    },
};

export default VAbout;
