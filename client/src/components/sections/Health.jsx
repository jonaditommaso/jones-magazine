import React, { useEffect, useState } from 'react'
import NewsBox from '../NewsBox'
import '../../styles/finance/finance.css';
import axios from 'axios';

function Health() {

    const [healthNews, setHealthNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            // const newService = new NewsService();
            // const { data } = await newService.getHealthNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=health`)
            // const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            // setHealthNews(dataFiltered);
            // console.log(dataFiltered)
            const {data} = await axios.get('http://localhost:5000/api/health')
            setHealthNews(data)
            // localStorage.setItem('health', JSON.stringify(dataFiltered));
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
                    newImage={healthNews[3]?.urlToImage}
                    newTitle={healthNews[3]?.title}
                    description={healthNews[3]?.description}
                    content={healthNews[3]?.content}
                    big
                />
            </div>
            
            <div className="finance__secondaryNews">
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={healthNews[2]?.urlToImage}
                        newTitle={healthNews[2]?.title}
                        description={healthNews[2]?.description}
                        content={healthNews[2]?.content}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={healthNews[1]?.urlToImage}
                        newTitle={healthNews[1]?.title}
                        description={healthNews[1]?.description}
                        content={healthNews[1]?.content}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={healthNews[0]?.urlToImage}
                        newTitle={healthNews[0]?.title}
                        description={healthNews[0]?.description}
                        content={healthNews[0]?.content}
                    />
                </div>
            </div>
        </div>
    )
}

export default Health
