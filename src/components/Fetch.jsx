import React, {useState, useEffect} from 'react'

function Fetch() {

    //state to store the fetched data
    const [todos, setTodos] = useState([])

    //useffect to fectch data when component renders
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                //fetching data from json api
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')

                //parse the json response
                const data = await response.json()

                //update state with fetched data
                setTodos(data)
            } catch (error){
                //handling errors 
                console.log('Error fetching data', error)
            }
        }

        //call the func fetchData
        fetchData()
    },[])
  return (
    <div>
        <h1>Todo List</h1>
      <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.title}

            </li>
        ))}
      </ul>

    </div>
  )
}

export default Fetch