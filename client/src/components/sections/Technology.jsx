import React, { useEffect, useState } from 'react'
import NewsBox from '../NewsBox'
import '../../styles/finance/finance.css'
import axios from 'axios'

function Technology() {

    const [technologyNews, setTechnologyNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const { data } = await axios.get('https://jones-magazine.vercel.app/api/technology')
            setTechnologyNews(data)
            localStorage.setItem('tech', JSON.stringify(data));
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
            <hr />
             <div className="finance__principal">
                <NewsBox 
                    newImage={technologyNews[1]?.urlToImage}
                    newTitle={technologyNews[1]?.title}
                    description={technologyNews[1]?.description}
                    content={technologyNews[1]?.content}
                    big
                />
            </div>
            
            <div className="finance__secondaryNews">
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={technologyNews[2]?.urlToImage}
                        newTitle={technologyNews[2]?.title}
                        description={technologyNews[2]?.description}
                        content={technologyNews[2]?.content}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={technologyNews[3]?.urlToImage}
                        newTitle={technologyNews[3]?.title}
                        description={technologyNews[3]?.description}
                        content={technologyNews[3]?.content}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={technologyNews[0]?.urlToImage}
                        newTitle={technologyNews[0]?.title}
                        description={technologyNews[0]?.description}
                        content={technologyNews[0]?.content}
                    />
                </div>
            </div>
        </div>
    )
}

export default Technology
