import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';
import Btn from '../asset/Btn';

import Config from '../../../config/Config';

const VIntro = () => {
    return (
        <Box sx={sx.container}>
            <BgColor sx={sx.bgColor} color='secondary' />
            <Anim anim='fadeInRight' delay={0.5}>
                <Typography variant='h3'>Hello, I'm Michael</Typography>
            </Anim>
            <Anim anim='fadeInRight' delay={1}>
                <Typography variant='subtitle1' component='h1' sx={sx.job}>
                    Software Developer & IT Manager
                </Typography>
            </Anim>
            <Anim anim='fadeInRight' delay={1.5}>
                <Typography>
                    A full-stack software developer with a focus on PHP and JavaScript enterprise
                    applications, and an accomplished IT manager with experience creating and
                    growing software development teams for small-medium size businesses. I am
                    hands-on and enjoy getting involved in company operations, product development,
                    procedures, data analysis and mentoring juniors to improve and follow good
                    coding standards. Based in Scotland I have worked remotely for many years with
                    teams all over the world including the USA, South Africa and India to build
                    complex internal applications that aid company operations and increase profit
                    margins.
                </Typography>
            </Anim>
            <Anim anim='fadeInRight' delay={1.75}>
                <Box sx={sx.btnBox}>
                    <Btn variant='outlined' size='large' href={Config.url.cv}>
                        Get My Resume
                    </Btn>
                </Box>
            </Anim>
        </Box>
    );
};

const sx = {
    container: {
        position: 'relative',
    },
    btnBox: {
        paddingTop: '1rem',
    },
    job: {
        color: 'primary.main',
        textTransform: 'uppercase',
    },

    bgColor: {
        top: '70%',
        left: '10%',
    },
};

export default VIntro;
