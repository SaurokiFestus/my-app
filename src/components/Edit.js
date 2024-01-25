import React, { useEffect, useState } from 'react'
import {Button, Form} from "react-bootstrap"
import Employees from './Employees'
import {Link, useNavigate} from "react-router-dom"
import {v4 as uuid} from "uuid"
function Edit() {
    const [name, setName] = useState('')
    const [age, setAge]= useState('')
    const [id, setId] = useState('')
    let history=useNavigate()

    let index = Employees.map(function(e){
        return  e.id
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault()
    
    
        let a = Employees[index]
        a.name = name
        a.age= age
    
      
    
        history("/")
      }

      useEffect(()=>{
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setId(localStorage.getItem('id'))
      },[])
  return (
    <div>
        <Form>
        <Form.Group>
          <Form.Control type="text" placeholder='Enter Name' value={name}required onChange={(e) =>setName(e.target.value)}>

          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder='Enter Age' value={age} required onChange={(e) =>setAge(e.target.value)}>

          </Form.Control>
        </Form.Group>
        <Button type='Submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
      </Form>
    </div>
  )
}

export default Edit