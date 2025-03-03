import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';

const VAboutBlurb = () => {
    return (
        <Box sx={sx.container}>
            <BgColor sx={sx.bgColor} />
            <Anim anim='fadeInUp'>
                <Typography variant='h1' sx={sx.title1}>
                    About My
                </Typography>
            </Anim>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Anim anim='fadeInUp' delay={0.5}>
                        <Typography variant='h2' sx={sx.title2}>
                            Past
                        </Typography>
                    </Anim>
                    <Anim anim='fadeInUp' delay={0.7}>
                        <Typography>
                            Degree qualified and with professional management coaching I have been
                            working as a web developer since 2007 and IT manager since 2011. I
                            specialise in working with organisations to create bespoke
                            enterprise-level applications that run business operations behind the
                            scenes as well as creating teams to maintain and improve those systems
                            long-term over the course of years. Being so deeply involved in
                            operations and the continuous agile development cycle requires me to
                            have strong business acumen, presentation, communication, leadership and
                            project management skills.
                        </Typography>
                    </Anim>
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Anim anim='fadeInUp' delay={0.7}>
                        <Typography variant='h2' sx={sx.title2}>
                            Present
                        </Typography>
                    </Anim>
                    <Anim anim='fadeInUp' delay={0.9}>
                        <Typography>
                            I have been working within the PHP ecosystem my entire career but over
                            recent years I have expanded a lot of my development into modern
                            full-stack JavaScript. My primary frameworks as Yii and Laravel for
                            backend, React for frontend as well as Material UI and Bootstrap for UI.
                            My work is not exclusive to these frameworks though as I also work with
                            others such as NextJS and Tailwind. I use AI for quicker problem solving
                            but due to the nature of my work don't haven't found it useful for large
                            scale development, however I have integrated AI tools into my software
                            several times.
                        </Typography>
                    </Anim>
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Anim anim='fadeInUp' delay={0.9}>
                        <Typography variant='h2' sx={sx.title2}>
                            Future
                        </Typography>
                    </Anim>
                    <Anim anim='fadeInUp' delay={1.1}>
                        <Typography>
                            I'm always seeking to work with industry disrupters and companies that
                            like to try new ideas. For me, that work is the most rewarding but also
                            the people operating within that space are the people I most enjoy
                            troubleshooting problems with. Python is next on my list of languages I
                            wish to learn due to the AI space but full-stack JavaScript is still a
                            very unsettled industry so I also intend to keep exploring frameworks
                            there such as Deno and Vue. What I learn is generally shaped by what the
                            people I work with could most benefit from though so this is not set In
                            stone.
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
        top: '80%',
        left: '-10%',
    },
};

export default VAboutBlurb;
