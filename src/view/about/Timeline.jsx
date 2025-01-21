import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';
import * as UList from '../../util/List.jsx';
import * as UTool from '../../util/Tool.jsx';

const VAbout = () => {
    return (
        <Grid container sx={sx.container}>
            <BgColor sx={sx.bgColor} color='secondary' />
            <Grid size={6}>
                <Anim anim='fadeInUp'>
                    <Typography variant='h1' sx={sx.title1}>
                        Education & Awards
                    </Typography>
                </Anim>
                <Anim anim='fadeIn'>
                    <Timeline position='alternate' sx={sx.timeline}>
                        {UTool.map(UList.education, (item, i) => {
                            const length = item.length + 2;
                            return (
                                <TimelineItem key={i}>
                                    <TimelineOppositeContent color='text.secondary'>
                                        <Typography>{item.date}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color='primary' />
                                        <TimelineConnector sx={{ height: length + 'rem' }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Anim anim='fadeInUp' delay={0.5}>
                                            <Typography>{item.label}</Typography>
                                            <Typography variant='h6'>{item.location}</Typography>
                                        </Anim>
                                    </TimelineContent>
                                </TimelineItem>
                            );
                        })}
                    </Timeline>
                </Anim>
            </Grid>
            <Grid size={6}>
                <Anim anim='fadeInUp'>
                    <Typography variant='h1' sx={sx.title1}>
                        Work Experience
                    </Typography>
                </Anim>
                <Anim anim='fadeIn'>
                    <Timeline position='alternate' sx={sx.timeline}>
                        {UTool.map(UList.experience, (item, i) => {
                            const length = item.length + 2;
                            return (
                                <TimelineItem key={i}>
                                    <TimelineOppositeContent color='text.secondary'>
                                        <Typography>{item.date}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color='primary' />
                                        <TimelineConnector sx={{ height: length + 'rem' }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Anim anim='fadeInUp' delay={0.5}>
                                            <Typography>{item.label}</Typography>
                                            <Typography variant='h6'>{item.location}</Typography>
                                        </Anim>
                                    </TimelineContent>
                                </TimelineItem>
                            );
                        })}
                    </Timeline>
                </Anim>
            </Grid>
        </Grid>
    );
};

const sx = {
    container: {
        paddingTop: '10rem',
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

export default VAbout;
