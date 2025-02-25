import Config from '../config/Config';
import * as UTypes from './Types';

export const skills: UTypes.skillList[] = [
    { label: 'Apache', score: 2, tags: ['bac', 'sof', 'web'] },
    { label: 'Bash', score: 2, tags: ['lan'] },
    { label: 'Bookkeeping', score: 2, tags: ['ssk'] },
    { label: 'Bootstrap', score: 8, tags: ['fra', 'fro', 'web'] },
    { label: 'Composer', score: 2, tags: ['sof'] },
    { label: 'Docker', score: 4, tags: ['bac', 'sof', 'web'] },
    { label: 'cPanel', score: 4, tags: ['bac', 'sof', 'web'] },
    { label: 'CSS', score: 8, tags: ['fro', 'lan', 'web'] },
    { label: 'Firebase', score: 2, tags: ['bac', 'fra', 'web'] },
    { label: 'GIT', score: 6, tags: ['sof'] },
    { label: 'Gulp', score: 1, tags: ['sof'] },
    { label: 'HR Management', score: 1, tags: ['man', 'ssk'] },
    { label: 'HTAccess', score: 4, tags: ['bac', 'lan', 'web'] },
    { label: 'HTML', score: 7, tags: ['fro', 'lan', 'web'] },
    { label: 'JavaScript', score: 10, tags: ['fro', 'lan', 'web'] },
    { label: 'Jira', score: 4, tags: ['man', 'sof'] },
    { label: 'jQuery', score: 8, tags: ['fro', 'fra', 'web'] },
    { label: 'Laravel', score: 8, tags: ['bac', 'fra', 'web'] },
    { label: 'Material UI', score: 9, tags: ['fro', 'fra', 'web'] },
    { label: 'Mentoring & Training', score: 5, tags: ['man', 'ssk'] },
    { label: 'MVC', score: 8, tags: ['fra'] },
    { label: 'MySQL', score: 9, tags: ['bac', 'lan', 'web'] },
    { label: 'NextJS', score: 5, tags: ['bac', 'fra', 'web'] },
    { label: 'NodeJS', score: 4, tags: ['bac', 'fra', 'web'] },
    { label: 'NPM', score: 3, tags: ['sof'] },
    { label: 'Photoshop', score: 4, tags: ['sof'] },
    { label: 'PHP', score: 10, tags: ['bac', 'lan', 'web'] },
    { label: 'Project Management', score: 4, tags: ['man', 'ssk'] },
    { label: 'React', score: 10, tags: ['fro', 'fra', 'web'] },
    { label: 'Recruitment', score: 2, tags: ['man', 'ssk'] },
    { label: 'REST API', score: 8, tags: ['bac', 'fra', 'web'] },
    { label: 'SASS', score: 9, tags: ['fro', 'lan', 'web'] },
    { label: 'Team Management', score: 5, tags: ['man', 'ssk'] },
    { label: 'TypeScript', score: 5, tags: ['bac', 'fro', 'lan', 'web'] },
    { label: 'Unit Economics', score: 2, tags: ['ssk'] },
    { label: 'WHM', score: 3, tags: ['bac', 'sof', 'web'] },
    { label: 'Wordpress', score: 4, tags: ['fra', 'web'] },
    { label: 'Xero', score: 4, tags: ['sof'] },
    { label: 'XML', score: 3, tags: ['bac', 'lan', 'web'] },
    { label: 'Yii', score: 9, tags: ['bac', 'fra', 'web'] },
];

export const skillTags: UTypes.skillTags[] = [
    { id: 'bac', label: 'Backend' },
    { id: 'fra', label: 'Framework' },
    { id: 'fro', label: 'Frontend' },
    { id: 'lan', label: 'Language' },
    { id: 'man', label: 'Management' },
    { id: 'ssk', label: 'Soft Skills' },
    { id: 'sof', label: 'Software' },
    { id: 'web', label: 'Web' },
];

export type EducationType = {
    date: string;
    label: string;
    location: string;
    length: number;
};
export const education: EducationType[] = [
    {
        date: '2021',
        label: 'Business & Management Coaching',
        location: 'Action Coach',
        length: 7,
    },
    {
        date: '2014',
        label: 'Estate Agency Innovation Award',
        location: 'Scottish Legal Awards',
        length: 1,
    },
    {
        date: '2013',
        label: 'UK Innovation Award',
        location: 'Estate Agency of the Year Awards',
        length: 4,
    },
    {
        date: '2009',
        label: 'BSc Honours Degree: Web Design & Development',
        location: 'University of Abertay',
        length: 2,
    },
    {
        date: '2007',
        label: 'Cisco Networking: CCNA1',
        location: 'University of Abertay',
        length: 1,
    },
    {
        date: '2005',
        label: 'HNC: Web Design & Development',
        location: 'Falkirk College',
        length: 1,
    },
    {
        date: '2004',
        label: 'HNC: Computer Programming',
        location: 'Falkirk College',
        length: 0,
    },
];

export type ExperienceType = {
    date: string;
    label: string;
    location: string;
    length: number;
};
export const experience: ExperienceType[] = [
    {
        date: '2020',
        label: 'IT Manager',
        location: 'Property Studios',
        length: 7,
    },
    {
        date: '2013',
        label: 'Freelance Developer',
        location: 'Animite Media',
        length: 2,
    },
    {
        date: '2011',
        label: 'IT Manager',
        location: 'McEwan Fraser Legal',
        length: 2,
    },
    {
        date: '2010',
        label: 'Senior Web Developer',
        location: 'Evolution Online',
        length: 0,
    },
    {
        date: '2009',
        label: 'Freelance Developer',
        location: 'Animite Media',
        length: 0,
    },
    {
        date: '2007',
        label: 'Web Developer',
        location: 'Dundee College',
        length: 0,
    },
];

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
