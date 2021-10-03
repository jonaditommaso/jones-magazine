import React, { useEffect, useState } from 'react';
import '../styles/futbol/futbol.css';
import axios from 'axios';
import TablePositions from './TablePositions';
import Forum from './Forum';
import NewsBox from './NewsBox';
import { Link } from 'react-router-dom';
import GoTopButton from '../utils/GoTopButton';

function Futbol() {

    const [futbolNews, setFutbolNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const {data} = await axios.get('http://localhost:5000/api/futbolNews');
            setFutbolNews(data)
        }
        getNews();

    }, [futbolNews]);

    return (
        <>
        <div>
            <hr />
            
            <div className="futbol__news">
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={futbolNews[0]?.urlToImage}
                        newTitle={futbolNews[0]?.title}
                        description={futbolNews[0]?.description}
                        content={futbolNews[0]?.content}
                    />
                </div>
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={futbolNews[1]?.urlToImage}
                        newTitle={futbolNews[1]?.title}
                        description={futbolNews[1]?.description}
                        content={futbolNews[1]?.content}
                    />
                </div>
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={futbolNews[2]?.urlToImage}
                        newTitle={futbolNews[2]?.title}
                        description={futbolNews[2]?.description}
                        content={futbolNews[2]?.content}
                    />
                </div>
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={futbolNews[3]?.urlToImage}
                        newTitle={futbolNews[3]?.title}
                        description={futbolNews[3]?.description}
                        content={futbolNews[3]?.content}
                    />
                </div>

            </div>

            <hr />

            <div >
                <Link className="futbol__teams" to="/club/boca"><img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/boca-big.png" alt="boca"/></Link>
                <Link className="futbol__teams" to="/club/river"><img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/river-big.png" alt="river"/></Link>
                <Link className="futbol__teams" to="/club/independiente"><img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/independiente-big.png" alt="independiente"/></Link>
                <Link className="futbol__teams" to="/club/racing"><img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/racing-big.png" alt="racing"/></Link>
                <Link className="futbol__teams" to="/club/sanlorenzo"><img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/sanlorenzo-big.png" alt="sanlorenzo"/></Link>
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
    )
}

export default Futbol;
