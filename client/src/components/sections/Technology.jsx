import React, { useEffect, useState } from 'react';
import '../../styles/finance/finance.css';
import NewsBoxContainer from '../../utils/NewsBoxContainer';
import NewsService from '../../services/NewsService';

function Technology() {

    const [technologyNews, setTechnologyNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getNews('/technology');
            setTechnologyNews(data);
            localStorage.setItem('tech', JSON.stringify(data));
        }
        if(!localStorage.getItem('tech')) {
            getNews();
        }

        if(localStorage.getItem('tech') && !technologyNews) {
            setTechnologyNews(JSON.parse(localStorage.getItem('tech')));
        }
    }, [technologyNews]);

    return (
        <div>
            <hr />
            <NewsBoxContainer section={technologyNews} />
        </div>
    );
}

export default Technology;