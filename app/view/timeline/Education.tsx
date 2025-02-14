import React from 'react';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import * as UList from '../../util/List';

const VTimelineEducation = () => {
    const items = UList.education;
    const compiled = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const length = item.length + 2;
        compiled.push(
            <TimelineItem key={i} sx={sx.item}>
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
                        <Typography variant='h6' component='p'>
                            {item.location}
                        </Typography>
                    </Anim>
                </TimelineContent>
            </TimelineItem>
        );
    }
    return <React.Fragment>{compiled}</React.Fragment>;
};

const sx = {
    item: {
        '&:before': {
            // fix broken ::before in default Material UI styling
            display: 'none',
        },
    },
};

export default VTimelineEducation;
