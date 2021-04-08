import React, { useContext, useReducer } from 'react'
import {Reducer,  inititalState } from './Counter';
import { useStateValue } from './StateProvider';

function H2() {
    console.log(useStateValue)
    const [state, dispatch] = useReducer(Reducer,inititalState)
    return (
        <div>
            <h2>this is my h3  {state.count}</h2>
            <button onClick={()=>dispatch({type:'inc'})}>+</button>
            <button onClick={()=>dispatch({type:'dec'})}>-</button>
        </div>
    )

}

export default H2
