import React from 'react';
import './App.css';
import SeparateComponent from "./components/SeparateComponent/SeparateComponent";
import Counter from './components/Counter/Counter'
import { CounterProvider } from './state/Context'

const App = () => {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <SeparateComponent />
      </CounterProvider>
    </div>
  );
}

export default App;
