import React, { useEffect, useState } from 'react';
import '../../styles/finance/finance.css';
import NewsBoxContainer from '../../utils/NewsBoxContainer';
import NewsService from '../../services/NewsService';

function Science() {

    const [scienceNews, setScienceNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getNews('/science');
            setScienceNews(data);
            localStorage.setItem('science', JSON.stringify(data));
        }
        if(!localStorage.getItem('science')) {
            getNews();
        }

        if(localStorage.getItem('science') && !scienceNews) {
            setScienceNews(JSON.parse(localStorage.getItem('science')));
        }
    }, [scienceNews])

    return (
        <div>
            <hr />
            <NewsBoxContainer section={scienceNews} />
        </div>
    )
}

export default Science;
