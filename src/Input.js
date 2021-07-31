import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Input() {
    const [input, setinput] = useState('')
    const {dispatch} = useDispatch()
    const addtodo=(e)=>{
      console.log(`adding ${input}`)
      dispatch({
          item:input,
          done:false,
          id:Date.now()
      })
    }
    return (
        <div>
            <input type="text" value={input} onChange={(e)=>(setinput(e.target.value))}/>
            <button onClick={addtodo} >add</button>
        </div>
    )
}

export default Input
