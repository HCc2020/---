import axios from 'axios';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});


service.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem('token');
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        // console.log(response)
        if (response.status === 200 && response.data.code !== 401 && response.data.code !== -1) {
            return response;
        } else if (response.data.code === -1) {
            return response;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;