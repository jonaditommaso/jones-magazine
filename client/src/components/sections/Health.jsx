import React, { useEffect, useState } from 'react';
import '../../styles/finance/finance.css';
import NewsBoxContainer from '../../utils/NewsBoxContainer';
import NewsService from '../../services/NewsService';

function Health() {

    const [healthNews, setHealthNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getNews('/health');
            setHealthNews(data);
            localStorage.setItem('health', JSON.stringify(data));
        }
        if(!localStorage.getItem('health')) {
            getNews();
        }

        if(localStorage.getItem('health') && !healthNews) {
            setHealthNews(JSON.parse(localStorage.getItem('health')));
        }
    }, [healthNews]);

    return (
        <div>
            <hr />
            <NewsBoxContainer section={healthNews} />
        </div>
    );
}

export default Health;