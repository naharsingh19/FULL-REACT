import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);

  const addValue = () => {
    if(counter<20){
    setCounter(counter+1);
    }
  }

  const removeValue = () =>{
    if(counter>=1){
    setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>COUNTER APP {counter}</h1>
      <h2>i have used usestate hook to mannage state of count to display on ui at several positions</h2>
      <br />
      <button onClick={addValue}
      >add value {counter}</button>
      <br />
      <button onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App
