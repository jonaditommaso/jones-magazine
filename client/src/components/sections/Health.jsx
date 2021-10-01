import React, { useEffect, useState } from 'react'
import NewsService from '../../services/NewsService'
import NewsBox from '../NewsBox'
import { NEWS_KEY } from '../../utils/keys'
import '../../styles/finance/finance.css';

function Health() {

    const [healthNews, setHealthNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const { data } = await newService.getHealthNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=health`)
            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            setHealthNews(dataFiltered);
            console.log(dataFiltered)
            localStorage.setItem('health', JSON.stringify(dataFiltered));
        }
        if(!localStorage.getItem('health')) {
            getNews();
        }

        if(localStorage.getItem('health') && !healthNews) {
            setHealthNews(JSON.parse(localStorage.getItem('health')))
        }
    }, [healthNews])

    return (
        <div>
            <hr />
             <div className="finance__principal">
                <NewsBox 
                    newImage={healthNews[1]?.urlToImage}
                    newTitle={healthNews[1]?.title}
                    description={healthNews[1]?.description}
                    big
                />
            </div>
            
            <div className="finance__secondaryNews">
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={healthNews[2]?.urlToImage}
                        newTitle={healthNews[2]?.title}
                        description={healthNews[2]?.description}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={healthNews[3]?.urlToImage}
                        newTitle={healthNews[3]?.title}
                        description={healthNews[3]?.description}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Health
