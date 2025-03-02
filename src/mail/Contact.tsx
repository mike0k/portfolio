import { Text } from '@react-email/components';
import * as React from 'react';

import Layout from './layout/Main';

export const MailTemplate = ({ name, email, message }: Props) => {
    const preview = 'Portfolio: ' + name + ' has emailed you';

    return (
        <Layout preview={preview}>
            <Text style={sx.paragraph}>You have been sent an email from your portfolio.</Text>
            <Text style={sx.paragraph}>
                Name: {name}
                <br />
                Email: {email}
            </Text>
            <Text style={sx.paragraph}>{message}</Text>
        </Layout>
    );
};

interface Props {
    name: string;
    email: string;
    message: string;
}

MailTemplate.PreviewProps = {
    name: 'Test',
    email: 'test@test.com',
    message:
        'Maecenas vel imperdiet turpis. Duis dapibus metus nibh, et eleifend felis venenatis eget. Donec ultrices accumsan neque, vel volutpat nulla congue scelerisque. Pellentesque tempus magna vitae nunc vehicula, et venenatis dui fermentum. Suspendisse sagittis a felis id congue. Aenean at nulla a urna rhoncus cursus. Nulla urna eros, faucibus ac odio eu, gravida faucibus arcu. Sed a turpis risus. Sed non euismod enim. Phasellus quam justo, ornare vitae eros eget, condimentum pulvinar velit.',
} as Props;

export default MailTemplate;

const sx = {
    paragraph: {
        lineHeight: 1.5,
        fontSize: 14,
    },
    link: {
        textDecoration: 'underline',
    },
};
