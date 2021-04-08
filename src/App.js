import logo from './logo.svg';
import './App.css';
import core from './jsonn'
import Counter from './Counter'
import { createStore } from 'redux';

import H1 from './H1';
import H2 from './H2';
import {useStateValue }from "./StateProvider"
import { useState } from 'react';
function App() {
  
//   const store=createStore(Counter)
  
//   console.log(store.getState())
//  const add=()=>{
//    store.dispatch({type:'inc'})

//  }
//  const minus=()=>{
//    store.dispatch({type:'dec'})
//  }


  return (
    <div className="App">
      {/* <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <p>{store.getState()}</p> */}
     
     
      
     
      <H2/>
      <H1/>
   
     
     
    </div>
  );
}

export default App;
