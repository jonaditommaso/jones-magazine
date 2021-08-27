import React from 'react';
import '../styles/table.css';
import Table from 'react-bootstrap/Table';
import {teamsData} from '../utils/teamsData'; 

const TablePositions = () => {

   const teams = teamsData.sort((a, b) => {
       //if b.pts = a.pts ...
        return b.pts - a.pts
    })

    return ( 
        <div className="table">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{width: '150px'}}>Equipos</th>
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
               
                    <tbody >
                    {teams.map((team, i) => (
                        <tr key={i} className={i === 0 ? 'first' : null}>
                            <td>{i + 1}</td>
                            <td style={{textAlign: 'initial', display: 'flex'}}>
                                {team.shield}
                                <span style={{marginLeft: '2px'}}>{team.team}</span>
                            </td>
                            <td>{team.pts}</td>
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
            </Table>
        </div>
    );
}
 
export default TablePositions;