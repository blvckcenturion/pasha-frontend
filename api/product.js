import axios from 'axios';
import { LOCAL } from '../utils/data';
axios.defaults.baseURL = LOCAL;

export const getLatestProducts = async (params) => {
    return axios({
        method: 'get',
        url: '/products',
        params: params
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    });
}

