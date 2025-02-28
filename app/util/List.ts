import Config from '../config/Config';
import dbJson from '../store/db.json';
import * as UTypes from './Types';

//fetch the data for specific section of db.json
const loadSheet = (id: string) => {
    const sheet = dbJson.sheets.find((item) => item.name === id);

    return sheet ? sheet.lines : [];
};

export const education = loadSheet('education');
export const experience = loadSheet('experience');
export const skills = loadSheet('skills');
export const skillTags = loadSheet('skills_tags');

export const meta = (pageName: string) => {
    const pageDatas: UTypes.metaList = {
        home: {
            title: 'Michael Kirkbright : Portfolio',
            description:
                'Michael Kirkbright is a Software Developer from Scotland that specialises in web based programming languages such as PHP, CSS, JS, ReactJS and others.',
        },
    };
    const pageData = pageDatas[pageName];

    const data = {
        openGraph: {
            title: pageData.title,
            description: pageData.description,
            locale: 'en_GB',
            type: 'website',
            images: ['/media/img/logo/logo-dk-md.webp?v=1'],
        },
        creator: 'Michael Kirkbright',
        manifest: '/media/img/favicon/manifest.json?v=1',
        icons: {
            icon: '/media/img/favicon/favicon.svg?v=1',
            shortcut: '/media/img/favicon/favicon-96x96.png',
            apple: '/media/img/favicon/apple-icon.png',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: '/media/img/favicon/apple-icon.png',
            },
        },
        //metadataBase: new URL('https://www.michaelkirkbright.co.uk'),
        alternates: {
            canonical: new URL(Config.url.domain),
        },
        ...pageData,
    };

    return data;
};
