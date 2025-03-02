import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'standalone',
    env: {
        APP_VERSION: process.env.APP_VERSION,
        URL_CV: process.env.URL_CV,
        URL_DOMAIN: process.env.URL_DOMAIN,
        URL_SHOWREEL: process.env.URL_SHOWREEL,
    },
};

export default nextConfig;
