import * as UTool from '../util/Tool.jsx';

const Config = () => {
    const config = {
        api: {
            recaptcha: '6Lc3tpMqAAAAAGxuuAhHaKM2PK5i1ZFEHctRwqHE',
            web3forms: '819b0b95-11d9-4c73-a46c-2e06fb8ab767',
        },
        font: {
            head1: 'Poiret One, Arial',
            body1: 'Montserrat, Arial',
        },
        path: {
            base: './media/',
            aud: '/media/aud/',
            img: '/media/img/',
        },
        url: {
            cv: 'https://drive.google.com/file/d/1z20JJXkuXIq6hWvKBLACt-qeWJcaT-ne/view?usp=sharing',
            showreel: 'https://vimeo.com/1047889183/281b012768',
        },
        version: 'v0.0.1',
    };

    UTool.map(config.imgGroup, (val, key) => {
        config.imgGroup[key] = config.path.img + val;
    });

    return config;
};

export default Config();
