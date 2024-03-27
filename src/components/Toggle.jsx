import React, {useState} from 'react'

function Toggle() {
    const [toggle, setToggle]=useState();
    const bgColor = {backgroundColor: toggle}
  return (
    <div style={bgColor}>
        <p>The toggle is {toggle}</p>
        <button onClick={()=>setToggle("Blue")}>Blue</button>
        <button onClick={()=>setToggle("White")}>White</button>
    </div>
  )
}

export default Toggle