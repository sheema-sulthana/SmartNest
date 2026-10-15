import { useState } from 'react';

import CounterApp from './components/Task2A_CounterClass/CounterApp';
import CounterFunctional from './components/Task2B_CounterFunctional/App';
import ButtonClickDemo from './components/Task2C_ButtonEvents/ButtonClickDemo';
import ConditionalRendering from './components/Task2D_ConditionalRendering/App';
import StringLiterals from './components/Task2E_StringLiterals/App';

function App() {
  const [task, setTask] = useState('Task 2(a)');

  return (
    <div>
      <div>
        <button onClick={() => setTask('Task 2(a)')}>Task 2(a)</button>
        <button onClick={() => setTask('Task 2(b)')}>Task 2(b)</button>
        <button onClick={() => setTask('Task 2(c)')}>Task 2(c)</button>
        <button onClick={() => setTask('Task 2(d)')}>Task 2(d)</button>
        <button onClick={() => setTask('Task 2(e)')}>Task 2(e)</button>
      </div>

      {task === 'Task 2(a)' && <CounterApp />}
      {task === 'Task 2(b)' && <CounterFunctional />}
      {task === 'Task 2(c)' && <ButtonClickDemo />}
      {task === 'Task 2(d)' && <ConditionalRendering />}
      {task === 'Task 2(e)' && <StringLiterals />}
    </div>
  );
}

export default App;