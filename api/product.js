import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.0.2:1337';

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