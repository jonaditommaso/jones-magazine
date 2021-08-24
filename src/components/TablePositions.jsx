  import React from 'react';
import '../styles/table.css';
import Table from 'react-bootstrap/Table';
import {teamsData} from '../utils/teamsData'; 

const TablePositions = () => {

//    console.log('ordenados', teamsData.sort((a, b) => {
//         if (a.pts < b.pts) {
//             return -1
//         }
//         if(a.pts > b.pts) {
//             return 1
//         }
//         else {
//             return 0
//         }
//     }))
    return ( 
        <div className="table">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th style={{width: '120px'}}>Equipos</th>
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
                    {teamsData.map((team, i) => (
                        <tr key={i}>
                            <td style={{width: '5px'}}>{team.shield}</td>
                            <td style={{textAlign: 'initial'}}>{team.team}</td>
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