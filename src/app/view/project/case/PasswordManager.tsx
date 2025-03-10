import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const VCaseStudy = () => {
    return (
        <Box>
            <Typography variant='h3' component='p'>
                Secure Password Manager
            </Typography>
            <Typography variant='subtitle1' sx={sx.subtitle}>
                SUMMARY:
            </Typography>
            <Typography>
                This is a simple but highly useful and cost effective tool for sharing password
                internally across an organisation. Tieing into the companies existing Google
                Workspace accounts for strong account management and authentication, along with
                timeout, encryption and management overrides, it offers a high level of security.
                <br />
                <br />
                The UI was designed to be simple and quick to use so that staff didn't encounter any
                friction that might encourage bad security practices. Passwords could also be tested
                to ensure a reasonable level of password strength is used by all company related
                accounts, internally and externally.
            </Typography>
            <Typography variant='subtitle1' sx={sx.subtitle}>
                FEATURES:
            </Typography>
            <Box component='ul' sx={sx.features}>
                <Box component='li'>Frictionless and familiar U.I</Box>
                <Box component='li'>Role based editing privileges</Box>
                <Box component='li'>Individual and group sharing</Box>
                <Box component='li'>Secure encryption</Box>
                <Box component='li'>Google account authentication</Box>
                <Box component='li'>Encourage security best practices</Box>
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
