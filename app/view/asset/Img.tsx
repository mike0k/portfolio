import Box from '@mui/material/Box';

import Config from '../../config/Config';

const AImg = ({ children, src, sx = {}, alt, type = 'img' }: Props) => {
    const path = Config.path.img + src;

    if (type === 'bg') {
        return (
            <Box sx={[sxDefault.bgImg, { backgroundImage: 'url(' + path + ')' }, sx]} title={alt}>
                {children}
            </Box>
        );
    } else {
        return <Box sx={sx} component='img' src={path} alt={alt} />;
    }
};

const sxDefault = {
    bgImg: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
    },
};

type Props = {
    children?: React.ReactNode;
    src?: string;
    alt?: string;
    type?: string;
    sx?: Record<string, string | number> | object;
};

export default AImg;
