  import React from 'react';
import '../styles/table.css';
import Table from 'react-bootstrap/Table';

const TablePositions = () => {

    const teams = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
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
                    {teams.map((team, i) => (
                        <tr key={i}>
                            <td>1</td>
                            <td style={{textAlign: 'initial'}}>San Lorenzo</td>
                            <td>2</td>
                            <td>22</td>
                            <td>11</td>
                            <td>23</td>
                            <td>33</td>
                            <td>13</td>
                            <td>21</td>
                            <td>{team}3</td>
                        </tr>
                        ))}
                    </tbody>
               
            </Table>
        </div>
    );
}
 
export default TablePositions;