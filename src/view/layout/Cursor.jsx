import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

import { useTheme } from '@mui/material/styles';

const VCursor = () => {
    const theme = useTheme();

    return (
        <AnimatedCursor
            innerSize={6}
            outerSize={50}
            innerScale={1}
            outerScale={1.5}
            outerAlpha={0}
            outerStyle={{
                border: '1px solid ' + theme.palette.primary.main,
            }}
            innerStyle={{
                backgroundColor: theme.palette.primary.main,
            }}
        />
    );
};

export default VCursor;
