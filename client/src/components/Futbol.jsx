import React, { useEffect, useState } from 'react';
import '../styles/futbol/futbol.css';
import TablePositions from './TablePositions';
import Forum from './Forum';
import NewsBox from './NewsBox';
import GoTopButton from '../utils/GoTopButton';
import TeamAccessLink from '../utils/TeamAccessLink';
import NewsService from '../services/NewsService';

function Futbol() {

    const [futbolNews, setFutbolNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getNews('/futbolNews');
            setFutbolNews(data);
        }
        getNews();

    }, [futbolNews]);

    return (
        <>
        <div>
            <hr />
            
            <div className="futbol__news">

            { futbolNews && futbolNews.map(futbol => (
                <div className="futbol__newsContainer" key={futbol?.title}>
                    <NewsBox
                        newImage={futbol?.urlToImage}
                        newTitle={futbol?.title}
                        content={futbol?.content}
                        description={futbol?.description}
                    />
                </div>
                )) }

            </div>

            <hr />

            <div>
                <TeamAccessLink team='boca' />
                <TeamAccessLink team='river' />
                <TeamAccessLink team='independiente' />
                <TeamAccessLink team='racing' />
                <TeamAccessLink team='sanlorenzo' />
            </div>

            <div className="futbol__content">
                <div className="futbol__positions">
                    <TablePositions />
                </div>
                <div className="futbol__fixture" style={{marginTop: '1%'}}>
                    {/* <Fixture /> */}
                    <Forum />
                </div>
            </div>
        </div>
        <GoTopButton />
        </>
    );
}

export default Futbol;
