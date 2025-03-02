import {
    Body,
    Column,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

import Config from '../../config/Config';

interface Props {
    preview: string;
    children: React.ReactNode;
}

//const baseUrl = Config.url.domain;
const baseUrl = process.env.URL_DOMAIN ? process.env.URL_DOMAIN : 'static';
const imgUrl = baseUrl + '' + Config.path.img;

export const MailLayout = ({ preview, children }: Props) => {
    return (
        <Html>
            <Head />
            <Body style={sx.main}>
                <Preview>{preview}</Preview>
                <Container style={sx.container}>
                    <Section style={sx.logo}>
                        <Img height={80} src={`${imgUrl}logo/logo-dk-sm.png`} />
                    </Section>
                    <Section style={sx.sectionsBorders}>
                        <Row>
                            <Column style={sx.sectionBorder} />
                            <Column style={sx.sectionCenter} />
                            <Column style={sx.sectionBorder} />
                        </Row>
                    </Section>
                    <Section style={sx.content}>{children}</Section>
                </Container>

                <Section style={sx.footer}>
                    <Row>
                        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
                            © 2025 Michael Kirkbright, All Rights Reserved
                        </Text>
                    </Row>
                </Section>
            </Body>
        </Html>
    );
};

export default MailLayout;

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const sx = {
    container: {
        maxWidth: '580px',
        margin: '30px auto',
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: '5px 20px 10px 20px',
    },
    copyright: {
        textAlign: 'center',
        color: '#706a7b',
    },
    footer: {
        maxWidth: '580px',
        margin: '0 auto',
    },
    footerLeft: {
        width: '50%',
        paddingRight: '8px',
    },
    footerRight: {
        width: '50%',
        paddingLeft: '8px',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    main: {
        backgroundColor: '#EFEEF1',
        fontFamily,
    },
    sectionsBorders: {
        width: '100%',
        display: 'flex',
    },
    sectionBorder: {
        borderBottom: '1px solid #EEEEEE',
        width: '249px',
    },
    sectionCenter: {
        borderBottom: '1px solid #E91E63',
        width: '102px',
    },
};
