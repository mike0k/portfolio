import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

//import Blurb from './Blurb';
import Img from '../asset/Img';

import * as UTool from '../../util/Tool.jsx';

const VProject = () => {
    const skills = ['Yii', 'Bootstrap', 'jQuery', 'ES6'];

    return (
        <Box sx={sx.container}>
            <Grid container spacing={3}>
                <Grid size={6} sx={sx.imgBox}>
                    <Img src='project/matrix/matrix-media-c.jpg' sx={[sx.imgAnim, sx.img]} />
                    <Img src='project/matrix/matrix-message-c.jpg' sx={[sx.imgAnim, sx.img]} />
                </Grid>
                <Grid size={6}>
                    <Typography variant='h1' sx={sx.title2}>
                        PS Matrix
                    </Typography>
                    <Typography variant='subtitle2' sx={sx.subtitle}>
                        Order Management & Workflow System
                    </Typography>
                    <Box sx={sx.skills}>
                        {UTool.map(skills, (skill, i) => (
                            <Typography variant='body2' sx={sx.skill} key={i}>
                                {skill}
                            </Typography>
                        ))}
                    </Box>
                    <Typography>
                        In 2019, I developed Property Studios Matrix, a comprehensive order
                        management system designed to streamline complex workflows for a B2B
                        business. Over 5 years of constant development, this software evolved into
                        the backbone of the company's operations, coordinating a team of 40+ remote
                        staff and processing hundreds of complex orders monthly.
                    </Typography>
                    ,<Typography variant='subtitle1'>How It Works:</Typography>
                    <Typography>
                        Matrix gives clients the ability to place customised orders and seamlessly
                        pass them to the team for execution. Orders vary across hundreds of product
                        variations, each dynamically shaping the tasks and workflows required for
                        completion.
                    </Typography>
                    <Typography>
                        The system applies a network of conditions to generate an ordered list of
                        role-specific tasks, each one with it's own dependencies and requirements.
                        Each task is automatically assigned to the appropriate team member, complete
                        with deadlines and integrated tools for submission. If a client requests
                        changes during the approval process, the software also recalibrates to allow
                        required tasks to be redone or expanded without resetting unnecessary steps.
                    </Typography>
                    ,<Typography variant='subtitle1'>Key Features:</Typography>
                    <Typography>
                        - Templated PDF brochure and website generation. <br />
                        - A.I copywriting generation. <br />
                        - Workload assignment and performance reporting. <br />
                        - Pricing management and sales analytics. <br />
                        - Customer feedback tracking. <br />- Staff availability management and
                        direct messaging.
                    </Typography>
                    ,<Typography variant='subtitle1'>Impact:</Typography>
                    <Typography>
                        After years of continuous refinement, PS Matrix is the company's most
                        critical tool, enabling seamless collaboration, simplifying complex
                        workflows, and driving operational excellence.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

const sx = {
    container: {
        padding: '10rem 2rem 0 2rem',
    },
    title1: {
        paddingBottom: '5rem',
        textAlign: 'center',
    },
    title2: (theme) => ({
        color: theme.palette.primary.main,
    }),
    subtitle: {
        paddingBottom: '1rem',
    },
    skills: {
        display: 'flex',
    },
    skill: (theme) => ({
        display: 'inline-block',
        padding: '0.15rem 0.5rem',
        margin: '0 0.25rem',
        backgroundColor: UTool.rgba(theme.palette.grey[700], 0.2),
    }),
    imgBox: {
        position: 'relative',
        overflow: 'hidden',
        height: '75vh',
    },
    img: {
        width: '100%',
        animation: 'img-pan 3s ease-in forwards',
        position: 'absolute',
    },
};

export default VProject;
