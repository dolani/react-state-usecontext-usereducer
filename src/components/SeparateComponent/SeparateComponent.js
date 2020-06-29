import React, { useContext } from 'react'
import { StateContext } from '../../state/Context';

const SeparateComponent = () => {
  const state = useContext(StateContext);
  return (
    <div>
      <h1>Share Count: {state.count}</h1>
      <button onClick={() => { }}>fetch again</button>

    </div>
  )
}

export default SeparateComponent;