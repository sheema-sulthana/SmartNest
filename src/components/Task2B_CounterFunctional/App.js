import React from 'react';
import './App.css';

function App() {
  let count = 0;

  function increaseCounter() {
    count++;
    document.getElementById("countervalue").innerText = count;
    document.getElementById("increasebtn").disabled = count === 10;
    document.getElementById("decreasebtn").disabled = count === 0;
  }

  function decreaseCounter() {
    count--;
    document.getElementById("countervalue").innerText = count;
    document.getElementById("decreasebtn").disabled = count === 0;
    document.getElementById("increasebtn").disabled = count === 10;
  }

  function resetCounter() {
    count = 0;
    document.getElementById("countervalue").innerText = count;
    document.getElementById("increasebtn").disabled = false;
    document.getElementById("decreasebtn").disabled = true;
  }

  return (
    <div className="demo" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> counter without hooks</h2>
      <p id="countervalue">{count}</p>
      <button id="increasebtn" onClick={increaseCounter} className="btn1">increase Counter</button>
      <button id="decreasebtn" className="btn2" onClick={decreaseCounter} disabled={true}>decrease Counter</button>
      <button id="resetbtn" className="btn3" onClick={resetCounter}>reset Counter</button>
    </div>
  );
}

export default App;