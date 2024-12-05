import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

const VAboutBlurb = () => {
    return (
        <Box>
            <Typography variant='h1' sx={sx.title1}>
                About My
            </Typography>

            <Grid container spacing={3}>
                <Grid size={4}>
                    <Typography variant='h2' sx={sx.title2}>
                        Past
                    </Typography>
                    <Typography>
                        I found my calling from an early age and began my craft by creating fan
                        websites for local rock bands on Geocities in the 90s. With no school
                        support for coding, I took night classes at 16 and taught myself through
                        extensive trial and error. College and university courses in web development
                        were also very limited at the time, so even in later stages f my education,
                        I remained largely self-taught.
                    </Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant='h2' sx={sx.title2}>
                        Present
                    </Typography>
                    <Typography>
                        I intentionally entered employment at the bottom of the ladder to learn the
                        ropes. Not content with sitting back, I openly went the extra mile and
                        quickly progressed. This took me into middle-management and self-employment
                        where I picked up basic managerial skills. Then into larger roles at the
                        director level, being responsible for 40+ employees and having to get
                        involved with all aspects of running a business including finance, HR, sales
                        and marketing.
                    </Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant='h2' sx={sx.title2}>
                        Future
                    </Typography>
                    <Typography>
                        I've been working in the property industry for a long time and I would like
                        to try something new. However, in my personal life, I am married with with a
                        young baby girl so high-risk self-employment isn't a sensible path for me
                        right now. As I have done before, I want to get into a new industry, learn
                        the ropes, make my mark, and if possible shake up that industry.
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

export default VAboutBlurb;
