import axios from 'axios';

export default axios.create({
    baseURL: 'https://jones-magazine.vercel.app/api/'
});