import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
function Counter() {

    const [count, setCount]=useState(0)
    
    const handleIncrement=()=>{
        setCount(count + 1)
    }

    const handleDecrement=()=>{
        setCount(count -1)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <Button onClick={handleIncrement}>Add</Button>
        <Button onClick={handleDecrement} disabled={count ===0}>Minus</Button>

    </div>
  )
}

export default Counter