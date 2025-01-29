'use client';

import { useScreen } from 'usehooks-ts';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import WordCloud from 'react-d3-cloud';

import * as UTypes from '../../util/Types';

const VWordCloud = ({ skills, onClick }: Props) => {
    const theme = useTheme();
    const screen = useScreen();

    let height = Math.round(screen.height / 3);
    if (height < 300) {
        height = 300;
    }

    const data = skills.map((skill) => ({
        text: skill.label,
        value: skill.score * 300,
    }));

    return (
        <Box sx={sx.container}>
            <WordCloud
                data={data}
                rotate={0}
                height={height}
                font={theme.typography.fontFamily}
                onWordClick={(e, item) => onClick(item.text)}
            />
        </Box>
    );
};

const sx = {
    container: {
        position: 'relative',
    },
};

type Props = {
    skills: UTypes.skillList[];
    onClick: (item: string) => void;
};

export default VWordCloud;
