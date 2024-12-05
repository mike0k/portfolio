import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

const VContactBlurb = () => {
    return (
        <Box>
            <Typography variant='h1' sx={sx.title1}>
                Want To
            </Typography>

            <Grid container spacing={3}>
                <Grid size={4}>
                    <Typography variant='h2' sx={sx.title2}>
                        Offer Job Opportunity
                    </Typography>
                    <Typography>
                        I am open to discussing potential job opportunities or collaborations. With
                        experience in web development and software engineering, I am interested in
                        roles that allow me to work on exciting and challenging projects. If you
                        have a project or role in mind, feel free to reach out and let's discuss!
                    </Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant='h2' sx={sx.title2}>
                        Connect
                    </Typography>
                    <Typography>
                        Networking is key in the tech industry, and I'm always looking to meet new
                        people and expand my professional circle. Whether you're a fellow developer,
                        designer, or entrepreneur, I'd love to chat and learn more about your work.
                        Let's grab a virtual coffee and see where the conversation takes us!
                    </Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant='h2' sx={sx.title2}>
                        Build Something
                    </Typography>
                    <Typography>
                        I have a passion for developing innovative web applications that solve
                        complex problems. Whether it's building a custom e-commerce platform or a
                        cutting-edge web app, I'm always ready for a new challenge. Let's create
                        something amazing together!
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

const sx = {
    title1: {
        paddingBottom: '5rem',
        textAlign: 'center',
    },
    title2: (theme) => ({
        textAlign: 'center',
        color: theme.palette.primary.main,
        paddingBottom: '1rem',
    }),
};

export default VContactBlurb;
