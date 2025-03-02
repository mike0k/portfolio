import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import MailContact from '../../../mail/Contact';

import Config from '../../../config/Config';

const resend = new Resend(Config.api.resend);

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'MK Portfolio <' + Config.mail.address.from + '>',
            to: [Config.mail.address.default],
            subject: 'Portfolio Contact Form',
            react: MailContact({
                name,
                email,
                message,
            }),
        });

        if (error) {
            return NextResponse.json({ message: 'Failed to send email', error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
    }
}
