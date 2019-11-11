export default class RpsService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:3000/api';
        this.rpsFetch = this.rpsFetch.bind(this);
    }
    
    
    async rpsFetch (url, options) {
        const headers = {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
        
        return await fetch(this.domain + url, {
            headers,
            ...options
        })
        .then(response => response.json())
        .catch(error=>Promise.reject(error));
    };
};
