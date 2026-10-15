import React from 'react';
import './App.css';

let loggedIn = false;
let isAdmin = true;

function App() {
  return (
    <>
      <Header></Header>
      {isAdmin ? <Admin /> : null}
    </>
  );
}

function Header() {
  return (
    <ul>
      <li> Home</li>
      <li> About Us</li>
      <li>Contact Us</li>
      <li> Login </li>
      {
        loggedIn ? (<li>logout</li>) : (<li> login </li>)
      }
    </ul>
  );
}

function Admin() {
  return (
    <h1> this is admission dash board</h1>
  );
}

export default App;