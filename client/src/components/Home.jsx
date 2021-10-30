import React, { useEffect, useState } from 'react';
import '../styles/home/home.css';
import { Link } from 'react-router-dom';
import NewsBox from './NewsBox';
import KnowImage from '../utils/KnowImage';
import BookImage from '../utils/BookImage';
import {PuffLoader} from "react-spinners";
import { booksData } from '../utils/booksData';
import NewsService from '../services/NewsService';

const Home = () => {
    
    const [news, setNews] = useState('');
    const [booksHome, setBooksHome] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getNews('/generalNews');
            setNews(data)
            localStorage.setItem('data', JSON.stringify(data));
        }

        if(!localStorage.getItem('data')) {
            getNews();
        }

        if(localStorage.getItem('data') && !news) {
            setNews(JSON.parse(localStorage.getItem('data')))
        }

        const featuredBooks = booksData.filter(featured => featured.featured === true);
        setBooksHome(featuredBooks);
        
    }, [news]);

    const YOU_KNOW = `<<  DEBERIAS SABER  >>`


    return ( 
        <div className="home">
            {news
            ?
            <>
            <hr style={{margin: '0px'}}/>

            <div className="home__principalNews">
                <div className="home__principal">
                  <NewsBox 
                    newImage={news[0]?.urlToImage}
                    newTitle={news[0]?.title}
                    content={news[0]?.content}
                    description={news[0]?.description}
                    big
                    id={news[0]?.id}
                  />
                </div> 
                
                <div className="home__aside">
                    <div className="new__aside">
                        <NewsBox 
                            newImage={news[1]?.urlToImage}
                            newTitle={news[1]?.title}
                            content={news[1]?.content}
                            description={news[1]?.description}
                            id={news[1]?.id}
                        />
                    </div>
                    <div className="new__aside">
                        <NewsBox 
                            newImage={news[2]?.urlToImage}
                            newTitle={news[2]?.title}
                            content={news[2]?.content}
                            description={news[2]?.description}
                            id={news[2]?.id}
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
                        { news && news.map((knowNews, i) => {
                            if(i > 2 && i < 7) {
                                return (
                                    <div key={knowNews?.id}>
                                        <KnowImage
                                            newImage={knowNews?.urlToImage}
                                            newTitle={knowNews?.title}
                                            content={knowNews?.content}
                                            description={knowNews?.description}
                                            id={knowNews?.id}
                                        />
                                    </div>
                                );
                            }
                            return <></>
                        }) }
                    </div>
                    
                </div>
            </div>

            <div className="home__library">
                <div>
                    <h4><Link className="navBar__link" to='/library'>VISITA NUESTRA TIENDA</Link></h4>
                </div>

                { booksHome && booksHome?.map((book) => (
                    <div className="featuredBook" key={book.name}>
                        <Link to='/library' style={{textDecoration: 'none'}}>
                            <BookImage src={book.src} alt={book.name} price={book.price} />
                        </Link>
                    </div>
                )) }
            </div>

            </>
            : 
            <div className="home__loading">
                <div className="loadingContain">
                    <PuffLoader 
                    color={"#544D4B"} 
                    size={100}
                    />
                </div>
            </div>
        }
        </div>
    );
}
 
export default Home;