import React, { useReducer } from 'react'

const initialState = { "count": 90, "agreeToTerms": true, "allowSubmit": false }
const StateContext = React.createContext();
const DispatchContext = React.createContext();

const counterReducer = (state, action) => {
  // console.log('action-here', action.payload)
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "agree-condition":
      return { ...state, agreeToTerms: !state.agreeToTerms }
    default:
      return { ...state };
  }
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { StateContext, DispatchContext, CounterProvider };
