import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58458623-45cf95d8b38ef2b39b6885d94';


export const getImagesByQuery = (query) => {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        },
    })
    .then(response => response.data);
};