import React, { useContext } from 'react'
import { StateContext } from '../../state/Context';
import { DispatchContext } from '../../state/Context';

const Counter = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  return (
    <div>
      <h5>Count: {state.count}</h5>
      {/* <button onClick={() => dispatch({ type: "increment", payload: state })} > plus</button> */}
      <button onClick={() => dispatch({ type: "increment" })} > plus</button>
      <button onClick={() => dispatch({ type: "agree-condition" })} > minus</button>
    </div>
  )
}

export default Counter;