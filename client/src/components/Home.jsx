import React, { useEffect, useState } from 'react';
import '../styles/home/home.css';
import { Link } from 'react-router-dom';
import NewsBox from './NewsBox';
import KnowImage from '../utils/KnowImage';
import BookImage from '../utils/BookImage';
import {PuffLoader} from "react-spinners";
import axios from 'axios';

const Home = () => {
    
    const [news, setNews] = useState('');

    useEffect(() => {
        const getNews = async () => {
            // const newService = new NewsService();
            // const {data} = await newService.getBusinessNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=business`);

            // const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            // setNews(dataFiltered);
            const { data } = await axios.get('https://jones-magazine.vercel.app/api/generalNews');
            setNews(data)
            localStorage.setItem('data', JSON.stringify(data));
        }

        if(!localStorage.getItem('data')) {
            getNews();
        }

        if(localStorage.getItem('data') && !news) {
            setNews(JSON.parse(localStorage.getItem('data')))
        }
        
    }, [news]);

    const YOU_KNOW = `<<  DEBERIAS SABER  >>`


    return ( 
        <div className="home">
            {news
            ?
            <>
            <hr />

            <div className="home__principalNews">
                <div className="home__principal">
                  <NewsBox 
                    newImage={news[0]?.urlToImage}
                    newTitle={news[0]?.title}
                    content={news[0]?.content}
                    description={news[0]?.description}
                    big
                  />
                </div> 
                
                <div className="home__aside">
                    <div className="new__aside">
                        <NewsBox 
                            newImage={news[1]?.urlToImage}
                            newTitle={news[1]?.title}
                            content={news[1]?.content}
                            description={news[1]?.description}
                        />
                    </div>
                    <div className="new__aside">
                        <NewsBox 
                            newImage={news[2]?.urlToImage}
                            newTitle={news[2]?.title}
                            content={news[2]?.content}
                            description={news[2]?.description}
                        />
                    </div>
                </div>
                
            </div>

            <div className="home__news">
                <div className="news__title">
                    <h4>{YOU_KNOW}</h4>
                    <hr />
                </div>
                
                <div className="home__container">
                    <div className="home__containerChild">
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[3]?.urlToImage}
                                newTitle={news[3]?.title}
                                content={news[3]?.content}
                                description={news[3]?.description}
                            />
                        </div>
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[4]?.urlToImage}
                                newTitle={news[4]?.title}
                                description={news[4]?.description}
                                content={news[4]?.content}
                            />
                        </div>
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[5]?.urlToImage}
                                newTitle={news[5]?.title}
                                description={news[5]?.description}
                                content={news[5]?.content}
                            />
                        </div>
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[6]?.urlToImage}
                                newTitle={news[6]?.title}
                                description={news[6]?.description}
                                content={news[6]?.content}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="home__library">
                <div>
                    <h4><Link className="navBar__link" to='/library'>VISITA NUESTRA TIENDA</Link></h4>
                </div>
                <div className="featuredBook">
                    <Link to='/library' style={{textDecoration: 'none'}}>
                        <BookImage src="/assets/img/books/monje.jpg" alt="book1" price={1950} />
                    </Link>
                </div>
                <div className="featuredBook">
                    <Link to='/library' style={{textDecoration: 'none'}}>
                        <BookImage src="/assets/img/books/secretos.jpg" alt="book2" price={1950} />
                    </Link>
                </div>
                <div className="featuredBook">
                    <Link to='/library' style={{textDecoration: 'none'}}>
                        <BookImage src="/assets/img/books/elon.jpg" alt="book3" price={1950} />
                    </Link>
                </div>
                <div className="featuredBook">
                    <Link to='/library' style={{textDecoration: 'none'}}>
                        <BookImage src="/assets/img/books/dinero.jpg" alt="book4" price={1950} />
                    </Link>
                </div>
            </div>

            {/* <hr style={{width: '70%', margin: 'auto'}} /> */}

            {/* <div className="home__quote">
                <p className="quote">
                    <i>"Las metas no se compran en una tienda, sino que nacen de nuestra pasión, de la incomodidad interna, de nuestra inconformidad y de la necesidad de progresar. 
                        <br />
                        El progreso es igual a la felicidad. Por ello, si no tienes una meta, estás en graves problemas."
                    </i>
                    <br />
                    - Jonathan Di Tommaso
                </p>
                <div className="quote__img">
                    <img 
                        alt="Author"
                        src="/assets/img/jonathan.png"
                        style={{width: '140px', height: '220px', display: 'inline-flex'}}
                    />
                </div>
            </div> */}
            </>
            : 
            <div className="home__loading">
                <PuffLoader 
                color={"#544D4B"} 
                size={100}
            />
            </div>
        }
        </div>
    );
}
 
export default Home;