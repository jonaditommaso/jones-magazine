import React, { useEffect, useState } from 'react'
import NewsService from '../../services/NewsService'
import NewsBox from '../NewsBox'
import { NEWS_KEY } from '../../utils/keys'
import '../../styles/finance/finance.css'

function Technology() {

    const [technologyNews, setTechnologyNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const { data } = await newService.getTechnologyNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=technology`)
            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            setTechnologyNews(dataFiltered);
            localStorage.setItem('tech', JSON.stringify(dataFiltered));
        }
        if(!localStorage.getItem('tech')) {
            getNews();
        }

        if(localStorage.getItem('tech') && !technologyNews) {
            setTechnologyNews(JSON.parse(localStorage.getItem('tech')))
        }
    }, [technologyNews])

    return (
        <div>
             <div className="finance__principal">
                <NewsBox 
                    newImage={technologyNews[1]?.urlToImage}
                    newTitle={technologyNews[1]?.title}
                    description={technologyNews[1]?.description}
                    big
                />
            </div>
            
            <div className="finance__secondaryNews">
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={technologyNews[2]?.urlToImage}
                        newTitle={technologyNews[2]?.title}
                        description={technologyNews[2]?.description}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={technologyNews[3]?.urlToImage}
                        newTitle={technologyNews[3]?.title}
                        description={technologyNews[3]?.description}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Technology
