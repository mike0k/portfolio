import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';

const VContactBlurb = () => {
    return (
        <Box sx={sx.container}>
            <BgColor sx={sx.bgColor} />
            <Anim anim='fadeInUp'>
                <Typography variant='h1' sx={sx.title1}>
                    Want To
                </Typography>
            </Anim>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Anim anim='fadeInUp' delay={0.5}>
                        <Typography variant='h2' sx={sx.title2}>
                            Offer Job Opportunity
                        </Typography>
                    </Anim>
                    <Anim anim='fadeInUp' delay={0.7}>
                        <Typography>
                            I am open to discussing potential job opportunities or collaborations.
                            With experience in web development and software engineering, I am
                            interested in roles that allow me to work on exciting and challenging
                            projects. If you have a project or role in mind, feel free to reach out
                            and let's discuss!
                        </Typography>
                    </Anim>
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Anim anim='fadeInUp' delay={0.7}>
                        <Typography variant='h2' sx={sx.title2}>
                            Connect
                        </Typography>
                    </Anim>
                    <Anim anim='fadeInUp' delay={0.9}>
                        <Typography>
                            Networking is key in the tech industry, and I'm always looking to meet
                            new people and expand my professional circle. Whether you're a fellow
                            developer, designer, or entrepreneur, I'd love to chat and learn more
                            about your work. Let's grab a virtual coffee and see where the
                            conversation takes us!
                        </Typography>
                    </Anim>
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Anim anim='fadeInUp' delay={0.9}>
                        <Typography variant='h2' sx={sx.title2}>
                            Build Something
                        </Typography>
                    </Anim>
                    <Anim anim='fadeInUp' delay={1.1}>
                        <Typography>
                            I have a passion for developing innovative web applications that solve
                            complex problems. Whether it's building a custom e-commerce platform or
                            a cutting-edge web app, I'm always ready for a new challenge. Let's
                            create something amazing together!
                        </Typography>
                    </Anim>
                </Grid>
            </Grid>
        </Box>
    );
};

const sx = {
    container: {
        position: 'relative',
    },
    title1: {
        paddingBottom: '5rem',
        textAlign: 'center',
    },
    title2: {
        textAlign: 'center',
        color: 'primary.main',
        paddingBottom: '1rem',
    },
    bgColor: {
        top: '100%',
        left: '100%',
    },
};

export default VContactBlurb;
