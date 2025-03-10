import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const VCaseStudy = () => {
    return (
        <Box>
            <Typography variant='h3' component='p'>
                Plot Locator - Image Mapping
            </Typography>
            <Typography variant='subtitle1' sx={sx.subtitle}>
                SUMMARY:
            </Typography>
            <Typography>
                This product is a plot-locator that allows house builders to visually show
                properties from architectural schematics. It was designed to be maintained by
                graphic designers and admin staff so all complex operations had to be boiled down to
                simple and usable inputs.
                <br />
                <br />
                Inputted data is then outputted to a simple HTML embed code that can be inserted
                into a clients website as per their needs. Brand styling is also taken into account
                to match the clients website for a seamless experience.
            </Typography>
            <Typography variant='subtitle1' sx={sx.subtitle}>
                FEATURES:
            </Typography>
            <Box component='ul' sx={sx.features}>
                <Box component='li'>Image mapping method for non-technical staff</Box>
                <Box component='li'>CRUD management for plots</Box>
                <Box component='li'>Templating and bespoke description tools for each property</Box>
                <Box component='li'>
                    Variation in image map navigation (go to another scene, property or url)
                </Box>
                <Box component='li'>Interactive frontend for public use</Box>
                <Box component='li'>Seamless integration into 3rd party websites</Box>
            </Box>
        </Box>
    );
};

const sx = {
    subtitle: {
        paddingTop: '1rem',
    },
    features: {
        margin: 0,
    },
};

export default VCaseStudy;
