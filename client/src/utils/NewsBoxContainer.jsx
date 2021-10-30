import React from 'react';
import NewsBox from '../components/NewsBox';
import '../styles/newsBox/newsBox.css';

function NewsBoxContainer({section}) {

    return (
        <>
            <div className="container__main">
                <NewsBox 
                    newImage={section[1]?.urlToImage}
                    newTitle={section[1]?.title}
                    description={section[1]?.description}
                    content={section[1]?.content}
                    big
                    id={section[1]?.id}
                />
            </div>
            
            <div className="container__secondary">
                { section && section?.map((news, i) => {
                    if(i !==1 && i < 4) {
                        return (
                            <div className="secondary" key={news?.id}>
                                <NewsBox 
                                    newImage={news?.urlToImage}
                                    newTitle={news?.title}
                                    description={news?.description}
                                    content={news?.content}
                                    id={news?.id}
                                />
                            </div>
                        )
                    }
                    return <></>
                }) }
            </div>
        </>
    );
}

export default NewsBoxContainer;
