import React, { useState, useEffect } from 'react';
import '../styles/table/table.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const TablePositions = () => {

    const [teamsData, setTeamsData] = useState('')

    useEffect(() => {
        const getTeams = async() => {
            const {data} = await axios.get('https://jones-magazine.vercel.app/api/positionsData');
            
            setTeamsData(data?.sort((a, b) => {
                if( b.pts === a.pts ){
                    return b.dif - a.dif
                }
                return b.pts - a.pts
             }));
        }
        if(!teamsData) {
            getTeams();
        }
    }, [teamsData]);

    return ( 
        <div className="table">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th id="teams">Equipos</th>
                        <th>Pts</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>DIF</th>
                    </tr>
                </thead>
               {teamsData && 
                     <tbody >
                    {teamsData?.map((team, i) => (
                        <tr key={i} className={i === 0 ? 'first' : null}>
                            <td>{i + 1}</td>
                            <td id="teamContainer">
                                <img src={team.shield} alt={team.team}/>
                                <span id="teamName">{team.team}</span>
                            </td>
                            <td id="points">{team.pts}</td>
                            <td>{team.pj}</td>
                            <td>{team.pg}</td>
                            <td>{team.pe}</td>
                            <td>{team.pp}</td>
                            <td>{team.gf}</td>
                            <td>{team.gc}</td>
                            <td>{team.dif}</td>
                        </tr>
                    ))}
                    </tbody> 
                }
            </Table>
        </div>
    );
}
 
export default TablePositions;