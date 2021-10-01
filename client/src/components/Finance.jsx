import React, { useEffect, useState } from 'react'
import '../styles/finance/finance.css';
import NewsService from '../services/NewsService';
import { NEWS_KEY } from '../utils/keys';
import NewsBox from './NewsBox';

const Finance = () => {

    // const [newsOne, setNewsOne] = useState('');
    // const [imageOne, setImageOne] = useState('');
    const [financeNews, setFinanceNews] = useState('');

    const [foreignExchange, setForeignExchange] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getBusinessNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=business`);
            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            setFinanceNews(dataFiltered);
            // setNewsOne(data.articles[3].title);
            // setImageOne(data.articles[3].urlToImage);

            const getForeignExchange = async () => {
                const newService = new NewsService();
                const {data} = await newService.getForex('/latest'); 
                setForeignExchange(data);   
                localStorage.setItem('divisas', JSON.stringify(data));
                console.log('me estas llamando de nuevo');
            }

            const thereAreForeignExchange = () => {
                if(!localStorage.getItem('divisas')) {
                    getForeignExchange();
                }
                if(localStorage.getItem('divisas')) {
                    const forex = localStorage.getItem('divisas');
                    setForeignExchange(JSON.parse(forex))
                }
            }
            thereAreForeignExchange();
        }
        getNews();

        // const getForeignExchangePrice = async () => {
        //     const response = await dolarPriceApi.get('');
        //     console.log('dolar', response)
        // }
        // getForeignExchangePrice();
    }, []);

    console.log('pega', foreignExchange);

    return ( 
        <div>
            <hr />
            {foreignExchange 
            &&
            <div className="foreignExchange">
                <p className="finance__foreignExchange">DOLAR BNA <p style={{fontWeight: '350'}}>{`$${foreignExchange.oficial.value_buy} - $${foreignExchange.oficial.value_sell}`}</p></p>
                <p className="finance__foreignExchange">DOLAR BLUE <p style={{fontWeight: '350'}}>{`$${foreignExchange.blue.value_buy} - $${foreignExchange.blue.value_sell}`}</p></p>
                {/* <p className="finance__foreignExchange">DOLAR CCL <p style={{fontWeight: '350'}}></p></p> */}
                <p className="finance__foreignExchange">EURO BNA <p style={{fontWeight: '350'}}>{`$${foreignExchange.oficial_euro.value_buy} - $${foreignExchange.oficial_euro.value_sell}`}</p></p>
                <p className="finance__foreignExchange">EURO BLUE <p style={{fontWeight: '350'}}>{`$${foreignExchange.blue_euro.value_buy} - $${foreignExchange.blue_euro.value_sell}`}</p></p>
                {/* <p className="finance__foreignExchange">BTC 123.04 // 102.04</p>
                <p className="finance__foreignExchange">ETH 123.04 // 102.04</p> */}
                {/* <p className="finance__foreignExchange">RIESGO PAIS <p style={{fontWeight: '350'}}>123.04 - 102.04</p></p> */}
            </div>
            }

            <hr style={{width: '80%', margin: 'auto', marginBottom:'2%', marginTop: '1%'}}/>

            <div className="finance__principal">
                <NewsBox 
                    newImage={financeNews[3]?.urlToImage}
                    newTitle={financeNews[3]?.title}
                    // cut={cutP}
                    description={financeNews[3]?.description}
                    big
                />
            </div>

            <div className="finance__secondaryNews">
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={financeNews[4]?.urlToImage}
                        newTitle={financeNews[4]?.title}
                        description={financeNews[4]?.description}
                        // cut={cutP}
                    />
                </div>
                <div className="finance__secondaryNew">
                    <NewsBox 
                        newImage={financeNews[5]?.urlToImage}
                        newTitle={financeNews[5]?.title}
                        description={financeNews[5]?.description}
                        // cut={cutP}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Finance;