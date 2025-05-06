import { useState } from 'react';
import './App.css'

function App() {
let [counter, setCounter] = useState(0);
 
  const AddValue = () => {
    console.log('clicked ', Math.random());
    console.log('value added', counter); // Log the current value of counter
    if (counter < 20) { 
    counter = counter + 1;
    setCounter(counter);
    }
    else {
      alert('counter value is 20');
    }
  };
  if (counter >0){}
  const DecValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else {
      alert('counter value is 0');
    }
  };

  return (
    <>
      <h1>Welcome to React</h1>
      <h1>counter value:{counter}</h1>

      <button onClick={AddValue}>+(add_value)</button>
      <br></br>
      <button onClick={DecValue}>-(decrease_value)</button>
    </>
  )
}

export default App
