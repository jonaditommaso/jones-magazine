import React, { useEffect, useState } from 'react';
import '../styles/futbol.css';
import { NEWS_KEY } from '../utils/keys';
import axios from 'axios';
import TablePositions from './TablePositions';
import Fixture from './Fixture';
import Forum from './Forum';
// import {PulseLoader, ClipLoader} from "react-spinners/";
import NewsBox from './NewsBox';
import { Link } from 'react-router-dom';
import history from '../history';

function Futbol() {

    const [sportOne, setSportOne] = useState('');
    const [sportTwo, setSportTwo] = useState('');
    const [sportThree, setSportThree] = useState('');
    const [sportFour, setSportFour] = useState('');

    const [cut1, setCut1] = useState('');
    const [cut2, setCut2] = useState('');
    const [cut3, setCut3] = useState('');
    const [cut4, setCut4] = useState('');

    const [sportImage1, setSportImage1] = useState('');
    const [sportImage2, setSportImage2] = useState('');
    const [sportImage3, setSportImage3] = useState('');
    const [sportImage4, setSportImage4] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=ar&category=sports&apiKey=${NEWS_KEY}`);
            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);

            setSportOne(dataFiltered[0].title);
            setSportTwo(dataFiltered[1].title);
            setSportThree(dataFiltered[4].title);
            setSportFour(dataFiltered[3].title);

            setSportImage1(dataFiltered[0].urlToImage);
            setSportImage2(dataFiltered[1].urlToImage);
            setSportImage3(dataFiltered[4].urlToImage);
            setSportImage4(dataFiltered[3].urlToImage);
        }
        getNews();

        if (sportOne.indexOf('-') > 0) {
            setCut1(sportOne.indexOf('-'));
        }

        if (sportTwo.indexOf('-') > 0) {
            setCut2(sportTwo.indexOf('-'));
        }
        if (sportThree.indexOf('-') > 0) {
            setCut3(sportThree.indexOf('-'));
        }

        if (sportFour.indexOf('-') > 0) {
            setCut4(sportFour.indexOf('-'));
        }

    }, [sportOne, sportTwo, sportThree, sportFour]);

    return (
        <div>
            <hr />
            
            <div className="futbol__news">
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={sportImage1}
                        newTitle={sportOne}
                        cut={cut1}
                    />
                </div>
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={sportImage2}
                        newTitle={sportTwo}
                        cut={cut2}
                    />
                </div>
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={sportImage3}
                        newTitle={sportThree}
                        cut={cut3}
                    />
                </div>
                <div className="futbol__newsContainer">
                    <NewsBox
                        newImage={sportImage4}
                        newTitle={sportFour}
                        cut={cut4}
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
                <div className="futbol__fixture">
                    <Fixture />
                    <Forum />
                </div>
            </div>
        </div>
    )
}

export default Futbol;
