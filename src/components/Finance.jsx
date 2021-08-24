import React, { useEffect, useState } from 'react'
import '../styles/finance.css';
import NewsService from '../services/NewsService';
import { NEWS_KEY } from '../utils/keys';
import NewsBox from './NewsBox';
import dolarPriceApi from '../utils/dolarPriceApi';

const Finance = () => {

    const [newsOne, setNewsOne] = useState('');
    const [imageOne, setImageOne] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getBusinessNews(`/top-headlines?country=ar&apiKey=${NEWS_KEY}&category=business`);
            setNewsOne(data.articles[3].title);
            setImageOne(data.articles[3].urlToImage);
        }
        getNews();

        // const getForeignExchangePrice = async () => {
        //     const response = await dolarPriceApi.get('');
        //     console.log('dolar', response)
        // }
        // getForeignExchangePrice();
    }, []);


    return ( 
        <div>
            <hr />
            <div className="foreignExchange">
                <p className="finance__foreignExchange">DOLAR BNA</p>
                <p className="finance__foreignExchange">DOLAR BLUE</p>
                <p className="finance__foreignExchange">DOLAR CCL</p>
                <p className="finance__foreignExchange">EURO BNA</p>
                <p className="finance__foreignExchange">EURO BLUE</p>
                <p className="finance__foreignExchange">BTC</p>
                <p className="finance__foreignExchange">ETH</p>
                <p className="finance__foreignExchange">RIESGO PAIS</p>
            </div>

            <hr style={{width: '80%', margin: 'auto', marginBottom:'2%', marginTop: '1%'}}/>

            <div className="finance__principal">
            <NewsBox 
                    newImage={imageOne}
                    newTitle={newsOne}
                    // cut={cutP}
                    big
                  />
            </div>
        </div>
     );
}
 
export default Finance;