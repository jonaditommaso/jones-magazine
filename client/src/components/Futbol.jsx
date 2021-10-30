import React, { useEffect, useState } from 'react';
import '../styles/futbol/futbol.css';
import TablePositions from './TablePositions';
import Forum from './Forum';
import NewsBox from './NewsBox';
import GoTopButton from '../utils/GoTopButton';
import TeamAccessLink from '../utils/TeamAccessLink';
import NewsService from '../services/NewsService';
import { ClipLoader } from "react-spinners";

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
                { futbolNews 
                ? futbolNews.map((futbol, i) => (
                    <div className="futbol__newsContainer" key={futbol?.id}>
                        {/* <div className={(i === 0) || (i === 1) ? 'containerNewsActive' : ''}> */}
                            <NewsBox
                                newImage={futbol?.urlToImage}
                                newTitle={futbol?.title}
                                content={futbol?.content}
                                description={futbol?.description}
                                id={futbol?.id}
                            />
                        {/* </div> */}
                        
                    </div>
                    )) 
                : <div style={{margin: 'auto'}}>
                    <ClipLoader
                        color={"#544D4B"} 
                        size={50} 
                        style={{margin: 'auto'}}
                    />
                    </div>
                }
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
