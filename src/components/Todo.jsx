import React, {useState} from 'react'

function Todo() {
    //state for managaing list of todos
    const [todos, setTodos]=useState([])
    //state for managing new tasks
    const [newTask, setNewTask]=useState('')

    //func to add new task
    const handleNewTask=()=>{
        if (newTask.trim() !== ''){
            setTodos([...todos, {id: Date.now(), text: newTask, completed: false}])

            //clear input field after adding new task
            setNewTask('')
        }
    }

    const handleDeleteTask=(taskId)=>{
        //filter out task with specified id
        const updatedTasks = todos.filter((todo) =>taskId !== taskId)
        setTodos(updatedTasks)
    }
  return (
    <div>
        <h2>To do list </h2>
        <ul>
        {todos.map((task) => (
          <li key={task.id}>
            {/* Checkbox for marking a task as completed */}
            {/* <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            /> */}
            
            {/* Task text with conditional strikethrough style for completed tasks */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            {/* Button for deleting a task */}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
       { /*input field for adding new task*/}
        <div>
            <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='Enter new task'/>
            <button onClick={handleNewTask}>Add Task</button>
        </div>
    </div>
  )
}

export default Todo