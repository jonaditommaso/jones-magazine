import React, { useEffect } from 'react';
import '../styles/futbol.css';
import { FUTBOL_KEY } from '../utils/keys';
import axios from 'axios';
import TablePositions from './TablePositions';
import Fixture from './Fixture';
import Forum from './Forum';

function Futbol() {

    // useEffect(() => {
    //     const getLiga = async () => {
    //         const {data} = await axios.get(`https://apiv3.apifootball.com/?action=get_leagues&country_id=32&APIkey=${FUTBOL_KEY}`);
    //         console.log({data})
    //     }
    //     getLiga()
    // }, []);

    return (
        <div>
            <div className="futbol__news">
                <div className="futbol__newsContainer">
                    <div className="futbol__newsImages">

                    </div>
                    <h5>Titulo de la noticia</h5>
                </div>
                <div className="futbol__newsContainer">
                    <div className="futbol__newsImages">

                    </div>
                    <h5>Titulo de la noticaaaa porque mesii esds</h5>
                </div>
                <div className="futbol__newsContainer">
                    <div className="futbol__newsImages">

                    </div>
                    <h5>Titulo de la noticia</h5>
                </div>
                <div className="futbol__newsContainer">
                    <div className="futbol__newsImages">

                    </div>
                    <h5>Titulo de la noticia</h5>
                </div>

            </div>
            <div className="futbol__content">
                <div className="futbol__positions">
                    <TablePositions />
                </div>
                <div className="futbol__fixture">
                    <Fixture />
                    <Forum />
                </div>
            </div>
        </div>
    )
}

export default Futbol;
