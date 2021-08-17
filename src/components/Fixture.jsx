import Table from 'react-bootstrap/Table';

const Fixture = () => {
    return ( 
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th colSpan='5' style={{textAlign: 'center'}}>Viernes 17 de Agosto</th>
                        <th colSpan='1' style={{textAlign: 'center'}}>UE</th>
                    </tr>
                </thead>
               
                <tbody >
                    <tr >
                        <td>14:30</td>
                        <td >San Lorenzo</td>
                        <td>0</td>
                        <td>0</td>
                        <td>San Lorenzo</td>
                        <td style={{color: 'red'}}>SL 2-1 SL</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
 
export default Fixture;