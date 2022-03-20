import React, { useState } from 'react';
import './App.css';

function App() {
  const [resualt, setResualt] = useState('We Are Waiting For You')
  const [intrest, setIntrest] = useState('')

  const handleChange = (event) => {
    const percentOfIntrest = 17
    let number = +event.target.value
    let percent = (percentOfIntrest / 100) * number;
    setResualt(percent + number)
    setIntrest(parseFloat(percent.toFixed(2)))
  }

  return (
    <div className="App">
      <h1>Intrest Calculater</h1>
      <h3>Intrest is on 17%</h3>
      <br></br>
      <input type='number' onChange={(event) => handleChange(event)} />
      <br></br>
      <br></br>
      <div>Total Sum: {resualt}</div>
      <br></br>
      <div>Total Intrest: {intrest}</div>
    </div>
  );
}
export default App;
