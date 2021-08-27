import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { NEWS_KEY } from '../utils/keys';
import NewsBox from './NewsBox';
import KnowImage from '../utils/KnowImage';
import BookImage from '../utils/BookImage';
import NewsService from '../services/NewsService';
import {RingLoader} from "react-spinners/";

const Home = () => {

    const [principalNew, setPrincipalNew] = useState('');
    const [principalImageNew, setPrincipalImageNew] = useState('');

    const [newOne, setNewOne] = useState('');
    const [imageNewOne, setImageNewOne] = useState('');
    const [newTwo, setNewTwo] = useState('');
    const [imageNewTwo, setImageNewTwo] = useState('');

    const [cutP, setCutP] = useState('');
    const [cutO, setCutO] = useState('');
    const [cutT, setCutT] = useState('');

    const [shouldKnow1, setShouldKnow1] = useState('');
    const [shouldKnow2, setShouldKnow2] = useState('');
    const [shouldKnow3, setShouldKnow3] = useState('');
    const [shouldKnow4, setShouldKnow4] = useState('');

    const [shouldKnowImage1, setShouldKnowImage1] = useState('');
    const [shouldKnowImage2, setShouldKnowImage2] = useState('');
    const [shouldKnowImage3, setShouldKnowImage3] = useState('');
    const [shouldKnowImage4, setShouldKnowImage4] = useState('');

    const [cutKnow1, setCutKnow1] = useState('');
    const [cutKnow2, setCutKnow2] = useState('');
    const [cutKnow3, setCutKnow3] = useState('');
    const [cutKnow4, setCutKnow4] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getBusinessNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=business`);

            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            setPrincipalNew(dataFiltered[0].title);
            setPrincipalImageNew(dataFiltered[0].urlToImage);

            setNewOne(dataFiltered[1].title);
            setImageNewOne(dataFiltered[1].urlToImage);
            setNewTwo(dataFiltered[2].title);
            setImageNewTwo(dataFiltered[2].urlToImage);

            setShouldKnow1(dataFiltered[3].title);
            setShouldKnow2(dataFiltered[4].title);
            setShouldKnow3(dataFiltered[5].title);
            setShouldKnow4(dataFiltered[6].title);

            setShouldKnowImage1(dataFiltered[3].urlToImage);
            setShouldKnowImage2(dataFiltered[4].urlToImage);
            setShouldKnowImage3(dataFiltered[5].urlToImage);
            setShouldKnowImage4(dataFiltered[6].urlToImage);
        }
        getNews()

        if (principalNew.lastIndexOf('-') > 0) {
            setCutP(principalNew.lastIndexOf('-'));
        }

        if (newOne.lastIndexOf('-') > 0) {
            setCutO(newOne.lastIndexOf('-'));
        }
        if (newTwo.lastIndexOf('-') > 0) {
            setCutT(newTwo.lastIndexOf('-'));
        }

        if (shouldKnow1.lastIndexOf('-') > 0) {
            setCutKnow1(shouldKnow1.lastIndexOf('-'));
        }
        if (shouldKnow2.lastIndexOf('-') > 0) {
            setCutKnow2(shouldKnow2.lastIndexOf('-'));
        }
        if (shouldKnow3.lastIndexOf('-') > 0) {
            setCutKnow3(shouldKnow3.lastIndexOf('-'));
        }
        if (shouldKnow4.lastIndexOf('-') > 0) {
            setCutKnow4(shouldKnow4.lastIndexOf('-'));
        }
        
    }, [principalNew, newOne, newTwo, shouldKnow1, shouldKnow2, shouldKnow3, shouldKnow4]);

    return ( 
        <div className="home">
            {principalImageNew 
            ?
            <>
            <hr />

            <div className="home__principalNews">
                <div className="home__principal">
                  <NewsBox 
                    newImage={principalImageNew}
                    newTitle={principalNew}
                    cut={cutP}
                    big
                  />
                </div> 
                
                <div className="home__aside">
                    <div className="new__aside">
                        <NewsBox 
                            newImage={imageNewOne}
                            newTitle={newOne}
                            cut={cutO}
                        />
                    </div>
                    <div className="new__aside">
                        <NewsBox 
                            newImage={imageNewTwo}
                            newTitle={newTwo}
                            cut={cutT}
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
                    <KnowImage 
                        newImage={shouldKnowImage1}
                        newTitle={shouldKnow1}
                        cut={cutKnow1}
                    />
                    <KnowImage 
                        newImage={shouldKnowImage2}
                        newTitle={shouldKnow2}
                        cut={cutKnow2}
                    />
                    <KnowImage 
                        newImage={shouldKnowImage3}
                        newTitle={shouldKnow3}
                        cut={cutKnow3}
                    />
                    <KnowImage 
                        newImage={shouldKnowImage4}
                        newTitle={shouldKnow4}
                        cut={cutKnow4}
                    />
                </div>
            </div>

            <div className="home__library">
                <div>
                    <h4><Link className="navBar__link" to='/library'>VISITA NUESTRA TIENDA</Link></h4>
                </div>
                <div className="featuredBook">
                    <BookImage src="/assets/img/books/monje.jpg" alt="book1" />
                </div>
                <div className="featuredBook">
                    <BookImage src="/assets/img/books/secretos.jpg" alt="book2" />
                </div>
                <div className="featuredBook">
                    <BookImage src="/assets/img/books/elon.jpg" alt="book3" />
                </div>
                <div className="featuredBook">
                    <BookImage src="/assets/img/books/dinero.jpg" alt="book4" />
                </div>
            </div>

            <hr style={{width: '70%', margin: 'auto'}} />

            <div className="home__quote">
                <p className="quote"><i>"Las metas no se compran en una tienda, sino que nacen de nuestra pasión, de la incomodidad interna, de nuestra inconformidad y de la necesidad de progresar. <br />El progreso es igual a la felicidad. Por ello, si no tienes una meta, estás en graves problemas."</i></p>
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
                <RingLoader 
                color={"#544D4B"} 
                size={100}
            />
            </div>
            

        }
        </div>
    );
}
 
export default Home;