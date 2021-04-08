

import React,{useContext, useReducer} from 'react'
import { inititalState, Reducer } from './Counter';
import { useStateValue } from './StateProvider';

function H1() {
   const [state, dispatch] = useReducer(Reducer, inititalState )
    return (
        <div>
            <h2>Hello  {state.count}</h2>

            <button onClick={()=>dispatch({type:'inc'})}>+</button>
            <button onClick={()=>dispatch({type:'dec'})}>-</button>
        </div>
    )
}

export default H1
