import React, { useEffect, useState } from 'react'
import NewsService from '../../services/NewsService'
import NewsBox from '../NewsBox'
import { NEWS_KEY } from '../../utils/keys'
import '../../styles/finance/finance.css'

function Science() {

    const [scienceNews, setScienceNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const { data } = await newService.getScienceNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=science`)
            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            setScienceNews(dataFiltered);
            localStorage.setItem('science', JSON.stringify(dataFiltered));
        }
        if(!localStorage.getItem('science')) {
            getNews();
        }

        if(localStorage.getItem('science') && !scienceNews) {
            setScienceNews(JSON.parse(localStorage.getItem('science')))
        }
    }, [scienceNews])

    return (
        <div>
            <div className="finance__principal">
                <NewsBox 
                    newImage={scienceNews[1]?.urlToImage}
                    newTitle={scienceNews[1]?.title}
                    description={scienceNews[1]?.description}
                    big
                />
            </div>
            
            <div className="finance__secondaryNews">
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={scienceNews[2]?.urlToImage}
                        newTitle={scienceNews[2]?.title}
                        description={scienceNews[2]?.description}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={scienceNews[3]?.urlToImage}
                        newTitle={scienceNews[3]?.title}
                        description={scienceNews[3]?.description}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Science
