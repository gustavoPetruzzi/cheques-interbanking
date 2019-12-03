import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://desolate-wildwood-15473.herokuapp.com',
    headers: {'content-type': 'multipart/form-data'}
    
})


export default instance;