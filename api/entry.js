import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.0.2:1337';

export const getEntry = async (params) => {
    return axios({
        method: 'get',
        url: '/product-entries',
        params: params
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    });
}