import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.bluelytics.com.ar/v2/'
});