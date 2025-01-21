import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { MdCheck, MdClose, MdBrightness1 } from 'react-icons/md';

import Anim from '../asset/Anim';
import * as UList from '../../util/List.jsx';
import * as UTool from '../../util/Tool.jsx';

const groupsBase = [
    {
        id: 'language',
        name: 'Languages',
        sort: 1,
    },
    {
        id: 'framework',
        name: 'Frameworks',
        sort: 2,
    },
    {
        id: 'software',
        name: 'Software',
        sort: 3,
    },
    {
        id: 'soft',
        name: 'Soft Skills',
        sort: 4,
    },
];

const scores = [
    {
        id: 1,
        name: 'Competent',
        icon: [<MdBrightness1 />],
    },
    {
        id: 2,
        name: 'Experienced',
        icon: [<MdBrightness1 />, <MdBrightness1 />],
    },
    {
        id: 3,
        name: 'Expert',
        icon: [<MdBrightness1 />, <MdBrightness1 />, <MdBrightness1 />],
    },
];

const skillsBase = [];
UTool.map(UList.skills, (group, groupId) => {
    UTool.map(group, (score, name) => {
        skillsBase.push({
            group: groupId,
            name,
            score,
        });
    });
});

const VSkills = () => {
    const [skills, setSkills] = React.useState(skillsBase);
    const [groups, setGroups] = React.useState(groupsBase.map((item) => item.id));
    const [disableFilter, setDisableFilter] = React.useState(false);

    const onFilter = (group) => {
        setGroups((prevGroups) => {
            if (prevGroups.includes(group)) {
                return prevGroups.filter((item) => item !== group);
            } else {
                return [...prevGroups, group];
            }
        });
    };

    React.useEffect(() => {
        setSkills(skillsBase.filter((item) => groups.includes(item.group)));

        let disable = false;
        if (groups.length <= 1) {
            disable = true;
        }
        if (disableFilter !== disable) {
            setDisableFilter(disable);
        }
    }, [groups]);

    return (
        <Container sx={sx.container} id='skills'>
            <Anim anim='fadeInUp'>
                <Typography variant='h1' sx={sx.title1}>
                    Skills
                </Typography>
            </Anim>
            <Anim anim='fadeIn'>
                <Typography sx={sx.legend}>
                    {UTool.map(scores, (score) => (
                        <Box component='span' key={score.id}>
                            {score.name}: {score.icon}
                        </Box>
                    ))}
                </Typography>
                <Box sx={sx.filter}>
                    <Stack direction='row' spacing={1}>
                        {UTool.map(groupsBase, (group) => {
                            const active = groups.includes(group.id);
                            return (
                                <Chip
                                    key={group.id}
                                    label={group.name}
                                    onClick={() => onFilter(group.id)}
                                    color='primary'
                                    disabled={active && disableFilter}
                                    variant={active ? 'filled' : 'outlined'}
                                    icon={active ? <MdCheck /> : <MdClose />}
                                />
                            );
                        })}
                    </Stack>
                </Box>
            </Anim>

            <Box>
                <Table size='small'>
                    <TableHead sx={sx.row}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Expertise</TableCell>
                            <TableCell>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={sx.body}>
                        {UTool.map(skills, (skill, i) => {
                            const score = scores.find((item) => item.id === skill.score);
                            const group = groupsBase.find((item) => item.id === skill.group);
                            return (
                                <TableRow sx={sx.row} key={i}>
                                    <TableCell>{skill.name}</TableCell>
                                    <TableCell>{score.icon}</TableCell>
                                    <TableCell>{group.name}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
};

const sx = {
    container: {
        paddingTop: '10rem',
    },
    title1: {
        paddingBottom: '1rem',
        textAlign: 'center',
    },
    title2: (theme) => ({
        color: theme.palette.primary.main,
        paddingBottom: '1rem',
    }),
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
};

export default VSkills;
