'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Anim from '../asset/Anim';
import BgColor from '../asset/BgColor';
import * as UList from '../../util/List';

import Tags from './Tags';
import WordCloud from './WordCloud';

const VSkills = () => {
    const skillsBase = UList.skills;
    const [skills, setSkills] = React.useState(skillsBase);
    const [tags, setTags] = React.useState(UList.skillTags.map((item) => item.id));

    const onFilter = (tag: string) => {
        setTags((prevTags) => {
            if (prevTags.includes(tag)) {
                return prevTags.filter((item) => item !== tag);
            } else {
                return [...prevTags, tag];
            }
        });
    };

    const onClickWord = (name: string) => {
        const skill = skillsBase.find((skill) => skill.label === name);
        if (skill) {
            setTags(skill.tags.map((t) => t.tag));
        }
    };

    React.useEffect(() => {
        setSkills(skillsBase.filter((skill) => skill.tags.some((t) => tags.includes(t.tag))));
    }, [tags, skillsBase]);

    return (
        <Container sx={sx.container} id='skills'>
            <BgColor sx={sx.bgColor} color='secondary' />
            <Anim anim='fadeInUp' delay={0.5}>
                <Typography variant='h1' sx={sx.title1}>
                    Skills
                </Typography>
            </Anim>

            <Box sx={sx.filter}>
                <Stack direction='row' spacing={{ xs: 1, sm: 2 }} useFlexGap sx={sx.tags}>
                    <Tags tagsBase={UList.skillTags} tags={tags} onFilter={onFilter} />
                </Stack>
            </Box>
            <Anim anim='fadeInUp' delay={1.5}>
                <WordCloud skills={skills} onClick={onClickWord} />
            </Anim>
        </Container>
    );
};

const sx = {
    container: {
        padding: '10rem 0',
        position: 'relative',
    },
    bgColor: {
        height: '50%',
        top: '50%',
        filter: 'blur(15rem)',
    },
    title1: {
        paddingBottom: '5rem',
        textAlign: 'center',
    },
    title2: {
        color: 'primary.main',
        paddingBottom: '1rem',
    },
    legend: {
        paddingBottom: '1rem',
        fontSize: '0.75rem',
        textAlign: 'center',
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
    },
    filter: {
        paddingBottom: '3rem',
        display: 'flex',
        justifyContent: 'center',
    },
    body: {
        height: '50vh',
        overflow: 'auto',
        display: 'block',
    },
    row: {
        display: 'table',
        width: '100%',
        tableLayout: 'fixed',
    },
    tags: {
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
};

export default VSkills;
