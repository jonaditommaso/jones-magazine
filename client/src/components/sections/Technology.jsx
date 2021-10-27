import React, { useEffect, useState } from 'react';
import '../../styles/finance/finance.css';
import axios from 'axios';
import NewsBoxContainer from '../../utils/NewsBoxContainer';

function Technology() {

    const [technologyNews, setTechnologyNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const { data } = await axios.get('https://jones-magazine.vercel.app/api/technology');
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