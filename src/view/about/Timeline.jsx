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

import * as UList from '../../util/List.jsx';
import * as UTool from '../../util/Tool.jsx';

const VAbout = () => {
    return (
        <Grid container sx={sx.container}>
            <Grid size={6}>
                <Typography variant='h1' sx={sx.title1}>
                    Education & Awards
                </Typography>
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
                                    <Typography>{item.label}</Typography>
                                    <Typography variant='h6'>{item.location}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </Grid>
            <Grid size={6}>
                <Typography variant='h1' sx={sx.title1}>
                    Work Experience
                </Typography>
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
                                    <Typography>{item.label}</Typography>
                                    <Typography variant='h6'>{item.location}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </Grid>
        </Grid>
    );
};

const sx = {
    container: {
        paddingTop: '10rem',
    },
    title1: {
        paddingBottom: '5rem',
        textAlign: 'center',
    },
};

export default VAbout;
