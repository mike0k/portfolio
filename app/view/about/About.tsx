import Box from '@mui/material/Box';

import Blurb from './Blurb';

const VAbout = () => {
    return (
        <Box sx={sx.container} id='about'>
            <Blurb />
        </Box>
    );
};

const sx = {
    container: {
        //minHeight: '100vh',
        padding: '10rem 2rem',
    },
};

export default VAbout;
