import Grid from '@mui/material/Grid2';
import Timeline from '@mui/lab/Timeline';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';

import Education from './Education';
import Experience from './Experience';

const VTimeline = () => {
    return (
        <Grid container sx={sx.container}>
            <BgColor sx={sx.bgColor} color='primary' />
            <Grid size={{ xs: 12, lg: 6 }}>
                <Anim anim='fadeInUp'>
                    <Typography variant='h1' sx={sx.title1}>
                        Education & Awards
                    </Typography>
                </Anim>
                <Anim anim='fadeIn'>
                    <Timeline position='alternate'>
                        <Education />
                    </Timeline>
                </Anim>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
                <Anim anim='fadeInUp'>
                    <Typography variant='h1' sx={sx.title1}>
                        Work Experience
                    </Typography>
                </Anim>
                <Anim anim='fadeIn'>
                    <Timeline position='alternate'>
                        <Experience />
                    </Timeline>
                </Anim>
            </Grid>
        </Grid>
    );
};

const sx = {
    container: {
        padding: '10rem 0',
        position: 'relative',
    },
    title1: {
        paddingBottom: '5rem',
        textAlign: 'center',
    },
    bgColor: {
        top: '50%',
        left: '130%',
    },
};

export default VTimeline;
