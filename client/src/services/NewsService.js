import newsApi from '../utils/newsApi';
import dolarPriceApi from '../utils/dolarPriceApi';

export default class NewsService {

    async getBusinessNews(businessUrl) {
        return await newsApi.get(businessUrl);
    }

    async getSportsNews(sportsUrl) {
        return await newsApi.get(sportsUrl);
    }

    async getHealthNews(healthUrl) {
        return await newsApi.get(healthUrl);
    }

    async getTechnologyNews(technologyUrl) {
        return await newsApi.get(technologyUrl);
    }

    async getScienceNews(scienceUrl) {
        return await newsApi.get(scienceUrl)
    }

    async getForex(forexUrl) {
        return await dolarPriceApi.get(forexUrl);
    }
};