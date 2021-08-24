import newsApi from '../utils/newsApi';

export default class NewsService {

    async getBusinessNews(businessUrl) {
        return await newsApi.get(businessUrl);
    }

    async getSportsNews(sportsUrl) {
        return await newsApi.get(sportsUrl);
    }

    async getCovidNews(covidUrl) {
        return await newsApi.get(covidUrl);
    }

    async getTechnologyNews(technologyUrl) {
        return await newsApi.get(technologyUrl);
    }
};