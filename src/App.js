import React, { useState } from 'react';
import './App.css';

function App() {
  const [resualt, setResualt] = useState('waiting for u')

  const handleChange = (event) => {
    const percentOfIntrest = 17
    let number = +event.target.value
    let percent = (percentOfIntrest / 100) * number;
    setResualt(percent + number)
  }

  return (
    <div className="App">
      <br></br>
      <input type='number' onChange={(event) => handleChange(event)} />
      <br></br>
      <div>Total Sum: {resualt}</div>

    </div>
  );
}
export default App;
