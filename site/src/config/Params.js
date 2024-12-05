const Params = {
    company: {
        name: 'Animite Media',
    },
    google: {
        apiKey: 'AIzaSyCEb-6tDkCZot5kbh59dKgjvTknbn0kij8',
        analytics: '',
        recaptcha: {
            publicKey: '6LdOZzkUAAAAADhJx7XpldqTzBB5HpkJuuWa0mrv',
        },
    },
    url: {
        api: 'https://www.michaelkirkbright.co.uk/api/',
        img: 'https://www.michaelkirkbright.co.uk/img/',
    },
};

if (process.env.NODE_ENV === 'development') {
    Params.google.apiKey = 'AIzaSyCJzzCI2jXQrIENxgv2PEXErdbJIlxdzHY';
    Params.google.analytics = '';
    Params.url.api = 'http://localhost/portfolio/api/';
    Params.url.img = 'http://localhost/portfolio/img/';
    Params.google.recaptcha.publicKey = '6LfPcuMSAAAAANNlpHenOty0vFfFI8PlvIR5agBX';
}

export { Params };
