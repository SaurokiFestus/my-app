import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees'
import {Link, useNavigate} from 'react-router-dom'

function Home() {
    let history = useNavigate();

    const handleDelete= (id) =>{
        let index = Employees.map(function(e){
            return  e.id
        }).indexOf(id);
        Employees.splice(index,1);
        
        history('/')
    }

    const handleEdit=(id, name, age)=>{
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('id', id)
    }

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
                        <th>
                            Action
                        </th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.age}
                                    </td>
                                    <td>
                                        <Button onClick={()=>handleDelete(item.id)}>DELETE</Button>
                                        &nbsp;
                                        <Link to='/edit'>
                                        <Button onClick={()=>handleEdit(item.id, item.name, item.age)}>EDIT</Button>
                                        </Link>
                                        
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data"
                    }
                </tbody>
            </Table>
            <br/>
            <Link className='d-grid gap-2' to="/create">
            <Button size ="lg">Create</Button>
            </Link>
            <Link className='d-grid gap-2 p-2' to="/counter">
            <Button size ="lg">Counter</Button>
            </Link>
            <Link className='d-grid gap-2 p-2' to="/todo">
            <Button size ="lg">To do list</Button>
            </Link>
            <Link className='d-grid gap-2 p-2' to="/fetch">
            <Button size ="lg">Fetch Data</Button>
            </Link>
            <Link className='d-grid gap-2 p-2' to="/toggle">
            <Button size="lg">Toggle</Button>
            </Link>

        </div>
    </Fragment>
  )
}

export default Home