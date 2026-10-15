import React from "react";
import './App.css';

function greet(name) {
  return `Hello ${name}, have a great day!`; // Way 5
}

function App() {
  const name = "Mounika";
  const subject = "React";
  const message = `Welcome ${name}, this is a stored template literal!`; // Way 2
  const details = `Name: ${name}
Course: ${subject}
Topic: String Literals`; // Way 3
  const a = 20, b = 10;

  return (
    <div className="container">
      {/* Way 1: Inline JSX with Template Literals */}
      <h2>{`Hello, my name is ${name}`}</h2>

      {/* Way 2: Stored Template Literal */}
      <p>{message}</p>

      {/* Way 3: Multi-line String Literal */}
      <pre style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "8px" }}>
        {details}
      </pre>

      {/* Way 4: Expressions inside String Literals */}
      <h3>{`The sum of ${a} and ${b} is ${a + b}`}</h3>

      {/* Way 5: Function Returning String Literal */}
      <h2>{greet(name)}</h2>

      {/* Extra: Date using string literal */}
      <p>{`Today’s date is ${new Date().toLocaleDateString()}`}</p>
    </div>
  );
}

export default App;