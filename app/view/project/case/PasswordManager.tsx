import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from './Layout';

const VCaseStudy = ({ playVideo, onPlayVideo }: Props) => {
    return (
        <Layout video='password-manager.webm' playVideo={playVideo} onPlayVideo={onPlayVideo}>
            <Typography variant='h3' component='p'>
                Secure Password Manager
            </Typography>
            <Typography>
                SUMMARY:
                <br />
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
                <br />
                <br />
                FEATURES:
            </Typography>
            <Box component='ul'>
                <Box component='li'>Frictionless and familiar U.I</Box>
                <Box component='li'>Role based editing privileges</Box>
                <Box component='li'>Individual and group sharing</Box>
                <Box component='li'>Secure encryption</Box>
                <Box component='li'>Google account authentication</Box>
                <Box component='li'>Encourage security best practices</Box>
            </Box>
        </Layout>
    );
};

type Props = {
    playVideo: boolean;
    onPlayVideo: () => void;
};

export default VCaseStudy;
