import React, {  useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../styles/club/club.css';
import NewsService from '../services/NewsService';
import { NEWS_KEY } from '../utils/keys';
import NewsBox from './NewsBox';

const Club = () => {

    const [clubColors, setClubColors] = useState('');
    const [team, setTeam] = useState('');
    const [newsClub1, setNewsClub1] = useState('');
    const [newsClub2, setNewsClub2] = useState('');
    const [newsClub3, setNewsClub3] = useState('');
    // const [newsClub4, setNewsClub4] = useState('');
    // const [newsClub5, setNewsClub5] = useState('');
    const [newsClubImage1, setNewsClubImage1] = useState('');
    const [newsClubImage2, setNewsClubImage2] = useState('');
    const [newsClubImage3, setNewsClubImage3] = useState('');

    const [cutNews1, setCutNews1] = useState('');
    const [cutNews2, setCutNews2] = useState('');
    const [cutNews3, setCutNews3] = useState('');

    const [nationalCups, setNationalCups] = useState('');
    const [internationalCups, setInternationalCups] = useState('');
    const [leagues, setLeagues] = useState('');

    const [difference, setDifference] = useState('');
    const [scorer, setScorer] = useState('');
    const [morePresences, setMorePresences] = useState('');

    const {club} = useParams();
    const param = club.toString();
    
    useEffect(() => {

        const getNews = async () => {
            const newService = new NewsService();
            const {data} = await newService.getBusinessNews(`/top-headlines?q=${param === 'sanlorenzo' ? 'san lorenzo' : param}&country=ar&apiKey=${NEWS_KEY}&category=sports`);
            const dataFiltered = data.articles.filter(haveImage => haveImage.urlToImage);
            // console.log(data)
            setNewsClub1(dataFiltered[0]?.title);
            setNewsClub2(dataFiltered[1]?.title);
            setNewsClub3(dataFiltered[2]?.title);

            setNewsClubImage1(dataFiltered[0]?.urlToImage);
            setNewsClubImage2(dataFiltered[1]?.urlToImage);
            setNewsClubImage3(dataFiltered[2]?.urlToImage);

            if (newsClub1?.lastIndexOf('-') > 0) {
                setCutNews1(newsClub1.lastIndexOf('-'));
            }
            if (newsClub2?.lastIndexOf('-') > 0) {
                setCutNews2(newsClub2.lastIndexOf('-'));
            }
            if (newsClub3?.lastIndexOf('-') > 0) {
                setCutNews3(newsClub3?.lastIndexOf('-'));
            }
        }
        getNews()
        
        if(param === 'boca') {
            setClubColors('club__boca');
            setTeam('BOCA JUNIORS');
            setLeagues('28');
            setNationalCups('8');
            setInternationalCups('18');
            setDifference('9 partidos a favor');
            setMorePresences('Roberto Mouzo - 426 partidos');
            setScorer('Martín Palermo - 236 goles / Promedio: 0,58');

        }
        if(param === 'river') {
            setClubColors('club__river');
            setTeam('RIVER PLATE');
            setLeagues('35');
            setNationalCups('12');
            setInternationalCups('12');
            setDifference('9 partidos en contra');
            setMorePresences('Amadeo Carrizo - 552 partidos');
            setScorer('Ángel Labruna - 317 goles / Promedio: 0,61');
        }
        if(param === 'independiente') {
            setClubColors('club__independiente');
            setTeam('INDEPENDIENTE');
            setLeagues('14');
            setNationalCups('3');
            setInternationalCups('18');
            setDifference('23 partidos a favor');
            setMorePresences('Ricardo Bochini - 714 partidos');
            setScorer('Arsenio Erico - 295 goles / Promedio: 0,91');
        }
        if(param === 'racing') {
            setClubColors('club__racing');
            setTeam('RACING S.A');
            setLeagues('9');
            setNationalCups('4');
            setInternationalCups('3');
            setDifference('23 partido sen contra');
            setMorePresences('Natalio Perinetti - 405 partidos');
            setScorer('Alberto Ohaco - 244 goles / Promedio: 0,87');
        }
        if(param === 'sanlorenzo') {
            setClubColors('club__sanlorenzo');
            setTeam('SAN LORENZO');
            setLeagues('12');
            setNationalCups('2');
            setInternationalCups('3');
            setDifference('34 partidos a favor');
            setMorePresences('Sergio Bísmark Villar - 446 partidos');
            setScorer('José Sanfilippo - 207 goles / Promedio: 0,78');
        }
    }, [newsClub1, newsClub2, newsClub3]);
    
    const shield = () => {
        if(param === 'boca') {
            return <img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/boca-big.png" alt="boca"/>  
        }
        if(param === 'river') {
            return <img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/river-big.png" alt="river"/>
        }
        if(param === 'independiente') {
            return <img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/independiente-big.png" alt="independiente"/>
        }
        if(param === 'racing') {
            return <img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/racing-big.png" alt="racing"/>
        }
        if(param === 'sanlorenzo') {
            return <img style={{height: '50px', width: '50px'}} src="/assets/img/futbol-icons/sanlorenzo-big.png" alt="sanlorenzo"/>
        }
    }

    return ( 
        <>
            <hr />
            <div>

                <div className={`${clubColors} club__coverPage`}>
                    <div className="club__description">
                        {shield()}<h4>{team}</h4>
                    </div>
                </div>
                {/* <div>
                    Titulos y partidos
                </div> */}
                <div className="club__principalNews">
                    <NewsBox 
                        newImage={newsClubImage1} 
                        newTitle={newsClub1} 
                        cut={cutNews1}
                        big
                    />
                </div>
                <div className="club__secondaryNews">
                    {newsClubImage2 
                    ? 
                    <div className="club__secondaryNew">
                        <NewsBox 
                            newImage={newsClubImage2} 
                            newTitle={newsClub2} 
                            cut={cutNews2}
                        />
                    </div>
                    : <></>
                    }
                    {newsClubImage3
                    ?
                    <div className="club__secondaryNew">
                        <NewsBox 
                            newImage={newsClubImage3} 
                            newTitle={newsClub3}
                            cut={cutNews3}
                        />
                    </div>
                    : <></>
                    }
                </div>
            </div>
                <hr style={{width: '75%', margin: 'auto'}} />
                
            <div style={{marginTop: '2%'}}>
                <div className={`club__campeonatos ${clubColors}`}>
                    <div className="club__data">
                        <p style={{marginBottom: '1%'}}>TITULOS</p>
                        <p><span style={{fontWeight: '700'}}>{leagues}</span> campeonatos locales</p>
                        <p><span style={{fontWeight: '700'}}>{nationalCups}</span> copas nacionales</p>
                        <p><span style={{fontWeight: '700'}}>{internationalCups}</span> copas internacionales</p>
                        
                        <br />
                        
                        <div style={{margin: 'auto', marginTop: '0'}}  className="club__data">
                            <p>DIFERENCIA VS CLÁSICO RIVAL: {difference}</p>
                            <br />
                            <p>GOLEADOR HISTÓRICO: {scorer}</p>
                            <br />
                            <p>MAYORES PRESENCIAS: {morePresences}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
     );
}
 
export default Club;