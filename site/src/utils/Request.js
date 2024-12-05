import axios from 'axios';

import { Params } from 'config/Params';

const Request = axios.create({
    baseURL: Params.url.api,
    timeout: 30000, //30sec
});

Request.interceptors.request.use((config) => {
    return config;
});

Request.interceptors.response.use((response) => {
    return response;
});

export default Request;
