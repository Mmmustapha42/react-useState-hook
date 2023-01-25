import './App.css';
import React,{useState} from 'react';


function App() {

  const [state, setState] = useState({count: 5, theme: 'blue'})
  const count = state.count
  const theme = state.theme

  function decrement() {
    setState(prev => {
      return {...prev, count:prev.count-1}
    })
  }

  function increment() {
    setState(prev => {
      return {...prev, count:prev.count+1}
    })
  }
  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={increment}>+</button>
    </>
  );
}

export default App;
