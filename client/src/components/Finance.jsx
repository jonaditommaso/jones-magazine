import React, { useEffect, useState } from 'react'
import '../styles/finance/finance.css';
import NewsService from '../services/NewsService';
import axios from 'axios';
import NewsBoxContainer from '../utils/NewsBoxContainer';

const Finance = () => {

    const [financeNews, setFinanceNews] = useState('');
    const [foreignExchange, setForeignExchange] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const {data} = await axios.get('https://jones-magazine.vercel.app/api/finance');
            setFinanceNews(data)

            const getForeignExchange = async () => {
                const newService = new NewsService();
                const {data} = await newService.getForex('/latest'); 
                setForeignExchange(data);   
                localStorage.setItem('divisas', JSON.stringify(data));
                console.log('calling again');
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
    }, []);

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

            <NewsBoxContainer section={financeNews} />
        </div>
    );
}
 
export default Finance;