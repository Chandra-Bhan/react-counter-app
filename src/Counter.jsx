import React, { useState, useEffect } from 'react';
import './style.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalOfCounter = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalOfCounter);
    };
  }, [count]);

  return (
    <div>
      <h1 style={{ color: 'red' }}>{count}</h1>
    </div>
  );
}
