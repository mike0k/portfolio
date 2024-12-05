import * as UTool from '../util/Tool.jsx';

const Config = () => {
    const config = {
        font: {
            head1: 'Poiret One, Arial',
            body1: 'Montserrat, Arial',
        },
        path: {
            base: './assets/',
            aud: '/assets/aud/',
            img: '/assets/img/',
        },
        version: 'v0.0.1',
    };

    UTool.map(config.imgGroup, (val, key) => {
        config.imgGroup[key] = config.path.img + val;
    });

    return config;
};

export default Config();
