import React, { useEffect, useState } from 'react';
import '../../styles/finance/finance.css';
import axios from 'axios';
import NewsBoxContainer from '../../utils/NewsBoxContainer';

function Science() {

    const [scienceNews, setScienceNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const { data } = await axios.get('https://jones-magazine.vercel.app/api/science');
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
