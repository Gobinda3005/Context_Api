import React, { useState } from 'react';
import Component from './Component.jsx';
import { mainContext } from './main.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState('white');

  const Mode = () => {
    setMode(mode === 'white' ? 'black' : 'white');
  };

  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='boxAnswer' style={{ width: '500px', height: '450px', border: '1px solid red', backgroundColor: mode === 'white' ? 'white' : 'black', color: mode === 'white' ? 'black' : 'white' }}>
        <button onClick={() => { setCount(count + 1); Mode(); }} className="btn btn-outline-info">Incr</button>
        <button onClick={() => { setCount(0); setMode('white'); }} className="btn btn-outline-danger">Reset</button>
        <mainContext.Provider value={count}>
          <Component />
        </mainContext.Provider>
      </div>
    </div>
  );
}

export default App;
