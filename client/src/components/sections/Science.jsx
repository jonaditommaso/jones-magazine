import React, { useEffect, useState } from 'react'
import NewsBox from '../NewsBox'
import '../../styles/finance/finance.css'
import axios from 'axios'

function Science() {

    const [scienceNews, setScienceNews] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const { data } = await axios.get('http://localhost:5000/api/science');
            setScienceNews(data)
            localStorage.setItem('science', JSON.stringify(scienceNews));
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
            <hr />
            <div className="finance__principal">
                <NewsBox 
                    newImage={scienceNews[0]?.urlToImage}
                    newTitle={scienceNews[0]?.title}
                    description={scienceNews[0]?.description}
                    ontent={scienceNews[0]?.content}
                    big
                />
            </div>
            
            <div className="finance__secondaryNews">
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={scienceNews[2]?.urlToImage}
                        newTitle={scienceNews[2]?.title}
                        description={scienceNews[2]?.description}
                        ontent={scienceNews[2]?.content}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={scienceNews[3]?.urlToImage}
                        newTitle={scienceNews[3]?.title}
                        description={scienceNews[3]?.description}
                        content={scienceNews[3]?.content}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={scienceNews[1]?.urlToImage}
                        newTitle={scienceNews[1]?.title}
                        description={scienceNews[1]?.description}
                        content={scienceNews[1]?.content}
                    />
                </div>
            </div>
        </div>
    )
}

export default Science
