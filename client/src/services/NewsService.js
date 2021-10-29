import newsApi from '../utils/newsApi';
import dolarPriceApi from '../utils/dolarPriceApi';

export default class NewsService {

    async getNews(url) {
        return await newsApi.get(url);
    }

    async getForex(forexUrl) {
        return await dolarPriceApi.get(forexUrl);
    }
};