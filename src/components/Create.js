import React,{useState}from 'react'
import {Button, Form} from "react-bootstrap"
import Employees from './Employees'
import {Link, useNavigate} from "react-router-dom"
import {v4 as uuid} from "uuid"
function Create() {

  const [name, setName] = useState('')
  const [age, setAge]= useState('')
  let history=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const id = uuid()
    let uniqueId = id.slice(0,8)

    let a = name
    let b = age

    Employees.push({id: uniqueId, Name : a, Age: b })

    history("/")
  }
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder='Enter Name' required onChange={(e) =>setName(e.target.value)}>

          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder='Enter Age' required onChange={(e) =>setAge(e.target.value)}>

          </Form.Control>
        </Form.Group>
        <Button type='Submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
      </Form>
    </div>
  )
}

export default Create