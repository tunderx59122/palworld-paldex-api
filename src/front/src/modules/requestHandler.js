import statusHandler from './statusHandler';
import axios from 'axios';

const Requester = class Requester {

    constructor(url) {
        this.base = import.meta.env.VITE_BACK_BASE_URL;
        this.url = url;
        this.token = localStorage.getItem('token') || null;
    }

    // get baseURL() { return this.baseURL; }
    // get url() { return this.url; }
    // get token() { return this.token; }

    async get(params = {}) {
        let payload = new URLSearchParams(params);
        let config = {
            'method': 'get',
            'baseURL': this.base,
            'url': this.url,
            'headers': {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            'data': {}
        };

        if (payload.size > 0) { config['url'] += `?${payload}`; }

        let ret;
        await axios(config)
        .then((response) => {
            ret = response.data;
            statusHandler.handleSuccess(response.response);
        })
        .catch((error) => {
            ret = error;
            statusHandler.handleError(error.response);
        });

        return ret;
    }

    async post(data = {}, params = {}) {

        let payload = new URLSearchParams(params);
        let config = {
            'method': 'post',
            'baseURL': this.base,
            'url': this.url,
            'headers': {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            'data': data
        };

        if (payload.size > 0) { config['url'] += `?${payload}`; }

        let ret;
        await axios(config)
        .then((response) => {
            statusHandler.handleSuccess(response);
            ret = response;
        })
        .catch((error) => {
            statusHandler.handleError(error.response);
            ret = error.response;
        });

        return ret;
    }

    async patch(data = {}, params = {}) {

        let payload = new URLSearchParams(params);
        let config = {
            'method': 'patch',
            'baseURL': this.base,
            'url': this.url,
            'headers': {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            'data': data
        };

        if (payload.size > 0) { config['url'] += `?${payload}`; }

        let ret;
        await axios(config)
        .then((response) => {
            statusHandler.handleSuccess(response);
            ret = response;
        })
        .catch((error) => {
            statusHandler.handleError(error.response);
            ret = error.response;
        });

        return ret;
    }

    async delete(data = {}, params = {}) {

        let payload = new URLSearchParams(params);
        let config = {
            'method': 'delete',
            'baseURL': this.base,
            'url': this.url,
            'headers': {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            'data': data
        };

        if (payload.size > 0) { config['url'] += `?${payload}`; }

        let ret;
        await axios(config)
        .then((response) => {
            statusHandler.handleSuccess(response);
            ret = response;
        })
        .catch((error) => {
            statusHandler.handleError(error.response);
            ret = error.response;
        });

        return ret;
    }

};

export default { Requester };