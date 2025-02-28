import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from './Layout';

const VCaseStudy = ({ playVideo, onPlayVideo }: Props) => {
    return (
        <Layout video='ai-tools.webm' playVideo={playVideo} onPlayVideo={onPlayVideo}>
            <Typography variant='h3' component='p'>
                A.I Tools
            </Typography>
            <Typography>
                SUMMARY:
                <br />
                This tool processed hundreds of photos per day with a less than 10% error rate,
                vastly speeding up the workflow of photo editors and reducing operational costs. It
                applied many standard alterations which would otherwise need to be done manually in
                Photoshop.
                <br />
                <br />
                Copywriting used many inputs such as photos and a room-builder to give the A.I a
                detailed summary of the property style and features that it used to write a
                marketing focused description. Human written example were also used to improve the
                output along with i/o and format testing.
                <br />
                <br />
                FEATURES:
            </Typography>
            <Box component='ul'>
                <Box component='li'>Custom user interface</Box>
                <Box component='li'>3rd party A.I processing via API's (ChatGPT and others)</Box>
                <Box component='li'>Complex cron management with polling and rate limiting</Box>
                <Box component='li'>Custom tools for testing A.I output</Box>
                <Box component='li'>Token and cost tracking</Box>
            </Box>
        </Layout>
    );
};

type Props = {
    playVideo: boolean;
    onPlayVideo: () => void;
};

export default VCaseStudy;
