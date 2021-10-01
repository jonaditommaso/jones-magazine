import React, { useEffect, useState } from 'react';
import '../styles/home/home.css';
import { Link } from 'react-router-dom';
import { NEWS_KEY } from '../utils/keys';
import NewsBox from './NewsBox';
import KnowImage from '../utils/KnowImage';
import BookImage from '../utils/BookImage';
import NewsService from '../services/NewsService';
import {PuffLoader} from "react-spinners";

const Home = () => {

    // const [principalNew, setPrincipalNew] = useState('');
    // const [principalImageNew, setPrincipalImageNew] = useState('');

    // const [newOne, setNewOne] = useState('');
    // const [imageNewOne, setImageNewOne] = useState('');
    // const [newTwo, setNewTwo] = useState('');
    // const [imageNewTwo, setImageNewTwo] = useState('');
    const [news, setNews] = useState('');

    const [cutP, setCutP] = useState('');
    const [cutO, setCutO] = useState('');
    const [cutT, setCutT] = useState('');

    // const [shouldKnow1, setShouldKnow1] = useState('');
    // const [shouldKnow2, setShouldKnow2] = useState('');
    // const [shouldKnow3, setShouldKnow3] = useState('');
    // const [shouldKnow4, setShouldKnow4] = useState('');

    // const [shouldKnowImage1, setShouldKnowImage1] = useState('');
    // const [shouldKnowImage2, setShouldKnowImage2] = useState('');
    // const [shouldKnowImage3, setShouldKnowImage3] = useState('');
    // const [shouldKnowImage4, setShouldKnowImage4] = useState('');

    const [cutKnow1, setCutKnow1] = useState('');
    const [cutKnow2, setCutKnow2] = useState('');
    const [cutKnow3, setCutKnow3] = useState('');
    const [cutKnow4, setCutKnow4] = useState('');


    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getBusinessNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=business`);

            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            setNews(dataFiltered);
            localStorage.setItem('data', JSON.stringify(dataFiltered));
            // setPrincipalNew(dataFiltered[0].title);
            // setPrincipalImageNew(dataFiltered[0].urlToImage);

            // setNewOne(dataFiltered[1].title);
            // setImageNewOne(dataFiltered[1].urlToImage);
            // setNewTwo(dataFiltered[2].title);
            // setImageNewTwo(dataFiltered[2].urlToImage);

            // setShouldKnow1(dataFiltered[3].title);
            // setShouldKnow2(dataFiltered[4].title);
            // setShouldKnow3(dataFiltered[5].title);
            // setShouldKnow4(dataFiltered[6].title);

            // setShouldKnowImage1(dataFiltered[3].urlToImage);
            // setShouldKnowImage2(dataFiltered[4].urlToImage);
            // setShouldKnowImage3(dataFiltered[5].urlToImage);
            // setShouldKnowImage4(dataFiltered[6].urlToImage);
        }

        // if(!news) {
        if(!localStorage.getItem('data')) {
            getNews();
        }

        if(localStorage.getItem('data') && !news) {
            setNews(JSON.parse(localStorage.getItem('data')))
        }
            
        // }
        

        if (news[0]?.title.lastIndexOf('-') > 0) {
            setCutP(news[0]?.title.lastIndexOf('-'));
        }

        if (news[1]?.title.lastIndexOf('-') > 0) {
            setCutO(news[1]?.title.lastIndexOf('-'));
        }
        if (news[2]?.title.lastIndexOf('-') > 0) {
            setCutT(news[2]?.title.lastIndexOf('-'));
        }

        if (news[3]?.title.lastIndexOf('-') > 0) {
            setCutKnow1(news[3]?.title.lastIndexOf('-'));
        }
        if (news[4]?.title.lastIndexOf('-') > 0) {
            setCutKnow2(news[4]?.title.lastIndexOf('-'));
        }
        if (news[5]?.title.lastIndexOf('-') > 0) {
            setCutKnow3(news[5]?.title.lastIndexOf('-'));
        }
        if (news[6]?.title.lastIndexOf('-') > 0) {
            setCutKnow4(news[6]?.title.lastIndexOf('-'));
        }
        
    // }, [principalNew, newOne, newTwo, shouldKnow1, shouldKnow2, shouldKnow3, shouldKnow4]); 
    }, [news]);


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
                    cut={cutP}
                    content={news[0]?.content}
                    description={news[0].description}
                    big
                  />
                </div> 
                
                <div className="home__aside">
                    <div className="new__aside">
                        <NewsBox 
                            newImage={news[1]?.urlToImage}
                            newTitle={news[1]?.title}
                            cut={cutO}
                            content={news[1]?.content}
                            description={news[1].description}
                        />
                    </div>
                    <div className="new__aside">
                        <NewsBox 
                            newImage={news[2]?.urlToImage}
                            newTitle={news[2]?.title}
                            cut={cutT}
                            content={news[2]?.content}
                            description={news[2].description}
                        />
                    </div>
                </div>
                
            </div>

            <div className="home__news">
                <div className="news__title">
                    <h4>DEBERIAS SABER</h4>
                    <hr />
                </div>
                
                <div className="home__container">
                    <div className="home__containerChild">
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[3]?.urlToImage}
                                newTitle={news[3]?.title}
                                cut={cutKnow1}
                                content={news[3]?.content}
                            />
                        </div>
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[4]?.urlToImage}
                                newTitle={news[4]?.title}
                                cut={cutKnow2}
                                content={news[4]?.content}
                            />
                        </div>
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[5]?.urlToImage}
                                newTitle={news[5]?.title}
                                cut={cutKnow3}
                                content={news[5]?.content}
                            />
                        </div>
                        <div className="home__containerEveryKnow">
                            <KnowImage 
                                newImage={news[6]?.urlToImage}
                                newTitle={news[6]?.title}
                                cut={cutKnow4}
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

            <hr style={{width: '70%', margin: 'auto'}} />

            <div className="home__quote">
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
            </div>
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