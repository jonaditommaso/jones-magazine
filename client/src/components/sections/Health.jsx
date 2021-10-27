import React, { useEffect, useState } from 'react';
import '../../styles/finance/finance.css';
import axios from 'axios';
import NewsBoxContainer from '../../utils/NewsBoxContainer';

function Health() {

    const [healthNews, setHealthNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const {data} = await axios.get('https://jones-magazine.vercel.app/api/health');
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