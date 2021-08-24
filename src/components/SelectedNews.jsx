import React, { useEffect, useState } from 'react';
import NewsService from '../services/NewsService';
import { NEWS_KEY } from '../utils/keys';

const SelectedNews = () => {

    const [news, setNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getBusinessNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=business`);

            data.articles.forEach(news => {
                setNews(news)
            })
        }
        getNews();
        }, [])

        // console.log(news)
    return ( 
        <div>
            noticia extendida
        </div>
     );
}
 
export default SelectedNews;