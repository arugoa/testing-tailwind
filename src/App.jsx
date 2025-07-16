import { useState, useEffect } from 'react';
import usePersistState from './components/persistState';

import pet_face from './assets/pet_face.svg';
import pet_face_blink from './assets/pet_face_blink.svg';
import LeftArm from './assets/LeftArm.svg';
import RightArm from './assets/RightArm.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(() => {
    // Load saved count from localStorage or default to 0
    return parseInt(localStorage.getItem('counter') || '0');
  });

  useEffect(() => {
    // Save to localStorage whenever count changes
    localStorage.setItem('counter', count.toString());
  }, [count]);


  return (
    <>
      <h1 className="header">Hi, Cerebral Pal!</h1>
      <div>
        <a target="_blank">
          <img src={LeftArm} className="logo vite" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={pet_face} className="logo vite" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={RightArm} className="logo vite" alt="Vite logo" />
        </a>
      </div>
      <div>
        <a></a>
        <a target="_blank">
          <img src={pet_face_blink} className="logo blink" alt="Vite logo" />
        </a>
        <a></a>
      </div>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          happiness is {count}
        </button>
        <p>Games coming soon!</p>
      </div>
    </>
  );
}

export default App;
