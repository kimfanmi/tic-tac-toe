import React, { useCallback, useContext, useState } from 'react'
import { XOContext } from '../contexts/XOState'

const XOBox = () => {
  const state = useContext(XOContext);
  const [next, setNext] = useState(state.next);
  const onclick = (e) => {
    state.next === 'X' ? state.myx.push(e.target.className) : state.myo.push(e.target.className);
    state.next === 'X' ? state.next = 'O' : state.next = 'X';
    setNext(state.next)
    console.log(state)
    
  }

  const makeAry = (state) => {
    let ary = [];
    for (let i=0; i<9; i++) {
      state.myx.includes(i) ? ary.concat('X') : state.myo.includes(i) ? ary.concat('O') : ary.concat(' ');
    }
    return ary;
  }

  return (
    <div>
      <div className='gamebox'>
        <div className={1} onClick={onclick}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>Next : {next}</div>
    </div>
  )
}

export default XOBox