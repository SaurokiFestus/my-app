import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees'
function Home() {
  return (
    
    <Fragment>
        <div style={{margin: "18rem"}} >
            <Table striped bordered hover size='sm'>
               <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.age}
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data"
                    }
                </tbody>
            </Table>

        </div>
    </Fragment>
  )
}

export default Home