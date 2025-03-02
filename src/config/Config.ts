const config: Props = {
    api: {
        recaptcha: process.env.API_RECAPTCHA,
        resend: process.env.API_RESEND,
    },
    font: {
        head1: 'Poiret One, Arial',
        body1: 'Montserrat, Arial',
    },
    mail: {
        address: {
            default: process.env.MAIL_TO_DEFAULT as string,
            from: process.env.MAIL_FROM as string,
        },
    },
    path: {
        base: '/media/',
        aud: '/media/aud/',
        img: '/media/img/',
        vid: '/media/vid/',
    },
    url: {
        cv: process.env.URL_CV,
        showreel: process.env.URL_SHOWREEL,
        domain: process.env.URL_DOMAIN as string,
    },
    version: process.env.APP_VERSION as string,
};

type Props = {
    api: {
        recaptcha?: string;
        resend?: string;
    };
    font: {
        head1: string;
        body1: string;
    };
    mail: {
        address: {
            default: string;
            from: string;
        };
    };
    path: {
        base: string;
        aud: string;
        img: string;
        vid: string;
    };
    url: {
        cv?: string;
        showreel?: string;
        domain: string;
    };
    version: string;
};

export default config;
